import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category;
  categories;
  // tslint:disable-next-line:ban-types
  show: Boolean = true;
  txtFname = '';
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getListCategory();
  }
  getListCategory() {
    this.categoryService.getListCategory().subscribe(data => {
      this.categories = data;
      console.log(data);
    });
  }
  showCategory(id: number) {
    if (id === 0) {
      this.getListCategory();
      this.show = true;
    } else {
      this.categoryService.getCategory(id).subscribe(data => {
        this.category = data.posts;
        this.show = false;
      });
    }
  }

}
