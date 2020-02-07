import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stitch-mini-game',
  templateUrl: './stitch-mini-game.component.html',
  styleUrls: ['./stitch-mini-game.component.scss']
})
export class StitchMiniGameComponent implements AfterViewInit {

  @Output() complete: EventEmitter<void> = new EventEmitter<void>();
  tickNumber = 0;
  timer = null;
  board = [
    '#####################',
    '#                   #',
    '#                   #',
    '#                   #',
    '#                   #',
    '#                   #',
    '#                   #',
    '#                   #',
    '#                   #',
    '#                   #',
    '#                   #',
    '#                   #',
    '#                   #',
    '#                   #',
    '#####################'
  ];

  trace = {
    hole: '*',
    empty: ' ',
    border: '#',
    threadVempty: 'V',
    threadHempty: 'H',
    threadHVempty: 'X',
    threadHhole: 'Q',
    threadVhole: 'I',
    threadHVhole: 'W'
  };
  parts = [
    {x: 1, y: 1},
  ];
  stichCount: number;
  stichError = 0;
  facing = 'E';
  squareSize = 30;
  img = new Image(this.squareSize, this.squareSize);
  needleN = new Image();
  needleS = new Image();
  needleE = new Image();
  needleW = new Image();
  threadH = new Image();
  threadV = new Image();
  threadHV = new Image();
  needle: HTMLImageElement;

  @ViewChild('canvas', {static: false}) canvas: ElementRef<HTMLCanvasElement>;

  isEmpty(location) {
    const currentCharacter = this.board[location.y][location.x];
    if (currentCharacter === this.trace.border) { return false; }
    if (currentCharacter === this.trace.hole) { this.stichCount--; }

    let temp = this.board[location.y];
    const trace = this.getTrace(currentCharacter);
    temp = temp.substr(0, location.x) + trace + temp.substr(location.x + 1);
    this.board[location.y] = temp;

    return true;
  }

  getTrace(character) {
    if (character === this.trace.empty ) {
      return ['N', 'S'].includes(this.facing) ? this.trace.threadVempty : this.trace.threadHempty;
    } else if (character === this.trace.hole ) {
      return ['N', 'S'].includes(this.facing) ? this.trace.threadVhole : this.trace.threadHhole;
    } else if (this.trace.threadHempty === character) {
      return ['E', 'W'].includes(this.facing) ? this.trace.threadHempty : this.trace.threadHVempty;
    } else if (this.trace.threadVempty === character) {
      return ['E', 'W'].includes(this.facing) ? this.trace.threadHVempty : this.trace.threadVempty;
    } else if (this.trace.threadHVempty === character) {
      return this.trace.threadHVempty;
    } else if (this.trace.threadHhole === character) {
      return ['E', 'W'].includes(this.facing) ? this.trace.threadHhole : this.trace.threadHVhole;
    } else if (this.trace.threadVhole === character) {
      return ['E', 'W'].includes(this.facing) ? this.trace.threadHVhole : this.trace.threadVhole;
    } else { return this.trace.threadHVhole; }
  }

  detectErrors() {
    const xStich = [this.trace.threadHVempty, this.trace.threadHVhole];
    this.board.forEach( line => {
      const lineArr = line.split('');
      lineArr.forEach( character => {
        if (xStich.includes(character)) { this.stichError++; }
      });
    });
  }

  nextLocation() {
    const needle = this.parts[0];
    let targetX = needle.x;
    let targetY = needle.y;
    targetY = this.facing === 'N' ? targetY - 1 : targetY;
    targetY = this.facing === 'S' ? targetY + 1 : targetY;
    targetX = this.facing === 'W' ? targetX - 1 : targetX;
    targetX = this.facing === 'E' ? targetX + 1 : targetX;
    return {x: targetX, y: targetY};
  }

  move() {
    const location = this.nextLocation();
    if (this.isEmpty(location)) {
      this.parts.unshift(location);
      this.parts.pop();
    }
  }

  isDone() {
    return this.stichCount === 0;
  }

  drawBoard(ctx) {
    let currentYoffset = 0;
    const holes = [
      this.trace.hole,
      this.trace.threadHVhole,
      this.trace.threadHhole,
      this.trace.threadVhole
    ];
    const hStich = [this.trace.threadHempty, this.trace.threadHhole];
    const vStich = [this.trace.threadVempty, this.trace.threadVhole];
    const xStich = [this.trace.threadHVempty, this.trace.threadHVhole];

    this.board.forEach( line => {
      const lineArr = line.split('');
      let currentXoffset = 0;
      lineArr.forEach( character => {
        if (holes.includes(character)) {
          ctx.drawImage(this.img, currentXoffset, currentYoffset, this.squareSize, this.squareSize);
        }

        if (hStich.includes(character)) {
          ctx.drawImage(this.threadH, currentXoffset, currentYoffset);
        } else if (vStich.includes(character)) {
          ctx.drawImage(this.threadV, currentXoffset, currentYoffset);
        } else if (xStich.includes(character)) {
          ctx.drawImage(this.threadHV, currentXoffset, currentYoffset);
        }
        currentXoffset += this.squareSize;
      });
      currentYoffset += this.squareSize;
    });
  }

  drawNeedle(ctx) {
    this.parts.forEach( part => {
      const partXlocation = part.x * this.squareSize;
      const partYlocation = part.y * this.squareSize;
      ctx.drawImage(this.needle, partXlocation, partYlocation);
    });
  }

  drawGame() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.drawBoard(ctx);
    this.drawNeedle(ctx);
  }

  processInput(keyPressed) {
    const key = keyPressed.key.toLowerCase();
    this.setDirection(key);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.processInput(event);
  }

  setDirection(key) {
    let targetDirection = this.facing;
    if (key === 'w') { targetDirection = 'N'; this.needle = this.needleN; }
    if (key === 'a') { targetDirection = 'W'; this.needle = this.needleW; }
    if (key === 's') { targetDirection = 'S'; this.needle = this.needleS; }
    if (key === 'd') { targetDirection = 'E'; this.needle = this.needleE; }
    this.facing = targetDirection;
    this.tick();
  }

  left() {
    this.setDirection('a');
  }
  right() {
    this.setDirection('d');
  }
  up() {
    this.setDirection('w');
  }
  down() {
    this.setDirection('s');
  }


  tick() {
    clearTimeout(this.timer);
    this.tickNumber++;
    this.move();
    this.drawGame();
    if (this.isDone()) {
      this.complete.emit();
      this.detectErrors();
      console.log(this.stichError); // potentially score points for good stiching.
    } else {
      this.timer = setTimeout( () => this.tick(), 300);
    }
  }

  constructor() {
    this.img.src = 'assets/backgrounds/hole.png';
    this.needleN.src = 'assets/misc/needleN.png';
    this.needleS.src = 'assets/misc/needleS.png';
    this.needleE.src = 'assets/misc/needleE.png';
    this.needleW.src = 'assets/misc/needleW.png';
    this.threadH.src = 'assets/misc/threadH.png';
    this.threadV.src = 'assets/misc/threadV.png';
    this.threadHV.src = 'assets/misc/threadHV.png';
    this.needle = this.needleE;
    this.generateBoard();
  }

  generateBoard() {
    const width = 18;
    const height = 13;
    const numberOfHoles = Math.floor( Math.random() * Math.floor(9) + 4);
    const holes = new Set();
    for (let count = 0; count < numberOfHoles; count++) {
      const row = Math.floor( Math.random() * Math.floor(height) + 1 );
      const column = Math.floor( Math.random() * Math.floor(width) + 1 );
      if (holes.has(String(column) + String(row))) {
        count--;
      } else {
        holes.add(String(column) + String(row));
        let temp = this.board[row];
        temp = temp.substr(0, column) + this.trace.hole + temp.substr(column + 1);
        this.board[row] = temp;
      }
    }
    this.stichCount = holes.size;
  }

  ngAfterViewInit() {
    this.tick();
  }
}
