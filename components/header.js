import React from 'react'
import Link from 'next/link'
import useWindowDimensions from '../hooks/useWindowDimensions'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import Navigation from './navigation'

const Component = ({ 
    heroBackground, 
    heroHeight, 
    heroTitle, 
    heroLogo,
    heroSubtitle,
    heroDescription, 
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
        { heroLogo !== undefined && 
          <img src={heroLogo} width="200px" />
        }
        { heroLogo !== undefined || 
          <h1 className='hero__title'>{heroTitle}</h1>
        }
          
          <h2 className='hero__subtitle'>{heroSubtitle}</h2>
          {/* <div className='hero__description'dangerouslySetInnerHTML={{__html:heroDescription}}></div> */}
        </div>
      </div>
       
    </Header>
    
     
    <Navigation parentTitle={parentTitle} parentLink={parentLink} />
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
    height: 100vh;
    margin: 0;
    z-index: 5;
    background-image: url(${props => props.heroBackground});
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    ${SuperQuery().minWidth.sm.css`
      height: 90vh;
    `}
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
    ${SuperQuery().minWidth.md.css`
      font-size: 3rem;
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
      font-size: 2rem;
    `}
  }
  .hero__description {
    display: block;
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: -0.05em;
    text-shadow: 0.5px 0.5px 2px ${({ theme }) => theme.colors.home_text_shadow};
    color: ${({ theme }) => theme.colors.home_text};
    margin: 0 4% 0 1%;
    ${SuperQuery().minWidth.sm.css`
      font-size: 1.5rem;
    `}
  }
`
