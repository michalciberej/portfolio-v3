"use client";

import S from "./Cursor.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { CiLinkedin } from "react-icons/ci";

let isTouchDevice = true;

const Cursor = () => {
  const ref = useRef(null);
  if (typeof window !== "undefined") isTouchDevice = "ontouchstart" in window;

  useEffect(() => {
    const cursor = ref.current;

    if (isTouchDevice || !cursor) {
      return;
    }

    const handleCursorMovement = (e: MouseEvent) => {
      const { target, clientX, clientY } = e;

      const shouldAnimate =
        (target as HTMLElement).closest("a") ||
        (target as HTMLElement).closest("button") ||
        (target as HTMLElement).getAttribute("data-hovered");

      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.7,
        ease: "power3.out",
        transform: `scale(${shouldAnimate ? 10 : 1})`,
      });
    };
    window.addEventListener("mousemove", handleCursorMovement);

    return () => window.removeEventListener("mousemove", handleCursorMovement);
  }, []);

  return (
    <div className={S.cursor} ref={ref}>
      <div className={S.icon} />
    </div>
  );
};

export default Cursor;
