import React from 'react';
import { useInView } from 'react-intersection-observer';

const Step = ({ title, heading, description, img, alternate }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const row = "lg:items-center lg:flex lg:flex-row lg:justify-end";
  const rowReverse = "lg:items-center lg:flex lg:flex-row-reverse lg:justify-center";

  return (
    <div id="product" ref={ref} className={alternate ? row : rowReverse}>
      <div className={`lg:w-2/6 lg:-ml-20 lg:-mt-10 lg:flex lg:flex-col lg:justify-center lg:items-start`}>
        <p className={`pb-5 text-2xl font-semibold text-center text-orange-400 lg:pb-0 lg:-mb-3 lg:text-lg lg:font-bold lg:text-left ${inView ? 'animate-left' : 'opacity-0'}`}>{title}</p>
        <p className={`p-5 text-4xl font-semibold leading-relaxed text-center text-blue-800 lg:pb-4 lg:text-3xl lg:pl-0 lg:font-bold lg:text-left ${inView ? 'animate-left' : 'opacity-0'}`}>{heading}</p>
        <p className={`p-5 pb-0 pl-10 pr-10 text-2xl leading-10 text-center text-gray-400 lg:w-5/6 lg:pb-0 lg:text-lg lg:text-left lg:p-0 lg:pl-0 lg:pr-0 ${inView ? 'animate-left' : 'opacity-0'}`}>{description}</p>
      </div>
      <div className="ml-10 lg:ml-0 lg:w-3/6">
        <img className={`lg:-mt-24 lg:-mb-20 ${inView ? 'animate-right' : 'opacity-0'}`} src={img} alt={title} />
      </div>
    </div>
  );
};

export default Step;
