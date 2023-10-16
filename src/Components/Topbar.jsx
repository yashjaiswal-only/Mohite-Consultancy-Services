import React from 'react'
import styled from 'styled-components'
import logo from '../Assests/logo.png'
import down from '../Assests/down.svg'

const Container=styled.div`
  width:100%;
  height: 85px;
  position: absolute;
  top:0;
  padding:1rem 4rem;
  box-sizing:border-box;
  display: flex;
  justify-content: space-between;
  z-index:1000;
`
const Left=styled.div`
  width:60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span{
    display: flex;
    align-items: center;
    color: var(--Black, #000);
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
  }
`
const Right=styled.div`
  display: flex;
  width:20%;
  display: flex;
  justify-content: space-between;
`
const Button=styled.button`
  border-radius: 10px;
  padding: 10px 20px;
  min-width: 100px;
  background-color: ${props=>props.login?'inherit':'#0076CE'};
  color: ${props=>props.login?'#0076CE':'#fff'};
  border: 1.5px solid #0076CE;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
  cursor: pointer;
`
const Topbar = () => {
  return (
    <Container>
      <Left>
        <span>
          <img src={logo}/>
        </span>
        <span>
          Solutions
          <img src={down}/>
        </span>
        <span>
          Features
          <img src={down}/>
        </span>
        <span>
          Blogs
        </span>
        <span>
          About
          <img src={down}/>
        </span>
      </Left>
      <Right>
        <Button login={true}>Login</Button>
        <Button >Register</Button>
      </Right>
    </Container>
  )
}

export default Topbar
