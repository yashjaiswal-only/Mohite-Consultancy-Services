import React from 'react'
import styled from 'styled-components'
import Matrix from './Matrix'

const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    box-sizing:border-box;
    >p{
        width:100%;
        color: var(--fs-search-text, #000);
        text-align: center;
        font-family: Poppins;
        font-size: 65px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom:0;
        >span{
            background: linear-gradient(90deg, #0076CE 43.35%, #9400D3 65.11%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`
const Wrapper=styled.div`
    width:100%;
    height:757px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    fill: var(--fs-search-banner-blue, #DDF3FF);
    >span{
        color: var(--fs-search-text, #000);
        text-align: center;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 38px; /* 158.333% */
    }
    svg{
        position: absolute;
        top:0;
    }
    section{
        height: 200px;
        position: absolute;
        bottom:0;
        width:100%;
        background: linear-gradient(360deg, #FAFBFC 11.67%, rgba(250, 251, 252, 0.08) 100%);
    }
`
const Terms=styled.div`
    width:90%;
    color: var(--fs-search-text, #000);
    font-family: Poppins;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 152.941% */
    z-index:1000;
    span{
        font-weight: 700;
    }
`
const Services = () => {
  return (
    <Container>
      <p>
        Want to <span>Join</span> Us? 
      </p>
    <Wrapper>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="757" viewBox="0 0 90% 757" fill="none">
        <path d="M0.107497 567.266C-13.6344 640.276 0.107497 757 0.107497 757H1536V0C1536 0 1478 47.0138 1451 68C1341.67 152.976 1246.29 92.2517 1105.5 116C957.033 141.043 919.752 257.324 770.187 276.037C632.645 293.245 557.716 199.916 420.345 218.238C255.102 240.279 134.274 284.651 52.3705 418.468C19.8 471.682 11.4329 507.095 0.107497 567.266Z" fill="#DDF3FF"/>
        </svg>
        <section/>
        <span>To remain with us, it is essential that you diligently follow the steps provided</span>
        <Matrix/>
        <Terms>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span>every day</span> until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</Terms>
    </Wrapper>
    </Container>
  )
}

export default Services
