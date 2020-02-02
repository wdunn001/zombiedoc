import { Injectable } from '@angular/core';
import { Part, partType } from '../models/part.model';

@Injectable({
  providedIn: 'root'
})
export class BodyPartsService {

  parts: Part[] = [
    { type: partType.arm,
      image: 'assets/body/arm/Snake.png',
      name: 'Snake'
    },    { type: partType.arm,
      image: 'assets/body/arm/Tattoo.png',
      name: 'Tattoo'
    },    { type: partType.arm,
      image: 'assets/body/arm/Waterwings.png',
      name: 'Water Wings'
    },    { type: partType.arm,
      image: 'assets/body/arm/Zombie_Arm_H_03.png',
      name: 'Zombie_Arm_H_03'
    },    { type: partType.arm,
      image: 'assets/body/arm/Zombie_Arm_H_05.png',
      name: 'Zombie_Arm_H_05'
    },    { type: partType.arm,
      image: 'assets/body/arm/Zombie_Plant_Arm.png',
      name: 'Plant Arm'
    },    { type: partType.arm,
      image: 'assets/body/arm/Zombie_Portal_Arm.png',
      name: 'Portal Arm'
    },    { type: partType.arm,
      image: 'assets/body/arm/Zombie_spagit_arm.png',
      name: 'Sahgetti Arm'
    },
    { type: partType.head,
      image: 'assets/body/head/egg_head.png',
      name: 'Egg Head'
    },    { type: partType.head,
      image: 'assets/body/head/Gordon.png',
      name: 'Gordon'
    },
    { type: partType.head,
      image: 'assets/body/head/Itsnotaphase.png',
      name: `Its Not a Phase Mom!`
    },
    { type: partType.head,
      image: 'assets/body/head/Zobross.png',
      name: 'Zobross'
    },
    { type: partType.head,
      image: 'assets/body/head/Zombie_Head_H_01.png',
      name: 'Zombie_Head_H_01'
    },
    { type: partType.head,
      image: 'assets/body/head/Zombie_Head_H_02.png',
      name: 'Zombie_Head_H_02'
    },
    { type: partType.head,
      image: 'assets/body/head/Zombie_Head_H_03.png',
      name: 'Zombie_Head_H_03'
    },
    { type: partType.head,
      image: 'assets/body/head/Zombie_Nail_Head.png',
      name: 'Pin Head'
    },
    { type: partType.torso,
      image: 'assets/body/head/Hole.png',
      name: 'Hole'
    },
    { type: partType.torso,
      image: 'assets/body/head/Sweater.png',
      name: 'Sweater'
    },
    { type: partType.torso,
      image: 'assets/body/head/Zombie_Body_H_01.png',
      name: 'Zombie_Body_H_01'
    },
    { type: partType.torso,
      image: 'assets/body/head/Zombie_Body_H_02.png',
      name: 'Zombie_Body_H_02'
    },
    { type: partType.torso,
      image: 'assets/body/head/Zombie_Body_hand_crowd.png',
      name: 'Zombie_Body_hand_crowd'
    },
    { type: partType.leg,
      image: 'assets/body/head/Cowboy.png',
      name: 'Cowboy'
    },
    { type: partType.torso,
      image: 'assets/body/head/Shorts.png',
      name: 'Shorts'
    },
    { type: partType.torso,
      image: 'assets/body/head/Zombie_Leg_plant.png',
      name: 'Plant Legs'
    },
    { type: partType.torso,
      image: 'assets/body/head/Zombie_Legs_H_01.png',
      name: 'Pants'
    },
    { type: partType.torso,
      image: 'assets/body/head/Zombie_Legs_H_02.png',
      name: 'Leg Missing'
    },
    { type: partType.torso,
      image: 'assets/body/head/Zombie_Legs_H_03.png',
      name: 'Squid Legs'
    },
    { type: partType.torso,
      image: 'assets/body/head/Zombie_Legs_noodle.png',
      name: 'Squid Legs'
    }
  ];
  constructor() { }
}
