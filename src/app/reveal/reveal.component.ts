import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BodyPartsService } from '../services/body-parts.service';
import { Subject, Subscription, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-reveal',
  templateUrl: './reveal.component.html',
  styleUrls: ['./reveal.component.scss']
})
export class RevealComponent implements OnInit, OnDestroy {


  clicked: Subject<void> = new Subject<void>();

clicked$: Subscription;

  dialog: string[] = [
    'This is a test string how well does it work?',
    'It works great woo we rock at this!'
  ];

  nextScreen = 'game';

  image = '';

  dialogIndex = 0;

  @HostListener('mouseup', ['$event'])
  @HostListener('touchend', ['$event'])
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.clicked.next();

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
    this.clicked$ = this.clicked.pipe(debounce(() => interval(100))).subscribe(() => {this.continue(); });

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

  ngOnDestroy(): void {
    this.clicked$.unsubscribe();
  }

}
