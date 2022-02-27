import React, { Component } from 'react'
import BodyComponent from './BodyComponent.js'
import FooterComponent from './FooterComponent.js'
import HeaderComponent from './HeaderComponent.js'

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div className='container'>
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
      </div>
    )
  }
}
