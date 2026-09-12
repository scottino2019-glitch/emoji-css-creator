import React from 'react';
import { CardTextConfig, LayerVisibility, AnimationSettings, CardVariantConfig } from '../types';
import { generateCardCss } from '../data/cssGenerators';
import {
  CharacterAccessory,
  CharacterEyes,
  CharacterMouth,
  CompanionObjectRenderer,
} from './characterComponents';

interface CardArtProps {
  texts: CardTextConfig;
  layers: LayerVisibility;
  anim: AnimationSettings;
  variants: CardVariantConfig;
  scale?: number;
  burstKissKey?: number;
  burstSteamKey?: number;
}

export const CardArt: React.FC<CardArtProps> = ({
  texts,
  layers,
  anim,
  variants,
  scale = 1,
  burstKissKey = 0,
  burstSteamKey = 0,
}) => {
  const css = generateCardCss(anim, variants);

  return (
    <div
      className="flex items-center justify-center p-2 sm:p-4 select-none"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
        transition: 'transform 0.2s ease',
      }}
    >
      {/* INIEZIONE DIRETTA DELLO STYLE TAG (PURO CSS) */}
      <style>{css}</style>

      {/* LA CARD ARTISTICA */}
      <div className="live-card">
        <div className="live-card-glow" />

        {/* 1. DATA PERSONALIZZABILE */}
        {layers.texts && (
          <div className="live-date-row">
            {layers.sparkles && <div className="live-sparkle s-md sp-tl1" />}
            {layers.sparkles && <div className="live-sparkle s-sm sp-tl2" />}
            <span className="live-date-text">{texts.date}</span>
            {layers.sparkles && <div className="live-sparkle s-md sp-tr1" />}
            {layers.sparkles && <div className="live-sparkle s-sm sp-tr2" />}
          </div>
        )}

        {/* 2. TITOLO 3D "BUONGIORNO" CON CUORE SULLA I */}
        {layers.texts && (
          <div className="live-buongiorno-wrapper">
            {layers.hearts && (
              <div className="live-heart-3d h-top-l">
                <div className="live-heart-specular" />
              </div>
            )}

            <span className="live-letter-3d let-b" data-letter="B">B</span>
            <span className="live-letter-3d let-u" data-letter="U">U</span>
            <span className="live-letter-3d let-o1" data-letter="O">O</span>
            <span className="live-letter-3d let-n1" data-letter="N">N</span>
            <span className="live-letter-3d let-g" data-letter="G">G</span>

            {/* Lettera I animata con Cuore al posto del puntino */}
            <div className="live-let-i-container">
              <div className="live-heart-on-i" />
              <span className="live-let-i-stem">I</span>
            </div>

            <span className="live-letter-3d let-o2" data-letter="O">O</span>
            <span className="live-letter-3d let-r" data-letter="R">R</span>
            <span className="live-letter-3d let-n2" data-letter="N">N</span>
            <span className="live-letter-3d let-o3" data-letter="O">O</span>

            {layers.hearts && (
              <div className="live-heart-3d h-top-r">
                <div className="live-heart-specular" />
              </div>
            )}
          </div>
        )}

        {/* 3. SOTTOTITOLO CON GRADIENTE ARCOBALENO SHIFT "BUON SABATO" */}
        {layers.texts && (
          <div className="live-subtitle-wrapper">
            {layers.sparkles && <div className="live-sparkle s-sm sp-ml1" />}
            <h2 className="live-sabato-text">{texts.subGreeting}</h2>
            {layers.sparkles && <div className="live-sparkle s-sm sp-bc" />}
          </div>
        )}

        {/* CUORI 3D FLUTTUANTI NEL CENTRO */}
        {layers.hearts && (
          <>
            <div className="live-heart-3d h-mid-l">
              <div className="live-heart-specular" />
            </div>
            <div className="live-heart-3d h-mid-c">
              <div className="live-heart-specular" />
            </div>
            <div className="live-heart-3d h-mid-r">
              <div className="live-heart-specular" />
            </div>
          </>
        )}

        {/* 4. PALCO DEI PERSONAGGI */}
        <div className="live-stage-characters">
          <div className="live-floor-reflection" />

          {/* PERSONAGGIO 1: EMOJI VETTORIALE 3D CON VARIANTI */}
          {layers.emoji && (
            <div className="live-emoji-figure">
              <div className="live-emoji-shadow" />
              <div className="live-emoji-leg leg-l" />
              <div className="live-emoji-leg leg-r" />
              <div className="live-emoji-foot foot-l" />
              <div className="live-emoji-foot foot-r" />
              <div className="live-emoji-arm-l" />

              <div className="live-emoji-head">
                <div className="live-emoji-specular" />

                {/* ACCESSORIO SELEZIONATO */}
                <CharacterAccessory variant={variants.accessory} />

                {/* SOPRACCIGLIA */}
                <div className="live-eyebrow eb-l" />
                <div className="live-eyebrow eb-r" />

                {/* OCCHI SELEZIONATI */}
                <CharacterEyes variant={variants.eyes} />

                {/* GUANCE ROSATE */}
                <div className="live-blush b-l" />
                <div className="live-blush b-r" />

                {/* BOCCA SELEZIONATA */}
                <CharacterMouth variant={variants.mouth} burstKissKey={burstKissKey} />
              </div>
            </div>
          )}

          {/* PERSONAGGIO 2: OGGETTO COMPAGNO SELEZIONATO */}
          {layers.coffee && (
            <CompanionObjectRenderer
              variant={variants.companion}
              showSteam={layers.steam}
              burstSteamKey={burstSteamKey}
            />
          )}
        </div>

        {/* 5. SCRITTA SIGNATURE CORSIVA "My angel" */}
        {layers.texts && (
          <div className="live-footer-row">
            {layers.sparkles && <div className="live-sparkle s-md sp-bl" />}
            <span className="live-my-angel">{texts.signature}</span>
          </div>
        )}

        {layers.sparkles && <div className="live-sparkle s-sm sp-br" />}
      </div>
    </div>
  );
};
