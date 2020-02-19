import {Pipe, PipeTransform} from '@angular/core';
import {PostInterface} from '../../../shared/interfaces/post.interface';

@Pipe({
  name: 'searchPosts'
})
export class SearchPipe implements PipeTransform {
  transform(posts: PostInterface[], search: string = ''): PostInterface[] {
    if (!search.trim()) {
      return posts;
    }
    return posts.filter((post: PostInterface) => post.title.toLowerCase().includes(search));
  }

}
