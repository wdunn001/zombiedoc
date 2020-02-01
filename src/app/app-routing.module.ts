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
    path: 'beginning',
    component: DialogScreenComponent,
    data: { title: 'Dialog', dialog: [
      `Let's make a zombie!`,
      `Ok this is exciting!`
    ], nextScreen: 'game' }
  },
  {
    path: 'game',
    component: GameScreenComponent,
    data: { title: 'Game' }
  },
  {
    path: 'ending',
    component: DialogScreenComponent,
    data: { title: 'Dialog', dialog: [
      'This is a nice zombie you might say?',
      'WROUUUNNG!'
    ], nextScreen: 'start' }
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  { path: '**', component: StartScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
