import { Injectable } from '@angular/core';
import { Part, partType } from '../models/part.model';

@Injectable({
  providedIn: 'root'
})
export class BodyPartsService {

  parts: Part[] = [
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
    },
    { type: partType.torso,
      image: 'assets/body/torso/Zombie_Body_H_02.png',
      name: 'Zombie_Body_H_02'
    },
    { type: partType.torso,
      image: 'assets/body/torso/Zombie_Body_hand_crowd.png',
      name: 'Zombie_Body_hand_crowd'
    },
    { type: partType.leg,
      image: 'assets/body/leg/Cowboy.png',
      name: 'Cowboy'
    },
    { type: partType.torso,
      image: 'assets/body/leg/Shorts.png',
      name: 'Shorts'
    },
    { type: partType.torso,
      image: 'assets/body/leg/Zombie_Leg_plant.png',
      name: 'Plant Legs'
    },
    { type: partType.torso,
      image: 'assets/body/leg/Zombie_Legs_H_01.png',
      name: 'Pants'
    },
    { type: partType.torso,
      image: 'assets/body/leg/Zombie_Legs_H_02.png',
      name: 'Leg Missing'
    },
    { type: partType.torso,
      image: 'assets/body/leg/Zombie_Legs_H_03.png',
      name: 'Squid Legs'
    },
    { type: partType.torso,
      image: 'assets/body/leg/Zombie_Legs_noodle.png',
      name: 'Squid Legs'
    }
  ];
  constructor() { }
}
