

export interface Part {
  type: partType;
  image: string;
  name: string;
}

export enum partType {
  leg = 'Leg',
  torso = 'Torso',
  arm = 'Arm',
  head = 'Head'
}
