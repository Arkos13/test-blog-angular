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

  getAll(): Observable<PostInterface[]> {
    return this.http.get(`${environment.fbDBUrl}/posts.json`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object.keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }));
      }));
  }

  getById(id: string): Observable<PostInterface> {
    return this.http.get(`${environment.fbDBUrl}/posts/${id}.json`)
      .pipe(map((post: PostInterface) => {
        return {...post, id, date: new Date(post.date)};
      }));
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDBUrl}/posts/${id}.json`);
  }

  update(post: PostInterface): Observable<PostInterface> {
    return this.http.patch<PostInterface>(`${environment.fbDBUrl}/posts/${post.id}.json`, post);
  }
}
