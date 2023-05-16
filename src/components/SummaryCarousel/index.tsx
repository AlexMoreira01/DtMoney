import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleUp, CurrencyDollar, ArrowCircleDown } from "phosphor-react";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";
import { useState } from "react";

// import { Slider } from "../Slider/Slider";
import { SwiperProps, SwiperSlide } from "swiper/react";
import { Slider } from "../Slider/Slider";

// const items = [
//   {
//     id: 1,
//     title: "Entradas",
//     icon: <ArrowCircleUp size={32} color="#00b37e" />,
//     value: 1234.56,
//   },
//   {
//     id: 2,
//     title: "Saídas",
//     icon: <ArrowCircleDown size={32} color="#f75a68" />,
//     value: 789.12,
//   },
//   {
//     id: 3,
//     title: "Total",
//     icon: <ArrowCircleUp size={32} color="#00b37e" />,
//     value: 3456.78,
//   },
// ];

export function SummaryCarousel() {
  const summary = useSummary();

  const settings: SwiperProps = {
    // width: 50,
    slidesPerView: "auto",
    spaceBetween: 16,
    // slidesPerView: 1,
    // loop: true,
  };

  return (
    <SummaryContainer>
      <Slider settings={settings}>
        <SwiperSlide>
          <SummaryCard>
            <header>
              <span>Entradas</span>
              <ArrowCircleUp size={32} color="#00b37e" />
            </header>

            <strong>{priceFormatter.format(summary.income)}</strong>
          </SummaryCard>
        </SwiperSlide>

        <SwiperSlide>
          <SummaryCard>
            <header>
              <span>Saidas</span>
              <ArrowCircleDown size={32} color="#f75a68" />
            </header>

            <strong>{priceFormatter.format(summary.outcome)}</strong>
          </SummaryCard>
        </SwiperSlide>

        <SwiperSlide>
          <SummaryCard variant="green">
            <header>
              <span>Total</span>
              <CurrencyDollar size={32} color="#ffff" />
            </header>

            <strong>{priceFormatter.format(summary.total)}</strong>
          </SummaryCard>
        </SwiperSlide>
      </Slider>
    </SummaryContainer>
  );
}
