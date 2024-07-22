import { data } from '../lib/constants'
import GridCard from './ui/GridCard'

export default function Project() {
  return (
    <section id="project" className="max-h-full py-20">
    <div className="text-white-100 font-bold text-5xl flex justify-center">
      Project
    </div>
    <GridCard items={data} />
  </section>
  )
}


