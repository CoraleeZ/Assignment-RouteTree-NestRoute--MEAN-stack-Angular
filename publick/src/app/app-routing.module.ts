import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { DetailComponent } from './detail/detail.component';
import { BrandComponent } from './brand/brand.component';
import { ReviewComponent } from './review/review.component';
import { AuthorComponent } from './author/author.component';
import { AllComponent } from './all/all.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent, children: [
    { path: 'detail/:id', component: DetailComponent },
    { path: 'brand/:id', component: BrandComponent }]
},

{ path: 'review', component: ReviewComponent, children: [
    { path: 'author', component: AuthorComponent },
    { path: 'all', component: AllComponent }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
