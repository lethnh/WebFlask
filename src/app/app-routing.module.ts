import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ManagerProductComponent } from './components/manager-product/manager-product.component';
import { PostComponent } from './components/post/post.component';
import { ManagerCateogryComponent } from './components/manager-cateogry/manager-cateogry.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CategoryComponent } from './components/category/category.component';
import { ManagerPostComponent } from './components/manager-post/manager-post.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent, },
  { path: 'news', component: PostComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'manager-product', component: ManagerProductComponent },
  { path: 'manager-category', component: ManagerCateogryComponent },
  { path: 'manager-post', component: ManagerPostComponent },
  { path: 'Category', component: CategoryComponent },
  { path: 'Category/:categoryId/posts/:postId', component: PostDetailComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
