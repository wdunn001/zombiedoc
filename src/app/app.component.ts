import { Component, OnDestroy, ElementRef, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  @ViewChild('tearSound', {static: true}) tearSound: ElementRef<HTMLAudioElement>;

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
      this.playAudio();
    }

  subscriptions: Subscription[];
  url: string;
  backgroundClass = 'background';

  constructor(private router: Router) {
    this.subscriptions = [
      this.router.events.subscribe(r => { if (r['url'] != null) { this.url = r['url']; this.setbackground(r['url']); } })];

  }
  title = 'zombiedoc';

  ngOnDestroy() { this.subscriptions.map(s => s.unsubscribe()); }

  playAudio() {
    if (this.url !== '/intro') {
    let audio = new Audio();
    audio.src = "assets/audio/tearSound.wav";
    audio.load();
    audio.play();
    }
  }
  setbackground(currentRoute) {
    switch (currentRoute) {
      case '/game': {
          console.log('background set');
          this.backgroundClass = 'game-background';

          break;
        }
      case '/dialog': {
          console.log('background set');
          this.backgroundClass = 'dialog-background';

          break;
        }
      case '/intro': {
          console.log('background set');
          this.backgroundClass = 'intro-background';

          break;
        }
      case '/start': {
          console.log('background set');
          this.backgroundClass = 'start-background';

          break;
        }

      default:
        {
          this.backgroundClass = 'background';

          break;
        }

    }
  }}
