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
                <p>Hello.<br />I’m <strong><Link href='/about#AboutMe' scroll={false}><a>Jason King</a></Link>.</strong>
                {` `}
                {` `}
                </p> 
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
              <Col__Decorated xsOffset={1} xs={10} smOffset={1} sm={10} mdOffset={0} md={7}>
              
              <div>
                <h2>About Me</h2>
                <p>Native Califloridian, I grew up in two Orange Counties at opposite ends of the country, each next to a magic kingdom. I had a fairly
                  standard GenX childhood, malls, arcades, sci-fi, comics, 80’s movies, and D&D. I graduated from the University of Florida in 1997, earning a BA 
                  in Interdisciplinary Film & Media Studies with a secondary focus in Literary Theory and Criticism. I skipped grad school, not liking the prospect of 
                  fighting for tenure as a professor, and instead chose the internet industry. I worked in NYC’s Silicon Alley dot-coms for six years before an opportunity
                  to live in a farmhouse came up and I moved to Princeton.</p> 
                <p>I like to make things, to invent, to create, to experiment with new ways of solving problems. I'm passionate about creating something new, 
                  some knowledge, or some thing, that hasn’t existed before. Software engineering provides ample opportunity to work on these types of problems and 
                  I enjoy writing code as much as I like thinking about architectural design patterns, for what remains I have the visual arts.</p>
              </div>
              <hr />
              <div>
                <p>Multi-disciplinary, proactive, problem-solver with agency and start-up background. Self-directed learner able to process 
                sophisticated material and master new concepts and technologies, encapsulate complex processes, and function across disciplines 
                and departments. Client and stakeholder-focused, tolerant of ambiguity; experienced through complete lifecycle development.</p>
              </div>
              <hr />
              <div>
              <h3>Project Experience</h3>
                <div><strong>Frontend UI </strong>HTML, CSS, JavaScript, Angular, React</div>
                <div><strong>Fullstack Dev </strong> Database, APIs, User Management, Integrations, Email/Fax/Text integration, PDF generation</div>

                <div><strong>ECommerce </strong> WooCommerce, Shopify</div>
                <div><strong>Responsive Design </strong> SASS, Flexbox, Bootstrap</div>
                <div><strong>Accessibility design </strong> WCAG, SEO</div>
                <div><strong>Hybrid Mobile </strong> SPA, PWA, Cordova, Ionic</div>
                <div><strong>Tooling </strong> Automated Build, Continuous Integration</div>
                <div><strong>System Administration </strong> Web & Database servers, Virtualization, Cloud deployments, CVE Remediation</div>
                <br />
                <a href='/Jason_King_Resume.pdf' target='_blank'>Download my Résumé</a>
                <br /> 
                <a href='https://github.com/jsnkng/jsnkng' target='_blank'>View Site on GitHub</a>

                </div>
              </Col__Decorated>

              <Col__Decorated xsOffset={1} xs={10} smOffset={1} sm={10} mdOffset={1} md={4}>
                <div className='jasonking'></div>
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

                <br />
                
              

              </Col__Decorated>
            </Row__Decorated>
          
            </Grid>
         
            {/* <Grid>
              <Row__Decorated>
                <Col__Decorated xsOffset={1} xs={10}>
                  {
                    recenttracks.track.map(item => {
                      console.log(item.name)
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
