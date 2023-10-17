import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../Assests/logo.png'
import down from '../Assests/down.svg'
import close from '../Assests/close.svg'
import menu from '../Assests/menu.png'
import { useNavigate } from 'react-router-dom'
import mobile, { tab } from '../responsive'

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
  ${tab({
    left:'0',
    display:'flex',
    flexDirection:'column',
    height:'100vh',
    backgroundColor:'#fafbfc',
    width:'60vw'
  })}
  ${mobile({
    width:'100vw'
  })}
  @media only screen and (max-width:1000px){
    left:${props=>props.show?'0':'-100%'};
    transition: left 0.5s;
  }
`
const Left=styled.div`
  width:60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  >img{
    position: absolute;
    top:0;
    right:0;
    width:50px;
    cursor: pointer;
    display:none;
    ${tab({
      display:'block'
    })}
    ${mobile({
        width:'40px'
      })}
  }
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
    ${tab({
      fontSize:'28px'
    })}
  }
  ${tab({
    flexDirection:'column',
    width:'100%',
    height:'60vh',
  })}
`
const Right=styled.div`
  display: flex;
  width:25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${tab({
    flexDirection:'column',
    width:'100%',
    height:'30vh',
  })}
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
  ${tab({
    width:'max-content'
  })}
`
const Menu=styled.img`
  cursor: pointer;
  width:80px;
  left:1rem;
  position: absolute;
  display:none;
  ${tab({
    display:'block'    
  })}
  ${mobile({
    width:'40px'
  })}
`
const Topbar = () => {
  const [show,setShow]=useState(false)
  const navigate=useNavigate();
  return (
    <>
    <Menu src={menu} onClick={()=>setShow(true)}/>
    <Container show={show}>
      <Left>
        {show?<img src={close} onClick={()=>setShow(false)}/>:""}
        <span onClick={()=>navigate('/')}>
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
    </>
  )
}

export default Topbar
