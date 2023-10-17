import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
    width:90%;
    display: flex;
    justify-content: space-between;
    margin-top:10rem;
`
const Left=styled.div`
    width:40%;
    display: flex;
    flex-direction: column;
    font-family: Poppins;
    color: var(--fs-search-text, #000);
    font-style: normal;
    line-height: normal;
    >h2{
        font-size: 35px;
        font-weight: 700;
    }
    >span{
        font-size: 20px;
        font-weight: 400;
        line-height: 32px; /* 160% */
        display: flex;
        align-items: center;
        margin:1rem 0;
        >div{
            font-weight:700;
            color: var(--fs-search-primary, #0076CE);
        }
    }
    >p{
        border-radius: 20px;
        background: var(--fs-search-card-bg, #FFF);
        box-shadow: 2px 4px 15px 0px rgba(133, 133, 167, 0.25);
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding:1rem;
        font-size: 20px;
        font-weight: 400;
        line-height: 32px; /* 160% */
        >h2{
            font-size:35px;
            font-weight:700;    
        }
        >svg{
            margin:2rem auto 0;
        }
        >div{
            width:100%;
            display: flex;
            justify-content: space-between;
            span{
                font-size: 24px;
                font-weight: 700;
                line-height: normal;  
            }
        }
        >span{
            width:90%;
            display: flex;
            align-items: center;
            margin:1rem 0;
            >svg{
                margin-right:0.5rem;
            }
        }
    }
`
const Button=styled.button`
  border-radius: 10px;
  padding: 10px 20px;
  min-width: 100px;
  background-color: ${props=>props.chat?'inherit':'#0076CE'};
  color: ${props=>props.chat?'#0076CE':'#fff'};
  border: 1.5px solid #0076CE;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
  cursor: pointer;
`
const Right=styled.div`
    width:55%;
    display: flex;
    flex-direction: column;
    color: var(--fs-search-text, #000);
    font-family: Poppins;
    font-style: normal;
    line-height: normal;
    h1{
        font-size:35px;
        font-weight:700;
    }
    img{
        border-radius: 20px;
        width:90%;
    }
`
const Column=styled.div`
    display: flex;
    justify-content: space-between;
    margin:1rem 0;
`
const Item=styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 400;
    color:#000;
    span{
        color: #999;
        font-size: 16px;
        font-weight: 700;
    }
`


const Info = ({data}) => {
    console.log(data)
  return (  
    <Container>
      <Left>
        <h2>{data.name}</h2>
        <span>{data.intro}</span>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="#0076CE"/>
            </svg>  <div>{data.rating}</div> ({data.reviewCount})
        </span>
        <p>
            <div>{data.taskComplexity} <span>{data.price}</span></div>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" fill="#0076CE"/>
                </svg>
                {data.deliveryTime} 
            </span>
            <div>
                <Button>Request Proposal</Button>
                <Button chat>Chat with me</Button>
            </div>
        </p>
        <p>
            <h2>What people say?</h2>
            <span>{data.testimonial.text}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="10" viewBox="0 0 86 10" fill="none">
            <circle cx="45" cy="5" r="5" fill="#C5C5C5"/>
            <circle cx="63" cy="5" r="5" fill="#C5C5C5"/>
            <circle cx="81" cy="5" r="5" fill="#C5C5C5"/>
            <rect width="32" height="10" rx="5" fill="#0076CE"/>
            </svg>
        </p>
      </Left>
      <Right>
        <img src={data.image}/>
        <h1>About {data.name}</h1>
        <Column>
            <Item>
                <span>FROM</span>
                {data.about.from}
            </Item>
            <Item>
                <span>PARTNER SINCE</span>
                {data.about.partnerSince}
            </Item>
            <Item>
                <span>AVERAGE RESPONSE TIME</span>
                {data.about.averageResponseTime}
            </Item>
        </Column>
        <Column>
            <Item>
                <span>ABOUT</span>
                {data.about.description}
            </Item>
        </Column>
        <Column>
            <Item>
                <span>SERVICES I OFFER</span>
                <ul>
                    {data.about.services.map(e=>(
                        <li>{e}</li>
                    ))}
                </ul>
            </Item>
            <Item>
                <span>WHY ME?</span>
                <ul>
                    {data.about.benefits.map(e=>(
                        <li>{e}</li>
                    ))}
                </ul>
            </Item>
        </Column>
      </Right>
    </Container>
  )
}

export default Info
