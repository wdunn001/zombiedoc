import { Injectable } from '@angular/core';
import { Part, partType } from '../models/part.model';

@Injectable({
  providedIn: 'root'
})
export class BodyPartsService {

  parts: Part[] = [
<<<<<<< HEAD
    { type: partType.leg,
      image: 'assets/body/leg/legs_01.png',
      name: 'Farmer_Pants'
    },
    { type: partType.leg,
      image: 'assets/body/leg/legs_02.png',
      name: 'Somthins_Fishy'
    },
    { type: partType.leg,
      image: 'assets/body/leg/legs_03.png',
      name: 'Restless_Trunks'
    },
    { type: partType.leg,
      image: 'assets/body/leg/legs_04.png',
      name: 'PlantLife'
    },
    { type: partType.leg,
      image: 'assets/body/leg/legs_05.png',
      name: 'Leg_Day'
    },
    { type: partType.leg,
      image: 'assets/body/leg/legs_06.png',
      name: 'Noodle_Knockout'
    },
    { type: partType.leg,
      image: 'assets/body/leg/legs_07.png',
      name: 'Grave_Justice'
    },
    { type: partType.arm,
      image: 'assets/body/arm/arm_01.png',
      name: 'Bad_Boy'
    },
    { type: partType.arm,
      image: 'assets/body/arm/arm_02.png',
      name: 'Fully_Tatted'
    },
    { type: partType.arm,
      image: 'assets/body/arm/arm_03.png',
      name: 'Tentacle_Triceps'
    },
    { type: partType.arm,
      image: 'assets/body/arm/arm_04.png',
      name: 'Water_Wing'
    },
    { type: partType.arm,
      image: 'assets/body/arm/arm_05.png',
      name: 'Snake_Game'
    },
    { type: partType.arm,
      image: 'assets/body/arm/arm_06.png',
      name: 'Pirhana_Plant'
    },
    { type: partType.arm,
      image: 'assets/body/arm/arm_07.png',
      name: 'Portal_Gun'
    },
    { type: partType.arm,
      image: 'assets/body/arm/arm_08.png',
      name: 'My_Spaget'
    },
    { type: partType.head,
      image: 'assets/body/head/Head_01.png',
      name: 'Brainiac'
    },
    { type: partType.head,
      image: 'assets/body/head/Head_02.png',
      name: 'Whata_Sucker'
    },
    { type: partType.head,
      image: 'assets/body/head/Head_03.png',
      name: 'Gordon_Decay'
    },
    { type: partType.head,
      image: 'assets/body/head/Head_04.png',
      name: 'Cooky_Codger'
    },
    { type: partType.head,
      image: 'assets/body/head/Head_05.png',
      name: 'Angsty_Undead'
    },
    { type: partType.head,
      image: 'assets/body/head/Head_06.png',
      name: 'Zom_Ross'
    },
    { type: partType.torso,
      image: 'assets/body/torso/body_01.png',
      name: 'Puppy_Love'
    },
    { type: partType.torso,
      image: 'assets/body/torso/body_02.png',
      name: 'Calamari_Casket'
    },
    { type: partType.torso,
      image: 'assets/body/torso/body_03.png',
      name: 'See_Through'
    },
    { type: partType.torso,
      image: 'assets/body/torso/body_04.png',
      name: 'Happy_Sweater'
=======
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
>>>>>>> e5be70538bbeef3454fd9dcaf5651938ee263bd8
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
