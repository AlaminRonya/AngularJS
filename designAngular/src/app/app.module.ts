import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HeaderComponent } from './component/layouts/header/header.component';
import { CategoryNavbarComponent } from './component/layouts/category-navbar/category-navbar.component';
import { FooterComponent } from './component/layouts/footer/footer.component';
import { HomeComponent } from './component/pages/home/home.component';
import { SingleCategoryComponent } from './component/pages/single-category/single-category.component';
import { SinglePostComponent } from './component/pages/single-post/single-post.component';
import { TermsAndConditionComponent } from './component/pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './component/pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './component/subscription-form/subscription-form.component';
import { CommentsFormComponent } from './component/comments/comments-form/comments-form.component';
import { CommentListComponent } from './component/comments/comment-list/comment-list.component';
import { AboutUsComponent } from './component/pages/about-us/about-us.component';
import { PostCardComponent } from './component/layouts/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsAndConditionComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentsFormComponent,
    CommentListComponent,
    AboutUsComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
