import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Topbar from '../Components/Topbar'
import Footer from '../Components/Footer'
import Info from '../Components/Info'
import Recommendation from '../Components/Recommendation'
import { useLocation } from 'react-router-dom'

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
  const [data,setData]=useState();
  const location=useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0)
    if(location.state && location.state.data)    setData(location.state.data)
  },[])
  return (
    <Container>
      <Topbar/>
      {data?<Info data={data} />:''}
      <Recommendation/>
      <Footer/>
    </Container>
  )
}

export default Details
