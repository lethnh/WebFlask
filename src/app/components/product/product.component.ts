import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  selected: Product;
  // tslint:disable-next-line:ban-types
  status: Boolean = true;
  // tslint:disable-next-line:no-inferrable-types
  p: number = 1;
  txtFname;

  constructor(private productService: ProductService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.getListProduct();
  }

  showDetail(product) {
    this.selected = product;
  }

  getListProduct() {
    this.productService.getListProduct().subscribe(data => this.products = data);
    console.log(this.products);
  }

  deleteProduct(product) {
    this.productService.deleteProduct(product).subscribe(data => {
      this.products = this.products.filter(item => item.id !== data.id);
      this.showSuccess('Delete Product Successufully');
    });
  }

  changeView(value) {
    console.log(value);
    if (value === 'gird') {
      this.status = true;
    } else {
      this.status = false;
    }
  }

  showSuccess(message: string) {
    this.toastrService.success('Success', message, {
      positionClass: 'toast-top-center',
    });
  }
}
