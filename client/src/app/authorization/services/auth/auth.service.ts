import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as moment from 'moment';
import {shareReplay, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

interface AuthResult {
  expiresIn: number;
  idToken: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly ID_TOKEN_KEY_NAME = 'id_token';
  private readonly EXPIRES_AT_KEY_NAME = 'expires_at';

  constructor(private http: HttpClient) {
  }

  public login(email: string, password: string): Observable<Object> {
    return this.http.post<AuthResult>('api/login', {email, password})
      .pipe(
        tap((res: AuthResult) => this.setSession(res)),
        shareReplay()
      );
  }

  public logout(): void {
    localStorage.removeItem(this.ID_TOKEN_KEY_NAME);
    localStorage.removeItem(this.EXPIRES_AT_KEY_NAME);
  }

  public isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  private setSession(authResult: AuthResult): void {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem(this.ID_TOKEN_KEY_NAME, authResult.idToken);
    localStorage.setItem(this.EXPIRES_AT_KEY_NAME, JSON.stringify(expiresAt.valueOf()));
  }

  private getExpiration(): moment.Moment {
    const expiration = localStorage.getItem(this.EXPIRES_AT_KEY_NAME);
    const expiresAt = expiration ? JSON.parse(expiration) : null;
    return moment(expiresAt);
  }
}
