import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokerComponent } from './pages/poker/poker.component';

const routes: Routes = [{
  path: 'home', children: [
    {path: '', component: HomeComponent},
    {path: 'poker', component: PokerComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
