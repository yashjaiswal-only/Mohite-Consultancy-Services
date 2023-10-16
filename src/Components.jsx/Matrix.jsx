import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    width:95%;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    z-index:1000;
    margin-top:5rem;
`
const Wrapper=styled.div`
    width:30%;
    background-color: white;
    margin:1rem 0;
    padding:1rem;
    position: relative;
    border-radius: 20px;
    background: var(--fs-search-card-bg, #FFF);
    box-shadow: 2px 4px 15px 0px rgba(133, 133, 167, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--fs-search-text, #000);
    font-family: Poppins;
    font-style: normal;
    text-align: center;
    >h3{
        position: absolute;
        top:-1rem;
        left:-0.5rem;
        border-radius: 10px;
        background: var(--gradient-border-outline, linear-gradient(96deg, #0076CE 0%, #9400D3 100%));
        color: var(--fs-search-button-text, #FFF);
        font-family: Poppins;
        font-size: 18px;
        padding:0.4rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin:0;
    }
    >p{
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin:0;
    }
    span{
        font-size: 16px;
        font-weight: 400;
        line-height: 26px; /* 162.5% */
    }
    >div{
        border-radius: 10px;
        background: var(--fs-search-table-bg, #F4F4F4);
        display: flex;
        width:90%;
        min-height:50%;
        padding:0.5rem;
        justify-content: space-around;
    }
`

const Column=styled.div`
    display: flex;
    flex-direction: column;
    width:${props=>props.left?'40%':'60%'};
    text-align:left;
    color: var(--fs-search-text, #000);
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    >div{
        color:${props=>props.left?'var(--fs-search-primary, #0076CE)':'var(--fs-search-red, #F66)'};
        font-size: 18px;
        font-weight: 700;
        line-height: 28px; /* 155.556% */
    }
    >p{
        margin:0;
        color: var(--fs-search-text, #000);
        font-family: Open Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
        >span{
            font-weight: 700;
            text-decoration-line: underline;
        }
    }
`

const Grid = ({data}) => {
  return (
    <Wrapper>
    <h3>{data.index}</h3>
      <p>{data.title}</p>
      <span>{data.desc}</span>
      <div>
        <Column left>
            <div>Due Date</div>
            <p>{data.due}</p>
        </Column>
        <Column>
            <div>Penalty fees</div>
            {
                data.penalty.map(p=>(
                    <p>
                        <span>&#8377;{p.amount}</span>  {p.for}
                    </p>
                ))
            }
            {data.upperLimit?'':<p>(No upper limit)*</p>}
        </Column>
      </div>
    </Wrapper>
  )
}
const data=[
    {
        index:'1st',
        title:'Commencement of business ',
        desc:'Invested shareholders must confirm payment and office address ',
        due:'Within 180 days ',
        penalty:[
            {
                amount:'50,000',
                for:' for the company'
            },
            {
                amount:'1,000',
                for:' /day for directors'
            }
        ],
        upperLimit:true
    },
    {
        index:'2nd',
        title:'Auditor Appointment',
        desc:'Company informs new auditor and submits ADT.1 form to ROC.',
        due:'Within 30 days ',
        penalty:[
            {
                amount:'300',
                for:' per month.'
            },
        ],
        upperLimit:true
    },
    {
        index:'3rd',
        title:'DIN eKYC',
        desc:'Directors share personal information for identification & verification ',
        due:'Every Year',
        penalty:[
            {
                amount:'5000',
                for:' one time'
            },
        ],
        upperLimit:true
    },
    {
        index:'4th',
        title:'DPT-3',
        desc:'Companies report money taken from people to ROC; auditors confirm details.',
        due:'Within 30 days ',
        penalty:[
            {
                amount:'300',
                for:' per month.'
            },
        ],
        upperLimit:true
    },
    {
        index:'5th',
        title:'MCA Form AOC-4',
        desc:'It\'s like an official report card for a company\'s documents',
        due:'On or Before 30th November ',
        penalty:[
            {
                amount:'200',
                for:' per day'
            },
        ],
        upperLimit:false,
    },
    {
        index:'6th',
        title:'MCA Form MGT-7',
        desc:'Companies must annually report activities and finances to the registrar.',
        due:'On or Before 31st December',
        penalty:[
            {
                amount:'200',
                for:' per day'
            },
        ],
        upperLimit:false,
    },
]
const Matrix = () => {
  return (
    <Container>
      {
        data.map(d=>{
            return <Grid data={d}/>
        })
      }
    </Container>
  )
}

export default Matrix
