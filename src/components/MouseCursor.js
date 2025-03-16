import React, { useState, useEffect, useRef } from 'react';
import './styles/MouseCursor.css';

function MouseCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        
        // The dot follows with slight delay for nice effect
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }
      
      // Make cursor visible once it has moved
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    };

    const handleMouseUp = () => {
      // We'll let the timeout from mousedown handle this
    };

    // Track hover states for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.classList.contains('interactive') ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.classList.contains('interactive') ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive')
      ) {
        setIsHovering(false);
      }
    };

    // Add mouse move event listener
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    // Hide cursor when leaving the window
    document.addEventListener('mouseleave', () => setIsVisible(false));
    document.addEventListener('mouseenter', () => setIsVisible(true));

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', () => setIsVisible(false));
      document.removeEventListener('mouseenter', () => setIsVisible(true));
    };
  }, [isVisible]);

  const cursorClasses = [
    'cursor',
    isClicked ? 'cursor--clicked' : '',
    isHovering ? 'cursor--hovering' : '',
    isVisible ? 'cursor--visible' : ''
  ].filter(Boolean).join(' ');

  const cursorDotClasses = [
    'cursor-dot',
    isClicked ? 'cursor-dot--clicked' : '',
    isHovering ? 'cursor-dot--hovering' : '',
    isVisible ? 'cursor-dot--visible' : ''
  ].filter(Boolean).join(' ');

  return (
    <>
      <div className={cursorClasses} ref={cursorRef}>
        <div className="cursor-border"></div>
      </div>
      <div className={cursorDotClasses} ref={cursorDotRef}></div>
    </>
  );
}

export default MouseCursor;
