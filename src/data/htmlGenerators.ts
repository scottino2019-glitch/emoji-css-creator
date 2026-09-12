import { EyeVariant, MouthVariant, AccessoryVariant, CompanionObjectVariant } from '../types';

export function getEyesHtml(variant: EyeVariant): string {
  switch (variant) {
    case 'heartEyes':
      return `
          <!-- Occhi a Cuoricino 3D -->
          <div class="live-heart-eyes-box">
            <div class="live-heart-eye"><div class="live-heart-eye-shine"></div></div>
            <div class="live-heart-eye"><div class="live-heart-eye-shine"></div></div>
          </div>`;
    case 'happyCurved':
      return `
          <!-- Occhi Sorridenti Kawaii (^ ^) -->
          <div class="live-happy-eyes-box">
            <div class="live-happy-eye-unit">
              <div class="live-happy-eye-arc"></div>
              <div class="live-happy-eye-lash-l"></div>
              <div class="live-happy-eye-lash-r"></div>
            </div>
            <div class="live-happy-eye-unit">
              <div class="live-happy-eye-arc"></div>
              <div class="live-happy-eye-lash-l"></div>
              <div class="live-happy-eye-lash-r"></div>
            </div>
          </div>`;
    case 'sunglasses':
      return `
          <!-- Occhiali da Sole Cool Chic -->
          <div class="live-sunglasses-unit">
            <div class="live-sunglass-lens"><div class="live-sunglass-glare"></div></div>
            <div class="live-sunglass-bridge"></div>
            <div class="live-sunglass-lens"><div class="live-sunglass-glare"></div></div>
          </div>`;
    case 'starry':
      return `
          <!-- Occhi a Stella Anime -->
          <div class="live-starry-eyes-box">
            <div class="live-star-eye-unit">
              <div class="live-star-eye-pupil"></div>
              <div class="live-star-eye-shine"></div>
            </div>
            <div class="live-star-eye-unit">
              <div class="live-star-eye-pupil"></div>
              <div class="live-star-eye-shine"></div>
            </div>
          </div>`;
    case 'sleepyCute':
      return `
          <!-- Occhi Sonnecchiosi -->
          <div class="live-sleepy-eyes-box">
            <div class="live-sleepy-eye-l">
              <div class="live-sleepy-lash sl-1"></div>
              <div class="live-sleepy-lash sl-2"></div>
            </div>
            <div class="live-sleepy-eye-r">
              <div class="live-sleepy-lash sl-1"></div>
              <div class="live-sleepy-lash sl-2"></div>
            </div>
          </div>`;
    case 'wink':
    default:
      return `
          <!-- Occhiolino con Ciglia -->
          <div class="live-wink-container">
            <div class="live-wink-arc"></div>
            <div class="live-wink-lash w-l1"></div>
            <div class="live-wink-lash w-l2"></div>
            <div class="live-wink-lash w-l3"></div>
            <div class="live-wink-lash w-l4"></div>
          </div>

          <!-- Occhio Aperto Cartoon -->
          <div class="live-eye-open">
            <div class="live-sclera">
              <div class="live-pupil">
                <div class="live-shine-lg"></div>
                <div class="live-shine-sm"></div>
              </div>
            </div>
            <div class="live-open-lash o-l1"></div>
            <div class="live-open-lash o-l2"></div>
            <div class="live-open-lash o-l3"></div>
          </div>`;
  }
}

export function getMouthHtml(variant: MouthVariant): string {
  switch (variant) {
    case 'openSmile':
      return `
          <!-- Sorrisone Aperto con Denti -->
          <div class="live-open-smile-box">
            <div class="live-smile-teeth"></div>
            <div class="live-smile-tongue"></div>
          </div>`;
    case 'playfulTongue':
      return `
          <!-- Linguaccia Birichina -->
          <div class="live-playful-tongue-box">
            <div class="live-playful-lip"></div>
            <div class="live-playful-tongue-flap">
              <div class="live-playful-tongue-line"></div>
            </div>
          </div>`;
    case 'catNeko':
      return `
          <!-- Boccina a Gattino :3 -->
          <div class="live-cat-neko-box">
            <div class="live-cat-half-l"></div>
            <div class="live-cat-half-r"></div>
          </div>`;
    case 'blushingO':
      return `
          <!-- Boccina a O -->
          <div class="live-blushing-o-box"></div>`;
    case 'kissLips':
    default:
      return `
          <!-- Bocca a Bacetto 3D -->
          <div class="live-kiss-mouth">
            <div class="live-lip-top"></div>
            <div class="live-lip-bottom"></div>
            <div class="live-lip-center"></div>
          </div>

          <!-- Manina Bacio -->
          <div class="live-kiss-hand">
            <div class="live-finger f-1"></div>
            <div class="live-finger f-2"></div>
            <div class="live-finger f-3"></div>
            <div class="live-finger f-th"></div>
            <div class="live-hand-palm"></div>
          </div>

          <!-- Cuoricino in Volo -->
          <div class="live-kiss-heart-unit">
            <div class="live-heart-3d" style="width: 24px; height: 24px;">
              <div class="live-heart-specular"></div>
            </div>
          </div>`;
  }
}

export function getAccessoryHtml(variant: AccessoryVariant): string {
  switch (variant) {
    case 'royalCrown':
      return `
          <!-- Coroncina Reale Dorata -->
          <div class="live-royal-crown-box">
            <div class="live-royal-crown-shape"></div>
            <div class="live-crown-ruby"></div>
            <div class="live-crown-pearl cp-1"></div>
            <div class="live-crown-pearl cp-2"></div>
            <div class="live-crown-pearl cp-3"></div>
          </div>`;
    case 'partyHat':
      return `
          <!-- Cappellino da Festa -->
          <div class="live-party-hat-box">
            <div class="live-party-cone"></div>
            <div class="live-party-pompon"></div>
          </div>`;
    case 'headset':
      return `
          <!-- Cuffie Stereo -->
          <div class="live-headset-box">
            <div class="live-headset-band"></div>
            <div class="live-headset-ear-l"></div>
            <div class="live-headset-ear-r"></div>
          </div>`;
    case 'redRibbon':
      return `
          <!-- Fiocco Rosso Elegante -->
          <div class="live-ribbon-box">
            <div class="live-ribbon-loop-l"></div>
            <div class="live-ribbon-loop-r"></div>
            <div class="live-ribbon-center"></div>
          </div>`;
    case 'angelHalo':
      return `
          <!-- Aureola Angelica Dorata -->
          <div class="live-angel-halo-box">
            <div class="live-angel-halo"></div>
          </div>`;
    case 'flowerPin':
      return `
          <!-- Fiorellino Arcobaleno -->
          <div class="live-flower-pin">
            <div class="live-petal pet-1"></div>
            <div class="live-petal pet-2"></div>
            <div class="live-petal pet-3"></div>
            <div class="live-petal pet-4"></div>
            <div class="live-petal pet-5"></div>
            <div class="live-petal pet-6"></div>
            <div class="live-flower-pistil"></div>
          </div>`;
    case 'none':
    default:
      return '';
  }
}

export function getCompanionHtml(variant: CompanionObjectVariant): string {
  switch (variant) {
    case 'croissant':
      return `
      <!-- CORNETTO CALDO SFOGLIATO -->
      <div class="live-croissant-wrapper">
        <div class="live-saucer-shadow"></div>
        <div class="live-saucer-plate">
          <div class="live-saucer-ring"></div>
        </div>

        <div class="live-croissant-body">
          <div class="live-croissant-stripe cs-1"></div>
          <div class="live-croissant-stripe cs-2"></div>
          <div class="live-croissant-stripe cs-3"></div>
          <div class="live-croissant-glaze"></div>

          <div class="live-croissant-face">
            <div class="live-croissant-eye-l"></div>
            <div class="live-croissant-eye-r"></div>
            <div class="live-croissant-cheeks cr-ch-l"></div>
            <div class="live-croissant-cheeks cr-ch-r"></div>
            <div class="live-croissant-mouth"></div>
          </div>
        </div>

        <div class="live-steam-box">
          <div class="live-steam-heart"></div>
          <div class="live-wisp wisp-a"></div>
          <div class="live-wisp wisp-b"></div>
          <div class="live-wisp wisp-c"></div>
        </div>
      </div>`;

    case 'birthdayCupcake':
      return `
      <!-- CUPCAKE FESTOSO CON CANDELINA -->
      <div class="live-cupcake-wrapper">
        <div class="live-saucer-shadow"></div>
        <div class="live-cupcake-cup"></div>
        <div class="live-cupcake-frosting">
          <div class="live-sprinkle spk-1"></div>
          <div class="live-sprinkle spk-2"></div>
          <div class="live-sprinkle spk-3"></div>
          <div class="live-sprinkle spk-4"></div>
          <div class="live-sprinkle spk-5"></div>
        </div>
        <div class="live-candle">
          <div class="live-candle-wick"></div>
          <div class="live-candle-flame"></div>
        </div>
      </div>`;

    case 'flowerBouquet':
      return `
      <!-- BOUQUET DI FIORI & ROSE -->
      <div class="live-bouquet-wrapper">
        <div class="live-saucer-shadow"></div>
        <div class="live-bouquet-cone"></div>
        <div class="live-bouquet-ribbon"></div>
        <div class="live-bouquet-top">
          <div class="live-leaf lf-1"></div>
          <div class="live-leaf lf-2"></div>
          <div class="live-rose-bud rb-1"></div>
          <div class="live-rose-bud rb-2"></div>
          <div class="live-rose-bud rb-3"></div>
        </div>
      </div>`;

    case 'teaMug':
      return `
      <!-- TAZZA DI TÈ AL LIMONE -->
      <div class="live-teamug-wrapper">
        <div class="live-saucer-shadow"></div>
        <div class="live-saucer-plate">
          <div class="live-saucer-ring"></div>
        </div>

        <div class="live-teamug-glass">
          <div class="live-tea-liquid"></div>
          <div class="live-lemon-slice"></div>
          <div class="live-mint-leaf"></div>
          <div class="live-teabag-tag"></div>
        </div>

        <div class="live-steam-box">
          <div class="live-steam-heart"></div>
          <div class="live-wisp wisp-a"></div>
          <div class="live-wisp wisp-b"></div>
        </div>
      </div>`;

    case 'coffeeCup':
    default:
      return `
      <!-- TAZZINA KAWAII DI CAFFÈ -->
      <div class="live-coffee-wrapper">
        <div class="live-saucer-shadow"></div>
        <div class="live-saucer-plate">
          <div class="live-saucer-ring"></div>
        </div>

        <div class="live-cup-body">
          <div class="live-cup-handle"></div>
          <div class="live-cup-shine"></div>

          <div class="live-cup-rim">
            <div class="live-espresso">
              <div class="live-crema"></div>
              <div class="live-coffee-shine"></div>
            </div>
          </div>

          <div class="live-cup-face">
            <div class="live-cup-eye c-eye-l">
              <div class="live-cup-arc"></div>
              <div class="live-cup-lash c-lash-l"></div>
              <div class="live-cup-lash c-lash-r"></div>
            </div>
            <div class="live-cup-eye c-eye-r">
              <div class="live-cup-arc"></div>
              <div class="live-cup-lash c-lash-l"></div>
              <div class="live-cup-lash c-lash-r"></div>
            </div>
            <div class="live-cup-cheeks ch-l"></div>
            <div class="live-cup-cheeks ch-r"></div>
            <div class="live-cup-mouth">
              <div class="live-cup-tongue"></div>
            </div>
            <div class="live-cup-heart"></div>
          </div>

          <div class="live-steam-box">
            <div class="live-steam-heart"></div>
            <div class="live-wisp wisp-a"></div>
            <div class="live-wisp wisp-b"></div>
            <div class="live-wisp wisp-c"></div>
          </div>
        </div>
      </div>`;
  }
}
