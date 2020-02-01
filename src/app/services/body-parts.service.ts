import { Injectable } from '@angular/core';
import { Part, partType } from '../models/part.model';

@Injectable({
  providedIn: 'root'
})
export class BodyPartsService {

  parts: Part[] = [
    { type: partType.leg,
      image: 'https://via.placeholder.com/200x200.png?text=Part',
      name: 'left leg'
    },
    { type: partType.arm,
      image: 'assets/body/arm/left_arm_1.jpg',
      name: 'left arm'
    },
    { type: partType.arm,
      image: 'https://via.placeholder.com/200x200.png?text=Part',
      name: 'right arm'
    },
    { type: partType.head,
      image: 'assets/body/head/eyeballhead.jpg',
      name: 'head'
    },
    { type: partType.torso,
      image: 'https://via.placeholder.com/200x200.png?text=Part',
      name: 'torso'
    },
  ];
  constructor() { }
}
