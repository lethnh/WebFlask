import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post;
  postRelated;
  // tslint:disable-next-line:no-inferrable-types
  p: number = 1;
  constructor(private route: ActivatedRoute, private postService: PostService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.getPost();
    this.getRelated();
  }

  getPost() {
    this.route.params.subscribe(params => {
      const { postId } = params;
      const { categoryId } = params;
      this.postService.getPost(postId, categoryId).subscribe(data => {
        this.post = data;
      });
    });
  }
  getRelated() {
    this.route.params.subscribe(params => {
      const { categoryId } = params;
      this.categoryService.getCategory(categoryId).subscribe(data => {
        this.postRelated = data;
        console.log(this.postRelated);
      });
    });
  }
}
