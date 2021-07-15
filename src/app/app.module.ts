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
import { HerotableComponent } from './herotable/herotable.component';
import { DecortableComponent } from './decortable/decortable.component';
import { EnemytableComponent } from './enemytable/enemytable.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    AdminpageComponent,
    PlayerpageComponent,
    GamepageComponent,
    UsertableComponent,
    HerotableComponent,
    DecortableComponent,
    EnemytableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,

    //Chemins d'accès vers les différentes pages
    RouterModule.forRoot([
      {path: '', component: WelcomepageComponent},
      {path: 'admin', component: AdminpageComponent, children :[
          {path: 'usertable', component :UsertableComponent},
          {path: 'herotable', component :HerotableComponent},
          {path: 'decortable', component :DecortableComponent},
          {path: 'enemytable', component :EnemytableComponent}
        ]},
      {path: 'player', component: PlayerpageComponent},
      {path: 'game', component: GamepageComponent},
      ]),],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
