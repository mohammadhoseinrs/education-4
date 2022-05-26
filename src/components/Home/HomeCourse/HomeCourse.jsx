import React, { useEffect, useState } from 'react'
import { getdetail } from '../../../api/userApi'
import './HomeCourse.css'
import Homecoursecard from './Homecoursecard'
import FramerMotion from '../../../FramerMotion'

export default function HomeCourse() {
    const [searchterm,setsearchterm]=useState('showCourses')
    const [homecourse,sethomecourse]=useState([])
    const [homecoursetitle,sethomecoursetitle]=useState({})
    console.log(searchterm);
    useEffect(()=>{
        getdetail(searchterm).then(item=>{
            sethomecourse(item.data)
        })
        getdetail('showTittleCourses').then(item=>{
            sethomecoursetitle(item.data.data)
        })
    },[searchterm])
    console.log(homecoursetitle);
  return (
    <section className='homecourse'>
        <section className='homecouse__container'>
            <div className="homecourse__top">
                <div className="homecourse__top__right">
                    <FramerMotion>
                    <h5>{homecoursetitle.headline_tittle}</h5>
                    <h2>{homecoursetitle.main_tittle}</h2>
                    </FramerMotion>
                </div>
                <div className="homecourse__top__left">
                    <button className='course__active' onClick={()=>setsearchterm('all')}>همه</button>
                    <button onClick={()=>setsearchterm('favourite')}>محبوب ترین</button>
                    <button onClick={()=>setsearchterm('new')}>جدیدترین</button>
                    <button onClick={()=>setsearchterm('best')}>بهترین</button>
                </div>
            </div>
            <FramerMotion>
            <div className="homecourse__inner">
                {homecourse.map(course=>(
                    <Homecoursecard key={course.id} course={course} />
                ))}
                
            </div>
            </FramerMotion>
        </section>
    </section>
  )
}
