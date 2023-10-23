import Link from 'next/link'
import DaySlider from '../components/DaySlider'

export default function SliderPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-4">Day Slider</h1>
      <DaySlider />
      <Link href="/">
        <a className="mt-4 text-blue-500">Go back home</a>
      </Link>
    </div>
  )
}