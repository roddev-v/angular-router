import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { NavComponent } from './nav/nav.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: PageOneComponent },
  { path: 'component-two', canActivate: [AuthGuard], component: PageTwoComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    NavComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
