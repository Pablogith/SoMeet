import {Injectable} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  constructor(private titleService: Title,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  public set(): void {
    const appTitle = this.titleService.getTitle();
    this.router
      .events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        return child?.snapshot.data['title'] ? child.snapshot.data['title'] : appTitle;
      })
    ).subscribe((ttl: string) => {
      this.titleService.setTitle(ttl);
    });
  }

}
