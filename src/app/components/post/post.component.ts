import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  categorys;
  // tslint:disable-next-line:no-inferrable-types
  p: number = 1;
  constructor(private postService: PostService, private categoryService: CategoryService) { }

  ngOnInit() {
    // this.getListPosts();
    this.getListCategory();
  }

  // getListPosts() {
  //   this.postService.getListPost().subscribe(data => {
  //     console.log(data);
  //     // this.posts = data;
  //   });
  // }
  getListCategory() {
    this.categoryService.getListCategory().subscribe(data => {
      this.categorys = data;
      console.log(data);
    });
  }

}
