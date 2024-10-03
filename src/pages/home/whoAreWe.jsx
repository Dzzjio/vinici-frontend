import React, { useEffect, useRef, useState } from 'react';
import viniciCover from '../../img/vinici-cover.png';

const WhoAreWe = () => {
  const [isSticky, setIsSticky] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current; // Store the ref in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(false);
        } else {
          setIsSticky(true);
        }
      },
      { threshold: 1.0 }
    );

    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, []); // Empty dependency array to run effect once on mount

  return (
    <div>
      <img
        ref={imageRef}
        src={viniciCover}
        alt="viniciCover"
        className="w-full"
      />
      <h2
        className={`bg-brandColorPrimary text-white text-[48px] font-bold flex justify-center items-center py-6 transition-transform duration-500 ease-in-out ${isSticky ? 'translate-y-[-100px]' : ''}`}
      >
        ვინ ვართ და რას გთავაზობთ
      </h2>
    </div>
  );
};

export default WhoAreWe;
