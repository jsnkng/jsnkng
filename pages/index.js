import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import LazyLoad, {forceCheck}  from 'react-lazyload'
import Link from 'next/link'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import Footer from '../components/footer'
import Iframe from 'react-iframe'
import Navigation from '../components/navigation'
import fetch from 'isomorphic-unfetch'

const Page = ({ recenttracks, themeName, setThemeName, pageTransitionReadyToEnter }) => {
  const [loaded, setLoaded] = useState(false)
  const [expandIFrame, setExpandIFrame] = useState(false)
  const handleExpandIFrame = () => {
    setExpandIFrame(true)
  }
  const handleCollapseIFrame = () => {
    setExpandIFrame(false)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
    setLoaded(true)
    pageTransitionReadyToEnter()
  }, [])

  useEffect(() => {
    forceCheck()
  })
// const tracks = recenttracks.track.slice(0)
// console.log(tracks)
  if (!loaded) {
    return null
  } else {
    return (
      <>

        <Head>
          <title>JSNKNG</title>
        </Head>

        
        <Hero backgroundURL={``}
          vHeight={'90vh'}> 
          <Grid>
            <Row__Decorated>
              <Col__Decorated xsOffset={1} xs={10} lgOffset={1} lg={9}>

                <br /> <br />
                <p>Hello. I’m <strong><Link href='/about' scroll={false}><a>Jason King</a></Link>.</strong> 
                {` `}I'm a <strong>Creative Technologist,</strong> a <strong><Link href='/web' scroll={false}><a>Full-Stack Web Developer,</a></Link> 
                {` `}<Link href='/design' scroll={false}><a>Graphic Designer</a></Link>, </strong> and
                {` `}<strong><Link href='/art' scroll={false}><a>Visual Artist</a></Link></strong>, 
                {` `}living in <strong>Princeton, NJ.</strong></p>
                
                <br /><p>I’m part of <strong><a href='https://adcycle.co' target='_blank' rel='noopener'>AdCycle</a></strong>, 
                {` `} a boutique <strong>digital agency</strong> 
                {` `} and provide <strong> web & mobile development and support</strong> through 
                {` `} <strong><a href='https://cab408.com' target='_blank' rel='noopener'>CAB408</a></strong>.</p> 
                <br />


              </Col__Decorated>
            </Row__Decorated>
          </Grid>
        </Hero>

        <Navigation parentTitle={`Home`} parentLink={{ href: `/`, as: `/` }} />
        
        

        <Footer themeName={themeName} setThemeName={setThemeName} />

      </>
    )
  }
}

Page.pageTransitionDelayEnter = true

export default Page
 
// Page.getInitialProps = async () => {
//   const apiResult = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=xylonets&api_key=${process.env.LASTFM_API}&format=json`)
//   const result = await apiResult.json()
//   return result
// }

const Content = styled.div`
padding: 2rem 0 0 0;
  strong {
    font-weight: 700;
  }
  a {
    color: ${({ theme }) => theme.colors.color_two};
    border-bottom: 2px dotted;
    text-decoration: none;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.color_one};
  }
  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.25rem;
    ${SuperQuery().minWidth.sm.css`
      font-size: 2rem;
    `}
  }
  p, div {
    font-size: 1.25rem;
    font-weight: 200;
    text-indent: 2rem;
    color: ${({ theme }) => theme.colors.text};
    ${SuperQuery().minWidth.sm.css`
      font-size: 1.5rem;
    `}
  }
  p:first-of-type, div {
    text-indent: 0;
  }
  div {
    padding: 0.375rem 0;
  }

.jasonking {
  background: url(${({ theme }) => theme.colors.jasonking});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  max-width: 100%;
  max-height: 500px;
  width: 100vw;
  height: 100vh;
}
`
const Hero = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0 0 0;
  width: 100%;
  min-height: 90vh;
  max-height: 100%;
  z-index: 5;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.home_text};

  ${SuperQuery().minWidth.of('768px').and.minHeight.of('768px').css`
    height:  ${props => props.vHeight};
    padding: 0 1rem 0 1rem;
  `}
  strong {
    font-weight: 700;
  }
  a {
    color: ${({ theme }) => theme.colors.color_two};
    border-bottom: 2px dotted;
    text-decoration: none;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.color_one};
  }
  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.875rem;
    ${SuperQuery().minWidth.sm.css`
      font-size: 2.5rem;
    `}
  }
  p {
    font-size: 1.75rem;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.text};
    ${SuperQuery().minWidth.sm.css`
      font-size: 2.25rem;
    `}
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



{/*        
        <Content>
          <Grid>
            <Row__Decorated>
              <Col__Decorated xs={12}  md={5} lg={6}>
              <div className='content'>
                <h1>
                  Hello. I'm Jason King and this is what I do.
                </h1>
              </div>
              </Col__Decorated>
          
              <Col__Decorated xs={12} s mdOffset={1}  md={6} lgOffset={1}  lg={5}>
                <div className='content'>
                  <p>
                  JavaScript, HTML, CSS/SCSS, PHP, mySQL, MongoDB, React, Vue, Angular, jQuery, BootStrap, NodeJS, NextJS
                  </p>
                </div>
              </Col__Decorated>
            </Row__Decorated>
          </Grid>
        </Content>

        <Content>
          <Grid>
            <Row__Decorated>
              <Col__Decorated xs={12}  md={5} lg={6}>
              <div className='content'>
                <blockquote>I believe in thinking through projects while doing them. In other words projects become a means to think through other problems. 
                
                I enjoy making prototypes and MVPs, I find writing code is the best way to think through and about the problems we are trying to solve by writing code. If there's a map to follow
                that’s great and I really like working with an organization that provides structure and support, but I'm extremely comfortable taking on large projects on my own and working them through to completion. I
                think it’s a much better approach than over architecting a solution or running into unforseen implementation challenges down the road. Plus most people think better
                about something they can see than they do with their imaginations, so being able to create a draft or prototype out of nothing and then bringing that to the table for greater group input just makes sense. </blockquote>
              </div>
              </Col__Decorated>
             
              <Col__Decorated xs={12} s mdOffset={1}  md={6} lgOffset={1}  lg={5}>
                <div className='content'>
                  <p>Jason King satisfies his passion for making things synthesizing visual, cognitive, and semiotic systems 
                    as an artist, designer, and full-stack web developer. A versatile Creative Technologist he’s worked for a variety of large and small agencies, startups, 
                    and dot-coms over more than 20 years in the industry. Energetic and passionate about making things both artistic and commercial his entrepreneurial 
                    drive has provided him opportunities to experience a range of failures and successes and develop his programming, UX design, project and business management skills.
                  </p>
                </div>
              </Col__Decorated>
            </Row__Decorated>
          </Grid>
        </Content>
*/}
