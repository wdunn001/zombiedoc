import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BodyPartsService } from '../services/body-parts.service';

@Component({
  selector: 'app-reveal',
  templateUrl: './reveal.component.html',
  styleUrls: ['./reveal.component.scss']
})
export class RevealComponent implements OnInit {

  dialog: string[] = [
    'This is a test string how well does it work?',
    'It works great woo we rock at this!'
  ];

  nextScreen = 'game';

  image = "";

  dialogIndex = 0;

  @HostListener('touchstart', ['$event'])
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.continue();

  }



  // @HostListener('document:click', ['$event'])
  // documentClick(event: MouseEvent) {
  //     this.continue();
  // }

  constructor(private router: Router, private route: ActivatedRoute, public bodyParts: BodyPartsService ) {
    if (route.snapshot.data.dialog) {
      this.dialog = route.snapshot.data.dialog;
      this.init();
    }
    if (route.snapshot.data.nextScreen) {
      this.nextScreen = route.snapshot.data.nextScreen;
    }
    if (route.snapshot.data.image) {
      this.image = route.snapshot.data.image;
    }
  }

  ngOnInit() {
  }

  init() {
    this.dialogIndex = 0;
  }

  continue() {
    if (this.dialogIndex < this.dialog.length - 1) {
      this.dialogIndex++;
    } else {
      this.router.navigate([this.nextScreen]);
    }

  }

}