import React from 'react'


const LoadingAnimation = () => {
  return (
    <div id={'globalLoader'} className=' z-[100] fixed flex justify-center items-center w-[100%] h-[100vh] bg-[#080F25] bg-opacity-[.4] '>
      <div className=' bg-[#070e24] rounded-md w-[14rem] h-[14rem]  ' >
        <svg className=' scale-[1.2] translate-x-[8%] translate-y-[33%] w-[100%] h-[100%]  ' preserveAspectRatio="xMidYMid meet"  >
          <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" fill="none" id="outline" stroke="#4E4FEB"></path>
          <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#4E4FEB" fill="none" opacity="0.05" id="outline-bg"></path>
        </svg>
      </div>
    </div>
  )
}

export default LoadingAnimation
