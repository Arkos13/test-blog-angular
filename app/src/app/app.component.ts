import { Component } from '@angular/core';
import {AuthService} from './auth.service';

export interface Post {
  title: string;
  text: string;
  id?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth: AuthService) {
  }

  posts: Post[] = [
    { title: 'Post 1', text: 'text...', id: '1'},
    { title: 'Post 2', text: 'text...', id: '2'}
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: string) {
    this.posts = this.posts.filter((post: Post) => post.id !== id);
  }
}
