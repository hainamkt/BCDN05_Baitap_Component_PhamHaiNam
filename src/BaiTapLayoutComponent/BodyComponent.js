import React, { Component } from 'react'
import BannerComponent from './BodyComponent/BannerComponent.js'
import ItemComponent from './BodyComponent/ItemComponent.js'

export default class BodyComponent extends Component {
  render() {
    return (
      <div className='body row my-4'>
        <BannerComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
        <ItemComponent/>
      </div>
    )
  }
}
