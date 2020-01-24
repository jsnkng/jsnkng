import React from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import { Arrow } from '../svgs/l-arrow.svg'

const Component = ({ hero__background, navigation__title, navigation__subtitle, manageHistory, manageFuture, back }) => {
  return (
    <Header>
      <Grid fluid={true}>
      
        <Row__Decorated className='navigation'>
          { back && 
          <Col__Decorated className='navigation__back' xs={12} sm={4} onClick={() => manageHistory()}>
            <Arrow__Decorated />
            <span className={navigation__subtitle === '' ? 'navigation__title large' : 'navigation__title'}>{navigation__subtitle}</span>
           
          </Col__Decorated>
          }
          <Col__Decorated xs={12} sm={back ? 4 : 8}>
          
          
          </Col__Decorated>
          <Col__Decorated className='navigation__logo' xs={12} sm={4}>
            <div onClick={() => manageFuture('/', '/')}>
              <a href='#'>JASON KING</a>
            </div>
          </Col__Decorated>
        </Row__Decorated> 
      </Grid>
    </Header>
  )
}

export default Component

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.trans_back};
  color: ${({ theme }) => theme.colors.text};
  .hero__background {
    height: 100vh;
  }
  .hero__title {
    position: absolute;
    top: 0;
    ${'' /* width: 100%; */}
    margin: 40vh auto;
    padding: 1rem;
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: 200;
    text-align: center;
    ${SuperQuery().minWidth.sm.css`
      font-size: 3.5rem;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size: 4.5rem;
    `}
  }
  
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
  .navigation {
    display: flex;
    align-content: center;
    height: 6rem;
    margin: 0;
    padding: 1rem;
  }
  .navigation__back {
    display: flex;
    justify-content: flex-start;
  }
  .navigation__links {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      display: inline;
      padding: 8px 20px 8px 8px;
    }
  }
  .navigation__logo {
    display: flex;
    justify-content: flex-end;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -1px;
  }
  .navigation__title {

  }
  .navigation__subtitle {

  }
`

const Row__Decorated = styled(Row)`
  width: 100%;
  margin: 0;
  padding: 0;
`
const Col__Decorated = styled(Col)`
  margin: 0;
  padding: 0;
`
const Arrow__Decorated = styled(Arrow)`
  cursor: pointer;
  outline: none;
  fill: ${({ theme }) => theme.colors.text};
  width: 2.5rem;
  height: 2.5rem;
`
const BackgroundImage = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 0;
  -webkit-animation: myfirst 1s;
  animation: myfirst 1s;
`
