import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PostsService as IPostsService } from '@features/posts/interfaces/posts-service';
import { Post } from '@features/posts/interfaces/post';
import { UrlBuilder } from '@core/utils/url-builder/url-builder';
import { SegmentsUrl } from '@core/utils/segments-url/segments-url';


@Injectable({
  providedIn: 'root'
})
export class PostsService implements IPostsService {

  private urlBuilder: UrlBuilder;

  constructor(private http: HttpClient) {
    this.urlBuilder = new UrlBuilder();
  }

  public deleteById(id: number): Observable<Object> {
    const segmentsOfUrl: SegmentsUrl = new SegmentsUrl();
    segmentsOfUrl.push(id.toString());
    return this.http.delete<Post>(this.urlBuilder.getUrl(segmentsOfUrl));
  }

  public editById(id: number, data: any): Observable<Post> | Observable<object> {
    const segmentsOfUrl: SegmentsUrl = new SegmentsUrl();
    segmentsOfUrl.push(id.toString());
    return this.http.put<Post>(this.urlBuilder.getUrl(segmentsOfUrl), data);
  }

  public getAll(): Observable<Array<Post>> | Observable<Post> | Observable<ArrayBuffer> | null {
    const segmentsOfUrl: SegmentsUrl = new SegmentsUrl();
    return this.http.get<Array<Post>>(this.urlBuilder.getUrl(segmentsOfUrl));
  }

  public getById(id: number): Observable<Post> | null {
    const segmentsOfUrl: SegmentsUrl = new SegmentsUrl();
    segmentsOfUrl.push(id.toString());
    return this.http.get<Post>(this.urlBuilder.getUrl(segmentsOfUrl));
  }

}
