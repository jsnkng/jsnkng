import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'
import useWindowDimensions from '../../../../../hooks/useWindowDimensions'
import useEventListener from '../../../../../hooks/useEventListener'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import styled from 'styled-components'
import { useSwipeable, Swipeable } from 'react-swipeable'
import LazyLoad, { forceCheck } from 'react-lazyload'
import Header from '../../../../../components/header'
import Footer from '../../../../../components/footer'

const Page = ({ collectionTitle, collectionName, imageName, images, themeName, setThemeName, pageTransitionReadyToEnter }) => {
  /* Basic page stuff */
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
    setLoaded(true)
    pageTransitionReadyToEnter()
  }, [])
  
  useEffect(() => {
    forceCheck()
  })
  
  /* Getting the current image's id and data */
  const [currentIdx, setCurrentIdx] = useState(images.findIndex(i => i.name === imageName))
  const [[image], setImage] = useState(images.filter(image => image.name === imageName))
  /* Keep current image's id and data up to date */
  useEffect(() => {
    setCurrentIdx(images.findIndex(i => i.name === imageName))
    setImage(images.filter(image => image.name === imageName))
  }, [imageName])

  /* Getting the next and previous image's id and data */
  const [prevIdx, setPrevIdx] = useState()
  const [nextIdx, setNextIdx] = useState()
  /* Keep next and previous image's id and data up to date */
  useEffect(() => {
    setPrevIdx(currentIdx > 0 ? currentIdx - 1 : images.length - 1)
    setNextIdx(currentIdx < images.length - 1 ? currentIdx + 1 : 0)
  }, [currentIdx])

  /* Calculating a fixed vertical height based on an image's ratio as determined in the collection  */
  const [verticalHeight, setVerticalHeight] = useState()
  useEffect(() => {
    setVerticalHeight(Number(image.ratio.split(':')[1])/Number(image.ratio.split(':')[0]) * 100)
  }, [image])

/* Setting variable to determine whether to enlarge the image and show background overlay */
  const [showBackground, setShowBackground] = useState(false)
  const backgroundHide = () => {
    setShowBackground(false)
    window.scrollTo(0, 670)
  }
  const backgroundShow = () => {
    showBackground || setShowBackground(true)
  }

/* Functions to be called by event listeners to handle navigation between images */
  const handleLeftSwipe = () => {
    showBackground || setShowBackground(true)
    Router.push(`/collection/[collectionName]/image/[imageName]`, 
                `/collection/${collectionName}/image/${images[nextIdx].name}`)
  }
  const handleRightSwipe = () => {
    showBackground || setShowBackground(true)
    Router.push(`/collection/[collectionName]/image/[imageName]`, 
                `/collection/${collectionName}/image/${images[prevIdx].name}`)
  }
  /* Swipe event listeners */
  const handlers = useSwipeable({
    onSwipedLeft: handleLeftSwipe,
    onSwipedRight: handleRightSwipe,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  })
  /* keyboard navigation */
  const handleKeyPress = (event) => {
    if(showBackground) {
      if (event.which == 27 || event.keyCode == 27) {
        backgroundHide()
      } else if (event.which == 39 || event.keyCode == 39)  {
        handleLeftSwipe()
      } else if (event.which == 37 || event.keyCode == 37)  {
        handleRightSwipe()
      } else if (event.which == 32 || event.keyCode == 32)  {
        event.preventDefault()
        showBackground && backgroundHide()
        showBackground || backgroundShow()
      } else {
        return true;
      }
    } else {
      backgroundShow()
    }
  }
  /* keyboard navigation listener */
  useEventListener('keydown', handleKeyPress)

  if (!loaded) {
    return null
  } else {
    return (
    <div {...handlers}>
    <Head>
      <title>JSNKNG : {collectionName} : {imageName}</title>
    </Head>
    <Content verticalHeight={verticalHeight}
        containerBackground={`/gallery/${collectionName}/${imageName}/image_iii.jpg`}>
      <BackgroundOverlay 
        className={showBackground ? 'showBackground' : ''}
          onClick={backgroundHide} 
       />
        <Header 
          heroBackground={`/gallery/${collectionName}/${imageName}/image_ii.jpg`}
          heroHeight={'100vh'}
          heroTitle={image.title} 
          heroSubtitle={image.year} 
          heroDescription={``}
          parentTitle={collectionTitle}
          parentLink={{
            href: `/collection/[collectionName]/`, 
            as: `/collection/${collectionName}/` 
          }}
        />
        <Grid className="container" fluid={true}>
          
          <Row__Decorated className='reversible'>
            <Col__Decorated xs={12} lg={9}>
              <ResponsiveImage 
                className={showBackground ? 'showBackground' : ''}
                onClick={backgroundShow}
                verticalHeight={verticalHeight} 
                backgroundURL={`/gallery/${collectionName}/${imageName}/image.jpg`} 
              >
                <div className="cross-button"
                  onClick={backgroundHide}>
                  <div className="cross" style={{ transform: "rotate(45deg)"}}></div>
                  <div className="cross" style={{ transform: "rotate(-45deg)"}}></div>
                </div>
              </ResponsiveImage>
            </Col__Decorated>

            <Col__Decorated xs={12} lg={3}>
              <div className='item__meta'>
                <div className='item__details'>
                  <div className='item__title'>{image.title}</div> 
                  <div className='item__year'>{image.year}</div>
                  <div className='item__tags'>{image.tags}</div>
                </div>
                { image.shop &&
                  <div className='item__shop'>
                    <a href={`${process.env.SHOP_URL}${image.name.toLowerCase().replace(/_/g, '-')}`} target='_blank' rel='noopener'>
                      Shop
                    </a>
                  </div>
                }
              </div>
            </Col__Decorated>
          </Row__Decorated>

        </Grid>
      </Content>
      <Footer__Wrapper>
        <Footer themeName={themeName} setThemeName={setThemeName} />
      </Footer__Wrapper>
    </div>
    )
  }
}
Page.pageTransitionDelayEnter = true

export default Page

Page.getInitialProps = async ({ req, query }) => {
  const { collectionName, imageName } = query
  const { origin }  = absoluteUrl(req)
  const collectionResult = await fetch(`${origin}/api/collection/${collectionName}`)
  const result = await collectionResult.json()
  result.imageName = imageName
  result.collectionName = collectionName
  return result
}

const Content = styled.main`

  .container {
    background: ${ ({ theme }) => theme.colors.image_overlay_gradient };  
    padding-bottom: 3rem;
  }
  .item__meta {
    display: flex;
    justify-content: space-between;
    align-items:flex-start;
    padding: 1.75rem 0 1.5rem 5%;
    z-index:  100;
    color: ${ ({ theme }) => theme.colors.text };
    a { 
      color: ${ ({ theme }) => theme.colors.color_two };  
    }
    ${SuperQuery().landscape.css`
      flex-direction: column;
      align-items: space-between;
    `}  
  }
  .item__details {
  }
  .item__title {
    font-size: 1.75rem;
    line-height: 1;
    margin: 1rem 0;
    ${SuperQuery().minWidth.lg.css`
      margin: 0 0 1rem 0;
    `}
  }
  .item__year,
  .item__tags {
    font-size: 1rem;
    line-height: 1.2;
    margin-bottom: 0.25rem;
  }
  
  .item__shop {
    margin: 4rem 0;
    line-height: 1.2;
    background: ${ ({ theme }) => theme.colors.color_two };
    padding: 0.5rem;
    cursor: pointer;
    a {
    color: ${ ({ theme }) => theme.colors.background };
      text-decoration: none;
    }
    &:hover {
      background: ${ ({ theme }) => theme.colors.dim_text };
    }
  }
  
`
const Row__Decorated = styled(Row)`
  width: 100%;
  margin: 0;
  padding: 0;
  flex-direction: column;
  &.reversible {
    ${SuperQuery().minWidth.md.css`
      flex-direction: row-reverse;
    `}
    ${SuperQuery().landscape.css`
      flex-direction: row-reverse;
      padding: 1rem;
      ${'' /* height: 80vh; */}
    `}  
  }
`
const Col__Decorated = styled(Col)`
  position: relative;
  margin: 0;
  padding: 0;
`
const BackgroundOverlay = styled.div`
  display: none; 
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  z-index: 1100;
  opacity: 0;
  background-color: rgba(0,0,0,0.8);
  background-image: url(${props => props.backgroundURL});
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  &.showBackground {
    display: block;
    opacity: 1;
  background-color: rgba(0,0,0,0.8);
  }
`
const ResponsiveImage = styled.div`
  position: relative;
  top: 0;
  left: 0;
  background-image: url(${props => props.backgroundURL});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  width: 96%;
  height: calc(${props => props.verticalHeight}vw - 3vw); 
  margin: 2vw;
  ${'' /* margin: 1rem 0; */}
  z-index: 600; 
  -webkit-transition: height 0.5s ease-in-out;
  -moz-transition: height 0.5s ease-in-out;
  -ms-transition: height 0.5s ease-in-out;
  -o-transition: height 0.5s ease-in-out;

  ${SuperQuery().minWidth.md.css`
    width: 96%;
    height: calc(${props => props.verticalHeight}vw - 5vw); 
  `}
  ${SuperQuery().minWidth.lg.css`
    height: calc(0.6 * ${props => props.verticalHeight}vw); 
  `}

  /* Position and sizing of clickable cross button */
  .cross-button {
    display: none;
    position: absolute;
    top: 0;
    right: 0 ;
    background: ${ ({ theme }) => theme.colors.background };
    height: 2.25rem !important;
    width: 2.25rem !important;
  }

  /* Color/shape of close button cross */
  .cross {
    background: ${ ({ theme }) => theme.colors.text };
    height: 2.25rem !important;
    width: .375rem !important;
    position: absolute;
    right: 1rem;
  }

  &.showBackground {
    z-index: 1200;
    height: calc(${props => props.verticalHeight}vw - 3vw); 
    
    position: fixed;
    ${SuperQuery().landscape.css`
      height: 95vh; 
    `}  
   
   .cross-button {
     display: block;
   }
  }
`

const Footer__Wrapper = styled.div`
    height: 3rem;
    color: ${({ theme }) => theme.colors.text } !important; 
`
