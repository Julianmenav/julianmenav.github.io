import { TechIcon } from '@content/tech-icons'
import { useEffect, useState } from 'react';

function Slider({ items }: { items: TechIcon[] }) {

  let [velocity, setVelocity] = useState<Number>(50);
  let [rangeValue, setRangeValue] = useState<string>("50");

  useEffect(() => {
    console.log("rangeValue", rangeValue);
    let value = parseInt(rangeValue);
    if (isNaN(value) || value < 1 || value > 100) return;

    let newVelocity = 101 - value;

    setVelocity(newVelocity);

    console.log(rangeValue, velocity);

  }, [rangeValue])

  return (
    <div className="w-full">
      <input type="range" min="1" max="100" value={rangeValue} onChange={(e) => {console.log("hola");setRangeValue(e.target.value)}} className="w-56 ml-12" />
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