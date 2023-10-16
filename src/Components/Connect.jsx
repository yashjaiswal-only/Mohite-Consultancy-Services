import React from 'react'
import styled from 'styled-components'
import search from '../Assests/search.svg'
import academy from '../Assests/academy.svg'
import connect from '../Assests/connect.svg'
import research from '../Assests/research.svg'
import boypik from '../Assests/boy.png'
import girlpik from '../Assests/girl.png'
const Container=styled.div`
    width:100%;
    padding:4rem;
    box-sizing:border-box;
    background: var(--fs-search-surface-bg, #FAFBFC);
    display: flex;
`
const Left=styled.div`
    width:55%;
    font-family: Poppins;
    font-style: normal;
    color: var(--fs-search-text, #000);
    p{
        margin:1rem 0;
        font-size: 55px;
        font-weight: 700;
        line-height: normal;
        span{
            background: linear-gradient(90deg, #0076CE 0.11%, #9400D3 43.35%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    >span{
        font-size: 24px;
        font-weight: 400;
        line-height: 38px; /* 158.333% */
    }
`
const Right=styled.div`
    width:45%;
    position: relative;
`
const Grid=styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    width:100%;
    margin-top:1rem;
`
const Item=styled.div`
    width:45%;
    display: flex;
    align-items: flex-start;
    margin:1rem 0.5rem;
    div{
        color: var(--fs-search-text, #000);
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px;
        span{
            font-weight:700;
        }
    }
`
const BoyBox=styled.div`
    position: absolute;
    right:0;
    top:0;
    img{
        right:0;
        top:0;
        position: absolute;
        width: 247px;
        height: 308px;
        border-radius: 80%;
    }
    `
const GirlBox=styled.div`
    position: absolute;
    left:0;
    bottom:0;
    img{
        left:0;
        bottom:0;
        position: absolute;
        width: 247px;
        height: 308px;
        border-radius: 45%;
    }
    `
const ChatBox=styled.div`
    color: #000;
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
    display: flex;
    flex-direction: column;
    width:55%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const Chat=styled.span`
    padding:0.4rem 0.5rem;
    margin:0.2rem;
    border-radius: ${props=>props.blue?'15px 15px 15px 3px':'15px 15px 3px 15px'};
    background: ${props=>props.blue?'var(--fs-search-banner-blue, #DDF3FF)':'var(--fs-search-banner-purple, #EFD9F9)'};
    width:max-content;
`
const Boy=()=>{
    return(
        <BoyBox>
            <svg xmlns="http://www.w3.org/2000/svg" width="233" height="310" viewBox="0 0 233 310" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M232.117 157.811C232.126 200.963 219.152 243.708 192.605 273.144C166.842 301.71 130.717 312.068 95.5652 309.224C62.7774 306.57 31.421 288.946 10.8974 258.44C-16.5268 217.677 18.3 186.813 18.3 147.657C18.3 108.5 1.04975 106.256 5.92257 58.8804C10.532 14.0654 62.2614 0.834357 95.5652 0.834345C131.585 0.834331 166.851 13.2989 192.556 42.5359C218.78 72.3633 232.108 114.671 232.117 157.811Z" fill="#EFD9F9"/>
</svg>
        <img src={boypik}/>
        </BoyBox>
    )
}
const Girl=()=>{
    return (
        <GirlBox>
            <svg xmlns="http://www.w3.org/2000/svg" width="265" height="340" viewBox="0 0 265 340" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.603528 173.126C0.593605 220.409 14.8099 267.246 43.8993 299.501C72.1284 330.803 111.713 342.152 150.23 339.035C186.157 336.128 220.516 316.816 243.005 283.39C263.492 252.938 267.946 211.436 261.85 173.126C256.723 140.902 230.46 123.798 213.496 97.9328C191.78 64.8223 184.468 13.2626 150.23 2.93925C112.441 -8.45468 72.1185 14.7763 43.9523 46.8126C15.2173 79.496 0.613449 125.854 0.603528 173.126Z" fill="#DDF3FF"/>
            </svg>
            <img src={girlpik}/>
        </GirlBox>
    )
}
const Chats=()=>{
    return (
        <ChatBox>
            <Chat>Hey, check out loreumipsum services. </Chat>
            <Chat>I learned from their videos, got my first job. </Chat>
            <Chat>You won't be disappointed with their services. </Chat>
            <Chat blue>I got a perfect analysis report from them too. </Chat>
            <Chat blue>Oh, that's great. </Chat>
        </ChatBox>
    )
}
const Connect = () => {
  return (
    <Container>
        <Left>
            <p><span>All-in-One</span> platform that Makes Easier</p>
            <span>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</span>
            <Grid>
                <Item>
                <img src={search} alt="search" />
                <div><span>SEARCH</span> for vital company information </div>
                </Item>
                <Item>
                <img src={connect} alt="CONNECT" />
                <div><span>CONNECT</span> with the resources to meet your business needs</div>
                </Item>
                <Item>
                <img src={research} alt="RESEARCH" />
                <div><span>RESEARCH</span> and generate reports that drive growth </div>
                </Item>
                <Item>
                <img src={academy} alt="academy" />
                <div><span>ACADEMY</span> to give you the skills for success in your career</div>
                </Item>
            </Grid>
        </Left>
        <Right>
            <Boy/>
            <Girl/>
            <Chats/>
        </Right>
      
    </Container>
  )
}

export default Connect
