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
import { UsertableComponent } from './usertable/usertable.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    AdminpageComponent,
    PlayerpageComponent,
    GamepageComponent,
    UsertableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,

    //Chemins d'accès vers les différentes pages
    RouterModule.forRoot([
      {path: '', component: WelcomepageComponent},
      {path: 'admin', component: AdminpageComponent},
      {path: 'player', component: PlayerpageComponent},
      {path: 'game', component: GamepageComponent},
      {path: 'usertable', component :UsertableComponent}
      ]),],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
