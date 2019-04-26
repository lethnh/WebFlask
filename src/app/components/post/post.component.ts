import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../category/Category';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  categorys: Category[];
  categorysPosts;
  posts = [];
  // tslint:disable-next-line:no-inferrable-types
  p: number = 1;
  txtFname = '';
  constructor(private postService: PostService, private categoryService: CategoryService) { }

  ngOnInit() {
    // this.getListPosts();
    this.getListPosts();
  }

  // getListPosts() {
  //   this.postService.getListPost().subscribe(data => {
  //     console.log(data);
  //     // this.posts = data;
  //   });
  // }
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

}
