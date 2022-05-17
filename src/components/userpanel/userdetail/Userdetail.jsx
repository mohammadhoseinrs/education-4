import React from 'react'
import './userdetail.css'
export default function Userdetail() {
  return (
    <div className='userdetail'>
        <div className="userdetail__number">
            <label htmlFor="">شماره موبایل</label>
            <input type="text" />
        </div>
        <div className="userdetail__name">
            <div>
                <label htmlFor="">نام </label>
            <input type="text" />
            </div>
            <div>
                <label htmlFor=""> نام خانوادگی</label>
            <input type="text" />
            </div>
        </div>
        <div className="userdetail__number">
            <label htmlFor="">آدرس ایمیل</label>
            <input type="text" />
        </div>
        <div className="userdetail__pass">
        تغییر رمز عبور
        </div>
        <div className="userdetail__number">
            <label htmlFor="">رمز عبور کنونی (اگر نمی‌خواهید تغییر دهید خالی بگذارید)</label>
            <input type="text" />
        </div>
        <div className="userdetail__number">
            <label htmlFor="">رمز عبور جدید (برای عدم تغییر خالی بگذارید.)</label>
            <input type="text" />
        </div>
        <div className="userdetail__number">
            <label htmlFor="">تکرار رمز عبور جدید</label>
            <input type="text" />
        </div>
        <div className="userdetail__btn">
            <button>
            ذخیره تغییرات
            </button>
        </div>
    </div>
  )
}
