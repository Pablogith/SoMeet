import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {UsersService as IUsersService} from '@features/users/interfaces/users-service';
import {User} from '@features/users/interfaces/user';
import {UrlBuilder} from '@core/utils/url-builder/url-builder';
import {SegmentsUrl} from '@core/utils/segments-url/segments-url';


@Injectable({
  providedIn: 'root'
})
export class UsersService implements IUsersService {
  private urlBuilder: UrlBuilder;

  constructor(private http: HttpClient) {
    this.urlBuilder = new UrlBuilder();
  }

  public getUserById(id: number): Observable<User> {
    const segmentsOfUrl: SegmentsUrl = new SegmentsUrl();
    segmentsOfUrl.push(id.toString());
    return this.http.get<User>(this.urlBuilder.getUrl(segmentsOfUrl));
  }
}
