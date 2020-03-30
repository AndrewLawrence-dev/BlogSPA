import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../../Models/blogPost';
import { Author } from '../../Models/author';
import { Topic } from '../../Models/topic';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  public title               : string = 'Posts';

  private blogs              : BlogPost[];
  private issue_getting_blogs: boolean = false;

  constructor(private http_client: HttpClient) { }

  ngOnInit() {
    this.loadBlogs();
  }

  public loadBlogs() {

    this.http_client.get("http://localhost:62568/api/posts").subscribe((response: BlogPost[]) => {
      this.blogs = response;
    },
    (error) => {
      this.issue_getting_blogs = true;
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
