

const Carousel = () => {
  return (
    <div className=" m-5 w-[50%]  overflow-x-auto overflow-y-scroll no-scrollbar flex rounded-2xl " >
        <div className='group flex animate-scroll    ' >
          <div className=' flex-shrink-0 w-[150px] h-[150px] text-center content-center mx-6 flex items-center  ' ><img src="/imgs/HTML5.png" alt="" /></div>
          <div className=' flex-shrink-0 w-[150px] h-[150px] text-center content-center mx-6 flex items-center  ' ><img src="/imgs/React-icon.svg.png" alt="" /></div>
          <div className=' flex-shrink-0 w-[150px] h-[150px] text-center content-center mx-6 flex items-center   ' ><img src="/imgs/Tailwind_CSS_Logo.svg.png" alt="" /></div>
          <div className=' flex-shrink-0 w-[150px] h-[150px] text-center content-center mx-6 flex items-center  ' ><img src="/imgs/Unofficial_JavaScript_logo_2.svg.png" alt="" /></div>
          <div className=' flex-shrink-0 w-[150px] h-[150px] text-center content-center mx-6 flex items-center  ' ><img src="/imgs/Firebase_icon.svg.png" alt="" /></div>
          <div className=' flex-shrink-0 w-[150px] h-[150px] text-center content-center mx-6 flex items-center border rounded-full ' ><img src="/imgs/node js.png" alt="" /></div>
          <div className=' flex-shrink-0 w-[150px] h-auto text-center content-center mx-6 flex items-center  ' ><img src="/imgs/Postgresql.png" alt="" /></div>
          <div className=' flex-shrink-0 w-[150px] h-auto text-center content-center mx-6 flex items-center border rounded-full  ' ><img src="/imgs/nextjs.png" alt="" /></div>
        </div>
        <div className='group flex animate-scroll  aria-hidden="true" ' >
          <div className=' flex-shrink-0 w-[150px] h-[150px] text-center content-center mx-6 flex items-center  ' ><img src="/imgs/HTML5.png" alt="" /></div>
          <div className=' flex-shrink-0 w-[150px] h-[150px] text-center content-center mx-6 flex items-center  ' ><img src="/imgs/React-icon.svg.png" alt="" /></div>
          <div className=' flex-shrink-0 w-[150px] h-[150px] text-center content-center mx-6 flex items-center  ' ><img src="/imgs/Tailwind_CSS_Logo.svg.png" alt="" /></div>
          <div className=' flex-shrink-0 w-[150px] h-[150px] text-center content-center mx-6 flex items-center  ' ><img src="/imgs/Unofficial_JavaScript_logo_2.svg.png" alt="" /></div>
          <div className=' flex-shrink-0 w-[150px] h-[150px] text-center content-center mx-6 flex items-center  ' ><img src="/imgs/Firebase_icon.svg.png" alt="" /></div>
          <div className=' flex-shrink-0 w-[150px] h-[150px] text-center content-center mx-6 flex items-center border rounded-full ' ><img src="/imgs/node js.png" alt="" /></div>
          <div className=' flex-shrink-0 w-[150px] h-auto text-center content-center mx-6 flex items-center  ' ><img src="/imgs/Postgresql.png" alt="" /></div>
          <div className=' flex-shrink-0 w-[150px] h-auto text-center content-center mx-6 flex items-center border rounded-full  ' ><img src="/imgs/nextjs.png" alt="" /></div>
        </div>
      </div>
  )
}

export default Carousel
