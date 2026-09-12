import { CardTextConfig, AnimationSettings, CardVariantConfig } from '../types';
import { generateCardCss } from './cssGenerators';
import { getEyesHtml, getMouthHtml, getAccessoryHtml, getCompanionHtml } from './htmlGenerators';
import { generateTitleHtml, generateSubtitleHtml, generateDateHtml } from './typographyGenerators';

export function generateStandaloneHtml(
  texts: CardTextConfig = {
    date: '12 SETTEMBRE',
    buongiorno: 'BUONGIORNO',
    subGreeting: 'BUON SABATO',
    signature: 'My angel',
  },
  anim: AnimationSettings = { isPlaying: true, speed: 1 },
  variants: CardVariantConfig = {
    eyes: 'wink',
    mouth: 'kissLips',
    accessory: 'flowerPin',
    companion: 'coffeeCup',
  }
): string {
  const css = generateCardCss(anim, variants, texts);

  return `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${texts.date} - ${texts.buongiorno} ${texts.subGreeting}</title>
  
  <!-- Font Google per tipografia 3D e calligrafia -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Great+Vibes&family=Lilita+One&family=Fredoka:wght@600;700;800&family=Outfit:wght@500;700;900&display=swap" rel="stylesheet">

  <!-- ==========================================================================
       TUTTO IL CSS È RACCHIUSO QUI NEL TAG STYLE:
       Nessuna IA, nessun framework, nessun file esterno separato.
       Puro CSS per controllo totale su ogni elemento grafico e animazione.
       ========================================================================== -->
  <style>
    /* RESET DI BASE */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #18191f;
      background-image: 
        radial-gradient(circle at 20% 20%, rgba(255, 107, 107, 0.08) 0%, transparent 40%),
        radial-gradient(circle at 80% 80%, rgba(78, 205, 196, 0.08) 0%, transparent 40%),
        linear-gradient(#141418 1px, transparent 1px),
        linear-gradient(90deg, #141418 1px, transparent 1px);
      background-size: 100% 100%, 100% 100%, 32px 32px, 32px 32px;
      font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
      padding: 24px;
      overflow-x: hidden;
    }

${css}
  </style>
</head>
<body>

  <!-- CARD PRINCIPALE -->
  <div class="card-canvas">
    <div class="card-ambient-glow"></div>

${generateDateHtml(texts)}

${generateTitleHtml(texts)}

${generateSubtitleHtml(texts)}

    <!-- CUORI FLUTTUANTI NEL CENTRO -->
    <div class="live-heart-3d h-mid-l"><div class="live-heart-specular"></div></div>
    <div class="live-heart-3d h-mid-c"><div class="live-heart-specular"></div></div>
    <div class="live-heart-3d h-mid-r"><div class="live-heart-specular"></div></div>

    <!-- 4. PALCO DEI PERSONAGGI -->
    <div class="live-stage-characters">
      <div class="live-floor-reflection"></div>

      <!-- PERSONAGGIO 1: EMOJI PERSONALIZZABILE -->
      <div class="live-emoji-figure">
        <div class="live-emoji-shadow"></div>
        <div class="live-emoji-leg leg-l"></div>
        <div class="live-emoji-leg leg-r"></div>
        <div class="live-emoji-foot foot-l"></div>
        <div class="live-emoji-foot foot-r"></div>
        <div class="live-emoji-arm-l"></div>

        <div class="live-emoji-head">
          <div class="live-emoji-specular"></div>

          ${getAccessoryHtml(variants.accessory)}

          <!-- Sopracciglia -->
          <div class="live-eyebrow eb-l"></div>
          <div class="live-eyebrow eb-r"></div>

          ${getEyesHtml(variants.eyes)}

          <!-- Guance -->
          <div class="live-blush b-l"></div>
          <div class="live-blush b-r"></div>

          ${getMouthHtml(variants.mouth)}
        </div>
      </div>

      <!-- PERSONAGGIO 2: OGGETTO COMPAGNO SELEZIONATO -->
      ${getCompanionHtml(variants.companion)}
    </div>

    <!-- 5. SCRITTA "My angel" -->
    <div class="live-footer-row">
      <div class="live-sparkle s-md sp-bl"></div>
      <span class="live-my-angel">${texts.signature}</span>
    </div>

    <div class="live-sparkle s-sm sp-br"></div>
  </div>

</body>
</html>`;
}
