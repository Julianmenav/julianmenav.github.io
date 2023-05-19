import React from 'react'

export default function Slider({items}) {
  return (
    <div className="overflow-hidden h-full flex items-center">
      <div className="animate-infinite-slide font-extrabold text-3xl">
        {items.map(item => <span className="mx-10 md:mx-20 lg:mx-32">{item}</span>)}
      </div>
      <div className="animate-infinite-slide font-extrabold text-3xl">
        {items.map(item => <span className="mx-10 md:mx-20 lg:mx-32">{item}</span>)}
      </div>
    </div>
  )
}
