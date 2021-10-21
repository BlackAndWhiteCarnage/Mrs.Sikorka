import React, { useState, useRef, useEffect } from 'react';
// STYLES
import { Wrapper, CursorImage } from './Cursor.styles';
import cursorIcon from 'assets/images/cursor.png';
import cursorActiveIcon from 'assets/images/cursor-active.png';

const AmazingCursor = () => {
  const ref = useRef(null);
  const [isTouchscreen, setIsTouchscreen] = useState(null);
  const [cursorPointer, setCursorPointer] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchscreen(true);
    } else {
      window.addEventListener('mousemove', mouseMoveHandler);
      window.addEventListener('mouseover', activeCursorHandler);
      setIsTouchscreen(false);
    }
  }, []);

  console.log(isTouchscreen);

  const mouseMoveHandler = (e) => {
    ref.current.style.top = e.clientY + 'px';
    ref.current.style.left = e.clientX + 'px';
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
      setCursorPointer(true);
    } else {
      ref.current.classList.remove('active');
      setCursorPointer(false);
    }
  };

  return (
    <>
      {!isTouchscreen && (
        <Wrapper ref={ref}>
          <CursorImage src={cursorIcon} className={!cursorPointer && 'show'} />
          <CursorImage src={cursorActiveIcon} className={cursorPointer && 'pointer'} />
        </Wrapper>
      )}
    </>
  );
};

export default AmazingCursor;
