import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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

  items: Part[] = [
    {
      type: partType.leg,
      image: 'https://via.placeholder.com/200x200.png?text=Part',
      name: 'left leg'
    },
    {
      type: partType.arm,
      image: 'https://via.placeholder.com/200x200.png?text=Part',
      name: 'left arm'
    },
    {
      type: partType.arm,
      image: 'https://via.placeholder.com/200x200.png?text=Part',
      name: 'right arm'
    },
    {
      type: partType.head,
      image: 'https://via.placeholder.com/200x200.png?text=Part',
      name: 'head'
    },
    {
      type: partType.torso,
      image: 'https://via.placeholder.com/200x200.png?text=Part',
      name: 'torso'
    },
  ];



  head: Part[] = [];
  torso: Part[] = [];
  legs: Part[] = [];
  leftArm: Part[] = [];
  rightArm: Part[] = [];

  @ViewChild(ModalComponent, { static: false }) modal: ModalComponent;

  constructor(private router: Router, public bodypart: BodyPartsService) { }



  ngOnInit() {
    this.items = this.shuffle(this.bodypart.parts);

  }

  playAudio() {
    const audio = new Audio();
    audio.src = 'assets/audio/grabSound.wav';
    audio.load();
    audio.play();
  }


  shuffle(parts: Part[]) {
    const array: Part[] = parts;
    array.sort(() => {
      return .5 - Math.random();
    });
    return array;
  }

  drop(event: CdkDragDrop<Part[]>, partNeededString: string) {
    if (partNeededString === 'bin') {
      this.moveItem(event);
    } else {
      console.log(partNeededString, ' and ' ,event.previousContainer.data[event.previousIndex].type)
      if (partNeededString === event.previousContainer.data[event.previousIndex].type) {
        this.moveItem(event);
        if (event.container.data.length > 1) {
          transferArrayItem(
            event.container.data,
            this.items,
            0,
            event.previousIndex);
        }
      }
    }
  }

  moveItem(event: CdkDragDrop<Part[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  closeModalAndDrop() {
    this.modal.close();
    this.drop(this.bodyDrop, this.bodyType);
    this.bodyType = null;
    this.bodyDrop = null;
  }

  closeModal() {
    this.end();
  }

  isAdjacentPiecePresent(bodyType: string) {
    if (bodyType === 'Torso') {
      if (this.head.length > 0 || this.leftArm.length > 0 || this.rightArm.length > 0 || this.legs.length > 0) {
        return true;
      }
    } else {
      if (this.torso.length > 0) {
        return true;
      }
    }
    return false;
  }

  isCorrectPart(event: CdkDragDrop<Part[]>, partNeededString: string) {
    return partNeededString === event.previousContainer.data[event.previousIndex].type;
  }

  stichIt() {
    this.router.navigate(['stich']);
  }

  stichAndDrop(event: CdkDragDrop<Part[]>, partNeededString: string) {
    if (this.isCorrectPart(event, partNeededString)) {
      if (this.isAdjacentPiecePresent(event.previousContainer.data[event.previousIndex].type)) {
        this.bodyDrop = event;
        this.bodyType = partNeededString;
        this.modal.open();
      } else {
        this.drop(event, partNeededString);
      }
    }
  }

  end() {
    this.bodypart.head = this.head;
    this.bodypart.leftArm = this.leftArm;
    this.bodypart.rightArm = this.rightArm;
    this.bodypart.torso = this.torso;
    this.bodypart.legs = this.legs;
    this.router.navigate(['ending']);
  }

}
