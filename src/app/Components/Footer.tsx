import React from 'react'









const Footer = () => {
  return (
    <footer>

      <div className='w-full bg-white mt-9 pt-9 text-black flex justify-center items-center'>
        <div className='w-[1240px] h-auto flex flex-row gap-10 items-center'>
          


            <div className=' flex flex-col'>



              <p className='w-[206px] leading-[24px] font-light text-gray-600 whitespace-nowrap'>400 University Drive Suite 200 Coral </p>
              <p className='w-[206px] leading-[24px] font-light text-gray-600'> Gables,
              </p>
              <p className='w-[206px] leading-[24px] font-light text-gray-600'>
                FL 33134 USA</p>
            </div>





            <div className='flex flex-col mt-4 pl-[200px]' >
              <div >
                <h1 className='font-normal text-gray-600'>Links</h1>
                <div className='w-[66px] h-[233px] flex flex-col gap-6 mt-6'>
                  <a href='/'> Home </a>
                  <a href='/'> Shop </a>
                  <a href=''> About </a>
                  <a href='/'> Contact </a>
                </div>
              </div>
            </div>


            <div className='flex flex-col mt-4 pl-[100px]'>
              <div >
                <h1 className='font-normal text-gray-600'>Help</h1>
                <div className='w-[66px] h-[233px] flex flex-col gap-6 mt-6'>
                  <a href='/' className='whitespace-nowrap'> Payment Options </a>
                  <a href='/'> Returns </a>
                  <a href='/' className='whitespace-nowrap'> Privacy Policies </a>

                </div>
              </div>
            </div>
         


          {/* /news letter/ */}
          <div  className="  flex justify-between  pl-[100px] items-center">
           
           
              <form className="flex flex-col items-start w-full ">
                <label className='text-gray-500 pl-2'>Newsletter</label>
                
                <div className='flex justify-center items-center'>
                <input type="email" id="email" placeholder="Enter your email" className=" text-gray-900  w-full p-2.5 hover:underline" required />
                <button type="submit" className="text-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark hover:underline">SUBSCRIBE</button>
                </div>
              </form>
            
            
          </div>

         











        </div>
        

      </div>
      <div className='flex justify-start items-center font-light'>
          <p>2022 Meubel House. All rights reverved</p>
         </div>
    </footer>
  )
}

export default Footer
