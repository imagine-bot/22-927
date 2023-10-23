import { useState } from 'react'

const marks = [
  { value: 0, label: '30 days' },
  { value: 25, label: '60 days' },
  { value: 50, label: '120 days' },
  { value: 75, label: '1 year' },
  { value: 100, label: '3 years' },
]

export default function DaySlider() {
  const [value, setValue] = useState(0)

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
              {marks.find((mark) => mark.value === value)?.label || `${value} days`}
            </span>
          </div>
          <div className="w-full">
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={(e) => handleChange(null, parseInt(e.target.value))}
              className="slider"
            />
            <div className="flex justify-between">
              {marks.map((mark) => (
                <button
                  key={mark.value}
                  onClick={() => handleChange(null, mark.value)}
                  className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${
                    mark.value === value ? 'text-blue-600 bg-blue-200' : 'text-blue-200'
                  }`}
                >
                  {mark.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div
            style={{ width: `${value}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          ></div>
        </div>
      </div>
    </div>
  )
}