import React from 'react'
import Link from 'next/link'
import useWindowDimensions from '../hooks/useWindowDimensions'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

const Component = ({ 
    parentTitle,
    parentLink,
  }) => {
  const windowDimension = useWindowDimensions()
  return (
    <>
    <Spacer />
    <Navigation className={windowDimension.scrollY >= Math.round(0.9 * windowDimension.height) && 'fixed' }>
      <Link href={parentLink.href} as={parentLink.as} scroll={false}>
        <a className='navigation__title'>
          {parentTitle}
        </a>
      </Link>
      <Link href='/' scroll={false}>
        <a className='navigation__logo'>
          <div className='navigation__img'></div>
        </a>
      </Link>
    </Navigation>
    </>
  )
}

export default Component

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.trans_back};
  color: ${({ theme }) => theme.colors.text};
  z-index: 800;

  ${SuperQuery().minWidth.sm.css`
    position: relative;
    margin-top: -4rem;
  `}
  &.fixed {
    position: fixed;
    top: 0vh;
    left: 0;
    right: 0;
    margin: 0;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
    margin: 0;
    padding: 0;
  }
  .navigation__logo {
    align-self: center;
    width: 48px;
    height: 48px;
    margin-right: 0.5rem;
    z-index: 800;
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
  .navigation__img {
    background-image: url(${({ theme }) => theme.colors.logoURL});
    background-size: contain;
    background-repeat: none;
    width: 48px;
    height: 48px;
  }
  .navigation__title {
    flex: 0 1 auto;
    font-size: 1rem;
    line-height: 1.1;
    font-weight: 400;
    letter-spacing: -0.05em;
    padding: 0 1rem 0 4.5rem;
    z-index: 800;
    ${SuperQuery().minWidth.sm.css`
      font-size: 1.5rem;
    `}
    ${SuperQuery().minWidth.md.css`
      padding: 0 1rem 0 5rem;
    `}
  }
`
const Spacer = styled.div`
    display: none;
    height: 4rem;
    z-index: 0;
    ${SuperQuery().minWidth.sm.css`
    display: block;
    `}
    
`