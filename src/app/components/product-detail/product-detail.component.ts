import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product/Product';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(private productService: ProductService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.route.params.subscribe(params => {
      const { id } = params;
      this.productService.getProduct(id).subscribe(data => this.product = data);
    });
  }
  save() {
    this.productService.editProduct(this.product).subscribe(data => this.product = data);
  }
  goBack(): void {
    this.location.back();
  }
}
