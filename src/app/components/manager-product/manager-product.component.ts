import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../product/Product';
import { ProductService } from '../../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manager-product',
  templateUrl: './manager-product.component.html',
  styleUrls: ['./manager-product.component.css']
})
export class ManagerProductComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  p: number = 1;
  products;
  selected: Product;
  txtFname = '';
  // tslint:disable-next-line:ban-types
  isDuplicate: Boolean = false;
  constructor(private productService: ProductService, private route: ActivatedRoute,
    private toastrService: ToastrService, private location: Location) { }

  ngOnInit() {
    this.getListProduct();
  }

  showDetail(id) {
    this.productService.getProduct(id).subscribe(data => this.selected = data);
  }

  getListProduct() {
    this.productService.getListProduct().subscribe(data => this.products = data);
  }

  deleteProduct(id) {
    debugger;
    this.productService.deleteProduct(id).subscribe(data => {
      // this.products = this.products.filter(item => {
      //   // item._id !== data._id;
      // }
      console.log(data);
      // );
      this.showSuccess('Delete   Product Succesfully');
    });
  }
  onSubmit(formEditProduct) {
    if (formEditProduct.valid) {
      const { value } = formEditProduct;
      this.productService.editProduct(value).subscribe(data => {
        const updateItem = this.products.find(item => item.id === value.id);
        const index = this.products.indexOf(updateItem);
        this.products[index] = data;
        this.showSuccess('Edit Product Succesfully');
        document.getElementById('close-modal-2').click();
      });
    }
  }
  showSuccess(message: string) {
    this.toastrService.success('Success', message, {
      positionClass: 'toast-top-center',
    });
  }
  verifyDuplicate(event) {
    console.log(event.target.value);
    const name = event.target.value;
    this.isDuplicate = false;
    this.products.map(x => {
      if (x.name === name) {
        console.log(x.name);
        this.isDuplicate = true;
      }
    });
  }
  goBack(): void {
    this.location.back();
  }
}
