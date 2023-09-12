import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { SingleCategoryComponent } from './component/pages/single-category/single-category.component';
import { SinglePostComponent } from './component/pages/single-post/single-post.component';
import { AboutUsComponent } from './component/pages/about-us/about-us.component';
import { TermsAndConditionComponent } from './component/pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './component/pages/contact-us/contact-us.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "category", component: SingleCategoryComponent},
  {path: "post", component: SinglePostComponent},

  {path: "about", component: AboutUsComponent},
  {path: "terms-conditions", component: TermsAndConditionComponent},
  {path: "contact", component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
