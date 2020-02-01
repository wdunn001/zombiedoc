import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { DialogScreenComponent } from './dialog-screen/dialog-screen.component';
import { GameScreenComponent } from './game-screen/game-screen.component';


const routes: Routes = [
  {
    path: 'start',
    component: StartScreenComponent,
    data: { title: 'Start' }
  },
  {
    path: 'dialog',
    component: DialogScreenComponent,
    data: { title: 'Dialog' }
  },
  {
    path: 'game',
    component: GameScreenComponent,
    data: { title: 'Game' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
