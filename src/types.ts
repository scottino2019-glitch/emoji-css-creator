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

export type TitleTheme = 'multicolor' | 'liquidGold' | 'candyPink' | 'cyberNeon' | 'oceanBreeze';
export type TitleDepth = 'flat' | 'light' | 'standard' | 'mega';
export type TitleDot = 'heart' | 'star' | 'classic';
export type TitleAnim = 'bounce' | 'float' | 'none';

export type SubtitleGradient = 'rainbow' | 'sunset' | 'pink' | 'aurora' | 'gold';
export type SubtitleEffect = 'glow-white' | 'neon-border' | 'dark-outline' | 'soft-shadow';

export type DateStyle = 'stone' | 'gold' | 'minimal' | 'rosegold';
export type SignatureFont = 'greatvibes' | 'pacifico' | 'sacramento' | 'dancingscript';
export type SignatureColor = 'night' | 'ruby' | 'gold' | 'choco';

export interface CardTextConfig {
  date: string;
  buongiorno: string;
  subGreeting: string;
  signature: string;

  // Personalizzazioni tipografiche create nel laboratorio scritte
  titleTheme?: TitleTheme;
  titleDepth?: TitleDepth;
  titleSpecular?: boolean;
  titleDot?: TitleDot;
  titleAnim?: TitleAnim;

  subtitleGradient?: SubtitleGradient;
  subtitleEffect?: SubtitleEffect;
  subtitleAnim?: boolean;

  dateStyle?: DateStyle;
  dateStars?: boolean;

  sigFont?: SignatureFont;
  sigColor?: SignatureColor;
  sigEmboss?: boolean;
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
