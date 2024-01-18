'use client';
import React, {useState} from 'react';
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa';
import Image from 'next/image';
interface Item {
  name: string;
  link: string;
  list: string[];
  // add other properties here if needed
}

interface SliderProps {
  items: Item[];
}

const Slider: React.FC<SliderProps> = ({items}) => {
  const [current, setCurrent] = useState(0);
  const length = items.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(items) || items.length <= 0) {
    return null;
  }

  return (
    <div className="mx-auto w-full">
      <div className="">
        {items.map((item, index) => (
          <div
            key={index}
            className={
              index === current
                ? 'duration-2000 opacity-100 transition-opacity ease-in'
                : 'duration-2000 opacity-0 transition-opacity ease-in'
            }>
            <FaArrowCircleLeft
              onClick={prevSlide}
              className="absolute left-[30px] top-[50%] z-[2] -translate-y-1/2 transform cursor-pointer select-none text-white/70"
              size={50}
            />
            {index === current && (
              <div
                className=" w-full flex-col justify-center rounded border-r-4 border-custom-purple bg-black p-4 text-white opacity-80"
                key={item.name}>
                <div className="m-5 flex h-[600px] flex-wrap">
                  <div className="flex w-2/3 flex-col items-center justify-between border-r-2 pr-5">
                    <h1 className="text-center text-3xl">{item.name}</h1>
                    <ul className="list-inside list-disc">
                      {item.list.map((el, ind) => (
                        <li className={'mb-3 text-lg'} key={ind}>
                          {el}
                        </li>
                      ))}
                    </ul>
                    <button className="w-30 mt-1 block h-10 rounded border hover:bg-custom-purple md:w-1/3  lg:w-60">
                      <a href={item.link} target="_blank">
                        link to page
                      </a>
                    </button>
                  </div>

                  <div className="flex w-1/3 flex-col items-center justify-center">
                    <Image
                      src="/images/profile.jpg"
                      alt="Profile"
                      width={150}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            )}
            <FaArrowCircleRight
              onClick={nextSlide}
              className="absolute right-[30px] top-[50%] z-[2] -translate-y-1/2 transform cursor-pointer select-none text-white/70"
              size={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
