import React from 'react';
import { EyeVariant, MouthVariant, AccessoryVariant, CompanionObjectVariant } from '../types';

interface EyesProps {
  variant: EyeVariant;
}

export const CharacterEyes: React.FC<EyesProps> = ({ variant }) => {
  switch (variant) {
    case 'heartEyes':
      return (
        <div className="live-heart-eyes-box">
          <div className="live-heart-eye">
            <div className="live-heart-eye-shine" />
          </div>
          <div className="live-heart-eye">
            <div className="live-heart-eye-shine" />
          </div>
        </div>
      );

    case 'happyCurved':
      return (
        <div className="live-happy-eyes-box">
          <div className="live-happy-eye-unit">
            <div className="live-happy-eye-arc" />
            <div className="live-happy-eye-lash-l" />
            <div className="live-happy-eye-lash-r" />
          </div>
          <div className="live-happy-eye-unit">
            <div className="live-happy-eye-arc" />
            <div className="live-happy-eye-lash-l" />
            <div className="live-happy-eye-lash-r" />
          </div>
        </div>
      );

    case 'sunglasses':
      return (
        <div className="live-sunglasses-unit">
          <div className="live-sunglass-lens">
            <div className="live-sunglass-glare" />
          </div>
          <div className="live-sunglass-bridge" />
          <div className="live-sunglass-lens">
            <div className="live-sunglass-glare" />
          </div>
        </div>
      );

    case 'starry':
      return (
        <div className="live-starry-eyes-box">
          <div className="live-star-eye-unit">
            <div className="live-star-eye-pupil" />
            <div className="live-star-eye-shine" />
          </div>
          <div className="live-star-eye-unit">
            <div className="live-star-eye-pupil" />
            <div className="live-star-eye-shine" />
          </div>
        </div>
      );

    case 'sleepyCute':
      return (
        <div className="live-sleepy-eyes-box">
          <div className="live-sleepy-eye-l">
            <div className="live-sleepy-lash sl-1" />
            <div className="live-sleepy-lash sl-2" />
          </div>
          <div className="live-sleepy-eye-r">
            <div className="live-sleepy-lash sl-1" />
            <div className="live-sleepy-lash sl-2" />
          </div>
        </div>
      );

    case 'wink':
    default:
      return (
        <>
          {/* Occhiolino */}
          <div className="live-wink-container">
            <div className="live-wink-arc" />
            <div className="live-wink-lash w-l1" />
            <div className="live-wink-lash w-l2" />
            <div className="live-wink-lash w-l3" />
            <div className="live-wink-lash w-l4" />
          </div>

          {/* Occhio aperto */}
          <div className="live-eye-open">
            <div className="live-sclera">
              <div className="live-pupil">
                <div className="live-shine-lg" />
                <div className="live-shine-sm" />
              </div>
            </div>
            <div className="live-open-lash o-l1" />
            <div className="live-open-lash o-l2" />
            <div className="live-open-lash o-l3" />
          </div>
        </>
      );
  }
};

interface MouthProps {
  variant: MouthVariant;
  burstKissKey?: number;
}

export const CharacterMouth: React.FC<MouthProps> = ({ variant, burstKissKey = 0 }) => {
  switch (variant) {
    case 'openSmile':
      return (
        <div className="live-open-smile-box">
          <div className="live-smile-teeth" />
          <div className="live-smile-tongue" />
        </div>
      );

    case 'playfulTongue':
      return (
        <div className="live-playful-tongue-box">
          <div className="live-playful-lip" />
          <div className="live-playful-tongue-flap">
            <div className="live-playful-tongue-line" />
          </div>
        </div>
      );

    case 'catNeko':
      return (
        <div className="live-cat-neko-box">
          <div className="live-cat-half-l" />
          <div className="live-cat-half-r" />
        </div>
      );

    case 'blushingO':
      return <div className="live-blushing-o-box" />;

    case 'kissLips':
    default:
      return (
        <>
          <div className="live-kiss-mouth">
            <div className="live-lip-top" />
            <div className="live-lip-bottom" />
            <div className="live-lip-center" />
          </div>

          <div className="live-kiss-hand">
            <div className="live-finger f-1" />
            <div className="live-finger f-2" />
            <div className="live-finger f-3" />
            <div className="live-finger f-th" />
            <div className="live-hand-palm" />
          </div>

          <div className="live-kiss-heart-unit" key={`kiss-${burstKissKey}`}>
            <div className="live-heart-3d" style={{ width: 24, height: 24 }}>
              <div className="live-heart-specular" />
            </div>
          </div>
        </>
      );
  }
};

interface AccessoryProps {
  variant: AccessoryVariant;
}

export const CharacterAccessory: React.FC<AccessoryProps> = ({ variant }) => {
  switch (variant) {
    case 'royalCrown':
      return (
        <div className="live-royal-crown-box">
          <div className="live-royal-crown-shape" />
          <div className="live-crown-ruby" />
          <div className="live-crown-pearl cp-1" />
          <div className="live-crown-pearl cp-2" />
          <div className="live-crown-pearl cp-3" />
        </div>
      );

    case 'partyHat':
      return (
        <div className="live-party-hat-box">
          <div className="live-party-cone" />
          <div className="live-party-pompon" />
        </div>
      );

    case 'headset':
      return (
        <div className="live-headset-box">
          <div className="live-headset-band" />
          <div className="live-headset-ear-l" />
          <div className="live-headset-ear-r" />
        </div>
      );

    case 'redRibbon':
      return (
        <div className="live-ribbon-box">
          <div className="live-ribbon-loop-l" />
          <div className="live-ribbon-loop-r" />
          <div className="live-ribbon-center" />
        </div>
      );

    case 'angelHalo':
      return (
        <div className="live-angel-halo-box">
          <div className="live-angel-halo" />
        </div>
      );

    case 'flowerPin':
      return (
        <div className="live-flower-pin">
          <div className="live-petal pet-1" />
          <div className="live-petal pet-2" />
          <div className="live-petal pet-3" />
          <div className="live-petal pet-4" />
          <div className="live-petal pet-5" />
          <div className="live-petal pet-6" />
          <div className="live-flower-pistil" />
        </div>
      );

    case 'none':
    default:
      return null;
  }
};

interface CompanionProps {
  variant: CompanionObjectVariant;
  showSteam?: boolean;
  burstSteamKey?: number;
}

export const CompanionObjectRenderer: React.FC<CompanionProps> = ({
  variant,
  showSteam = true,
  burstSteamKey = 0,
}) => {
  switch (variant) {
    case 'croissant':
      return (
        <div className="live-croissant-wrapper">
          <div className="live-saucer-shadow" />
          <div className="live-saucer-plate">
            <div className="live-saucer-ring" />
          </div>

          <div className="live-croissant-body">
            <div className="live-croissant-stripe cs-1" />
            <div className="live-croissant-stripe cs-2" />
            <div className="live-croissant-stripe cs-3" />
            <div className="live-croissant-glaze" />

            <div className="live-croissant-face">
              <div className="live-croissant-eye-l" />
              <div className="live-croissant-eye-r" />
              <div className="live-croissant-cheeks cr-ch-l" />
              <div className="live-croissant-cheeks cr-ch-r" />
              <div className="live-croissant-mouth" />
            </div>
          </div>

          {showSteam && (
            <div className="live-steam-box" key={`croissant-steam-${burstSteamKey}`}>
              <div className="live-steam-heart" />
              <div className="live-wisp wisp-a" />
              <div className="live-wisp wisp-b" />
              <div className="live-wisp wisp-c" />
            </div>
          )}
        </div>
      );

    case 'birthdayCupcake':
      return (
        <div className="live-cupcake-wrapper">
          <div className="live-saucer-shadow" />
          <div className="live-cupcake-cup" />
          <div className="live-cupcake-frosting">
            <div className="live-sprinkle spk-1" />
            <div className="live-sprinkle spk-2" />
            <div className="live-sprinkle spk-3" />
            <div className="live-sprinkle spk-4" />
            <div className="live-sprinkle spk-5" />
          </div>
          <div className="live-candle">
            <div className="live-candle-wick" />
            <div className="live-candle-flame" />
          </div>
        </div>
      );

    case 'flowerBouquet':
      return (
        <div className="live-bouquet-wrapper">
          <div className="live-saucer-shadow" />
          <div className="live-bouquet-cone" />
          <div className="live-bouquet-ribbon" />
          <div className="live-bouquet-top">
            <div className="live-leaf lf-1" />
            <div className="live-leaf lf-2" />
            <div className="live-rose-bud rb-1" />
            <div className="live-rose-bud rb-2" />
            <div className="live-rose-bud rb-3" />
          </div>
        </div>
      );

    case 'teaMug':
      return (
        <div className="live-teamug-wrapper">
          <div className="live-saucer-shadow" />
          <div className="live-saucer-plate">
            <div className="live-saucer-ring" />
          </div>

          <div className="live-teamug-glass">
            <div className="live-tea-liquid" />
            <div className="live-lemon-slice" />
            <div className="live-mint-leaf" />
            <div className="live-teabag-tag" />
          </div>

          {showSteam && (
            <div className="live-steam-box" key={`tea-steam-${burstSteamKey}`}>
              <div className="live-steam-heart" />
              <div className="live-wisp wisp-a" />
              <div className="live-wisp wisp-b" />
            </div>
          )}
        </div>
      );

    case 'coffeeCup':
    default:
      return (
        <div className="live-coffee-wrapper">
          <div className="live-saucer-shadow" />
          <div className="live-saucer-plate">
            <div className="live-saucer-ring" />
          </div>

          <div className="live-cup-body">
            <div className="live-cup-handle" />
            <div className="live-cup-shine" />

            <div className="live-cup-rim">
              <div className="live-espresso">
                <div className="live-crema" />
                <div className="live-coffee-shine" />
              </div>
            </div>

            <div className="live-cup-face">
              <div className="live-cup-eye c-eye-l">
                <div className="live-cup-arc" />
                <div className="live-cup-lash c-lash-l" />
                <div className="live-cup-lash c-lash-r" />
              </div>
              <div className="live-cup-eye c-eye-r">
                <div className="live-cup-arc" />
                <div className="live-cup-lash c-lash-l" />
                <div className="live-cup-lash c-lash-r" />
              </div>
              <div className="live-cup-cheeks ch-l" />
              <div className="live-cup-cheeks ch-r" />
              <div className="live-cup-mouth">
                <div className="live-cup-tongue" />
              </div>
              <div className="live-cup-heart" />
            </div>

            {showSteam && (
              <div className="live-steam-box" key={`steam-${burstSteamKey}`}>
                <div className="live-steam-heart" />
                <div className="live-wisp wisp-a" />
                <div className="live-wisp wisp-b" />
                <div className="live-wisp wisp-c" />
              </div>
            )}
          </div>
        </div>
      );
  }
};
