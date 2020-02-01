import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  @HostListener('window:keyup.enter', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.start();

  }

  constructor(private route: Router ) {

   }

  ngOnInit() {
  }

  start() {
    this.route.navigate(['beginning'] );
  }

}
