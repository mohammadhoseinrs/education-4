import React, { useState } from 'react'
import {MdKeyboardArrowDown , MdKeyboardArrowUp ,MdOutlineArticle} from 'react-icons/md'
import {AiOutlineLock} from 'react-icons/ai'
import './CourseDetailAcc.css'
const courseacc=[
    {id:1,title:'پیش نیاز های ری اکت', item:[
        {id:11,name:'ویدیوی معرفی'},
        {id:21,name:'مفهوم Hoisting در جاوا اسکریپت'},
        {id:31,name:'تفاوت های بین var, let'},
        {id:41,name:'مفهوم و ویژگی های Arrow'},
    ],open:true
    },
    {id:2,title:'کار با فریمورک React BootStrap + پروژه', item:[
        {id:12,name:'مفهوم ماژول و برنامه نویسی ماژولار'},
        {id:22,name:'ساختار یک پروژه ری‌اکتی چگونه است؟'},
        {id:32,name:'درک عمیق مفهوم Component'},
        {id:42,name:' نمونه کار هایی برای پر کردن رزومه'},
    ],open:false
    },
    {id:3,title:'معرفی و نحوه استفاده از متد های LifeCycle', item:[
        {id:13,name:' چطور باید ازش استفاده کرد'},
        {id:23,name:'چطور باید به کامپوننت های ری‌اکت استایل بدیم'},
        {id:33,name:'مفهوم ماژول و برنامه نویسی ماژولار'},
        {id:43,name:'ساختار یک پروژه ری‌اکتی چگونه است؟'},
    ],open:false
    },
    
]

export default function CourseDetailAcc() {
    const [openacc,setopenacc]=useState(courseacc)
    const accordian=(id)=>{
        console.log(id);
        const newacc=[...courseacc]
        console.log(newacc);
        newacc.forEach(acc=>{
            if(acc.id===id){
                return acc.open= !acc.open
            }
        })
        setopenacc(newacc)
    }
  return (
    <div className='coursedetailacc'>
    {courseacc.map(acc=>(
        <div key={acc.id} className="courseaccitem">
            <div className="courseaccitem__header" onClick={()=>accordian(acc.id)}>
                <div className="courseaccitem__header__btn">
                    {acc.title}
                    <MdKeyboardArrowDown />
                </div>
            </div>
            {acc.open ?(
            <div className="courseaccitem__collapse">
                <ul>
                {acc.item.map(accitem=>{
                      console.log(accitem);
                      return(
                        <li>
                            <div className="courseaccitem__collapse__text">
                                <MdOutlineArticle />
                                <p>{accitem.name}</p>
                            </div>
                            <AiOutlineLock />
                        </li> 

                      )
                  })}
                </ul>
            </div>
                ):('')}
        </div>
    ))}
    </div>
  )
}
