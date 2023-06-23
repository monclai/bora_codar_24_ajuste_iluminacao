"use client"
import React, { useState } from 'react'
import Preview from './components/preview/preview'
import IluminationControls from './components/iluminationControls/IluminationControls'
import { styled } from 'styled-components'

const Main = styled.main`
    width: 43rem;
    height: 93.2rem;
    background: #151515;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5.2rem;
    position: relative;
    overflow: hidden;


    .title{
        font-size: 3.2rem;
        line-height: 3.8rem;
        text-align: center;
        margin: 35rem 0 10rem;
    }

    .preview{
        position: absolute;
        top: -50rem;
    }
`;

export default function Index() {
    const [colorPreview, setColorPreview] = useState({Hue: 0, Brightness: 100, Contrast: 100});

    return (
        <Main>
            <div className="preview">
                <Preview color={colorPreview}/>
            </div>
            <span className='title'>Ajustes de iluminação</span>
            <IluminationControls setColorPreview={setColorPreview}/>
        </Main>
    )
}
