import React from 'react'
import './Homecomuni.css'
import com1 from './../../../Assets/images/Home/com1.png'
import com2 from './../../../Assets/images/Home/com2.png'
import gallery1 from './../../../Assets/images/Home/gallery-1.jpeg'
import gallery2 from './../../../Assets/images/Home/gallery-2.jpeg'
import gallery3 from './../../../Assets/images/Home/gallery-3.jpeg'
import shape21 from './../../../Assets/images/Home/shape-21.png'
import shape3 from './../../../Assets/images/Home/shape-03.png'
import Mainbtn from '../../Mainbtn'
import FramerMotion from '../../../FramerMotion'


export default function Homecomuni() {
  return (
    <section className='homecomuni'>
        <section className='homecomuni__container'>
            <section className='homecomuni__inner'>
                <section className='homecomuni__inner__right'>
                    <h5>درباره ما</h5>
                    <h1>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                    <div className="homecomuni__inner__right__inner">
                        <div className="homecomuni__inner__right__inner__item">
                            <div className="homecomuni__inner__right__inner__item__right">
                                <div className="homecomuni__inner__right__inner__item__right__image">
                                    <img src={com1} alt="" />
                                </div>
                                <div className="homecomuni__inner__right__inner__item__right__text">
                                    <h4>لورم ایپسوم</h4>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                                </div>
                            </div>
                            <div className="homecomuni__inner__right__inner__item__left">
                            <div className="homecomuni__inner__right__inner__item__right__image">
                                    <img src={com2} alt="" />
                                </div>
                                <div className="homecomuni__inner__right__inner__item__right__text">
                                    <h4>لورم ایپسوم</h4>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="homecomuni__btn">
                       <Mainbtn text='لورم ایپسوم' />
                    </div>
                </section>
                <section className='homecomuni__inner__left'>
                    <div className="homecomuni__inner__left__item2">
                        <img src={gallery2} alt="" />
                    </div>
                    <div className="homecomuni__inner__left__item1">
                        <img src={gallery1} alt="" />
                    </div>
                    <div className="homecomuni__inner__left__item3">
                        <img src={gallery3} alt="" />
                    </div>
                </section>
            </section>
            <div className="homecomuni__icon">
                <div className="homecomuni__icon__item1">
                    <img src={shape21} alt="" />
                </div>
                <div className="homecomuni__icon__item2">
                    <img src={shape3} alt="" />
                </div>
                <div className="homecomuni__icon__inner">
                    <h5>۹۰۰</h5>
                    <p>تعداد دانشجو</p>
                </div>
            </div>
        </section>
    </section>
  )
}
