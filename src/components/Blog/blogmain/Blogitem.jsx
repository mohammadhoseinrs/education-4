import React from 'react'
import './Blogitem.css'
import {AiOutlineTags} from 'react-icons/ai'
import {BsCalendar2Minus ,BsArrowLeft} from 'react-icons/bs'
import post1 from './../../../Assets/images/Home/post-01.jpeg'
export default function Blogitem() {
  return (
    <div className='blogitem'>
        <div className="blogitem__top">
            <img src={post1} alt="" />
        </div>
        <div className="blogitem__bottom">
            <div className="blogitem__bottom__top">
                <AiOutlineTags />
                <p>فیزیک</p>
            </div>
            <div className="blogitem__bottom__title">
آموزش CSS از مقدماتی تا پیشرفته + پروژه های کاربردی
            </div>
            <div className="blogitem__bottom__bottom">
                <div className="blogitem__bottom__bottom__right">
                    <BsCalendar2Minus />
                    <p>۱۲ فروردین ۱۴۰۰</p>
                </div>
                <div className="blogitem__bottom__bottom__left">
                    <p>بیشتر بخوانید</p>
                    <BsArrowLeft />
                </div>
            </div>
        </div>
    </div>
  )
}
