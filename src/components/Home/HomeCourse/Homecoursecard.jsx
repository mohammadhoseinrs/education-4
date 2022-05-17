import React from 'react'
import course1 from './../../../Assets/images/Home/course-01.jpeg'
import instructor1 from './../../../Assets/images/Home/instructor-1.jpeg'
import {AiTwotoneHeart ,AiFillStar} from 'react-icons/ai'
import {MdArticle} from 'react-icons/md'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'
export default function Homecoursecard() {
  return (
    <div className='homecoursecard'>
        <div className="homecoursecard__front">
            <div className="homecoursecard__front__content">
            <div className="homecoursecard__front__top">
                <div className="homecoursecard__front__top__image">
                    <img src={course1} alt="" />
                </div>
                <div className="homecoursecard__front__top__heart">
                    <button className='homecoursecard__front__top__heart__btn'>
                        <AiTwotoneHeart />
                    </button>
                </div>
                <div className="homecoursecard__front__top__box">
                    لورم ایپسوم متن
                </div>
            </div>
            <div className="homecoursecard__front__bottom">
                <div className="homecoursecard__front__bottom__top">
                    <div className="homecoursecard__front__bottom__top__right">
                        <div className="homecoursecard__front__bottom__top__right__image">
                            <img src={instructor1} alt="" />
                        </div>
                        <span>محمدرضا رستمی</span>
                    </div>
                    <div className="homecoursecard__front__bottom__top__right__left">
                        <MdArticle />
                        <span>۲۶ درس</span>
                    </div>
                </div>
                <div className="homecoursecard__front__bottom__title">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </div>
                <div className="homecoursecard__front__bottom__bottom">
                    <div className="homecoursecard__front__bottom__bottom__right">
                            <div className="homecoursecard__front__bottom__bottom__right__currentprice">
                                ۴۵،۰۰۰
                            </div>
                            <div className="homecoursecard__front__bottom__bottom__right__oldprice">
                                ۵۵،۰۰۰
                            </div>
                    </div>
                    <div className="homecoursecard__front__bottom__bottom__left">
                        <div className="homecoursecard__front__bottom__bottom__left__rating">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <div className="homecoursecard__front__bottom__bottom__left__ratingcount">
                        (۴.۹)
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div> 
        <div className="homecoursecard__hover">
            <div className="homecoursecard__hover__inner">
                <div className="homecoursecard__hover__top">
                    <div className="homecoursecard__hover__top__text">
                    لورم ایپسوم
                    </div>
                    <div className="homecoursecard__front__top__heart2">
                    <button className='homecoursecard__front__top__heart2__btn'>
                        <AiTwotoneHeart />
                    </button>
                </div>
                </div>
                <div className="homecoursecard__hover__title">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </div>
                <p className="homecoursecard__hover__text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
                <div className="homecoursecard__hover__price">
                ۵۵،۰۰۰
                </div>
                <div className="homecoursecard__front__bottom__top">
                    <div className="homecoursecard__front__bottom__top__right">
                        <div className="homecoursecard__front__bottom__top__right__image">
                            <img src={instructor1} alt="" />
                        </div>
                        <span style={{color:'#fff'}}>محمدرضا رستمی</span>
                    </div>
                    <div className="homecoursecard__front__bottom__top__right__left">
                        <MdArticle  />
                        <span>۲۶ درس</span>
                    </div>
                </div>
                <button className='homecoursecard__hover__btn'>
                    <Link to='/coursedetail' className='homecoursecard__hover__btn__text'>
                        لورم ایپسوم متن
                    </Link>
                     <BsArrowLeft />
                </button>
            </div>
        </div> 
    </div>
  )
}
