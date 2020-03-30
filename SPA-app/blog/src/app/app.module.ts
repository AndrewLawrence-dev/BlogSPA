import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }     from '@angular/router';

import { AppComponent }        from './app.component';
import { BlogListComponent }   from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogTopicsComponent } from './blog-topics/blog-topics.component';
import { ContactComponent }    from './contact/contact.component';
import { AboutComponent }      from './about/about.component';
import { NavComponent }        from './nav/nav.component';
import { appRoutes }           from './routing/routes';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogTopicsComponent,
    ContactComponent,
    AboutComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
