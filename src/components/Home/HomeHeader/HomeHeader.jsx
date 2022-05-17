import React from 'react'
import Mainbtn from '../../Mainbtn'
import './HomeHeader.css'
import arrow from './../../../Assets/images/Home/arrow.png'
import banner1 from './../../../Assets/images/Home/banner-01.png'
import shape1 from './../../../Assets/images/Home/shape-19.png'
import shape2 from './../../../Assets/images/Home/shape-05.png'
import shape3 from './../../../Assets/images/Home/shape-06.png'

export default function HomeHeader() {
  return (
    <section className='homeheader'>
        <section className='homeheader__container'>
            <section className='homeheader__inner'>
                <section className='homeheader__inner__right'>
                    <div className="homeheader__inner__right__inner">
                        <span className="homeheader__inner__right__inner__top">
                        لورم ایپسوم متن ساختگی با تولید
                        </span>
                        <h1 className='homeheader__inner__right__inner__title'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
                        </h1>
                        <p className='homeheader__inner__right__inner__subtitle'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  
                        </p>
                        <div className="homeheader__inner__right__btn">
                            <Mainbtn  text='لورم ایپسوم متن'/>
                            <div className="homeheader__inner__right__btn__img">
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='homeheader__inner__left'>
                    <div className="homeheader__inner__left__image">
                        <img src={banner1} alt="" />
                    </div>
                </section>
            </section>
            <div className="homeheader__icon">
                <div className="homeheader__icon__1">
                    <img src={shape1} alt="" />
                </div>
                <div className="homeheader__icon__2">
                    <img src={shape2} alt="" />
                </div>
                <div className="homeheader__icon__3">
                    <img src={shape3} alt="" />
                </div>
            </div>
        </section>
    </section>
  )
}
