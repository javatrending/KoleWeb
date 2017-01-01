import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  NavigationHeaderComponent,
  SideMenuComponent,
  PageFooterComponent,
  MainContentComponent,
  PageNotFoundComponent],
  exports: [
  NavigationHeaderComponent,
  SideMenuComponent,
  PageFooterComponent,
  MainContentComponent,
  PageNotFoundComponent]
})
export class SharedModule { }
