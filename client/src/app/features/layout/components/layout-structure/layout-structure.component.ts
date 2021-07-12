import {Component, Input, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {filter, map} from "rxjs/operators";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'layout-structure',
  templateUrl: './layout-structure.component.html',
  styleUrls: ['./layout-structure.component.scss']
})
export class LayoutStructureComponent implements OnInit {

  public pageTitle!: string;
  public profileDropdownIsOpen = false;
  public mobileMenuIsOpen = false;

  constructor(private titleService: Title,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    this.setSectionTitle();
  }

  public toggleProfileDropdownMenu(): void {
    this.profileDropdownIsOpen = !this.profileDropdownIsOpen;
  }

  public toggleMobileMenu(): void {
    this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
  }

  private setSectionTitle(): void {
    const appTitle = this.titleService.getTitle();
    this.router
      .events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        return child?.snapshot.data['title'] ? child.snapshot.data['title'] : appTitle;
      })
    ).subscribe((ttl: string) => {
      this.pageTitle = ttl;
    });
  }

}
