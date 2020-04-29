import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }     from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule
}                           from '@angular/forms';

import { AppComponent }        from './app.component';
import { BlogListComponent }   from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogTopicsComponent } from './blog-topics/blog-topics.component';
import { ContactComponent }    from './contact/contact.component';
import { AboutComponent }      from './about/about.component';
import { NavComponent }        from './nav/nav.component';
import { appRoutes }           from './routing/routes';
import { CreateBlogPostComponent } from './create-blog-post/create-blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogTopicsComponent,
    ContactComponent,
    AboutComponent,
    NavComponent,
    CreateBlogPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
