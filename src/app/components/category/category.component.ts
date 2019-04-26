import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { TabDirective } from 'ngx-bootstrap/tabs';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category;
  categories;
  categoryTwo;
  data;
  value;
  categorysPosts;
  // tslint:disable-next-line:ban-types
  show: Boolean = true;
  txtFname = '';
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getListCategory();
    this.categoryService.getListCategory().subscribe(data => {
      this.data = [];
      this.categoryTwo = data;
      this.categoryTwo.forEach(element => {
        this.categorysPosts = [...element.posts];
        this.categorysPosts.forEach(elementTwo => {
          this.data.push(elementTwo);
        });
      });
    });
  }
  getListCategory() {
    this.categoryService.getListCategory().subscribe(data => {
      this.categories = data;
      console.log(data);
    });
  }

  onSelect(value: TabDirective): void {
    console.log(value);
    if (value.heading === 'All') {
      this.categoryService.getListCategory().subscribe(data => {
        console.log(data);
        this.data = [];
        this.categoryTwo = data;
        this.categoryTwo.forEach(element => {
          this.categorysPosts = [...element.posts];
          this.categorysPosts.forEach(elementTwo => {
            this.data.push(elementTwo);
          });
        });
      });
    } else {
      this.value = value;
      this.categoryService.getCategory(this.value).subscribe(data => {
        this.data = data.posts;
      });
    }
  }
}
