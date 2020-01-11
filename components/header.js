import React from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import { Arrow } from '../svgs/l-arrow.svg'

const Component = ({ title, title__sub, manageHistory, manageFuture }) => {
  /* Hacky, but trying to set semi intelligent sizes and margins based on title length */
  const titleStyle = (title.length >= 29 && title__sub !== '') ? { fontSize: '1.175rem', margin: '0.625rem 0 0 1.75rem' } :
  (title.length >= 29 && title__sub === '') ? { fontSize: '1.175rem', margin: '0.875rem 0 0 1.75rem' } : 
  (title.length >= 27 && title__sub !== '') ? { fontSize: '1.175rem', margin: '0.875rem 0 0 1.75rem' } :
  (title.length >= 27 && title__sub === '') ? { fontSize: '1.175rem', margin: '0.875rem 0 0 1.75rem' } : 
  (title.length > 24 && title__sub !== '') ? { fontSize: '1.25rem', margin: '0.875rem 0 0 1.75rem' } : 
  (title.length > 24 && title__sub === '') ? { fontSize: '1.25rem', margin: '1.25rem 0 0 2.25rem' } : {}

  return (
    <Header>
      <Row__Decorated>
        <Col xs={9} md={10}>
          <Back onClick={() => manageHistory()}>
            <Arrow__Decorated />
            <span className={title__sub === '' ? 'title large' : 'title'} style={titleStyle}>{title}</span>
            { title__sub !== '' &&
              <span className="title__sub">{title__sub}</span>
            }
          </Back>
        </Col>
        <Col xs={3} md={2}>
          <div onClick={() => manageFuture('/', '/')}>
            <img className="logo" src="/apple-icon-144x144.png" width="72" alt="Jason King" />
            <a className="logo__text" href="#">JSNKNG</a>
          </div>
        </Col>
      </Row__Decorated> 
    </Header>
  )
}

export default Component

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.trans_back};
  color: ${({ theme }) => theme.colors.text};
  z-index: 100;
  height: 4rem;
  ${SuperQuery().maxWidth.of('896px').and.landscape.css`
    position: relative;
  `}
  ${SuperQuery().minWidth.md.css`
    height: 5rem;
  `}
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
  img.logo {
    position: absolute;
    top: .5rem;
    right: .125rem;
    cursor: pointer;
    border: none;
    width: 2.75em;
    margin: .125rem;
    padding: 0;
    ${SuperQuery().minWidth.md.css`
      width: 3.5rem;
      margin: .25rem .125rem;
    `}
  }
  .logo__text {
    display: block;
    text-align:right;
    font-size: .925rem;
    line-height: .875;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 0.8rem 2.875rem 0 -3rem;
    ${SuperQuery().minWidth.md.css`
      margin: 1rem 4.125rem 0 -3rem;
      font-size: 1.125rem;
      letter-spacing: -1.5px;
    `}
  }
`
const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
  height: 4rem;
`
const Back = styled.div`
  max-width: 100%;
  height: 5rem;
  overflow: hidden;
  .title {
    display: block;
    float: left;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -1.5px;
    margin: 0.8rem 0 0 1.75rem;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.875rem !important;
      margin: 1rem 0 0 2.5rem !important;
    `}

    &.large {
      margin: 1.25rem 0 0 1.75rem;
      font-size: 1.375rem;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.875rem !important;
      margin: 1.5rem 0 0 2.5rem !important;
    `}
    }
  }
  .title__sub {
    display: block;
    float: left;
    clear: left;
    font-size: 1rem;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -0.5px;
    margin: 0 0 0 1.75rem;
    
    ${SuperQuery().minWidth.md.css`
      margin: 0 0 0 2.5rem;
      font-size:1.25rem;
      letter-spacing: -1px;
    `}
  }
`
const Arrow__Decorated = styled(Arrow)`
  position: absolute;
  top: .875rem;
  left: 0;
  width: 2.25rem;
  height: 2.25rem;
  fill: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  outline: none;
  ${SuperQuery().minWidth.md.css`
    top: 1.25rem;
    left: 0.25rem;
    width: 2.5rem;
    height: 2.5rem;
  `}
`
