import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  subscriptions: Subscription[];
  url: string;
  backgroundClass='background'
  constructor(private router: Router) {
    this.subscriptions = [
      this.router.events.subscribe(r => {if(r['url'] !=null){this.url = r['url']};
    console.log(this.url)})
    ];

  }
  title = 'zombiedoc';
  ngOnDestroy() {this.subscriptions.map(s => {s.unsubscribe();});}
  setbackground(currentRoute){
  switch (currentRoute) {
    case '/game':
      this.backgroundClass='game-background'
      break;

    default:
      break;
  }}
}
