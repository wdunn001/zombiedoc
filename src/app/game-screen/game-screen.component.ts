import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Part, partType } from '../models/part.model';
import { ArgumentOutOfRangeError } from 'rxjs';
import { BodyPartsService } from '../services/body-parts.service';
import { ModalComponent } from 'angular-custom-modal';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent implements OnInit {

  bodyDrop: CdkDragDrop<Part[]>;
  bodyType: string;

  basket: Part[] = [
  ];
  playAudio(){
    console.log('yes this did happen')
    let audio = new Audio();
    audio.src = "assets/audio/grabSound.wav";
    audio.load();
    audio.play();
  }

  items: Part[] = [
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
  legs: Part[] = [];
  leftArm: Part[] = [];
  rightArm: Part[] = [];
  @ViewChild(ModalComponent, {static: false}) modal: ModalComponent;

  constructor(private router: Router, public bodypart: BodyPartsService) { }

  ngOnInit() {
    this.items = this.shuffle(this.bodypart.parts);

  }

  shuffle(parts: Part[]) {
    const array: Part[] = parts;
    array.sort(() => {
      return .5 - Math.random();
    });
    return array;
  }

  drop(event: CdkDragDrop<Part[]>, partNeededString: string) {
    let partNeeded: partType = partType[partNeededString];
    if (partNeededString === event.previousContainer.data[event.previousIndex].type) {


    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    if (event.container.data.length > 1) {
      console.log(event.container.data);

      transferArrayItem(
              event.container.data,
              this.items,
              1,
              event.previousIndex);

          }
        }
  }

  closeModal() {
    this.modal.close();
    this.drop(this.bodyDrop, this.bodyType);
    this.bodyType = null;
    this.bodyDrop = null;
  }

  stichAndDrop(event: CdkDragDrop<Part[]>, partNeededString: string) {
    this.modal.open();
    this.bodyDrop = event;
    this.bodyType = partNeededString;
  }

  end() {
    this.router.navigate(['ending']);
  }

}
