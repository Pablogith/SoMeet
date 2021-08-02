import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CheckIsAuthPathService {
  private authPaths: ReadonlyArray<string> = [
    '/login',
    '/register'
  ];

  private _isAuthPath = new Subject<boolean>();

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe(event => {
        // @ts-ignore
        const currentUrl: string = event['url'];
        const isAuthPath = this.authPaths.some(path => path === currentUrl);
        this._isAuthPath.next(isAuthPath);
      });
  }

  public isAuthPath(): Observable<boolean> {
    return this._isAuthPath.asObservable();
  }
}
