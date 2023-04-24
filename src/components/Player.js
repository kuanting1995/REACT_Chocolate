import React from 'react'
import { Player } from 'video-react'
import Chocolatev from '../../src/video/Chocolate.mp4'
export default (_props) => {
  return (
    <Player fluid={false} width={750} height={500} muted={true} autoPlay={true}>
      {/* <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
       */}
      <source src={Chocolatev} /> 
    </Player>
  )
}
