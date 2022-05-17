import React from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { Formik , Form } from 'formik';
import * as yup from 'yup' 
import Formikcontrol from './../../../validation/Formikcontrol';
import './Signupform.css'
export default function Signupform() {

    const initialValues={
      Firstname:'',
      phoneNumber:'',
      Email:'',
      Password:'',
    }
    const validationSchema=yup.object({
      Firstname:yup.string().required('لطفا نام کاربری خود را وارد کنید'),
      Email:yup.string().email('ایمیل نامعتبر').required('لطفا ایمیل خود را وارد کنید'),
      Password:yup.string().min(5).required('لطفا رمزعبور خود را وارد کنید'),
      phoneNumber:yup.string().required('لطفا شماره تلفن خود را وارد کنید'),

    })
    const onSubmit=values=>{
      console.log(values);
    }
  return (
      <>
       <div className="register__container">
           <div className="register__container__inside">
               <div className="register__container__inside__title">
                   ثبت نام
               </div>
             <div className="register__container__inside__inside">
               <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                >
                  {
          formik=>{
            
            return(
      <div className='formik-div'>  
      <Form action="" className="register-form">
          <Formikcontrol control='input' name='Firstname'  placeholder='نام کاربری' type='text' autoComplete='off'  />
          <Formikcontrol control='input' name='phoneNumber' placeholder='شماره موبایل'  type='text' autoComplete='off' />
          <Formikcontrol control='input' name='Email' type='text' placeholder='ایمیل' autoComplete='off'  />
          <Formikcontrol control='input' name='Password' type='password' placeholder='رمز عبور'  autoComplete='off' />
          <button type='submit'
          disabled={!formik.isValid}
          >
            عضویت
          </button> 
      </Form>
      </div>   
            )
              }
                }
              </Formik>
              <div className="register__agreemnet">
                  <input type='checkbox' />
                  <label htmlFor="">
                      با قوانین و شرایط موافقم
                  </label>
              </div>
             </div>
           </div>
         </div>
    </>     
  );
}
