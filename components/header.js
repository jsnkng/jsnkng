import React from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

const Component = ({ heroBackground, heroHeight, heroTitle, heroSubtitle, manageHistory, manageFuture }) => {
  return (
    <Header heroHeight={heroHeight} heroBackground={heroBackground}>
      <div className='hero'>
        <div className='hero__overlay'>
          <h3 className='hero__title'>{heroSubtitle}</h3>
        </div>
      </div>
      <div className='navigation'>
        <h2 className='navigation__title'><a onClick={() => manageFuture('/', '/')}>{heroTitle}</a></h2>
        <a className='navigation__logo' onClick={() => manageFuture('/', '/')}>JASON KING</a>
      </div> 
    </Header>
  )
}

export default Component

const Header = styled.header`
  .hero {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: ${props => props.heroHeight};
    margin: 0;
    z-index: 5;
    background-image: url(${props => props.heroBackground});
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
  .hero__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: ${ ({ theme }) => theme.colors.image_overlay_darkgradient };
  }
  .hero__title {
    margin: 65vh 4% 0 1%;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.home_text};
    font-weight: 400;
    text-align: left;
    font-size: 1.25rem;
    text-shadow: 0.5px 0.5px 2px ${({ theme }) => theme.colors.home_text_shadow};
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.trans_back};
    color: ${({ theme }) => theme.colors.text};
    height: 6rem;
    margin: 0;
    padding: 0 1rem 0 4rem;
  }
  .navigation__logo {
    flex: 0 1 auto;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -1px;
  }

  .navigation__title {
    flex: 0 1 auto;
    font-size: 1rem;
    letter-spacing: -1px;
    font-weight: 400;
    text-align: left;
  }


  
`
