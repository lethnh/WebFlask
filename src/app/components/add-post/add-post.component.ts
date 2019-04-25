import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post/Post';
import { ToastrService } from 'ngx-toastr';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  // tslint:disable-next-line:new-parens
  post: Post = new Post;
  @Input() dataPost;
  @Input() categories;
  constructor(private postService: PostService, private toastrService: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(formAddPost) {
    console.log(this.dataPost);
    console.log(this.categories);
    if (formAddPost.valid) {
      const { value } = formAddPost;
      this.postService.addPost(value.CategoryId, value).subscribe(data => {
        console.log(data);
        this.dataPost.push(data);
      });
      this.showSuccess();
      document.getElementById('close-modal').click();
    }
  }

  showSuccess() {
    this.toastrService.success('Success', 'Add Post Done', {
      positionClass: 'toast-top-center',
    });
  }
}
