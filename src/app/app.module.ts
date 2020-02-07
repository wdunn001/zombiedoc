import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'angular-custom-modal';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { DialogScreenComponent } from './dialog-screen/dialog-screen.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SafeUrlPipe } from './services/safe-url.pipe';
import { StitchMiniGameComponent } from './stitch-mini-game/stitch-mini-game.component';
import { IntroComponent } from './intro/intro.component';
import { RevealComponent } from './reveal/reveal.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    DialogScreenComponent,
    GameScreenComponent,
    SafeUrlPipe,
    StitchMiniGameComponent,
    IntroComponent,
    RevealComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    DragDropModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
