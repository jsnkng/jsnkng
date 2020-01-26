import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import Spinner from './spinner'
import SuperQuery from '@themgoncalves/super-query'

const Element = ({ headline, title, subtitle, name, backgroundURL, backgroundHoverURL, link, windowDimension }) => {

  const bannerRef = useRef(null)

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setIsSpinnerVisible(true)
  }
  const handleTouchStart = (e) => {
    if (windowDimension.width > 576) {
      if ( bannerRef.current.className.match(/(?:^|\s)touch(?!\S)/) ) {
        return
      }
      bannerRef.current.className += " touch";
    }
  }
  const handleTouchEnd = (e) => {
    if (windowDimension.width > 576) {
      bannerRef.current.className =
      bannerRef.current.className.replace
            ( /(?:^|\s)touch(?!\S)/g , '' )
    }
  }

  useEffect(() => {
    if (windowDimension.width < 577) {
      if (bannerRef.current !== null) {
        const { top, height } = bannerRef.current.getBoundingClientRect()
        if (top < -0.2 * windowDimension.height) {
          bannerRef.current.className =
          bannerRef.current.className.replace
                ( /(?:^|\s)touch(?!\S)/g , '' )
        } else if (top < 0.35 * windowDimension.height) {
          if ( bannerRef.current.className.match(/(?:^|\s)touch(?!\S)/) ) {
            return
          }
          bannerRef.current.className += " touch";
        } else if (top > 0.8 * windowDimension.height) {
          bannerRef.current.className =
          bannerRef.current.className.replace
                ( /(?:^|\s)touch(?!\S)/g , '' )
        }
      }
    }
  }
)


  return (
    <LazyLoad height={'100%'} offset={600}>
      <Banner 
        ref={bannerRef}
        backgroundURL={backgroundURL}
        backgroundHoverURL={backgroundHoverURL}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        onMouseOver={handleTouchStart}
        onMouseOut={handleTouchEnd}
        >
        <Spinner isSpinnerVisible={isSpinnerVisible} />

        <Link href={link.href} as={link.as} scroll={false}>
          <a>
            <div className='header'>
              {headline !==undefined && 
                <h1>{headline}</h1>
              }
              <h2>{title}</h2>
              <h3>{subtitle}</h3>
              <div className='header__overlay'></div>
            </div>
            <div className='touchLoader'></div>
          </a>
        </Link>
      </Banner>
    </LazyLoad>
  )
}

export default Element


const Banner = styled.section`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 60vh;
  opacity: 1;
  background-image: url(${props => props.backgroundHoverURL});
  background-image: url(${props => props.backgroundURL});
  background-size: 300%;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;

  ${SuperQuery().minWidth.sm.css`
    height: 50vw;
  `}
  ${SuperQuery().minWidth.md.css`
    height: 33.33vw;
  `}
  ${SuperQuery().minWidth.lg.css`
    height: 25vw;
  `}
  
  &.touch {
    .header,
    .header__overlay {
      opacity: 1;
    }
  }
  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: center;
    justify-content: center;
    opacity: 0;
    background-image: url(${props => props.backgroundURL});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.colors.home_text};
    text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.home_text_shadow};
    height: 100%;
    width: 100%;
    z-index: 20; 
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
  }

  h1 {
    width: 95%;
    max-width: 70vw;
    font-size: 3rem;
    font-weight: 200;
    line-height: 0.875;
    letter-spacing: -0.1rem;
    margin: 0 0 0 4%;
    text-shadow: 2px 2px 6px ${({ theme }) => theme.colors.home_text_shadow};
    z-index: 5;
    ${SuperQuery().minWidth.sm.css`
      font-size: 7.5vw;
    `}
  }
  h2 {
    width: 95%;
    max-width: 90vw;
    font-weight: 400;
    line-height: .925;
    letter-spacing: -0.1rem;
    margin: 0 0 0 4%;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    border: none;
    font-size: 2rem;
    z-index: 5;
    -webkit-transition: opacity 1s linear;
    -moz-transition: opacity 1s linear;
    -o-transition: opacity 1s linear;
    -ms-transition: opacity 1s linear;
    transition: opacity 1s linear;
    transition: all .75s ease-in-out;
    ${SuperQuery().minWidth.sm.css`
      font-size: 5vw;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size: 3vw;
    `}
    ${SuperQuery().minWidth.lg.css`
      font-size: 2.125vw;
    `}
  }
  h3 {
    width: 95%;
    max-width: 90vw;
    font-size: 1.25rem;
    font-weight: 200;
    line-height: 0.875;
    margin: 0 0 0 4%;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    z-index: 5;
    ${SuperQuery().minWidth.sm.css`
      font-size: 3vw;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size: 2.5vw;
    `}
    ${SuperQuery().minWidth.lg.css`
      font-size: 1.5vw;
    `}
  }
  span {
    position: absolute;
    top: .875rem;
    right: 0.5rem;
    text-align: right;
    margin: 0;
    padding: 0;
    width: 50%;
    z-index: 5;
  }
 .header__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    background: rgba(0,0,0,0.5) !important;

    -webkit-transition: opacity  .25s  ease-in-out;
    -moz-transition: opacity  .25s  ease-in-out;
    -o-transition: opacity  .25s  ease-in-out;
    transition: opacity  .25s  ease-in-out;
  }
 
`
