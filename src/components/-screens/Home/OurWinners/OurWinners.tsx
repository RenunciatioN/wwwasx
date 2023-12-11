"use client";

import { FC, useRef } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";

import { SubTitle, Title } from "@/components/Title";
import { SliderCard } from "./SliderCard";
import { ourWinners as data } from "@/content/homeJson.json";
import { ArrowButton } from "./ArrowButton";

import styles from "./OurWinners.module.scss";
import "swiper/css";

const OurWinners: FC = () => {
    const swiperRef = useRef<SwiperClass>(null);

    const arr = Array.from({ length: 50 });

    return (
        <div className={styles['our-winners']}>
            <div className={styles.header}>
                <Title text={data.title} />
                <SubTitle text={data.text} />
            </div>

            <div className={styles.slider}>
                <Swiper
                    spaceBetween={6}
                    slidesPerView={8}
                    onSwiper={(swiper) => {
                        //@ts-ignore
                        swiperRef.current = swiper;
                    }}
                >
                    {arr.map((_, index) => (
                        <SwiperSlide key={index}>
                            <SliderCard index={index + 1} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    className={styles["slide-prev"]}
                    onClick={() =>
                        swiperRef.current && swiperRef.current.slidePrev()
                    }
                >
                    <ArrowButton />
                </button>
                <button
                    className={styles["slide-next"]}
                    onClick={() =>
                        swiperRef.current && swiperRef.current.slideNext()
                    }
                >
                    <ArrowButton />
                </button>
            </div>
        </div>
    );
};

export { OurWinners };
