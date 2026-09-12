export type EyeVariant = 'wink' | 'heartEyes' | 'happyCurved' | 'sunglasses' | 'starry' | 'sleepyCute';
export type MouthVariant = 'kissLips' | 'openSmile' | 'playfulTongue' | 'catNeko' | 'blushingO';
export type AccessoryVariant = 'flowerPin' | 'royalCrown' | 'partyHat' | 'headset' | 'redRibbon' | 'angelHalo' | 'none';
export type CompanionObjectVariant = 'coffeeCup' | 'croissant' | 'birthdayCupcake' | 'flowerBouquet' | 'teaMug';

export interface CardVariantConfig {
  eyes: EyeVariant;
  mouth: MouthVariant;
  accessory: AccessoryVariant;
  companion: CompanionObjectVariant;
}

export interface CardTextConfig {
  date: string;
  buongiorno: string;
  subGreeting: string;
  signature: string;
}

export interface LayerVisibility {
  texts: boolean;
  emoji: boolean;
  coffee: boolean; // refers to companion object
  hearts: boolean;
  sparkles: boolean;
  steam: boolean;
}

export interface AnimationSettings {
  isPlaying: boolean;
  speed: number; // 0.5, 1, 1.5, 2
}

export type ActiveSessionTab = 'card' | 'code' | 'typography' | 'eyes' | 'mouth' | 'accessories' | 'objects';
