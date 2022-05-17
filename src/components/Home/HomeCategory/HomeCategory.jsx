import React from 'react'
import CatItem from './CatItem'
import './HomeCategory.css'
import shape2 from './../../../Assets/images/Home/shape-02.png'
import shape11 from './../../../Assets/images/Home/shape-11.png'
import FramerMotion from '../../../FramerMotion'

export default function HomeCategory() {
  return (
    <section className='homecategory'>
        <section className='homecategory__container'>
            <section className="homecategory__top">
                <h5 className='homecategory__top__subtitle'>
                    کتگوری دروس
                </h5>
                <h1 className='homecategory__top__title'>
                لورم ایپسوم متن ساختگی
                </h1>
            </section>
            <section className='homecategory__content'>
                <CatItem />
                <CatItem />
                <CatItem />
                <CatItem />
                <CatItem />
                <CatItem />
                <CatItem />
                <CatItem />
            </section>
            <div className="homecategory__icon">
                <div className="homecategory__icon1">
                    <img src={shape2} alt="" />
                </div>
                <div className="homecategory__icon2">
                    <img src={shape11} alt="" />
                </div>
            </div>
        </section>
    </section>
  )
}
