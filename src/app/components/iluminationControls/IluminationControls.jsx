import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import DefaultControl from '../defaultControl/DefaultControl';
import { CircleHalf, Palette, Sun } from '@phosphor-icons/react';

const StyleControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32.1rem;
  gap: 8.2rem;
`;

export default function IluminationControls({setColorPreview}) {
  const [hue, setHue] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);

    useEffect(() => {
        setColorPreview({Hue: hue, Brightness: brightness, Contrast: contrast})
    }, [hue, brightness, contrast]);


  return (
    <StyleControls>
      <div className="hue">
        <DefaultControl elemento="hue" icone={<Palette weight="thin" />} valor={hue} setValor={setHue} />
      </div>
      <div className="brightness">
        <DefaultControl elemento="brightness" icone={<Sun weight="thin" />} valor={brightness} setValor={setBrightness} />
      </div>
      <div className="contrast">
        <DefaultControl elemento="contrast" icone={<CircleHalf weight="thin" />} valor={contrast} setValor={setContrast} />
      </div>
    </StyleControls>
  );
}
