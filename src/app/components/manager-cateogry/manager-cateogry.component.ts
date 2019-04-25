import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../category/Category';
import { ToastrService } from 'ngx-toastr';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-manager-cateogry',
  templateUrl: './manager-cateogry.component.html',
  styleUrls: ['./manager-cateogry.component.css']
})
export class ManagerCateogryComponent implements OnInit {
  categories: Category[];
  selected;
  // tslint:disable-next-line:ban-types
  isDuplicate: Boolean = false;
  constructor(private categoryService: CategoryService, private postService: PostService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.getListCategory();
  }

  showDetail(id) {
    this.categoryService.getCategory(id).subscribe(data => {
      this.selected = data;
    });
  }

  getListCategory() {
    this.categoryService.getListCategory().subscribe(data => this.categories = data);
    console.log(this.categories);
  }

  deleteCategory(category) {
    this.postService.getListPost(category.id).subscribe(post => {
      if (post.length === 0) {
        this.categoryService.deleteCategory(category).subscribe(data => {
          this.categories = this.categories.filter(item => item.id !== data.id);
          this.showSuccess('Delete Category Successufully');
        });
      } else {
        this.showErrors('Category has post');
      }
    });
  }
  onSubmit(formEditCategory) {
    if (formEditCategory.valid) {
      const { value } = formEditCategory;
      this.categoryService.editCategory(value).subscribe(data => {
        const updateItem = this.categories.find(item => item.id === value.id);
        const index = this.categories.indexOf(updateItem);
        this.categories[index] = data;
        this.showSuccess('Edit Category Succesfully');
        document.getElementById('close-modal-2').click();
      });
    }
  }

  showSuccess(message: string) {
    this.toastrService.success('Success', message, {
      positionClass: 'toast-top-center',
    });
  }
  showErrors(message: string) {
    this.toastrService.error('Error', message, {
      positionClass: 'toast-top-center',
    });
  }

  verifyDuplicate(event) {
    console.log(event.target.value);
    const name = event.target.value;
    this.isDuplicate = false;
    this.categories.map(x => {
      if (x.name === name) {
        console.log(x.name);
        this.isDuplicate = true;
      }
    });
  }
}
