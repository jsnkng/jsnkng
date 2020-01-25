import React, { useState } from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import Spinner from './spinner'
import SuperQuery from '@themgoncalves/super-query'

const Element = ({ headline, title, subtitle, backgroundURL, backgroundHoverURL, handleClick }) => {
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)

  return (
    <Banner 
      // verticalHeight={verticalHeight}
      backgroundURL={backgroundURL}
      onClick={() => {
        handleClick && setIsSpinnerVisible(true)
        handleClick && handleClick()
      }}>
      <Spinner isSpinnerVisible={isSpinnerVisible} />
      <LazyLoad height={'100%'} offset={600}>
        <ResponsiveImage 
          // verticalHeight={verticalHeight}
          className='banner__background' 
          backgroundURL={backgroundURL} 
          backgroundHoverURL={backgroundHoverURL}>
          <div className='header'>
            {headline !==undefined && 
              <h1>{headline}</h1>
            }
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <div className='header__overlay'></div>
          </div>
        </ResponsiveImage>
      </LazyLoad>
    </Banner>
  )
}

export default Element

const ResponsiveImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 5;

  transition: background-size .25s ease-in;
    -moz-transition: background-size .25s ease-in;
    -webkit-transition: background-size .25s ease-in

  &:hover {
    background-size: cover;
  }
`

const Banner = styled.section`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 60vh;
  background-image: url(${props => props.backgroundURL});
  ${SuperQuery().minWidth.sm.css`
    height: 50vw;
  `}
  ${SuperQuery().minWidth.md.css`
    height: 33.33vw;
  `}
  ${SuperQuery().minWidth.lg.css`
    height: 25vw;
  `}

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
    color: ${({ theme }) => theme.colors.home_text};
    text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.home_text_shadow};
    height: 100%;
    width: 100%;
    z-index: 20; 
  }

  h1 {
    opacity: 0;
    width: 90%;
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
    opacity: 0;
    width: 90%;
    max-width: 70vw;
    font-weight: 400;
    line-height: .925;
    letter-spacing: -0.1rem;
    margin: 0 0 0 4%;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    border: none;
    font-size: 10vw;
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
      font-size: 3.25vw;
    `}
    ${SuperQuery().minWidth.lg.css`
      font-size: 2.5vw;
    `}
  }
  h3 {
    opacity: 0;
    width: 90%;
    max-width: 70vw;
    font-size: 1.5rem;
    font-weight: 200;
    line-height: 0.875;
    margin: 0 0 0 4%;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    font-size: 3.5vw;
    z-index: 5;
 
    ${SuperQuery().minWidth.md.css`
      font-size: 1vw;
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
    opacity: 1;
    background: rgba(0,0,0,.5) !important;

    -webkit-transition: opacity  .5s ease .1s;
    -moz-transition: opacity  .5s ease .1s;
    -o-transition: opacity  .5s ease .1s;
    transition: opacity  .5s ease .1s;
  }
  .header:not(:active):not(:focus):not(:hover) {

    .header__overlay {
      opacity: 0;
    }
  }

  .header:hover h1,
  .header:hover h2,
  .header:hover h3 {

    transition: all .75s ease-in-out;
    opacity: 1;
  }
`
