

export interface Part {
  type: partType;
  image: string;
  name: string;
}

export enum partType {
  leg = 'leg',
  torso = 'torso',
  arm = 'arm',
  head = 'head'
}
