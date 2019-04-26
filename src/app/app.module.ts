import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PostComponent } from './components/post/post.component';
import { ManagerProductComponent } from './components/manager-product/manager-product.component';
import { FilterPipe } from './components/Pipe/FilterPipe ';
import { CategoryComponent } from './components/category/category.component';
import { ManagerCateogryComponent } from './components/manager-cateogry/manager-cateogry.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ManagerPostComponent } from './components/manager-post/manager-post.component';
import { FilterPipe2 } from './components/Pipe/FilterPipe2';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    AddProductComponent,
    NotFoundComponent,
    AboutComponent,
    ContactComponent,
    ProductDetailComponent,
    HomepageComponent,
    PostComponent,
    ManagerProductComponent,
    FilterPipe,
    CategoryComponent,
    ManagerCateogryComponent,
    PostDetailComponent,
    AddCategoryComponent,
    AddPostComponent,
    ManagerPostComponent,
    FilterPipe2,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()// ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
