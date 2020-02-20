import { Component, OnInit } from '@angular/core';
import {PostsService} from '../shared/services/posts.service';
import {Observable} from 'rxjs';
import {PostInterface} from '../shared/interfaces/post.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts$: Observable<PostInterface[]>;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts$ = this.postsService.getAll();
  }

}
