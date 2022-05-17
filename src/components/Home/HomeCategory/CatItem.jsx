import React from 'react'
import {MdPersonOutline} from 'react-icons/md'
import FramerMotion from '../../../FramerMotion'
import shape2 from './../../../Assets/images/Home/shape-02.png'
export default function CatItem() {
  return (
    <FramerMotion>
    <div className='catitem'>
        <div className="catitem__top">
            <MdPersonOutline className='catitem__top__icon' size={30} />
            <p className='catitem__top__text'>۲۳ درس</p>
        </div>
        <div className="catitem__content">
            <h5 className='catitem__content__title'>
            لورم ایپسوم متن
            </h5>
            <p className='catitem__content__text'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از 
            </p>
        </div>
    </div>
    </FramerMotion>
  )
}
