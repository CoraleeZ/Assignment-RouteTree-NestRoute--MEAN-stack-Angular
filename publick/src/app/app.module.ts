import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './detail/detail.component';
import { BrandComponent } from './brand/brand.component';
import { ReviewComponent } from './review/review.component';
import { AuthorComponent } from './author/author.component';
import { AllComponent } from './all/all.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DetailComponent,
    BrandComponent,
    ReviewComponent,
    AuthorComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
