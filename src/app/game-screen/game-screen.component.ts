import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Part, partType } from '../models/part.model';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent implements OnInit {

  parts: Part[] = [
    { type: partType.leg,
      image: 'https://via.placeholder.com/200x200.png?text=Part',
      name: 'left leg'
    },
    { type: partType.arm,
      image: 'https://via.placeholder.com/200x200.png?text=Part',
      name: 'left arm'
    },
    { type: partType.arm,
      image: 'https://via.placeholder.com/200x200.png?text=Part',
      name: 'right arm'
    },
    { type: partType.head,
      image: 'https://via.placeholder.com/200x200.png?text=Part',
      name: 'head'
    },
    { type: partType.torso,
      image: 'https://via.placeholder.com/200x200.png?text=Part',
      name: 'torso'
    },
  ];

  head: Part[] = [];
  torso: Part[] = [];
  Legs: Part[] = [];
  leftArm: Part[] = [];
  rightArm: Part[] = [];

  drop(event: CdkDragDrop<Part[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  end() {
    this.router.navigate(['ending']);
  }

}
