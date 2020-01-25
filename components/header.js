import React from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import { Arrow } from '../svgs/l-arrow.svg'

const Component = ({ hero__background, hero__height, hero__title, hero__subtitle, manageHistory, manageFuture }) => {
  console.log(hero__height)
  return (
    <Grid fluid={true}>
      <Hero hero__background={hero__background} hero__height={hero__height}>
        <HeroOverlay>
          {/* { hero__title && <h1>{hero__title}</h1> } */}
          <h2>{hero__subtitle}</h2>
        </HeroOverlay>
      </Hero>
      <Header>
        <Row__Decorated className='navigation'>
          <Col__Decorated xs={12} sm={8}>
            <a className='navigation__title' onClick={() => manageFuture('/', '/')}>{hero__title}</a>
          </Col__Decorated>
          <Col__Decorated xs={12} sm={4}>
            <a className='navigation__logo' onClick={() => manageFuture('/', '/')}>JASON KING</a>
          </Col__Decorated>
        </Row__Decorated> 
      </Header>
    </Grid>
  )
}

export default Component

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.trans_back};
  color: ${({ theme }) => theme.colors.text};
  height: 6rem;
  
  
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
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
  .navigation {
    display: flex;
    align-content: center;
    height: 6rem;
    margin: 0;
    padding: 1rem;
  }
  .navigation__title {
    margin-left: 5rem;
    font-size: 1.5rem;
    font-weight: 200;
    letter-spacing: -1px;
  }
  .navigation__logo {
    display: flex;
    justify-content: flex-end;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -1px;
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

const Hero = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.hero__height};
  margin: 0;
  z-index: 5;

  background-image: url(${props => props.hero__background});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;

  transition: background-size .25s ease-in;
    -moz-transition: background-size .25s ease-in;
    -webkit-transition: background-size .25s ease-in

  &:hover {
    background-size: cover;
  }
  h1 {
    margin: 40vh 4% 0 2%;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.background};
    font-weight: 400;
    text-align: left;
    font-size: 2.5rem;
    text-shadow: 0.5px 0.5px 2px ${({ theme }) => theme.colors.home_text_shadow};
    ${SuperQuery().minWidth.sm.css`
      font-size: 3.5rem;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size: 4.5rem;
    `}
  }
  h2 {
    margin: 65vh 4% 0 1%;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.background};
    font-weight: 400;
    text-align: left;
    font-size: 2.25rem;
    text-shadow: 0.5px 0.5px 2px ${({ theme }) => theme.colors.home_text_shadow};
  }
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1220;
  background-color: ${ ({ theme }) => theme.colors.image_overlay_opaque };
`
