import React from 'react'
import Blogitem from './Blogitem'
import './Blogmain.css'
export default function Blogmain() {
  return (
    <section className='blogmain'>
        <section className='blogmain__container'>
            <Blogitem />
            <Blogitem />
            <Blogitem />
            <Blogitem />
            <Blogitem />
            <Blogitem />

        </section>
    </section>
  )
}
