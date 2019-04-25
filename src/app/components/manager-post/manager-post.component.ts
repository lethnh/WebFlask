import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../post/Post';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-manager-post',
  templateUrl: './manager-post.component.html',
  styleUrls: ['./manager-post.component.css']
})
export class ManagerPostComponent implements OnInit {
  categories;
  posts: Post[];
  selected;
  // tslint:disable-next-line:no-inferrable-types
  p: number = 1
  // tslint:disable-next-line:ban-types
  isDuplicate: Boolean = false;
  constructor(private postService: PostService, private categoryService: CategoryService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.getListCategory();
  }
  // showDetail(id) {
  //   this.postService.getCategory(id).subscribe(data => {
  //     this.selected = data;
  //   });
  // }

  getListCategory() {
    this.categoryService.getListCategory().subscribe(data => {
      this.categories = data;
      this.categories.forEach(element => {
        element.posts.forEach(post => {
          this.posts.push(post);
          console.log(this.posts);
        });
      });
    });
    console.log(this.categories);
  }


  // deleteCategory(product) {
  //   this.postService.deleteCategory(product).subscribe(data => {
  //     this.categories = this.categories.filter(item => item.id !== data.id);
  //     this.showSuccess('Delete Category Successufully');
  //   });
  // }
  // onSubmit(formEditCategory) {
  //   if (formEditCategory.valid) {
  //     const { value } = formEditCategory;
  //     this.postService.editCategory(value).subscribe(data => {
  //       const updateItem = this.categories.find(item => item.id === value.id);
  //       const index = this.categories.indexOf(updateItem);
  //       this.categories[index] = data;
  //       this.showSuccess('Edit Category Succesfully');
  //       document.getElementById('close-modal-2').click();
  //     });
  //   }
  // }

  // showSuccess(message: string) {
  //   this.toastrService.success('Success', message, {
  //     positionClass: 'toast-top-center',
  //   });
  // }

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

}