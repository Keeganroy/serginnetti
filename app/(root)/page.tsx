"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Image0 from "@/public/images/carousel/0.png";
import Image1 from "@/public/images/carousel/1.png";
import Image2 from "@/public/images/carousel/2.png";
import Image3 from "@/public/images/carousel/3.png";
import ArrowIcon from "@/public/images/icons/arrow.svg";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import s from "./page.module.scss";

export default function Home() {
  return (
    <section className={s.hero}>
      <Swiper
        className={s.swiper}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{ prevEl: `.${s.prev}`, nextEl: `.${s.next}` }}
        pagination={{ clickable: true, el: `.${s.pagination}` }}
      >
        <SwiperSlide
          className={s.slide}
          style={{ backgroundImage: `url(${Image0.src})` }}
        />
        <SwiperSlide
          className={s.slide}
          style={{ backgroundImage: `url(${Image1.src})` }}
        />
        <SwiperSlide
          className={s.slide}
          style={{ backgroundImage: `url(${Image2.src})` }}
        />
        <SwiperSlide
          className={s.slide}
          style={{ backgroundImage: `url(${Image3.src})` }}
        />

        <div className={s.info}>
          <h1 className={s.title}>
            SERGINNETTI российский бренд женской одежды
          </h1>
          <div className={s.linkBox}>
            <Link className={s.link} href={"/"}>
              перейти в каталог
            </Link>
          </div>

          <div className={s.navigation}>
            <div className={`${s.prev} swiper-button-prev`}></div>
            <div className={`${s.next} swiper-button-next`}></div>
          </div>
        </div>

        <div className={s.pagination}></div>

        <Link className={s.linkIcon} href={"/"}>
          <Image src={ArrowIcon} alt="catalog" />
        </Link>
      </Swiper>
    </section>
  );
}
