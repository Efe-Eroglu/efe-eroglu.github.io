import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Type.css';

const Type = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'AI Developer',
        'Masters Student',
        'ML Engineer',
        'Deep Learning Researcher',
        'Problem Solver'
      ],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="typed-text">
      <span ref={typedRef} />
    </div>
  );
};

export default Type;
