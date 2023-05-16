import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import { A11y } from "swiper";

import "swiper/css";
import "./Slider.css";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper modules={[A11y]} {...settings}>
      {children}
    </Swiper>
  );
}
