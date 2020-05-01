import { Routes } from '@angular/router';

import { BlogListComponent }       from '../blog-list/blog-list.component';
import { AboutComponent }          from '../about/about.component';
import { ContactComponent }        from '../contact/contact.component';
import { CreateBlogPostComponent } from '../create-blog-post/create-blog-post.component';
import { InterviewsComponent }     from '../interviews/interviews.component';
import { PortfolioComponent }      from '../portfolio/portfolio.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: BlogListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'create',
    component: CreateBlogPostComponent
  },
  {
    path: 'interviews',
    component: InterviewsComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
