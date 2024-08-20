// src/ui/BackgroundGradientAnimation.jsx
import React, { useEffect, useRef, useState } from 'react';

export function BackgroundGradientAnimation({
  gradientBackgroundStart = "rgb(255, 255, 255)", // Jasne tło
  gradientBackgroundEnd = "rgb(240, 240, 240)", // Jasnoszare
  firstColor = "255, 255, 255",
  secondColor = "200, 200, 255",
  thirdColor = "150, 200, 255",
  fourthColor = "200, 100, 100",
  fifthColor = "180, 180, 180",
  pointerColor = "120, 120, 255",
  size = "70%",
  blendingValue = "soft-light",
  children,
  className,
  interactive = true,
  containerClassName,
}) {
  const interactiveRef = useRef(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
    document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, [gradientBackgroundStart, gradientBackgroundEnd, firstColor, secondColor, thirdColor, fourthColor, fifthColor, pointerColor, size, blendingValue]);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) return;
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    }

    move();
  }, [tgX, tgY]);

  const handleMouseMove = (event) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div className={`min-h-screen w-screen relative overflow-auto ${containerClassName}`}>
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 12 -6"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={className}>{children}</div>
      <div className={`gradients-container absolute inset-0 pointer-events-none`}>
        <div
          className={`absolute bg-[radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)] mix-blend-mode-[var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] transform-origin-center animate-first opacity-100`}
        ></div>
        <div
          className={`absolute bg-[radial-gradient(circle_at_center,_rgba(var(--second-color),_0.6)_0,_rgba(var(--second-color),_0)_50%)] mix-blend-mode-[var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] transform-origin-[calc(50%-400px)] animate-second opacity-100`}
        ></div>
        <div
          className={`absolute bg-[radial-gradient(circle_at_center,_rgba(var(--third-color),_0.6)_0,_rgba(var(--third-color),_0)_50%)] mix-blend-mode-[var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] transform-origin-[calc(50%+400px)] animate-third opacity-100`}
        ></div>
        <div
          className={`absolute bg-[radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.6)_0,_rgba(var(--fourth-color),_0)_50%)] mix-blend-mode-[var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] transform-origin-[calc(50%-200px)] animate-fourth opacity-60`}
        ></div>
        <div
          className={`absolute bg-[radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.6)_0,_rgba(var(--fifth-color),_0)_50%)] mix-blend-mode-[var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] transform-origin-[calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-80`}
        ></div>
        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={`absolute bg-[radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.6)_0,_rgba(var(--pointer-color),_0)_50%)] mix-blend-mode-[var(--blending-value)] w-full h-full top-0 left-0 opacity-60 pointer-events-none`}
          ></div>
        )}
      </div>
    </div>
  );
}
