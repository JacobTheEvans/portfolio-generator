import React from 'react'
import Slider from 'react-slick'
import './Testimonials.css'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 8000
}

function Testimonials ({ testimonials }) {
  return (
    <div className='testimonials'>
      <Slider {...settings}>
        {
          testimonials.map(({ text, author, authorTitle }) => (
            <div key={text + author}>
              <p className='text'>{text}</p>
              <p>- <span className='author'>{author}</span> <span className='title'>{authorTitle}</span></p>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default Testimonials
