import React, { useState, useRef, useEffect } from 'react';
// STYLES
import { Wrapper } from './Cursor.styles';

const AmazingCursor = () => {
  const ref = useRef(null);
  const [isTouchscreen, setIsTouchscreen] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchscreen(true);
    } else {
      setIsTouchscreen(false);
    }
  }, []);

  const mouseMoveHandler = (e) => {
    ref.current.style.top = e.clientY + 'px';
    ref.current.style.left = e.clientX + 'px';

    return;
  };

  const activeCursorHandler = (e) => {
    const item = e.target;
    if (
      item.id === 'active' ||
      item.tagName === 'INPUT' ||
      item.tagName === 'TEXTAREA' ||
      item.tagName === 'LABEL' ||
      item.tagName === 'BUTTON' ||
      item.tagName === 'A'
    ) {
      ref.current.classList.add('active');
    } else {
      ref.current.classList.remove('active');
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseover', activeCursorHandler);

    return;
  }, []);

  return <>{!isTouchscreen && <Wrapper ref={ref}></Wrapper>}</>;
};

export default AmazingCursor;
