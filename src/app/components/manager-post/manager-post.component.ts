import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../category/Category';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manager-post',
  templateUrl: './manager-post.component.html',
  styleUrls: ['./manager-post.component.css']
})
export class ManagerPostComponent implements OnInit {
  categorys: Category[];
  categorysPosts;
  posts = [];
  selected;
  // tslint:disable-next-line:no-inferrable-types
  p: number = 1;
  // tslint:disable-next-line:ban-types
  isDuplicate: Boolean = false;
  txtFname = '';
  constructor(private postService: PostService, private categoryService: CategoryService,
              private toastrService: ToastrService, private location: Location) { }

  ngOnInit() {
    this.getListPosts();
  }
  showDetail(post) {
    this.postService.getPost(post.id, post.CategoryId).subscribe(data => {
      this.selected = data;
      console.log(data);
    });
  }

  getListPosts() {
    this.categoryService.getListCategory().subscribe(data => {
      this.categorys = data;
      this.categorys.forEach(element => {
        this.categorysPosts = [...element.posts];
        this.categorysPosts.forEach(elementTwo => {
          this.posts.push(elementTwo);
        });
      });
    });
  }


  deletePost(post) {
    console.log(post);
    this.postService.deletePost(post).subscribe(data => {
      this.posts = this.posts.filter(item => item.id !== data.id);
      this.showSuccess('Delete Post Successufully');
    });
  }
  onSubmit(formEditPost) {
    if (formEditPost.valid) {
      const { value } = formEditPost;
      console.log(value);
      this.postService.editPost(value).subscribe(data => {
        const updateItem = this.posts.find(item => item.id === value.id);
        const index = this.posts.indexOf(updateItem);
        this.posts[index] = data;
        this.showSuccess('Edit Post Succesfully');
        document.getElementById('close-modal-2').click();
      });
    }
  }

  showSuccess(message: string) {
    this.toastrService.success('Success', message, {
      positionClass: 'toast-top-center',
    });
  }

  // verifyDuplicate(event) {
  //   console.log(event.target.value);
  //   const name = event.target.value;
  //   this.isDuplicate = false;
  //   this.categories.map(x => {
  //     if (x.name === name) {
  //       console.log(x.name);
  //       this.isDuplicate = true;
  //     }
  //   })

  // }

  showErrors(message: string) {
    this.toastrService.error('Error', message, {
      positionClass: 'toast-top-center',
    });
  }
  goBack(): void {
    this.location.back();
  }

}
