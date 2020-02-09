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
          <img src={heroLogo}  />
        }
        { heroLogo !== undefined || 
          <h1 className='hero__title'>{heroTitle}</h1>
        }
          
          <h2 className='hero__subtitle'>{heroSubtitle}</h2>
          <div className='hero__description'dangerouslySetInnerHTML={{__html:heroDescription}}></div>
          {
            parentTitle == 'Home' && 
            <div className='hero__more'>View the Collection</div>
          }
        </div>
      </div>
       
    </Header>
    
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
    

    ${SuperQuery().minWidth.of('768px').and.minHeight.of('768px').css`
      height: 90vh;
    `}

  }
  .hero__overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: ${ ({ theme }) => theme.colors.image_overlay_opaque };
    img {
      width: 13rem;
    margin: 0 1rem 1rem 1rem;
    ${SuperQuery().minWidth.md.css`
      width: 18rem;
      margin: 0 5rem 1rem 5rem;
    `}

    }
  }
  .hero__title {
    display: block;
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: -0.05em;
    line-height:1.1;
    text-shadow: 0.5px 0.5px 4px ${({ theme }) => theme.colors.home_text_shadow};
    color: ${({ theme }) => theme.colors.home_text};
    margin: 0 1rem 0 1rem;
    ${SuperQuery().maxWidth.of('360px').css`
      font-size: 2.25rem;
    `}
    ${SuperQuery().minWidth.sm.css`
      font-size: 3.75rem;
      margin: 0 5rem 0 5rem;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size: 4rem;
      margin: 0 5rem 0 5rem;
    `}
  }
  .hero__subtitle {
    display: block;
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: -0.05em;
    line-height:1.3;
    text-shadow: 0.5px 0.5px 2px ${({ theme }) => theme.colors.home_text_shadow};
    color: ${({ theme }) => theme.colors.home_text};
    margin: 0 1rem 0 1rem;
    ${SuperQuery().minWidth.sm.css`
      font-size: 3rem;
      margin: 0 5rem 0 5rem;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size: 4rem;
      margin: 0 5rem 0 5rem;
    `}
  }
  .hero__more,
  .hero__description {
    display: block;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: -0.05em;
    line-height:1.3;
    text-shadow: 0.5px 0.5px 4px ${({ theme }) => theme.colors.home_text_shadow};
    color: ${({ theme }) => theme.colors.home_text};
    margin: 0 1rem 0 1rem;
    ${SuperQuery().maxWidth.of('360px').css`
      font-size: 1.25rem;
    `}
    ${SuperQuery().minWidth.sm.css`
      font-size: 2.125rem;
      letter-spacing: -0.05em;
      margin: 0 5rem 0 5rem;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size: 2.5rem;
      letter-spacing: -0.05em;
      margin: 0 5rem 0 5rem;
    `}
  }
  .hero__more {
    padding: 1rem 0 0 0;
    text-decoration: underline;
  }
`
