import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let isHovering = false;

    const updateCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const handleMouseMove = (e) => {
      requestAnimationFrame(() => updateCursor(e));
    };

    const handleMouseDown = () => {
      cursor.classList.add('clicking');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('clicking');
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const interactive = target.matches('a, button, [role="button"], input, textarea, select, .btn, .social-links a');
      
      if (interactive !== isHovering) {
        isHovering = interactive;
        cursor.classList.toggle('hovering', interactive);
      }
    };

    const handleMouseOut = () => {
      if (isHovering) {
        isHovering = false;
        cursor.classList.toggle('hovering', false);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
