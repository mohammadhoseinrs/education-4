import React from 'react'
import AnimatedPage from '../../animated'
import CourseDetailMain from '../../components/CourseDetail/CourseDetailMain/CourseDetailMain'
import CourseDetailtop from '../../components/CourseDetail/CourseDetailtop/CourseDetailtop'

export default function CourseDetail() {
  return (
    <AnimatedPage>
      <CourseDetailtop />
      <CourseDetailMain />
    </AnimatedPage>
  )
}
