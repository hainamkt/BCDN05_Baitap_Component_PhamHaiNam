import React, { Component } from 'react'

export default class BannerComponent extends Component {
  render() {
    return (
      <div className='banner col-12 mb-4'>
        <h2>A Warm Welcome!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officia veritatis assumenda, asperiores, ut nihil nesciunt dignissimos iure corrupti animi quidem facilis. Repellat natus, odit perferendis facilis culpa sed aliquid, placeat necessitatibus dolor ratione ut.</p>
        <button className='btn btn-primary'>Call to action!</button>
      </div>
    )
  }
}
