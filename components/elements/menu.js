import React from 'react'
import { slide as Menu } from 'react-burger-menu'

const Element = ({ right, isMenuOpen, handleMenuStateChange, manageFuture }) => {
  return (
      <Menu 
        right={right}
        isOpen={isMenuOpen}
        onStateChange={handleMenuStateChange}
        outerContainerId={'outer__wrapper'}
        pageWrapId={'inner__wrapper'}>
        <ul className='navigation__links'>
          <li onClick={() => {manageFuture('/fineart/', '/fineart/')}}>Fine Art</li>
          <li onClick={() => {manageFuture('/collection/[collectionName]/', '/collection/Mythologies/')}}>Mythologies</li>
          <li onClick={() => {manageFuture('/collection/[collectionName]/', '/collection/Nature_Morte/')}}>Nature Morté</li>
          <li onClick={() => {manageFuture('/collection/[collectionName]/', '/collection/Starlight_Meadows/')}}>Starlight Meadows</li>
          {/* <li onClick={() => manageFuture('/collection/[collectionName]/', '/collection/Mythologies/')}>Gator Labs</li> */}
        </ul>
      </Menu> 
  )
}

export default Element
