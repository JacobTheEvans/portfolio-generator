import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 8000
}

const TestimonialsSection = styled.div`
  max-width: 750px;
  width: 100%;
  margin: 0 auto;
`

const Text = styled.p`
  text-align: justify;
  line-height: 30px;
  font-size: 18px;
`

const Title = styled.span`
  font-style: italic;
`

function Testimonials ({ testimonials }) {
  return (
    <TestimonialsSection>
      <Slider {...settings}>
        {testimonials.map(({ text, author, authorTitle }) => (
          <div key={text + author}>
            <Text>{text}</Text>
            <p>- <span className='author'>{author}</span> <Title>{authorTitle}</Title></p>
          </div>
        ))}
      </Slider>
    </TestimonialsSection>
  )
}

export default Testimonials
