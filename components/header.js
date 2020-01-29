import React from 'react'
import Link from 'next/link'
import useWindowDimensions from '../hooks/useWindowDimensions'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

const Component = ({ 
        heroBackground, 
        heroHeight, 
        heroTitle, 
        heroSubtitle, 
        parentTitle,
        parentLink
      }) => {

  const windowDimension = useWindowDimensions()
  return (
    <>
    <Header 
      heroHeight={heroHeight} 
      heroBackground={heroBackground}
    >
    {/* The Menu button appears here, but it's absolute positioned and 
        the code for it can be found in the _app.js file. */}
      <div className='hero'>
        <div className='hero__overlay'>
          <h1 className='hero__title'>{heroTitle}</h1>
          <h2 className='hero__subtitle'>{heroSubtitle}</h2>
        </div>
      </div>
      
    </Header>
    <Navigation
      className={windowDimension.scrollY < 0.8 * windowDimension.height  ? 'absolute' : 'fixed' }>
        <Link href={parentLink.href} as={parentLink.as} scroll={false}>
          <a className='navigation__title'>
            {parentTitle}
          </a>
        </Link>
        <Link href='/' as='/' scroll={false}>
          <a className='navigation__logo'>
            JASON KING
          </a>
        </Link>
    </Navigation>
  </>
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

  .hero__overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: ${ ({ theme }) => theme.colors.image_overlay_darkgradient };
  }
  .hero__title {
    display: block;
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: -0.05em;
    line-height: 1;
    text-shadow: 0.5px 0.5px 2px ${({ theme }) => theme.colors.home_text_shadow};
    color: ${({ theme }) => theme.colors.home_text};
    margin: 4%;
    ${SuperQuery().minWidth.sm.css`
      font-size: 8vw;
    `}
  }
  .hero__subtitle {
    display: block;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: -0.05em;
    text-shadow: 0.5px 0.5px 2px ${({ theme }) => theme.colors.home_text_shadow};
    color: ${({ theme }) => theme.colors.home_text};
    margin: 0 4% 0 1%;
    ${SuperQuery().minWidth.sm.css`
      font-size: 4vw;
    `}
  }

  
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.trans_back};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  padding: 0;
  ${SuperQuery().minWidth.sm.css`
    height: 6rem;
  `}
  &.absolute {
  }
  &.fixed {
    position: fixed;
    top: 0vh;
    left: 0;
    right: 0;
    z-index:1500;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
  .navigation__logo {
    flex: 0 1 auto;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.05em;
    padding: 0 1rem;
  }
  .navigation__title {
    flex: 0 1 auto;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: -0.05em;
    padding: 0 1rem 0 4rem;
    ${SuperQuery().minWidth.sm.css`
      font-size: 3vw;
      padding: 0 1rem 0 4.5rem;
    `}
    ${SuperQuery().minWidth.md.css`
      padding: 0 1rem 0 5rem;
    `}
  }
`