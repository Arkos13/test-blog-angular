import { Component, OnInit } from '@angular/core';
import {PostsService} from '../shared/services/posts.service';
import {ActivatedRoute, Params} from '@angular/router';
import {PostInterface} from '../shared/interfaces/post.interface';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post$: Observable<PostInterface>;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.post$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postsService.getById(params.id);
      }));
  }

}
