import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category/Category';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  // tslint:disable-next-line:new-parens
  category: Category = new Category;
  @Input() dataCategory: Category[];
  constructor(private categoryService: CategoryService, private toastrService: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(formAddCategory) {
    if (formAddCategory.valid) {
      const { value } = formAddCategory;
      this.categoryService.addCategory(value).subscribe(data => this.dataCategory.push(data));
      this.showSuccess();
      formAddCategory.reset();
      document.getElementById('close-modal').click();
    }
  }

  showSuccess() {
    this.toastrService.success('Success', 'Add Category Done', {
      positionClass: 'toast-top-center',
    });
  }


}
