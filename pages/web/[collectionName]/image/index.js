import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import styled from 'styled-components'
import { useSwipeable, Swipeable } from 'react-swipeable'
import LazyLoad, { forceCheck } from 'react-lazyload'
import Header from '../../../../components/header'
import Footer from '../../../../components/footer'


const Page = ({ collectionTitle, collectionName, imageName, images, themeName, setThemeName, pageTransitionReadyToEnter }) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
    setLoaded(true)
    pageTransitionReadyToEnter()


  }, [])
  
  const [currentIdx, setCurrentIdx] = useState(images.findIndex(i => i.name === imageName))
  const [[image], setImage] = useState(images.filter(image => image.name === imageName))
  useEffect(() => {
    setCurrentIdx(images.findIndex(i => i.name === imageName))
    setImage(images.filter(image => image.name === imageName))
  }, [imageName])

  const [prevIdx, setPrevIdx] = useState()
  const [nextIdx, setNextIdx] = useState()
  useEffect(() => {
    setPrevIdx(currentIdx > 0 ? currentIdx - 1 : images.length - 1)
    setNextIdx(currentIdx < images.length - 1 ? currentIdx + 1 : 0)
  }, [currentIdx])

  const [verticalHeight, setVerticalHeight] = useState()
  useEffect(() => {
    setVerticalHeight(Number(image.ratio.split(':')[1])/Number(image.ratio.split(':')[0]) * 100)
  }, [image])

 

  useEffect(() => {
    forceCheck()
  })

  const handleLeftSwipe = () => {

    setShowBackground(true)
    Router.push(`/collection/[collectionName]/image/[imageName]`, `/collection/${collectionName}/image/${images[nextIdx].name}`)
  }
  const handleRightSwipe = () => {
    setShowBackground(true)
    Router.push(`/collection/[collectionName]/image/[imageName]`, `/collection/${collectionName}/image/${images[prevIdx].name}`)
  }
  const [showBackground, setShowBackground] = useState(false)
  const backgroundHide = () => {
    setShowBackground(false)
  }
  const backgroundShow = () => {
    setShowBackground(true)
  }
  const handlers = useSwipeable({
    onSwipedLeft: handleLeftSwipe,
    onSwipedRight: handleRightSwipe,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  })

  if (!loaded) {
    return null
  } else {
    return (
    <div {...handlers}>
    <Head>
      <title>JSNKNG : {collectionName} : {imageName}</title>
    </Head>
    <Content verticalHeight={verticalHeight}>
      <BackgroundOverlay 
        className={showBackground ? 'showBackground' : ''}
        onClick={backgroundHide} />
        <Header 
          heroBackground={`/gallery/${collectionName}/${imageName}/image_ii.jpg`}
          heroHeight={'90vh'}
          heroTitle={image.title} 
          heroSubtitle={image.year} 
          parentTitle={collectionTitle}
          parentLink={{
            href: `/web/[collectionName]/`, 
            as: `/web/${collectionName}/` 
          }}
        />
        <Grid fluid={true}>
          <Row__Decorated>
          
             <Col__Decorated xs={12} md={8}>
                  <ResponsiveImage 
                    className={showBackground ? 'showBackground' : ''}
                    onClick={backgroundShow}
                    verticalHeight={verticalHeight} 
                    backgroundURL={`/gallery/${collectionName}/${imageName}/image.jpg`} 
                  >

                  <div className='item__nav'>
                    <Link 
                      scroll={false} 
                      href={`/web/[collectionName]/image/[imageName]`} 
                      as={`/web/${collectionName}/image/${images[prevIdx].name}`}
                    >
                      <a>
                        <div className='item__prev'>
                        </div>
                      </a>
                    </Link>
                    <Link 
                      scroll={false} 
                      href={`/web/[collectionName]/image/[imageName]`} 
                      as={`/web/${collectionName}/image/${images[nextIdx].name}`}
                    >
                      <a>
                        <div className='item__next'>
                        </div>
                      </a>
                    </Link>
                  </div>

                  </ResponsiveImage>
            </Col__Decorated>
             <Col__Decorated xs={12} md={4}>

                  <div className='item__meta'>
                    <div className='item__details'>
                      <div className='item__title'>{image.title}</div> 
                      <div className='item__year'>{image.year}</div>
                      <div className='item__tags'>{image.tags}</div>
                    </div>
                    <div className='item__shop'>
                      <a href={`${process.env.SHOP_URL}${image.name.toLowerCase().replace(/_/g, '-')}`} target='_blank' rel='noopener'>
                        Shop
                      </a>
                    </div>
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
  const collectionResult = await fetch(`${origin}/api/web/${collectionName}`)
  const result = await collectionResult.json()
  result.imageName = imageName
  result.collectionName = collectionName
  return result
}


const Content = styled.main`
  .image {
    margin: 0;
  }
  .image__primary {
      min-height: 40vh;
    img {
      width: 100%;
    }
  }
  .image__enlargements {
    margin: 0;
    padding: 0 .5rem;
  }
  .image__enlarged {
    div {
      margin: .25rem;
      width: width: 100%;
      height: 97vw;
      ${SuperQuery().minWidth.sm.css`
        height: 49vw;
      `}
      ${SuperQuery().minWidth.md.css`
        height: 25vw;
      `}
    }
  }
  .item__nav {
    display:none;
    position: absolute;
    bottom: 1rem;
    left: 0;
    justify-content: space-between;
    align-items:flex-start;
    width: 100%;
    padding: 0rem;
    color: ${ ({ theme }) => theme.colors.text };
    z-index:  -1;
    ${SuperQuery().minWidth.md.css`
      z-index:  200;
      display:flex;
    `}
    
    a { 
      color: ${ ({ theme }) => theme.colors.color_two };  
    }
  }
  .item__next {
    text-align: right;
    width: 1rem;
    height: 97vw;
    margin-right: -0.25rem;
    padding: 0.5rem;
    ${SuperQuery().minWidth.md.css`
    width: 12rem;
    `}
  }
  .item__prev {
    text-align: left;
    width: 1rem;
    height: 97vw;
    margin-left: -0.25rem;
    padding: 0.5rem;
    ${SuperQuery().minWidth.md.css`
    width: 12rem;
    `}
  }

  .item__meta {
    z-index:  100;
    display: flex;
    justify-content: space-between;
    align-items:flex-start;
    color: ${ ({ theme }) => theme.colors.text };
    a { 
      color: ${ ({ theme }) => theme.colors.color_two };  
    }
  }
  .item__details {
    margin: 0 1rem;
  }
  .item__title {
    font-size: 1.25rem;
    line-height: 1;
    ${SuperQuery().minWidth.sm.css`
      font-size: 2rem;
    `}
  }
  .item__year,
  .item__tags {
    font-size: 0.75rem;
    line-height: 1.2;
    ${SuperQuery().minWidth.sm.css`
      font-size: 1rem;
    `}
  }
  
  .item__shop {
    margin: 0 1rem;
    line-height: 1.2;
    background: ${ ({ theme }) => theme.colors.text };
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
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  &.showBackground {
    display: block;
    opacity: 1;
  }
`
const ResponsiveImage = styled.div`
  position: relative;
  top: 0;
  left: 0;
  background-image: url(${props => props.backgroundURL});
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: calc(${props => props.verticalHeight}vw - 2rem); 
  margin: 1rem 0;
  z-index: 600; 
  -webkit-transition: height 0.5s ease-in-out;
  -moz-transition: height 0.5s ease-in-out;
  -ms-transition: height 0.5s ease-in-out;
  -o-transition: height 0.5s ease-in-out;
  &.showBackground {
    height: ${props => props.verticalHeight}vw; 
    z-index: 1200;
  }
`

const EnlargedImages = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: 50vw;
  margin: 0;
  z-index: 10;
  -webkit-animation: myfirst 1s;
  animation: myfirst 1s;
`

const Footer__Wrapper = styled.div`
    height: 3rem;
    color: ${({ theme }) => theme.colors.text } !important; 
`
