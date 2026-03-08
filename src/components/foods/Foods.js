/* eslint-disable jsx-a11y/alt-text, jsx-a11y/anchor-is-valid */
import React from 'react'
import Data from '../../Data';
import './foods.css'

export default function Foods() {
    const blogsItem = Data.map((item)=>{
        return(
          <div className='col-md-4' key={item.id}>
            <div className='box'>
              <img src={item.img} />
              <h5>{item.title}</h5>
              <span>{item.time}</span>
              <h6>{item.price}</h6>
            </div>
            <button>
              <a href='#'>Order now</a>
            </button>
          </div>
        )
      })

  return (
    <section className='blogs' id='explore'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 col-md-12'>
          <h2>Explore Our Foods</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
        </div>
      </div>
      <div className='row'>
        {blogsItem}
      </div>
    </div>
   </section>
  )
}
