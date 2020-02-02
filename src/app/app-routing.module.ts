import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { DialogScreenComponent } from './dialog-screen/dialog-screen.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { StitchMiniGameComponent } from './stitch-mini-game/stitch-mini-game.component';
import { IntroComponent } from './intro/intro.component';
import { RevealComponent } from './reveal/reveal.component';


const routes: Routes = [
  {
    path: 'intro',
    component: IntroComponent,
    data: { title: 'Intro', dialog: [
      'The dead roam the earth.'
      ,'Humanity is nearing extinction. They are losing the fight.'
      , 'And now, their last hope at survival is extinguished'
      , 'As the dead find a way to multiply their numbers…'
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
        'Hey doc! Thanks for making our dream come true!'
        , 'We can’t afford the best body parts in town,'
        , 'but as long as our sweet angel helps bring about the destruction of the human race,'
        , 'we’re not picky!'
        , 'Surprise us!'
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
      'Aww honey! She has your father’s eyes!',
      'I’m so glad we saved those when we ate him!'
    ], nextScreen: 'reveal' }
  },
  {
    path: 'reveal',
    component: RevealComponent,
    data: { title: 'Reveal',
    image: 'assets/backgrounds/Birth_Announcement.jpg',
     dialog: [
      'Aww honey! She has your father’s eyes!',
      'I’m so glad we saved those when we ate him!'
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
