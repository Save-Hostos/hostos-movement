/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import {
  ArrowTopRightOnSquareIcon,
  InformationCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import MagdaQuoteBlock from "../../components/quote/MagdaQuoteBlock";
import QuoteBlock from "../../components/quote/QuoteBlock";
import Hero from "../hero/Hero";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Landing() {
  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    swipe: true,
    accessibility: true,
  };

  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* Content section */}
      <div className="mt-32 overflow-hidden sm:mt-40">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2
                id="theMovement"
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                The Movement
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600 lg:text-lg">
                The Save Hostos Movement (CUNY) was a mass struggle from
                1973-1978 by students, staff, faculty and the South Bronx
                community to secure facilities and prevent the closure of
                Eugenio María de Hostos Community College during New York City's
                fiscal crisis. Their occupation, protest and political tactics
                won the college&#39;s future.
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600 mb-5 lg:text-lg">
                For five years, the Save Hostos Movement united the campus and
                community in three separate campaigns to acquire space, stop
                proposed closure of the college, and fund renovations of the 500
                Building. This diverse coalition&#39;s struggle for educational
                equity through Hostos, the sole bilingual community college in
                the region, demonstrated the South Bronx&#39;s resolve. The
                movement profoundly shaped Hostos&#39; culture of activism and
                coalition-building for access to higher education and justice.
              </p>

              {/* Read More — external link with inline redirect notice */}
              <div className="flex flex-col items-start gap-3">
                <a
                  href="https://cdha.cuny.edu/collections/show/172"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-describedby="cdha-note"
                  className="inline-flex items-center gap-2 rounded-md px-3.5 py-2.5 text-sm font-semibold leading-6 text-black shadow-sm border border-orange bg-orange hover:text-white hover:bg-opacity-80 transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
                >
                  Read More
                  <ArrowTopRightOnSquareIcon
                    className="w-4 h-4"
                    aria-hidden="true"
                  />
                </a>
                <p
                  id="cdha-note"
                  className="flex items-center gap-1.5 text-xs text-gray-500"
                >
                  <InformationCircleIcon
                    className="w-3.5 h-3.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  Opens the CDHA archive in a new tab
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src="assets/images/SerranoSpeech.jpg"
                  alt="Serrano's Speech Outside 475 Building"
                  className="aspect-[7/5] w-[37rem] h-[37rem] max-w-none rounded-full bg-gray-50 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                    src="assets/images/ModelNewCampus.jpg"
                    alt="Mancuso with Model of New Campus"
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-full bg-gray-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                    src="assets/images/BetteKerr.jpg"
                    alt="Students with Bette Kerr"
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-full bg-gray-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                    src="assets/images/ChildrenSign.jpg"
                    alt="Children with Save Hostos Sign"
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-full bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quote carousel with arrows outside slick to avoid aria-hidden issues */}
      <div className="relative quote-slider">
        <Slider ref={sliderRef} {...settings}>
          <QuoteBlock />
          <MagdaQuoteBlock />
        </Slider>

        {/* Side arrows — lg+ only, positioned over the dark section */}
        <button
          type="button"
          onClick={() => sliderRef.current?.slickPrev()}
          className="hidden lg:flex absolute left-4 xl:left-6 top-[calc(50%+7rem)] -translate-y-1/2 z-20 items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous quote"
        >
          <ChevronLeftIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => sliderRef.current?.slickNext()}
          className="hidden lg:flex absolute right-4 xl:right-6 top-[calc(50%+7rem)] -translate-y-1/2 z-20 items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next quote"
        >
          <ChevronRightIcon className="w-6 h-6" aria-hidden="true" />
        </button>

        {/* Bottom-center arrows — sm and md only */}
        <div className="lg:hidden flex justify-center items-center gap-6 bg-gray-900 pt-2 pb-8">
          <button
            type="button"
            onClick={() => sliderRef.current?.slickPrev()}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous quote"
          >
            <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => sliderRef.current?.slickNext()}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next quote"
          >
            <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="relative z-0 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Thank you!
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Educating for Diversity Grant made possible by the Ms. MacKenzie
            Scott's Gift: President's Initiatives.
          </p>
        </div>
      </div>
    </>
  );
}

export default Landing;
