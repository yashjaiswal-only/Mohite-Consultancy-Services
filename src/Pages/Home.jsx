import React from 'react'
import styled from 'styled-components'
import Topbar from '../Components.jsx/Topbar'
import Hero from '../Components.jsx/Hero'
import Services from '../Components.jsx/Services'

const Container=styled.div`
  width:100vw;
  position: relative;
  fill: #FAFBFC;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x:hidden;
  
  `
const Vector=styled.div`
  width:100%;
  height:100vh;
  position: absolute;
  top:0;
  filter: blur(250px);
  clip-path: polygon(0 0, 0 100%, 100% 70%, 100% 0);
  background: linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%);
`

const Home = () => {
  return (
    <Container>
      <Vector/>
      <Topbar/>
      <Hero/>
      <Services/>
    </Container>
  )
}

export default Home
