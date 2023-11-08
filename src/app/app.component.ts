import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-dashboard';
  mobileQuery!: MediaQueryList;
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  private _mobileQueryListener: () => void;
  constructor(private _cdRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => _cdRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }
  sideOnclickClose() {
    if (this.sidenav.mode == 'side') {
      this.sidenav.open();
    } else {
      this.sidenav.close();
    }
  }

  ngOnInit(): void {
    this.sidenav;
  }
}
