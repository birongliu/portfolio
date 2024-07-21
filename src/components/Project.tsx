import React from 'react'
import GridCard, { data } from './ui/GridCard'

export default function Project() {
  return (
    <section id="project" className="h-full py-20">
    <div className="text-white-100 font-bold text-5xl flex justify-center">
      Project
    </div>
    <GridCard items={[data]} />
  </section>
  )
}


