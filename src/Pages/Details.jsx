import React from 'react'
import styled from 'styled-components'
import Topbar from '../Components/Topbar'
import Footer from '../Components/Footer'
import Info from '../Components/Info'
import Recommendation from '../Components/Recommendation'

const Container=styled.div`
  width:100vw;
  position: relative;
  background-color: #FAFBFC;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x:hidden;
  
  `

const Details = () => {
  return (
    <Container>
      <Topbar/>
      <Info/>
      <Recommendation/>
      <Footer/>
    </Container>
  )
}

export default Details
