import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  end() {
    this.router.navigate(["ending"]);
  }

}
