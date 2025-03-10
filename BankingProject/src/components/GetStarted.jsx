import React from 'react'
import styles from '../style'
import {arrowUp} from '../assets'

const GetStarted = () =>  (
    <div className={`${styles.flexCenter} h-[140px] w-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'><span className='text-gradient'>Get</span>
          </p>
          <img src={arrowUp} className='w-6 h-6 object-contain' alt='arrow' />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'><span className='text-gradient'>Started</span>
          </p>
      </div>
    </div>
  )

export default GetStarted