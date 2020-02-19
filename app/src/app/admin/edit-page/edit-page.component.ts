import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../../shared/services/posts.service';
import {switchMap} from 'rxjs/operators';
import {PostInterface} from '../../shared/interfaces/post.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  post: PostInterface;
  submitted: boolean = false;
  uSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.postsService.getById(params['id']);
      })
    ).subscribe((post: PostInterface) => {
      this.post = post;
      this.form = new FormGroup({
        title: new FormControl(post.title, [
          Validators.required
        ]),
        text: new FormControl(post.text, [
          Validators.required
        ])
      });
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    this.uSub = this.postsService.update({
      ...this.post,
      title: this.form.value.title,
      text: this.form.value.text,
    }).subscribe((post: PostInterface) => {
      this.submitted = false;
    });
  }

  ngOnDestroy(): void {
    if (this.uSub) {
      this.uSub.unsubscribe();
    }
  }
}
