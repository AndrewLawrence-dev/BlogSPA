import { Component, OnInit } from '@angular/core';
import { HttpClient }        from '@angular/common/http';

import { BlogPost }     from '../../Models/blogPost';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  public title               : string = 'Posts';
  private blogs              : BlogPost[];

  constructor(private http_client: HttpClient, private alert_service: AlertService) { }

  ngOnInit() {
    this.loadBlogs();
  }

  public loadBlogs() {

    this.http_client.get("http://localhost:62568/api/posts").subscribe((response: BlogPost[]) => {
      this.blogs = response;
      this.alert_service.success('Got em');
    },
    (error) => {
      this.alert_service.failure('Unable to load blog posts.');
    });
  }

  public getNoBlogsToDisplayMessage() {
    return 'No blogs to display';
  }

  public haveBlogsToDisplay() {
    return (this.getBlogsCount() !== 0);
  }

  public getBlogsCount() {
    return (this.blogs ? this.blogs.length : 0);
  }

}
