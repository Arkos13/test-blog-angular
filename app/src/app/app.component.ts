import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    { title: 'Post 1', text: 'text...', id: 1},
    { title: 'Post 2', text: 'text...', id: 2}
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
