import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import LazyLoad, {forceCheck}  from 'react-lazyload'
import Link from 'next/link'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Navigation from '../../../components/navigation'

const Page = ({ 
  collections,
  themeName, 
  setThemeName, 
  pageTransitionReadyToEnter }) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
    setLoaded(true)
    pageTransitionReadyToEnter()
  }, [])

  useEffect(() => {
    forceCheck()
  })

  /* Choose a random item to be the hero */
  const [heroIdx, setHeroIdx] = useState(0)

  /* Create a copy of data  and remove the hero item from it */
  const collectionsThumbs = [ ...collections ]
  collectionsThumbs.splice(heroIdx,1)

  if (!loaded) {
    return null
  } else {
    return (
      <>
        <Head>
          <title>JSNKNG {collections[heroIdx].collectionTitle}</title>
        </Head>

        <Content>
        <Link href={`/collections/[collectionType]/collection/[collectionName]`} as={`/collections/${collections[heroIdx].collectionType}/collection/${collections[heroIdx].collectionName}`} >
          <a>
          <Header 
            heroBackground={collections[heroIdx].collectionBackground}
            heroHeight={`100vh`}
            heroTitle={collections[heroIdx].collectionTitle} 
            heroLogo={collections[heroIdx].collectionLogo}
            heroSubtitle={``}
            heroDescription={collections[heroIdx].aboutCollection}
            parentTitle={`Home`}
            parentLink={{ href: `/`, as: `/` }}
          />
          </a>
        </Link>
          <Navigation parentTitle={`Home`} parentLink={{ href: `/`, as: `/` }} />
          {
            collectionsThumbs.slice().map(collection => {
              return (
                <Link href={`/collections/[collectionType]/collection/[collectionName]`} as={`/collections/${collection.collectionType}/collection/${collection.collectionName}`} >
                <a>
                <Header 
                  heroBackground={collection.collectionBackground}
                  heroHeight={`100vh`}
                  heroTitle={collection.collectionTitle} 
                  heroLogo={collection.collectionLogo}
                  heroSubtitle={``}
                  heroDescription={collection.aboutCollection}
                  parentTitle={`Home`}
                  parentLink={{ href: `/`, as: `/` }}
                />
                </a>
                </Link>
              )
            })
          }
        </Content>

        <Footer themeName={themeName} setThemeName={setThemeName} />
      </>
    )
  }
}

Page.pageTransitionDelayEnter = true

export default Page
 
Page.getInitialProps = async ({ req, query }) => {
  const { collectionType } = query
  const { origin }  = absoluteUrl(req)
  const collectionsResult = await fetch(`${origin}/api/collections/${collectionType}`)
  const result = await collectionsResult.json()
  result.collectionType = collectionType
  return result
}
 
const Content = styled.div`
`
const Hero = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 5rem 1rem 2rem 1rem;
  z-index: 5;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.home_text };
  font-size: 1.25rem;
  ${SuperQuery().minWidth.of('768px').and.minHeight.of('768px').css`
    font-size: 1.75rem;
    min-height:  90vh;
    padding: 2rem 1rem 2rem 1rem;
  `}

  a {
    color:#fff; 
    text-decoration: none; 
  }
  a span {
    font-size: 1.25rem;
    display: inline-block;
    padding: 1rem 0 0 0;
    text-decoration: underline;
  }
  h3 {
    font-size: 3rem;
    font-weight: 200;
    letter-spacing: -0.05em;
    line-height: 1.2;
  }
`
const Row__Decorated = styled(Row)`
  width: 100%;
  margin: 0;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${SuperQuery().minWidth.md.css`
    flex-direction: row;
    justify-content: right;
  `}
  &.reversible {
    flex-direction: column-reverse;
    ${SuperQuery().minWidth.md.css`
      flex-direction: row;
      justify-content: left;
    `}
  }
`
const Col__Decorated = styled(Col)`
  position: relative;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
`

const Grid__Decorated = styled(Grid)`
  width: 100%;
  margin: 0;
  padding: 0;
`
const BackgroundOverlay = styled.div`
  display: block; 
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100vw;
  z-index: 0;
  opacity: 1;
  background-color: ${({ theme }) => theme.colors.image_overlay_light };
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  
`
