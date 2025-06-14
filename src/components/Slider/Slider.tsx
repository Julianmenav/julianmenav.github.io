import { TechIcon } from '@content/tech-icons'
import { useState } from 'react';

function Slider({ items }: { items: TechIcon[] }) {

  let [velocity, setVelocity] = useState<Number>(50);
  let [rangeValue, setRangeValue] = useState<string>("50");

  const changeSliderVelocity = () => {
    let value = parseInt(rangeValue);
    if (isNaN(value) || value < 1 || value > 100) return;

    let newVelocity = 101 - value;

    setVelocity(newVelocity);
  }

  return (
    <div className="w-full">
      <input type="range" min="1" max="100" className="w-56 ml-12" value={rangeValue}
        onChange={(e) => { setRangeValue(e.target.value) }}
        onMouseUp={changeSliderVelocity}
        onTouchEnd={changeSliderVelocity}
      />
      <div className="overflow-hidden flex items-center py-6 text-custom-gray bg-orange-200/20 dark:bg-purple-300/10">
        {
          [0, 1].map(() => (
            <div style={{ animationDuration: `${velocity}s` }} className="animate-infinite-slide font-extrabold text-3xl flex min-w-full justify-between shrink-0">
              {items.map((item) => (
                <div className="h-16 md:h-18 mx-12 md:mx-32">
                  <a href={item.url}>
                    <img alt={item.name} src={item.route} className={`h-full ${item.invertColorsOnLightMode && "invert dark:invert-0"}`} />
                  </a>
                </div>
              ))}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Slider