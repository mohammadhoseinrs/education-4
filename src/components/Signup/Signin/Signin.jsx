import React from 'react'
import './Signin.css'
export default function Signin() {
  return (
    <div className='signin'>
        <div className="register__container__inside__title">
                ورود
        </div>
        <form className='signin__form'>
            <div className="signin__form__1">
                <input type="text" name="" id="" placeholder='نام کاربری' />
            </div>
            <div className="signin__form__1">
                <input type="text" name="" id="" placeholder='رمز عبور' />
            </div>
            <button className="signin__form__btn">
                ورود
            </button>
            <div className="signin__form__remeber">
            رمز عبور را فراموش کرده اید؟
            </div>
        </form>
    </div>
  )
}
