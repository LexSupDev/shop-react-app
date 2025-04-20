import { useState, useRef, useEffect } from "react";

export const RangeSlider = () => {
  const min = 0;
  const max = 1000;
  const step = 10;

  const [minVal, setMinVal] = useState(200);
  const [maxVal, setMaxVal] = useState(800);

  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  // Получаем % положения значения
  const getPercent = (value) => Math.round(((value - min) / (max - min)) * 100);

  // Двигаем "выделенную область"
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, maxVal]);

  return (
    <div className="w-full max-w-md px-4 py-6">
      <div className="flex justify-between text-sm font-semibold mb-2 text-gray-700">
        <span>Min: ${minVal}</span>
        <span>Max: ${maxVal}</span>
      </div>

      <div className="relative h-10">
        {/* Базовый трек */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 rounded -translate-y-1/2" />

        {/* Активный диапазон */}
        <div
          ref={range}
          className="absolute top-1/2 h-1 bg-black rounded -translate-y-1/2"
        />

        {/* Мин ползунок */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          ref={minValRef}
          onChange={(e) => {
            const value = Math.min(Number(e.target.value), maxVal - step);
            setMinVal(value);
          }}
          className="absolute w-full h-10 appearance-none bg-transparent pointer-events-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-black
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-moz-range-thumb]:h-4
            [&::-moz-range-thumb]:w-4
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-black
            [&::-moz-range-thumb]:cursor-pointer
            [&::-moz-range-thumb]:pointer-events-auto
          "
        />

        {/* Макс ползунок */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          ref={maxValRef}
          onChange={(e) => {
            const value = Math.max(Number(e.target.value), minVal + step);
            setMaxVal(value);
          }}
          className="absolute w-full h-10 appearance-none bg-transparent pointer-events-none rounded-full
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-black
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-moz-range-thumb]:h-4
            [&::-moz-range-thumb]:w-4
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-black
            [&::-moz-range-thumb]:cursor-pointer
            [&::-moz-range-thumb]:pointer-events-auto
          "
        />
      </div>
    </div>
  );
};

export default RangeSlider;