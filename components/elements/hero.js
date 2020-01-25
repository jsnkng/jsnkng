import React, { useState } from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import Spinner from './spinner'
import SuperQuery from '@themgoncalves/super-query'

const Element = ({ backgroundURL, title, subtitle, ratio='1:1', headline,  handleClick }) => {

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)
  const [verticalHeight, setVerticalHeight] = useState(Number(ratio.split(':')[1])/Number(ratio.split(':')[0])*100)
  return (
    <BackgroundOverlay>
    <Banner verticalHeight={verticalHeight}
        onClick={() => {
          handleClick && setIsSpinnerVisible(true)
          handleClick && handleClick()
      }}>
      <Spinner isSpinnerVisible={isSpinnerVisible} />
      <div className='header'>
        {headline !==undefined && 
          <h1>{headline}</h1>
        }
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      <LazyLoad height={'100%'} offset={600}>
        <ResponsiveImage verticalHeight={verticalHeight} backgroundURL={backgroundURL} />
      </LazyLoad>
    </Banner>

    </BackgroundOverlay>
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
  z-index: 10;
  -webkit-animation: myfirst 1s;
  animation: myfirst 1s;
`

const BackgroundOverlay = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 20;
  background-color: ${ ({ theme }) => theme.colors.image_overlay_light };
`
const Banner = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  
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
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.colors.image_overlay_darkgradient};
    color: ${({ theme }) => theme.colors.home_text};
    text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.home_text_shadow};
    z-index: 20; 

    -webkit-transition: background 0.5s linear;
    -moz-transition: background 0.5s linear;
    -o-transition: background 0.5s linear;
    -ms-transition: background 0.5s linear;
    transition: background 0.5s linear;
  }

  h1 {
    width: 90%;
    max-width: 70vw;
    font-size: 3rem;
    font-weight: 200;
    line-height: 0.875;
    letter-spacing: -0.1rem;
    margin: 5vh 0 10vh 4%;
    text-shadow: 2px 2px 6px ${({ theme }) => theme.colors.home_text_shadow};
    ${SuperQuery().minWidth.sm.css`
      font-size: 7.5vw;
    `}
  }
  h2 {
    width: 90%;
    max-width: 70vw;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: .925;
    letter-spacing: -0.1rem;
    margin: 1rem 0 0 4%;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    border: none;
    ${SuperQuery().minWidth.sm.css`
      font-size: 2.75rem;
    `}
  }
  h3 {
    width: 90%;
    max-width: 70vw;
    font-size: 1.5rem;
    font-weight: 200;
    line-height: 0.875;
    margin: 0 0 0 4%;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    ${SuperQuery().minWidth.sm.css`
      font-size: 1.375rem;
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
  }

`