import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../../Models/blogPost';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  @Input() blog: BlogPost;

  constructor() { }

  ngOnInit() {
  }

}
