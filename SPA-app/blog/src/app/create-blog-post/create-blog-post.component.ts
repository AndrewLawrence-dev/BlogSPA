import { Component, OnInit } from '@angular/core';
import { HttpClient }        from '@angular/common/http';

import * as tmce             from '../../assets/html_editor/tinymce.min.js';
import { AlertService }      from '../../services/alert.service.js';
import { Topic }             from '../../Models/topic.js';

@Component({
  selector: 'app-create-blog-post',
  templateUrl: './create-blog-post.component.html',
  styleUrls: ['./create-blog-post.component.css']
})
export class CreateBlogPostComponent implements OnInit {
  public title: string           = 'Create Post';
  public html_editor_id: string  = 'html_editor';
  public post_title    : string  = '';
  public html_editor: any        = tmce;
  public topics_master: {}[]     = [];
  public this_posts_topics: {}[] = [];

  constructor(private http_client: HttpClient, private alert_service: AlertService) { }

  ngOnInit() {
    this.load_blog_topics();
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
      'Title'  : this.post_title,
      'Content': blog_content,
      'Topics' : this.this_posts_topics
    })
    .subscribe((response: any) => {
      this.alert_service.success('Created');
      console.log(response);
    }, (error) => {
        this.alert_service.failure('Unable to create post. ' + error);
    });
  }

  load_blog_topics() {
    this.http_client.get("http://localhost:62568/api/topics").subscribe((response: Topic[]) => {
      this.topics_master = response;
    },
    (error) => {
      this.alert_service.failure('Unable to load blog topics.');
    });
  }

  add_topic_to_selected_remove_from_master(topic_id) {
    if (topic_id) {
      this.add_topic_to_selected(this.find_topic(topic_id, this.topics_master));
      this.remove_topic_from_master(topic_id);
    }
  }

  remove_topic_from_selected_add_to_master(topic_id) {
    if (topic_id) {
      this.add_topic_to_master(this.find_topic(topic_id, this.this_posts_topics));
      this.remove_topic_from_selected(topic_id);

      this.topics_master = this.order_topics_list(this.topics_master);
    }
  }

  add_topic_to_master(topic) {
    if (topic) {
      this.topics_master.push(topic);
    }
  }

  remove_topic_from_master(topic_id) {
    const topic_index = this.find_topic_index(topic_id, this.topics_master);
    const found_topic = (topic_index != -1);

    if (found_topic) {
      this.topics_master.splice(topic_index, 1);
    }
  }

  add_topic_to_selected(topic) {
    if (topic) {
      this.this_posts_topics.push(topic);
    }
  }

  remove_topic_from_selected(topic_id) {
    const topic_index = this.find_topic_index(topic_id, this.this_posts_topics);
    const found_topic = (topic_index != -1);

    if (found_topic) {
      this.this_posts_topics.splice(topic_index, 1);
    }
  }

  have_topics_left_to_select(): boolean {
    return (this.topics_master.length > 0);
  }

  find_topic(topic_id, topics_list) {
    return topics_list.find(function (t: Topic) { return t.id === topic_id });
  }

  find_topic_index(topic_id, topics_list) {
    return topics_list.findIndex(function (t: Topic) { return t.id === topic_id });
  }

  order_topics_list(topics_list) {
    return topics_list.sort(function (firstEl, secondEl) {
      if (firstEl.name > secondEl.name) return 1;
      if (firstEl.name < secondEl.name) return -1;

      return 0;
    });
  }
}
