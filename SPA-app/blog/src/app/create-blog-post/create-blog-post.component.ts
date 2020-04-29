import { Component, OnInit } from '@angular/core';
import { HttpClient }        from '@angular/common/http';

import * as tmce             from '../../assets/html_editor/tinymce.min.js';
import { AlertService }      from '../../services/alert.service.js';

@Component({
  selector: 'app-create-blog-post',
  templateUrl: './create-blog-post.component.html',
  styleUrls: ['./create-blog-post.component.css']
})
export class CreateBlogPostComponent implements OnInit {
  public title: string          = 'Create Post';
  public html_editor_id: string = 'html_editor';
  public post_title    : string = '';
  public html_editor: any       = tmce;

  constructor(private http_client: HttpClient, private alert_service: AlertService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.html_editor_init();
  }

  ngOnDestroy() {
    this.html_editor_remove();
  }

  html_editor_init() {
    if (!this.html_editor_is_already_set_up()) {
      this.html_editor.init({
        selector : '#' + this.html_editor_id,
        height   : 500
      });
    }
  }

  html_editor_is_already_set_up(): boolean {
    return !!(this.html_editor.activeEditor);
  }

  html_editor_remove() {
    this.html_editor.activeEditor.destroy();
  }

  html_editor_get_post_content() {
    return this.html_editor.activeEditor.getContent();
  }

  save_post(event) {
    event.preventDefault();

    const blog_content = this.html_editor_get_post_content();

    this.http_client.post("http://localhost:62568/api/posts", {
      'Title'    : this.post_title,
      'Content'  : blog_content,
      'TopicIds' : ["1","2"]
    })
    .subscribe((response: any) => {
      this.alert_service.success('Created');
      console.log(response);
    }, (error) => {
        this.alert_service.failure('Unable to create post. ' + error);
    });
  }
}
