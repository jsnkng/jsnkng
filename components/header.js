import React from 'react'
import Link from 'next/link'
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
  return (
    <Header 
      heroHeight={heroHeight} 
      heroBackground={heroBackground}
    >
      <div className='hero'>
        <div className='hero__overlay'>
          <h1 className='hero__title'>{heroTitle}</h1>
          <h2 className='hero__subtitle'>{heroSubtitle}</h2>
        </div>
      </div>
      <div className='navigation'>
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
    display: flex;
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
  .navigation {
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
