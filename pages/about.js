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

const Page = ({ recenttracks, themeName, setThemeName, setPageTitle, pageTransitionReadyToEnter }) => {
  
  
  const [loaded, setLoaded] = useState(false)
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
          <title>Jason King: Engineer/Designer/Artist - About</title>
          <meta property="og:title" content="Jason King: Engineer/Designer/Artist - About" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://jsnkng.com/about" key="url" />
          <meta property="og:image" content="https://jsnkng.com/jsnkng_256_invert.png" />
        </Head>

        
        <Hero backgroundURL={``}
          vHeight={'90vh'}> 
          <Grid fluid={true}>
            <Row__Decorated>
              <Col__Decorated xs={24}>
                <br />
                <p>Hello.<br />I’m <strong><Link href='/about#AboutMe' scroll={false}><a>Jason&nbsp;King</a></Link>.</strong></p> 
                <br />
              </Col__Decorated>
            </Row__Decorated>
          </Grid>
        </Hero>

        <Navigation parentTitle={`Home`} parentLink={{ href: `/`, as: `/` }} />
        <a id="AboutMe"></a>
        <Content>
          <Grid>
          <Row__Decorated>
              <Col__Decorated  xsOffset={1} xs={22} smOffset={1} sm={20} mdOffset={0} md={14}>
              
              <div>
                <h2>About Me</h2>
                <p>Native Califloridian, I grew up in two Orange Counties at opposite ends of the country and later graduated from the University of Florida, earning a BA 
                  in Interdisciplinary Film & Media Studies with a secondary focus in Literary Theory and Criticism. 
                  After college I moved up to New Jersey, lived in Metuchen and Hoboken, and worked in NYC’s Silicon Alley dot-coms for six years before an opportunity to 
                  live in a farmhouse came up and I moved to Princeton where I have been been ever since.</p> 
                <p>I’m driven by the need to make things, to invent, to create, to experiment with new ways of solving problems. My mission is always to create something new, 
                  some knowledge, or some thing, that hasn’t existed before whether that’s a work of art, a product of design, an information-rich application, or a combination
                  of all three. </p>
              </div>
              <div className='jasonking xs'></div>
              <div>
             
              {/* <h3>Project Experience</h3>
                <div><strong>Frontend UI </strong>HTML5, CSS/SCSS, ES6 JavaScript, Angular, React, jQuery, Bootstrap</div>
                <div><strong>Fullstack Dev </strong> Database, APIs, User Management, Integrations, Email/Fax/Text integration, PDF generation</div>

                <div><strong>ECommerce </strong> WooCommerce, Shopify</div>
                <div><strong>Responsive Design </strong> SASS, Flexbox, Bootstrap</div>
                <div><strong>Accessibility design </strong> WCAG, SEO</div>
                <div><strong>Hybrid Mobile </strong> SPA, PWA, Cordova, Ionic</div>
                <div><strong>Tooling </strong> Automated Build, Continuous Integration</div>
                <div><strong>System Administration </strong> Web & Database servers, Virtualization, Cloud deployments, CVE Remediation</div> */}

                </div>
              </Col__Decorated>

              <Col__Decorated xsOffset={1} xs={20} smOffset={1} sm={20} mdOffset={1} md={8}>
                <div className='jasonking md'></div>
                
              

              </Col__Decorated>
            </Row__Decorated>
              <hr />
            <Row__Decorated>
              <Col__Decorated  xsOffset={1} xs={22} smOffset={1} sm={20} mdOffset={0} md={14}>
                <div>
                  <h3>Languages & Tools</h3>
                  <div><strong>JavaScript </strong> ES6, NodeJS, React, Vue, AngularJS, jQuery</div>
                  <div><strong>PHP </strong>Laravel, Composer </div>
                  <div><strong>Markup </strong>HTML, JSX, Pug, Handlebars, Markdown, Liquid</div>
                  <div><strong>Database </strong>MySQL, MongoDB</div>
                  <div><strong>Style </strong>CSS, SCSS, LESS, Styled Components, Bootstrap</div>
                  <div><strong>Build </strong> NPM, Yarn, Gulp, Webpack, Babel, Grunt</div>
                  <h3>Systems</h3>
                  <div><strong>Linux </strong>Debian/Ubuntu, CentOS, CLI, Apache, MySQL, Nginx</div>
                  <div><strong>Cloud </strong>Docker/Kubernetes, AWS, Digital Ocean, Rackspace, GCE, Proxmox</div>
                  <h3>UX & Design</h3>
                  <div>Photoshop, Illustrator, Premiere, Sketch</div>
                  <h3>Project Management</h3>
                  <div>GitHub/GitLab, JIRA, Slack, Trello</div>
                  <br /> 
                </div>
              </Col__Decorated>

              <Col__Decorated xsOffset={1} xs={20} smOffset={1} sm={20} mdOffset={1} md={8}>
                <h3>Profile</h3>
                <p>Multi-disciplinary, proactive, problem-solver with agency and start-up background. Self-directed learner able to process 
                sophisticated material and master new concepts and technologies, encapsulate complex processes, and function across disciplines 
                and departments. Client and stakeholder-focused, tolerant of ambiguity; experienced through complete lifecycle development.</p>
                <br />
                {/* <a href='/Jason_King_Resume.pdf' target='_blank'>Download my Résumé</a>
                <br />  */}
                <a href='https://github.com/jsnkng/jsnkng' target='_blank'>View the Site on GitHub</a>
                <br />
                <a href='https://www.linkedin.com/in/jsnkng/' target='_blank'>Find Me on LinkedIn</a>
                <br /> 
                <a href='https://www.instagram.com/jsnkng/' target='_blank'>Follow Me on Instagram</a>
                <br />
                
              </Col__Decorated>
            </Row__Decorated>
          
            </Grid>
         
            {/* <Grid>
              <Row__Decorated>
                <Col__Decorated xsOffset={1} xs={20}>
                  {
                    recenttracks.track.map(item => {
                      return (
                        <div>{item.name}</div>
                      )
                    })
                  }
                
                </Col__Decorated>
              </Row__Decorated>
            </Grid> */}
          </Content>

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
  padding: 4rem 0 0 0;
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
  h3 {
    padding: 0;
    margin: 1rem 0 0 0;
  }

  p, div {
    font-size: 1.25rem;
    font-weight: 200;
    text-indent: 2rem;
    color: ${({ theme }) => theme.colors.text};
    ${SuperQuery().minWidth.sm.css`
      font-size: 1.25rem;
    `}
  }
  p:first-of-type, div {
    text-indent: 0;
  }
  div {
    padding: 0.375rem 0;
  }
  hr {
    overflow: visible; /* For IE */
    height: 30px;
    border-style: solid;
    border-color:  ${({ theme }) => theme.colors.text};
    border-width: 1px 0 0 0;
    margin-left: -20px;
    border-radius: 20px;
  }
  hr:before { /* Not really supposed to work, but does */
    display: block;
    content: "";
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color:  ${({ theme }) => theme.colors.text};
    border-width: 0 0 1px 0;
    border-radius: 20px;
  }
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
  margin: 3rem 0;
  &.xs {

    display: block;
    ${SuperQuery().minWidth.md.css`
      display: none;
    `}
  }
  &.md {
      display: none;
    ${SuperQuery().minWidth.md.css`
      display: block;
    `}
  }
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
