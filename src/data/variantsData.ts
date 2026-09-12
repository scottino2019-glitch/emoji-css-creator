import { EyeVariant, MouthVariant, AccessoryVariant, CompanionObjectVariant } from '../types';

export interface VariantMeta<T extends string> {
  id: T;
  name: string;
  badge: string;
  description: string;
  icon: string;
  cssHighlights: string[];
  snippet: string;
}

export const EYE_VARIANTS: VariantMeta<EyeVariant>[] = [
  {
    id: 'wink',
    name: 'Occhiolino con Ciglia (Classico)',
    badge: 'Originale',
    description: 'Occhiolino espressivo sinistro con arco scuro e 4 ciglia orientate + occhio destro cartoon aperto con pupilla marrone e doppi riflessi speculari.',
    icon: '😉',
    cssHighlights: ['border-bottom arc', 'orientamento ciglia 10-60deg', 'sclera con radial-gradient', 'doppio specular shine'],
    snippet: `/* Occhiolino Sinistro */
.live-wink-arc {
  border-bottom: 5.5px solid #2d1400;
  border-radius: 0 0 50% 50% / 0 0 100% 100%;
}
/* Occhio Destro Aperto Cartoon */
.live-sclera {
  background: radial-gradient(circle at 45% 45%, #ffffff 0%, #f0f0f5 75%, #d8d8e2 100%);
  border-radius: 50%;
  box-shadow: inset 0 3px 5px rgba(0,0,0,0.25);
}`,
  },
  {
    id: 'heartEyes',
    name: 'Occhi a Cuoricino 3D (Innamorato)',
    badge: 'Romantico',
    description: 'Entrambi gli occhi sono cuoricini tridimensionali rosso rubino che pulsano d\'amore con riflessi lucidi speculari superiori.',
    icon: '😍',
    cssHighlights: ['cuori 3D ruotati -45deg', 'pulsazione keyframe batty', 'riflesso specular superiore'],
    snippet: `/* Occhi a Cuore 3D */
.live-heart-eye {
  position: absolute;
  width: 32px;
  height: 32px;
  background: radial-gradient(circle at 35% 35%, #ff4d6d 0%, #e60026 55%, #8b0014 100%);
  transform: rotate(-45deg);
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(220, 20, 60, 0.4);
  animation: liveHeartPulse 1.8s ease-in-out infinite;
}`,
  },
  {
    id: 'happyCurved',
    name: 'Occhietti Sorridenti Kawaii (^ ^)',
    badge: 'Tenero',
    description: 'Doppi archi superiori sottili e ricurvi all\'insù in puro stile anime felice, con ciglia laterali e guance extra arrossate.',
    icon: '😊',
    cssHighlights: ['doppio arco border-top', 'doppia curvatura simmetrica', 'guancette glow amplificate'],
    snippet: `/* Occhi Felici Anime ad Arco */
.live-happy-eye-arc {
  position: absolute;
  width: 34px;
  height: 22px;
  border-top: 5.5px solid #2d1400;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
}`,
  },
  {
    id: 'sunglasses',
    name: 'Occhiali da Sole Cool Chic',
    badge: 'Glamour',
    description: 'Occhiali da sole scuri con lenti a goccia riflettenti, montatura nera sagomata in CSS, ponte centrale dorato e riflessi diagonali di luce.',
    icon: '😎',
    cssHighlights: ['lenti scure a specchio', 'riflesso bianco inclinato 30deg', 'ponte metallico centrale'],
    snippet: `/* Occhiali da Sole Neri */
.live-sunglasses-frame {
  display: flex;
  align-items: center;
  gap: 6px;
}
.live-sunglass-lens {
  width: 46px;
  height: 36px;
  background: linear-gradient(145deg, #2b2b36 0%, #111116 100%);
  border-radius: 6px 6px 20px 20px;
  border: 3px solid #111;
  overflow: hidden;
}`,
  },
  {
    id: 'starry',
    name: 'Occhi a Stella Scintillante',
    badge: 'Magico',
    description: 'Pupille a forma di stella a 8 punte dorata brillante con bagliore che ruota lentamente, perfetti per esprimere meraviglia ed entusiasmo.',
    icon: '🤩',
    cssHighlights: ['clip-path: polygon stella a 8 punte', 'rotazione lenta con bagliore aureo', 'riflesso bianco lucido'],
    snippet: `/* Stelle Anime Scintillanti */
.live-star-eye {
  width: 38px;
  height: 38px;
  background: radial-gradient(circle, #ffffff 20%, #ffd700 50%, #ff8f00 90%);
  clip-path: polygon(50% 0%, 63% 37%, 100% 50%, 63% 63%, 50% 100%, 37% 63%, 0% 50%, 37% 37%);
  filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.8));
}`,
  },
  {
    id: 'sleepyCute',
    name: 'Occhi Sonnecchiosi del Mattino',
    badge: 'Risveglio',
    description: 'Palpebre socchiuse con lunghe ciglia sognanti verso il basso e una piccola stellina sbadiglio che fluttua dolcemente.',
    icon: '🥺',
    cssHighlights: ['palpebre inclinate', 'ciglia allungate morbide', 'atmosfera tenera del primo mattino'],
    snippet: `/* Occhi Sognanti del Risveglio */
.live-sleepy-eye {
  width: 36px;
  height: 18px;
  border-bottom: 5px solid #3d1b00;
  border-radius: 0 0 50% 50%;
  transform: rotate(4deg);
}`,
  },
];

export const MOUTH_VARIANTS: VariantMeta<MouthVariant>[] = [
  {
    id: 'kissLips',
    name: 'Bacetto 3D con Cuore Volante',
    badge: 'Originale',
    description: 'Labbra a bacio 3D polpose rosse formate da labbro superiore a cuore, labbro inferiore arrotondato e cuoricino rosso che decolla in volo.',
    icon: '💋',
    cssHighlights: ['doppio lobo labiale', 'riflesso 3D lucido', 'animazione traiettoria di volo del cuoricino'],
    snippet: `/* Bocca a Bacetto 3D */
.live-kiss-mouth {
  position: absolute;
  width: 38px;
  height: 38px;
  transform: rotate(-8deg);
  filter: drop-shadow(2px 4px 6px rgba(160, 0, 30, 0.4));
}`,
  },
  {
    id: 'openSmile',
    name: 'Sorrisone Radioso con Denti Bianchi',
    badge: 'Allegro',
    description: 'Grande sorriso aperto stile cartoon con arco di denti bianchi lucenti in alto e lingua rosa sfumata in basso.',
    icon: '😄',
    cssHighlights: ['cavità orale profonda sfumata', 'fascia denti bianchi con riflesso', 'lingua rosa convessa'],
    snippet: `/* Sorrisone Aperto con Denti */
.live-open-smile {
  width: 58px;
  height: 38px;
  background: #380d00;
  border-radius: 4px 4px 50% 50% / 4px 4px 100% 100%;
  overflow: hidden;
  border: 2px solid #5a1d00;
}`,
  },
  {
    id: 'playfulTongue',
    name: 'Linguaccia Birichina & Sorrisetto',
    badge: 'Giocoso',
    description: 'Sorrisetto furbo con una simpatica linguetta rosa con solco centrale che spunta sbarazzina di lato.',
    icon: '😋',
    cssHighlights: ['arco sorridente', 'linguetta inclinata con solco centrale', 'effetto kawaii birichino'],
    snippet: `/* Linguaccia Birichina */
.live-tongue-sticking {
  width: 24px;
  height: 28px;
  background: radial-gradient(circle at 50% 30%, #ff6b8b 0%, #ff3366 70%, #cc0033 100%);
  border-radius: 0 0 14px 14px;
  transform: rotate(15deg);
}`,
  },
  {
    id: 'catNeko',
    name: 'Boccina a Gattino Anime (:3)',
    badge: 'Kawaii',
    description: 'Classica sagoma a "w" o musetto di gattino giapponese formata da due archi arrotondati uniti al centro con fossette dolci.',
    icon: '😺',
    cssHighlights: ['doppio arco speculare :3', 'spessore 4px arrotondato', 'look pulito e delicato'],
    snippet: `/* Musetto a Gattino :3 */
.live-cat-mouth {
  display: flex;
  align-items: center;
  justify-content: center;
}
.live-cat-half {
  width: 18px;
  height: 14px;
  border-bottom: 4.5px solid #2d1400;
  border-radius: 0 0 50% 50%;
}`,
  },
  {
    id: 'blushingO',
    name: 'Boccina Tonda a "O" Sorpresa/Dolce',
    badge: 'Affettuoso',
    description: 'Piccola bocca a "o" circolare con profondità scura all\'interno, ideale per un\'espressione di dolcezza e stupore.',
    icon: '😮',
    cssHighlights: ['bocca circolare 3D', 'sfumatura interna radiale profonda', 'contorno morbido'],
    snippet: `/* Boccina a O */
.live-blushing-o {
  width: 22px;
  height: 24px;
  background: radial-gradient(circle at 45% 45%, #2a0800 0%, #441100 70%, #772200 100%);
  border-radius: 50%;
  border: 2px solid #5a1d00;
}`,
  },
];

export const ACCESSORY_VARIANTS: VariantMeta<AccessoryVariant>[] = [
  {
    id: 'flowerPin',
    name: 'Fiorellino Arcobaleno a 6 Petali',
    badge: 'Originale',
    description: 'Fiore spilla con 6 petali ruotati a 60° con colori vivaci arcobaleno (rosa, ciano, verde, giallo, arancio, viola) e pistillo d\'oro in rilievo.',
    icon: '🌸',
    cssHighlights: ['6 petali ruotati a 60° step', 'pistillo sferico dorato', 'sfumature vivaci'],
    snippet: `/* Fiorellino Arcobaleno */
.live-flower-pin {
  width: 48px;
  height: 48px;
  filter: drop-shadow(0 4px 6px rgba(100, 30, 0, 0.4));
}`,
  },
  {
    id: 'royalCrown',
    name: 'Coroncina Reale Dorata con Rubino',
    badge: 'Prestigio',
    description: 'Corona principesca a 3 punte forgiata in oro massiccio sfumato, perle bianche sulle punte e un rubino sfaccettato al centro.',
    icon: '👑',
    cssHighlights: ['punte auree geometriche', 'perle alle sommità', 'rubino rosso centrale incastonato'],
    snippet: `/* Coroncina Dorata Reale */
.live-royal-crown {
  width: 58px;
  height: 40px;
  background: linear-gradient(180deg, #ffd700 0%, #f59e0b 60%, #b45309 100%);
  clip-path: polygon(0% 100%, 0% 30%, 25% 65%, 50% 10%, 75% 65%, 100% 30%, 100% 100%);
  filter: drop-shadow(0 4px 8px rgba(180, 83, 9, 0.5));
}`,
  },
  {
    id: 'partyHat',
    name: 'Cappellino Festoso con Pon-Pon',
    badge: 'Festa',
    description: 'Cappellino conico festoso a righe diagonali colorate, inclinato con grazia sulla testa e rifinito con un pon-pon dorato soffice in cima.',
    icon: '🥳',
    cssHighlights: ['cono colorato a righe', 'rotazione allegra a 20deg', 'pon-pon morbido sfumato'],
    snippet: `/* Cappellino Festa */
.live-party-cone {
  width: 38px;
  height: 52px;
  background: repeating-linear-gradient(45deg, #ff007f, #ff007f 8px, #00e5ff 8px, #00e5ff 16px, #ffd700 16px, #ffd700 24px);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}`,
  },
  {
    id: 'headset',
    name: 'Cuffie Musica Stereo del Buongiorno',
    badge: 'Ritmo',
    description: 'Archetto auricolare ergonomico che avvolge la testolina dell\'emoji con due morbidi padiglioni stereo color ciano e magenta.',
    icon: '🎧',
    cssHighlights: ['archetto superiore curvo', 'doppi padiglioni stereo con cuscinetti', 'accenti al neon moderni'],
    snippet: `/* Cuffie Stereo */
.live-headset-band {
  width: 170px;
  height: 90px;
  border-top: 8px solid #0284c7;
  border-radius: 50% 50% 0 0;
}`,
  },
  {
    id: 'redRibbon',
    name: 'Fiocco Satinato Rosso Elegante',
    badge: 'Raffinato',
    description: 'Grande fiocco in raso rosso a doppio occhiello volumetrico con nodo centrale rotondo e nastrini svolazzanti.',
    icon: '🎀',
    cssHighlights: ['doppio cappio volumetrico', 'nodo centrale lucido', 'nastrini svolazzanti'],
    snippet: `/* Fiocco Elegante */
.live-ribbon-loop-l, .live-ribbon-loop-r {
  width: 24px;
  height: 22px;
  background: radial-gradient(circle at 35% 35%, #ff4d6d, #b91c1c);
  border-radius: 50% 50% 10% 50%;
}`,
  },
  {
    id: 'angelHalo',
    name: 'Aureola Angelica Dorata Brillante',
    badge: 'Speciale',
    description: 'Aureola eterea dorata e fluttuante sospesa sopra la testa, omaggio perfetto alla scritta "My angel" in calce alla cartolina.',
    icon: '😇',
    cssHighlights: ['anello ellittico dorato cavo', 'fluttuazione morbida keyframes', 'bagliore soffuso 0 0 12px gold'],
    snippet: `/* Aureola Dorata */
.live-angel-halo {
  width: 80px;
  height: 24px;
  border: 5px solid #ffd700;
  border-radius: 50%;
  box-shadow: 0 0 14px rgba(255, 215, 0, 0.8), inset 0 0 8px rgba(255, 215, 0, 0.5);
  animation: liveHaloFloat 3s ease-in-out infinite;
}`,
  },
  {
    id: 'none',
    name: 'Nessun Accessorio (Minimalista)',
    badge: 'Pulito',
    description: 'Testolina dell\'emoji priva di copricapi o spille, per mettere in risalto solo il viso e le espressioni.',
    icon: '✨',
    cssHighlights: ['sfera essenziale', 'look puro'],
    snippet: `/* Nessun accessorio attivo */`,
  },
];

export const COMPANION_VARIANTS: VariantMeta<CompanionObjectVariant>[] = [
  {
    id: 'coffeeCup',
    name: 'Tazzina Kawaii di Caffè Fumante',
    badge: 'Originale',
    description: 'Tazzina in porcellana bianca con piattino, espresso scuro con crema vellutata, faccina sorridente kawaii e vapore caldo che forma un cuore.',
    icon: '☕',
    cssHighlights: ['corpo porcellana sfumato', 'crema espresso dorata', 'volute di vapore a cuore', 'faccina kawaii con linguetta'],
    snippet: `/* Tazzina Caffè & Vapore a Cuore */
.live-cup-body {
  width: 154px;
  height: 160px;
  background: linear-gradient(135deg, #ffffff 0%, #f0f3f8 65%, #dce3ed 100%);
  border-radius: 12px 12px 65px 65px / 12px 12px 90px 90px;
}
.live-steam-heart {
  border: 6px solid rgba(255, 255, 255, 0.65);
  filter: blur(4px) drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
}`,
  },
  {
    id: 'croissant',
    name: 'Cornetto Caldo & Dorato Sfogliato',
    badge: 'Colazione',
    description: 'Cornetto fragrante appena sfornato con sfogliatura dorata lucida di glassa al miele, piattino da bar, faccina golosa e scie di profumo fumante.',
    icon: '🥐',
    cssHighlights: ['sagoma a mezzaluna sfogliata', 'glassa dorata caramellata', 'scie aromatiche dorate fluttuanti'],
    snippet: `/* Cornetto Sfogliato al Miele */
.live-croissant-body {
  width: 190px;
  height: 120px;
  background: radial-gradient(ellipse at 45% 35%, #fed7aa 0%, #f97316 45%, #b45309 80%, #78350f 100%);
  border-radius: 45% 45% 50% 50% / 60% 60% 40% 40%;
  box-shadow: inset -4px -8px 15px rgba(80, 30, 0, 0.5), 0 12px 25px rgba(80, 40, 0, 0.3);
}`,
  },
  {
    id: 'birthdayCupcake',
    name: 'Muffin / Cupcake con Candelina Accesa',
    badge: 'Festa',
    description: 'Dolce tortina con pirottino scanalato, morbida glassa rosa alla fragola con confettini colorati e candelina accesa con fiamma dorata che ondeggia.',
    icon: '🧁',
    cssHighlights: ['pirottino scanalato', 'vortice di glassa volumetrica', 'candelina bicolore con fiamma viva pulsante'],
    snippet: `/* Cupcake con Glassa e Candelina */
.live-cupcake-frosting {
  width: 160px;
  height: 100px;
  background: radial-gradient(circle at 40% 30%, #fbcfe8 0%, #f472b6 60%, #db2777 100%);
  border-radius: 50% 50% 40% 40%;
}
.live-candle-flame {
  background: radial-gradient(ellipse at 50% 80%, #ffffff 0%, #fde047 35%, #f97316 75%, transparent 100%);
  animation: liveFlameFlicker 1.2s ease-in-out infinite;
}`,
  },
  {
    id: 'flowerBouquet',
    name: 'Mazzo di Fiori Freschi & Rose Rosse',
    badge: 'Gentilezza',
    description: 'Elegante bouquet avvolto in carta kraft da fiorista con nastro e fiocco rosa, boccioli di rose rosse vellutate e foglioline verdi profumate.',
    icon: '💐',
    cssHighlights: ['cono carta kraft sfumato', 'rose a petali concentrici', 'nastro con fiocco legato'],
    snippet: `/* Bouquet di Rose e Fiori */
.live-bouquet-wrap {
  width: 150px;
  height: 180px;
  background: linear-gradient(135deg, #d7ba89 0%, #b89762 60%, #8c6b38 100%);
  clip-path: polygon(10% 0%, 90% 0%, 55% 100%, 45% 100%);
}`,
  },
  {
    id: 'teaMug',
    name: 'Tazza di Tè al Limone & Menta',
    badge: 'Relax',
    description: 'Tazza in vetro trasparente con infuso dorato ambrato, fetta di limone fresco adagiata sul bordo, fogliolina di menta verde e bustina con cuoricino.',
    icon: '🍵',
    cssHighlights: ['vetro trasparente con gradiente ambra', 'fetta di limone a spicchi radiali', 'fogliolina di menta e targhetta a cuore'],
    snippet: `/* Tazza di Tè con Limone */
.live-tea-liquid {
  background: linear-gradient(180deg, rgba(234, 179, 8, 0.7) 0%, rgba(180, 83, 9, 0.85) 100%);
}
.live-lemon-slice {
  width: 54px;
  height: 54px;
  background: radial-gradient(circle, #fef08a 0%, #eab308 80%, #ca8a04 100%);
  border-radius: 50%;
}`,
  },
];
