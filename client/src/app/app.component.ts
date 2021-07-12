import {Component, OnInit} from '@angular/core';
import {CheckIsAuthPathService} from "@authorization/services/check-is-auth-path.service";
import {PageTitleService} from "@core/services/page-title-service/page-title.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isAuthPath!: boolean;

  constructor(private checkIsAuthPathService: CheckIsAuthPathService,
              private setPageTitleService: PageTitleService) {
  }

  public ngOnInit(): void {
    this.checkAuthPath();
    this.setPageTitleService.set();
  }

  private checkAuthPath(): void {
    this.checkIsAuthPathService.isAuthPath().subscribe((isAuth: boolean) => {
      this.isAuthPath = isAuth;
    });
  }

}
