import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {Post} from '../posts/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
      private route: ActivatedRoute,
      private router: Router
    ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.post = data.post;
    });
  }

  loadPosts() {
    this.router.navigate(['/posts', 44])
  }
}
