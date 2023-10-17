import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import picture1 from '../Assests/Picture1.png'
import picture2 from '../Assests/Picture2.png'
import picture3 from '../Assests/Picture3.png'
import mobile, { tab } from '../responsive'

const Container=styled.div`
  width:100%;
  min-height:100vh;
  box-sizing:border-box;
  display: flex;
  padding-top:10rem;
  ${tab({
    paddingTop:'5rem',
    flexDirection:'column',
    alignItems:'center'
  })}
`
const Left=styled.div`
  width:60%;
  z-index:100;
  margin:0 0 0 4rem;
  background-color: none;
  opacity:1;
  display: flex;
  flex-direction: column;
  ${tab({
    width:'80%',
    margin:'0 0 2rem 0'
  })}
  
  >p{
    color: var(--fs-search-text, #000);
    color:black;
    font-family: Poppins;
    font-size: 65px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px;
    margin:0;
    ${tab({
      fontSize:'50px',
      lineHeight:'60px'
    })}
    ${mobile({
      fontSize:'35px',
      lineHeight:'40px'
    })}
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
    ${tab({
      fontSize:'18px',
      lineHeight:'22px'
    })}
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
    ${tab({
      padding:'0.5rem 1rem'
    })}
    
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
    &:disabled{
      color:#dccbcb;
      cursor:not-allowed;
    }
  }
`
const Right=styled.div`
  display: flex;
  margin:0 2rem;
  height:60%;
  position: relative;
  >img{
    width:30%;
  }
`
const Img=styled.img`
  height:80%;
  margin:${props=>props.down===true?'4rem 0.5rem 0rem 0.5rem':'0 0.5rem 4rem 0.5rem'};
`
const ResultBox=styled.div`
  width:100%;
  max-height:500px;
  overflow:scroll;
  overflow-x:hidden;
  background: var(--fs-search-card-bg, #FFF);
  box-shadow: 2px 4px 15px 0px rgba(133, 133, 167, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;

  >hr{
    width:90%;
  }
  &::-webkit-scrollbar {
    width: 0.3rem;               /* width of the entire scrollbar */
  }
  &::-webkit-scrollbar-track {
    background: outset;        /* color of the tracking area */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #b6b6e4;    /* color of the scroll thumb */
    border-radius: 50px;       /* roundness of the scroll thumb */
    border: 1px solid white;  /* creates padding around scroll thumb */
  }
`
const Entry=styled.div`
    width:90%;
    display: flex;
    flex-direction: column;
    margin:0.2rem;
    color: var(--fs-search-text, #000);
    font-family: Poppins;
    font-style: normal;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 10px;
    box-sizing:border-box;
    &:hover{
      background: rgba(0,0,0,0.1);
    }
    >div{
      font-weight: 700;
      font-size: 20px;
      width:90%;
      display: flex;
      justify-content: space-between;
      ${mobile({
        fontSize:'15px'
      })}
    }
    span{
      display: flex;
      align-items: center;
      margin:0.2rem;
      >div{
        width:max-content;
        font-weight:700;
      }
      ${mobile({
        fontSize:'15px'
      })}
    }
`
const Error=styled.span`
  font-size: 20px;
  margin: 1rem;
  font-weight: 600;
  color: red;
  font-family: Poppins;

`
const Hero = () => {
  const [query,setQuery]=useState('');
  const [result,setResult]=useState([]);
  const [load,setLoad]=useState(false);
  const [error,setError]=useState(false);
  const BASE_URL=import.meta.env.VITE_API;
  const navigate=useNavigate();

  const search=()=>{
    console.log('searching')
    setError(false);
    setLoad(true);
    axios.get(BASE_URL+query)
    .then(res=>{
      console.log(res)
      if(res.status===200)  setResult(res.data);
      setLoad(false);
    })
    .catch(err=>{
      setError(true);
      console.log(err)
    })
  }
  useEffect(()=>{
    if(query==='')  setResult([])
  },[query])
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
          <input placeholder='Search by name' value={query} onChange={e=>setQuery(e.target.value)}/>
          <button onClick={search} disabled={load}>{load?'Loading':"Search"}</button>
        </Input>
        {result.length?
          <ResultBox>
            {result.map(r=>(
              <>
              <Entry key={r.id} onClick={()=>navigate("/details", { state: {data:r }})}>
                <div><span>{r.name}</span><span>{r.price}</span></div>
                <span>{r.intro}  </span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="#0076CE"/>
                    </svg>  <div>{r.rating}</div> ({r.reviewCount})
                </span>
              </Entry>
              <hr/>
              </>
            ))}
          </ResultBox>
        :''}
        {error?<Error>*Something went wrong. Results can't be displayed</Error>:''}
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
