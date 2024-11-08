import React from 'react';
import Images from '../Assets/Batman-logo.jpeg';
import Videos from './Supra.mp4';

const Pictures = () => {


  return (
    <div>
      {/* <h1>Image Implement Format</h1> 
       <img src={Images}  alt="No Images" height={500} width={800}/> */}

      <h1>Video Implement Format</h1>
      <video width="1300" height="600" autoplay >
        <source src={Videos} alt="No Videos" /></video>

    </div>

  )
}

export default Pictures;
