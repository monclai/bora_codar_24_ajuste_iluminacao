"use client"
import { styled } from 'styled-components';

const ControlStyle = styled.div`

    display: flex;
    align-items: center;
    gap: 1.6rem;

   i{
        font-size: 2.4rem;
    }

    div{
        border-radius: 1.2rem;
        display: flex;
        align-items: center;
        background-color: #fff;
        /* height: .5rem; */
    }

    .hue{
        background: linear-gradient(90deg, #F00 5.21%, #FF8A00 16.48%, #FFE600 27.74%, #14FF00 39.35%, #00A3FF 49.37%, #0500FF 61.18%, #AD00FF 72.26%, #FF00C7 83.53%, #F00 94.61%);
    }

    input[type="range"]{
        width: 28.1rem;
        height: .5rem;
        appearance: none;
        background-color: transparent;
    }

    input[type="range"]::-webkit-slider-thumb{
        width: 1.8rem;
        height: 1.8rem;
        border: .2rem solid #FFF;
        border-radius: 50%;
        appearance: none;
        background-color: transparent;
        box-shadow: 0px 6.666666507720947px 10px 0px rgba(31, 41, 55, 0.10), 0px 3.3333332538604736px 6.666666507720947px 0px rgba(31, 41, 55, 0.06);
        cursor: pointer;
    }

    .hue>input[type="range"]::-webkit-slider-thumb{
        background: #8B03FB;
    }

    .others>input[type="range"]::-webkit-slider-thumb{
        background: #151515;
    }

`;

export default function DefaultControl({ elemento, icone, valor, setValor }) {

  const handleChange = (event) => {
    setValor(event.target.value);
  };

  return (
    <ControlStyle>
      <i>{icone}</i>
      <div className={elemento === "hue" ? "hue" : 'others' }>
        <input
          type="range"
          name={elemento}
          id={`${elemento}-slider`}
          min="0"
          max={elemento === "hue" ? 360 : 100}
          step="1"
          value={valor}
          onChange={handleChange}
        />
      </div>
    </ControlStyle>
  );
}
