import React from 'react'
import styled from 'styled-components'
import picture1 from '../Assests/Picture1.png'
import picture2 from '../Assests/Picture2.png'
import picture3 from '../Assests/Picture3.png'
const Container=styled.div`
  width:100%;
  height:100vh;
  display: flex;
  align-items: center;
  `
const Left=styled.div`
  width:60%;
  z-index:100;
  margin:0 0 0 4rem;
  background-color: none;
  opacity:1;
  display: flex;
  flex-direction: column;
  >p{
    color: var(--fs-search-text, #000);
    color:black;
    font-family: Poppins;
    font-size: 65px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px;
    margin:0;
    span{
      background: linear-gradient(91deg, #0076CE 26.63%, #9400D3 65.81%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  >section{
    margin:1rem 0;
    color: #616161;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Open Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    >span{
      font-weight:700;
    }
  }
`
const Input=styled.div`
  display: flex;
  width:100%;
  height: 55px;
  border-radius: 10px;
  border: 1px solid #BFBFBF;
  background: #FFF;
  display: flex;
  justify-content: space-between;
  input{
    width:100%;
    /* margin:0 0 0 2rem; */
    padding:1rem 2rem;
    outline:none;
    color: #AEB0B4;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border:none;
    border-radius: 10px;
  }
  button{
    cursor: pointer;
    border-radius: 10px;
    background: #0076CE;
    width: 25%;
    height: 100%;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border:none;
  }
`
const Right=styled.div`
  display: flex;
  margin:0 2rem;
  height:60%;
  position: relative;
`
const Img=styled.img`
  height:80%;
  margin:${props=>props.down===true?'4rem 0.5rem 0rem 0.5rem':'0 0.5rem 4rem 0.5rem'};
`
const Hero = () => {
  return (
    <Container>
      <Left>
        <p>
          Find <span>Partners</span> (CAs) available online
        </p>
        <section>
          <span>CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support
        </section>
        <Input>
          <input placeholder='Search by name'/>
          <button>Search</button>
        </Input>
      </Left>
      <Right>
        <Img src={picture1} down={true}/>
        <Img src={picture2} down={false}/>
        <Img src={picture3} down={true}/>
      </Right>
    </Container>
  )
}

export default Hero
