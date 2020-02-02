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
    '#      *            #',
    '#                   #',
    '#            *      #',
    '#                   #',
    '#    *              #',
    '#                   #',
    '#                *  #',
    '#                   #',
    '#                   #',
    '#    *              #',
    '#                *  #',
    '#                   #',
    '#####################'
  ];
  parts = [
    {x: 4, y: 1},
    {x: 3, y: 1},
    {x: 2, y: 1}
  ];
  stichCount = 6;
  facing = 'E';
  squareSize = 30;
  img = new Image(this.squareSize, this.squareSize);

  @ViewChild('canvas', {static: false}) canvas: ElementRef<HTMLCanvasElement>;

  isEmpty(location) {
    const currentCharacter = this.board[location.y][location.x];
    if (currentCharacter === ' ' || currentCharacter === 'O') {
      return true;
    } else if (currentCharacter === '*') {
      this.stichCount--;
      let temp = this.board[location.y];
      temp = temp.substr(0, location.x) + ' ' + temp.substr(location.x + 1);
      this.board[location.y] = temp;
    }
  }

  nextLocation() {
    const snakeHead = this.parts[0];
    let targetX = snakeHead.x;
    let targetY = snakeHead.y;
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
    if (this.isDone()) {
      this.complete.emit();
    }
  }

  isDone() {
    return this.stichCount === 0;
  }

  drawBoard(ctx) {
    let currentYoffset = 0;
    this.board.forEach( line=> {
      const lineArr = line.split('');
      let currentXoffset = 0;
      lineArr.forEach( character=> {
        if (character === '*' || character === 'O') {
          ctx.drawImage(this.img, currentXoffset, currentYoffset, 30, 30);
        }
        currentXoffset += this.squareSize;
        });
      currentYoffset += this.squareSize;
    });
  }

  drawSnake(ctx) {
    this.parts.forEach( part=> {
      const partXlocation = part.x * this.squareSize;
      const partYlocation = part.y * this.squareSize;
      ctx.fillStyle = 'green';
      ctx.fillRect(partXlocation, partYlocation, this.squareSize, this.squareSize);
    });
  }

  drawGame() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.drawBoard(ctx);
    this.drawSnake(ctx);
  }

  processInput(keyPressed) {
    const key = keyPressed.key.toLowerCase();
    let targetDirection = this.facing;
    if (key === 'w') { targetDirection = 'N'; }
    if (key === 'a') { targetDirection = 'W'; }
    if (key === 's') { targetDirection = 'S'; }
    if (key === 'd') { targetDirection = 'E'; }
    this.facing = targetDirection;
    this.tick();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.processInput(event);
  }

  tick() {
    clearTimeout(this.timer);
    this.tickNumber++;
    this.move();
    this.drawGame();
    this.timer = setTimeout( () => this.tick(), 200);
  }

  constructor() {
    this.img.src = 'assets/backgrounds/hole.png';
  }

  ngAfterViewInit() {
    this.tick();
  }


}
