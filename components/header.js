import React from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import { Arrow } from '../svgs/l-arrow.svg'

const Component = ({ hero__background, navigation__title, navigation__subtitle, manageHistory, manageFuture, back }) => {
  return (
    <Header>
      <Grid fluid={true}>
        <Row className='hero'>
          <Col className='hero__image' xs={12}>
          <div className='hero__image--overlay'></div>
            <BackgroundImage className='hero__background' backgroundURL={hero__background} />  
            <h1 className='hero__title'>{navigation__title}</h1>
          </Col>
        </Row>
        <Row className='navigation'>
          { back && 
          <Col className='navigation__back' xs={12} sm={4} onClick={() => manageHistory()}>
            <Arrow__Decorated />
            <span className={navigation__subtitle === '' ? 'navigation__title large' : 'navigation__title'}>{navigation__subtitle}</span>
           
          </Col>
          }
          <Col xs={12} sm={back ? 4 : 8}>
            <div onClick={() => manageFuture('/collection/[collectionName]/', '/collection/Mythologies/')}>Mythologies</div>
          </Col>
          <Col className='navigation__logo' xs={12} sm={4}>
            <div onClick={() => manageFuture('/', '/')}>
              {/* <img className='logo' src='/apple-icon-144x144.png' width='72' alt='Jason King' /> */}
              <a href='#'>JASON KING</a>
            </div>
          </Col>
        </Row> 
      </Grid>
    </Header>
  )
}

export default Component

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.trans_back};
  color: ${({ theme }) => theme.colors.text};
  .hero {
    margin: 0;
  }
  .hero__image {
  }
  .hero__image--overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
    width: 100%;
    height: 100vh;
  }
  .hero__background {
    height: 100vh;
  }
  .hero__title {
    position: absolute;
    top: 0;
    width: 100%;
    margin: 40vh auto;
    padding: 1rem;
    color: #ffffff;
    font-size: 4.5rem;
    font-weight: 200;
    text-align: center;
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

