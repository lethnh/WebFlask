from flask import *
import sys
from flaskext.mysql import MySQL
from werkzeug.security import check_password_hash, generate_password_hash
import os
from werkzeug.utils import secure_filename
from werkzeug import SharedDataMiddleware

# from . import auth

app = Flask(__name__)
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
# app.config['MYSQL_DATABASE_PORT'] = ''
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'flask_demo'
app.config['MYSQL_DATABASE_CHARSET'] = 'utf8'
app.secret_key = 'my unobvious secret key'
UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# app.add_url_rule('/uploads/<filename>', 'uploaded_file',
#                  build_only=True)
# app.wsgi_app = SharedDataMiddleware(app.wsgi_app, {
#     '/uploads': app.config['UPLOAD_FOLDER']
# })

mysql = MySQL()
mysql.init_app(app)


# app.register_blueprint(auth.bp)


@app.route('/')
def index():
    cursor = mysql.connect().cursor()
    cursor.execute("SELECT * FROM user  ")

    user = cursor.fetchone()
    return render_template('index.html', user=user)


@app.route('/login', methods=('GET', 'POST'))
def login():
    if request.method == 'POST':
        username = request.form['email']
        password = request.form['password']
        error = None
        cursor = mysql.connect().cursor()
        cursor.execute("SELECT * FROM user WHERE email = '" + username + "'")
        result = cursor.fetchone()
        cursor.close()
        if result is None:
            error = 'Incorrect username.'
        elif not check_password_hash(result[2], password):
            error = 'Incorrect password.'
        if error is None:
            session.clear()
            session['user_id'] = result[0]
            return redirect(url_for('index'))

        flash(error)

    return render_template('auth/login.html')


@app.route('/register', methods=('GET', 'POST'))
def register():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        file = request.files['photo']
        cursor = mysql.connect().cursor()
        # if 'file' not in request.files:
        #     flash('No file part')
        #     return redirect(request.url)
        # if user does not select file, browser also
        # submit a empty part without filename
        # if file.filename == '':
        #     flash('No selected file')
        #     return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        error = None
        if not email:
            error = 'Username is required.'
        elif not password:
            error = 'Password is required.'
        # elif cursor.execute('SELECT id FROM user WHERE email = ?', (email,)).fetchone() is not None:
        #     error = 'User {} is already registered.'.format(email)
        if error is None:
            cursor.execute(
                "insert into  user(email,password,image) values ('" + email + "','" + generate_password_hash(
                    password) + "','" + filename + "')")
            cursor.connection.commit()
            return redirect(url_for('login'))

        flash(error)

    return render_template('auth/register.html')


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


# @app.route('/upload', methods=['GET', 'POST'])
# def upload_file():
#     if request.method == 'POST':
#         # check if the post request has the file part
#         if 'file' not in request.files:
#             flash('No file part')
#             return redirect(request.url)
#         file = request.files['file']
#         # if user does not select file, browser also
#         # submit a empty part without filename
#         if file.filename == '':
#             flash('No selected file')
#             return redirect(request.url)
#         if file and allowed_file(file.filename):
#             filename = secure_filename(file.filename)
#             file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
#             return render_template('index.html',
#                                    filename=filename)
#     return '''
#     <!doctype html>
#     <title>Upload new File</title>
#     <h1>Upload new File</h1>
#     <form method=post enctype=multipart/form-data>
#       <p><input type=file name=file>
#          <input type=submit value=Upload>
#     </form>
#     '''


@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'],
                               filename)


@app.before_request
def load_logged_in_user():
    user_id = session.get('user_id')
    cursor = mysql.connect().cursor()
    if user_id is None:
        g.user = None
    else:
        cursor.execute("SELECT * FROM user WHERE id =" + str(user_id) + " ")
        result = cursor.fetchone()
        g.user = result


@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)
