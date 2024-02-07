import React from 'react'

const SwitchButtons = () => {
  return (
    <div className='w-full flex border-b border-custom py-[3px]'>
        <div className='relative w-1/2 h-12 flex items-center justify-center'>
            <span className='text-skin-primary font-bold'>For you</span>
            <div className='absolute bottom-0 bg-custom h-[4px] min-w-[3.7rem] rounded-sm'></div>
        </div>
        <div className='w-1/2 h-12  flex items-center justify-center'>
            <span className='text-skin-secondary text-md font-semibold'>Following</span>
        </div>
    </div>
  )
}

export default SwitchButtons