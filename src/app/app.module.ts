import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {WelcomepageComponent} from './welcomepage/welcomepage.component';
import {AdminpageComponent} from './adminpage/adminpage.component';
import {PlayerpageComponent} from './playerpage/playerpage.component';
import {GamepageComponent} from './gamepage/gamepage.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    AdminpageComponent,
    PlayerpageComponent,
    GamepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: WelcomepageComponent},
      {path: 'admin', component: AdminpageComponent},
      {path: 'player', component: PlayerpageComponent},
      {path: 'game', component: GamepageComponent},]),],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
