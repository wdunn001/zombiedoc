import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { DialogScreenComponent } from './dialog-screen/dialog-screen.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { StitchMiniGameComponent } from './stitch-mini-game/stitch-mini-game.component';
import { IntroComponent } from './intro/intro.component';


const routes: Routes = [
  {
    path: 'intro',
    component: IntroComponent,
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
     image: 'assets/backgrounds/LuckyCouple.jpg',
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
<<<<<<< HEAD
    image: 'assets/backgrounds/couplepicture.jpg',
     dialog: [
=======
    image: 'assets/backgrounds/LuckyCouple.jpg',

    dialog: [
>>>>>>> bb45d116abf5a86d791392971ba8154d86322c81
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
