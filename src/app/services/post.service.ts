import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../components/post/Post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urlAPI = 'https://5ca73f898e58df0014602f4a.mockapi.io/Category';
  constructor(private http: HttpClient) { }

  addPost(id, post): Observable<Post> {
    console.log(id);
    console.log(post);
    return this.http.post<Post>(`${this.urlAPI}/${id}/posts`, post);
  }

  getListPost(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.urlAPI}/${id}/posts`);
  }

  deletePost(post): Observable<Post> {
    const url = `${this.urlAPI}/${post.id}`;
    return this.http.delete<Post>(url);
  }

  getPost(postId: number, categoryId: number): Observable<Post> {
    const url = `${this.urlAPI}/${categoryId}/posts/${postId}`;
    return this.http.get<Post>(url);
  }

  editPost(post): Observable<Post> {
    const url = `${this.urlAPI}/${post.id}`;
    console.log(post);
    return this.http.put<Post>(url, post);
  }
}
