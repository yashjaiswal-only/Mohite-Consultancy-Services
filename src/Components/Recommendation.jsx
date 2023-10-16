import React from 'react'
import styled from 'styled-components'
import recommendation from '../Assests/recommendation.png'

const Container=styled.div`
    width:90%;
    margin-top:5rem;
    margin-bottom:5rem;
    color: var(--fs-search-text, #000);
    font-family: Poppins;
    font-style: normal;
    line-height: normal;
    h1{
        font-weight: 700;
        font-size: 35px;
    }
`
const Wrapper=styled.div`
    display: flex;
    justify-content: space-between;
`
const Item=styled.div`
    width:30%;
    border-radius: 20px;
    background: var(--fs-search-card-bg, #FFF);
    box-shadow: 2px 4px 15px 0px rgba(133, 133, 167, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width:100%;
        border-radius: 20px;
    }
    div{
        width:90%;
        font-size:20px;
        font-weight:700;
        display: flex;
        justify-content: space-between;
        span{
            width:max-content;
        }
    }
    span{
        width:90%;
        display: flex;
        align-items: center;
        margin:0.5rem 0;
        span{
            color:#0076CE;
            font-weight:700;
            width:max-content;
        }
    }
`
const Button=styled.button`
  border-radius: 10px;
  padding: 10px 20px;
  min-width: 90%;
  margin:1rem;
  border:none;
  background-color:#0076CE;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
  cursor: pointer;
`
const data=[
    {
        name: "Michael Jackson",
        price: "₹4,370",
        rating: 4.8,
        reviewCount: 89,
    },
    {
        name: "Stevie Wonder",
        price: "₹4,263",
        rating: 5.0,
        reviewCount: 62,
    },
    {
        name: "Ray Charles",
        price: "₹2,586",
        rating: 4.3,
        reviewCount: 172,
    },
]
const Recommendation = () => {
  return (
    <Container>
      <h1>Recommended for you</h1>
      <Wrapper>
        {data.map(e=>(
            <Item>
                <img src={recommendation}/>
                <div><span>{e.name}</span>   <span>{e.price}</span></div>
                <span>I will do business evaluation and corporate services</span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="#0076CE"/>
                </svg>
                <span>{e.rating}</span>{' '} ({e.reviewCount})
                </span>
                <Button>View Services</Button>
            </Item> 
        ))}
      </Wrapper>
    </Container>
  )
}

export default Recommendation
