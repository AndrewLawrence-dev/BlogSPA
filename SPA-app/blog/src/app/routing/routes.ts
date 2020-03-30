import { Routes } from '@angular/router';

import { BlogListComponent } from '../blog-list/blog-list.component';
import { AboutComponent }    from '../about/about.component';
import { ContactComponent }  from '../contact/contact.component';

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
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
