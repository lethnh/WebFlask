import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/Product';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  // tslint:disable-next-line:new-parens
  product: Product = new Product;
  @Input() dataProduct: Product[];
  constructor(private productService: ProductService, private toastrService: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(formAddPost) {
    if (formAddPost.valid) {
      const { value } = formAddPost;
      this.productService.addProduct(value).subscribe(data => this.dataProduct.push(data));
      this.showSuccess();
      document.getElementById('close-modal').click();
    }
  }

  showSuccess() {
    this.toastrService.success('Success', 'Add Product Done', {
      positionClass: 'toast-top-center',
    });
  }

}
