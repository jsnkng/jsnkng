import React, { useState } from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import Spinner from './spinner'
import SuperQuery from '@themgoncalves/super-query'

const Element = ({ backgroundURL, backgroundHoverURL, title, subtitle, headline,  handleClick }) => {

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)
  return (
    <Banner
        backgroundHoverURL={backgroundHoverURL}
        onClick={() => {
          handleClick && setIsSpinnerVisible(true)
          handleClick && handleClick()
      }}>
      <Spinner isSpinnerVisible={isSpinnerVisible} />
      <LazyLoad height={'100%'} offset={600}>
        <ResponsiveImage 
          className='banner__background' 
          backgroundURL={backgroundURL} 
          backgroundHoverURL={backgroundHoverURL}>
          <div className='header'>
            {headline !==undefined && 
              <h1>{headline}</h1>
            }
            <h2 dangerouslySetInnerHTML={{__html: title }}></h2>
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
  height: 100vw;  
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

    -webkit-transition: background 0.5s linear;
    -moz-transition: background 0.5s linear;
    -o-transition: background 0.5s linear;
    -ms-transition: background 0.5s linear;
    transition: background 0.5s linear;

    z-index: 20; 
    
    height: 100%;
    width: 100%;


  }

  h1 {
    opacity: 0;
    width: 90%;
    max-width: 70vw;
    font-size: 3rem;
    font-weight: 200;
    line-height: 0.875;
    letter-spacing: -0.1rem;
    margin: 5vh 0 10vh 4%;
    text-shadow: 2px 2px 6px ${({ theme }) => theme.colors.home_text_shadow};
    z-index: 5;
    margin-top: 10vh;
     -webkit-transform: translateY(20px);
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
    margin: 1rem 0 4% 4%;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    border: none;
    font-size: 10vw;
    z-index: 5;
    margin-top: 10vh;
     -webkit-transform: translateY(20px);
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
    margin-top: 10vh;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    font-size: 3.5vw;
    z-index: 5;
 
     -webkit-transform: translateY(20px);
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
      opacity: 0;
  -webkit-animation: myfirst 1s;
  animation: myfirst 1s;
  }


  .header:hover {
    .header__overlay {
      opacity: 1;
        transition: background .5s ease .1s;

      background: rgba(0,0,0,.5) !important;
    }
   
  }


${'' /* 

  .header:hover {
    .header__overlay {
      opacity: 1;
        transition: background .25s ease .1s;
      background: rgba(0,0,0,.2) !important;
    }
   
  } */}




  .header:hover h1,
  .header:hover h2,
  .header:hover h3 {

    -webkit-transition-property: -webkit-transform, margin-top;
     -webkit-transition-duration: .25s;
     -webkit-transform: translateY(0);
    opacity: 1;
    margin-top: 0;
    -webkit-transition-timing-function: cubic-bezier(0.550, 0.085, 0.680, 0.530);
   -moz-transition-timing-function: cubic-bezier(0.550, 0.085, 0.680, 0.530);
     -o-transition-timing-function: cubic-bezier(0.550, 0.085, 0.680, 0.530);
        transition-timing-function: cubic-bezier(0.550, 0.085, 0.680, 0.530); /* easeInQuad */
  }
`
