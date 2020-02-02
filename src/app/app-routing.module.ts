import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { DialogScreenComponent } from './dialog-screen/dialog-screen.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { StitchMiniGameComponent } from './stitch-mini-game/stitch-mini-game.component';


const routes: Routes = [
  {
    path: 'intro',
    component: DialogScreenComponent,
    data: { title: 'Intro', dialog: [
      `this is intro dialog`,
      `isnt this so cool dont mind my typos`
    ], nextScreen: 'start' }
  },
  {
    path: 'start',
    component: StartScreenComponent,
    data: { title: 'Start' }
  },
  {
    path: 'beginning',
    component: DialogScreenComponent,
    data: { title: 'Dialog',
     image: 'assets/backgrounds/zombiebackground.jpg',
      dialog: [
      `Let's make a zombie!`,
      `Ok this is exciting!`
    ], nextScreen: 'game'
   }
  },
  {
    path: 'game',
    component: GameScreenComponent,
    data: { title: 'Game' }
  },
  {
    path: 'stich',
    component: StitchMiniGameComponent,
    data: { title: 'Stich' }
  },
  {
    path: 'ending',
    component: DialogScreenComponent,
    data: { title: 'Dialog',
    image: 'assets/backgrounds/couplepicture.jpg',
     dialog: [
      'This is a nice zombie you might say?',
      'WROUUUNNG!'
    ], nextScreen: 'start' }
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  { path: '**', component: StartScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
