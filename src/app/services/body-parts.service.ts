import { Injectable } from '@angular/core';
import { Part, partType } from '../models/part.model';

@Injectable({
  providedIn: 'root'
})
export class BodyPartsService {

  parts: Part[] = [
    { type: partType.leg,
      image: 'assets/body/leg/legs_01.png',
      name: 'leg_01'
    },
    { type: partType.leg,
      image: 'assets/body/leg/legs_02.png',
      name: 'leg_02'
    },
    { type: partType.leg,
      image: 'assets/body/leg/legs_03.png',
      name: 'leg_03'
    },
    { type: partType.arm,
      image: 'assets/body/arm/left_arm_1.jpg',
      name: 'left_arm_1'
    },
    { type: partType.arm,
      image: 'assets/body/arm/left_arm_2.jpg',
      name: 'left_arm_2'
    },
    { type: partType.arm,
      image: 'assets/body/arm/left_arm_3.jpg',
      name: 'left_arm_3'
    },
    { type: partType.arm,
      image: 'assets/body/arm/right_arm_1.jpg',
      name: 'right_arm_1'
    },
    { type: partType.arm,
      image: 'assets/body/arm/right_arm_2.jpg',
      name: 'right_arm_2'
    },
    { type: partType.arm,
      image: 'assets/body/arm/right_arm_3.jpg',
      name: 'right_arm_3'
    },
    { type: partType.head,
      image: 'assets/body/head/head_01.jpg',
      name: 'head_01'
    },
    { type: partType.head,
      image: 'assets/body/head/head_02.jpg',
      name: 'head_02'
    },
    { type: partType.head,
      image: 'assets/body/head/head_03.jpg',
      name: 'head_03'
    },
    { type: partType.torso,
      image: 'assets/body/torso/body_01.jpg',
      name: 'body_01'
    },
    { type: partType.torso,
      image: 'assets/body/torso/body_02.jpg',
      name: 'body_02'
    },
    { type: partType.torso,
      image: 'assets/body/torso/body_03.jpg',
      name: 'body_03'
    },
  ];
  constructor() { }
}
