import React from 'react'
import Mainbtn from '../../Mainbtn'
import './Homeblog.css'
import post1 from './../../../Assets/images/Home/post-01.jpeg'
import {AiOutlineTags} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import shape25 from './../../../Assets/images/blog/shape-25.png'
import FramerMotion from '../../../FramerMotion'
import Framer2 from './../../../Framer2'
export default function Homeblog() {
  return (
    <section className='homeblog'>
        <section className='homeblog__container'>
        <FramerMotion>
            <div className="homeblog__top">
                <div className="homeblog__top__right">
                    <h5>وبلاگ</h5>
                    <h2>بهترین مقالات تخصصی</h2>
                </div>
                <Mainbtn text='لورم ایپسوم' />
            </div>
         </FramerMotion>
            <FramerMotion>
                <FramerMotion>
            <section className='homeblog__inner'>

                <div className="homeblog__inner__item">
                    <FramerMotion>
                    <div className="homeblog__inner__item__top">
                        <img src={post1} alt="" />
                    </div>
                    <div className="homeblog__inner__item__top__inner">
                        <div className="homeblog__inner__item__top__inner__circle">
                            <span>۶</span>
                            <p>خرداد</p>
                        </div>
                        <div className="homeblog__inner__item__top__inner__middle">
                            <div className="homeblog__inner__item__top__inner__middle__item">
                                <AiOutlineTags />
                                <p>فیزیک</p>
                            </div>
                            <div className="homeblog__inner__item__top__inner__middle__item">
                                <BiTimeFive />
                                <p> ۳ دقیقه</p>
                            </div>
                        </div>
                        <div className="homeblog__inner__item__top__inner__bottom">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        </div>
                        <div className="homeblog__inner__item__top__inner__bottom__bottom">
                        <button className="homeblog__inner__item__top__inner__bottom__btn">
                            <Link to='blogdetail'>
                                لورم ایپسوم
                            </Link>
                            <BsArrowLeft />
                        </button>
                        </div>
                    </div>
                    </FramerMotion>
                </div>

                <div className="homeblog__inner__item">
                    <div className="homeblog__inner__item__top">
                        <img src={post1} alt="" />
                    </div>
                    <div className="homeblog__inner__item__top__inner">
                        <div className="homeblog__inner__item__top__inner__circle">
                            <span>۶</span>
                            <p>خرداد</p>
                        </div>
                        <div className="homeblog__inner__item__top__inner__middle">
                            <div className="homeblog__inner__item__top__inner__middle__item">
                                <AiOutlineTags />
                                <p>فیزیک</p>
                            </div>
                            <div className="homeblog__inner__item__top__inner__middle__item">
                                <BiTimeFive />
                                <p> ۳ دقیقه</p>
                            </div>
                        </div>
                        <div className="homeblog__inner__item__top__inner__bottom">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        </div>
                        <div className="homeblog__inner__item__top__inner__bottom__bottom">
                        <button className="homeblog__inner__item__top__inner__bottom__btn">
                        <Link to='blogdetail'>
                                لورم ایپسوم
                            </Link>
                            <BsArrowLeft />
                        </button>
                        </div>
                    </div>
                </div>

                <div className="homeblog__inner__item">
                    <div className="homeblog__inner__item__top">
                        <img src={post1} alt="" />
                    </div>
                    <div className="homeblog__inner__item__top__inner">
                        <div className="homeblog__inner__item__top__inner__circle">
                            <span>۶</span>
                            <p>خرداد</p>
                        </div>
                        <div className="homeblog__inner__item__top__inner__middle">
                            <div className="homeblog__inner__item__top__inner__middle__item">
                                <AiOutlineTags />
                                <p>فیزیک</p>
                            </div>
                            <div className="homeblog__inner__item__top__inner__middle__item">
                                <BiTimeFive />
                                <p> ۳ دقیقه</p>
                            </div>
                        </div>
                        <div className="homeblog__inner__item__top__inner__bottom">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        </div>
                        <div className="homeblog__inner__item__top__inner__bottom__bottom">
                        <button className="homeblog__inner__item__top__inner__bottom__btn">
                            <Link to='blogdetail'>
                                لورم ایپسوم
                            </Link>
                            <BsArrowLeft />
                        </button>
                        </div>
                    </div>
                </div>
                <div className="homeblogicon">
                    <img src={shape25} alt="" />
                </div>
            </section>
            </FramerMotion>
            </FramerMotion>
        </section>
    </section>
  )
}
