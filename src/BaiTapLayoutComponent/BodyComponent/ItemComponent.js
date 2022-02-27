import React, { Component } from 'react'

export default class ItemComponent extends Component {
  render() {
    return (
      <div className='item col-3'>
        <img src="https://picsum.photos/seed/picsum/200/150" alt="" />
        <h3>Card title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro tenetur, ut harum sapiente amet dolor!</p>
        <button className='btn btn-primary'>Find Out More!</button>
      </div>
    )
  }
}
