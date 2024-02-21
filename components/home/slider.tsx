"use client"

import React from "react"
import { useTranslation } from "next-i18next"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"

const SLIDE_DATA = [
  {
    icon: "/images/home/slide-icon-1.png",
    title: "1 Satoshis",
    text: "per Kb data",
  },
  {
    icon: "/images/home/slide-icon-2.png",
    title: "1.95 Billion",
    text: "Total Transaction",
  },
  {
    icon: "/images/home/slide-icon-3.png",
    title: "$ 0.000003",
    text: "Transaction Fee",
  },
]

const SliderSection = () => {
  const { t, i18n } = useTranslation()
  const settings = {
    className: "center gfe-carousel ",
    centerMode: true,
    centerPadding: "320px",
    slidesToShow: 1,
    draggable: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "50px",
        },
      },
    ],
  }

  return (
    <div className=" auth relative bg-background pt-[100px]">
      <div className="flex flex-col items-center gap-[24px] lg:px-[200px]">
        <div className="rounded-md bg-primary/10 p-2">
          <p className="button-87 whitespace-nowrap !text-base !font-medium text-primary">
            <span className="actual-text">
              {t("home_page.section?.subtitle")}
            </span>
            <span className="front-text">
              {t("home_page.section?.subtitle")}
            </span>
          </p>
        </div>
        <h1 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text text-center font-goldman text-5xl font-normal capitalize text-transparent lg:text-[50px]">
          {t("home_page.section?.title")}
        </h1>
      </div>

      <div className="my-[30px] mt-[270px]">
        <div className="">
          <div className="relative flex w-full items-center">
            <div className="absolute mt-20 h-[500px] w-full ">
              <Slider arrows={false} {...settings}>
                {SLIDE_DATA.map((data, index) => (
                  <div key={index} className="rounded-sm  px-[40px] ">
                    <Image
                      src={"/images/home/gfe-image.png"}
                      className="size-full object-contain"
                      width={500}
                      height={300}
                      alt="slider"
                    />
                  </div>
                ))}
              </Slider>
              <style jsx global>{`
                .slick-slide {
                  opacity: 0.5;
                }

                .slick-center {
                  opacity: 1 !important;
                }

                .slick-dots {
                  bottom: -48px !important;
                  z-index: 999 !important;
                  top: -40px;
                }

                .slick-dots li button:before {
                  content: " ";
                  border: 1px solid #1570ef;
                  line-height: 2px;
                  height: 3px;
                  width: 25px;
                }
                .slick-dots .slick-active button:before {
                  background-color: #1570ef;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderSection
