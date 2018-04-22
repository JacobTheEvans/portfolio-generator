import React from 'react'
import styled from 'styled-components'

const ProfileSection = styled.div`
  max-width: 750px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

const Image = styled.div`
  height: 235px;
  width: 40%;
  padding: 10px;
  background-position: top;
  background-size: cover;
`

const Description = styled.div`
  width: 55%;
  padding: 10px;
  font-size: 18px;
  line-height: 30px;
  text-align: justify;
  margin: 0;
`

function Profile ({ img, description }) {
  return (
    <ProfileSection>
      <Image className='img' style={{ backgroundImage: `url(${img})` }} />
      <Description>{description}</Description>
    </ProfileSection>
  )
}

export default Profile
