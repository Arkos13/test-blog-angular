import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostInterface} from '../interfaces/post.interface';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {FbCreateResponse} from '../interfaces/fb-create-response';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient) {
  }

  create(post: PostInterface): Observable<PostInterface> {
    return this.http.post<FbCreateResponse>(`${environment.fbDBUrl}/posts.json`, post)
      .pipe(map((response: FbCreateResponse) => {
        return {...post, id: response.name, date: new Date(post.date)};
      }));
  }
}
