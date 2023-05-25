import React from 'react'

export default function Slider({items}) {
  return (
    <div className="overflow-hidden flex items-center py-8 text-custom-gray bg-[#1a1a1a]">
      <div className="animate-infinite-slide font-extrabold text-3xl">
        {items.map(item => <span className="mx-10 md:mx-20 lg:mx-32">{item}</span>)}
      </div>
      <div className="animate-infinite-slide font-extrabold text-3xl">
        {items.map(item => <span className="mx-10 md:mx-20 lg:mx-32">{item}</span>)}
      </div>
    </div>
  )
}
