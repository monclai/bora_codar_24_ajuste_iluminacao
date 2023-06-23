import React from 'react'
import { styled } from 'styled-components'

const StyledPreview = styled.div`
        width: 84.6rem;
        height: 84.6rem;
        border-radius: 50%;
        box-shadow: ${({bxCor})=> bxCor};
        background-color: ${({cor})=> cor};
        filter: ${({ brilho, contraste }) => `${brilho} ${contraste}`};
`;

export default function Preview({color}) {

    const BgColor = `hsl(${color.Hue}, 50%, 50%)`;
    const BoxColor = `0px 0px 53px 13px ${BgColor}`
    const brightnessColor = `brightness(${color.Brightness}%)`
    const contrastColor = `contrast(${color.Contrast}%)`;

  return (
    <StyledPreview cor={BgColor} bxCor={BoxColor} brilho={brightnessColor} contraste={contrastColor}>

    </StyledPreview>
  )
}
