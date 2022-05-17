import React from 'react'
import './HomeCourse.css'
import Homecoursecard from './Homecoursecard'
export default function HomeCourse() {
  return (
    <section className='homecourse'>
        <section className='homecouse__container'>
            <div className="homecourse__top">
                <div className="homecourse__top__right">
                    <h5>ما که هستیم</h5>
                    <h2>لورم ایپسوم متن ساختگی با تولید</h2>
                </div>
                <div className="homecourse__top__left">
                    <button className='course__active'>همه</button>
                    <button>محبوب ترین</button>
                    <button>جدیدترین</button>
                    <button>بهترین</button>
                </div>
            </div>
            <div className="homecourse__inner">
                <Homecoursecard />
                <Homecoursecard />
                <Homecoursecard />
                <Homecoursecard />
                <Homecoursecard />
                <Homecoursecard />
                <Homecoursecard />
            </div>
        </section>
    </section>
  )
}
