/* eslint-disable react/no-unescaped-entities */
import QuoteBlock from "../../components/quote/QuoteBlock";
import Hero from "../hero/Hero";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* Content section */}
      <div className="mt-32 overflow-hidden sm:mt-40">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The Movement
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                The Save Hostos Movement was a mass struggle from 1973-1978 by
                students, staff, faculty and the South Bronx community to secure
                facilities and prevent the closure of Eugenio María de Hostos
                Community College. Their occupation, protest and political
                tactics won the college's future.
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600 mb-5">
                For 5 years, the Save Hostos Movement united the campus and
                community in 3 campaigns to acquire space, stop proposed
                closure, and fund renovations. This diverse coalition's struggle
                for educational equity through Hostos, the sole bilingual
                community college in the region, demonstrated the South Bronx's
                resolve. The movement profoundly shaped Hostos' culture of
                activism and coalition-building for access and justice.
              </p>
              <a
                href="https://cdha.cuny.edu/collections/show/172"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold leading-6 text-black shadow-sm border border-orange bg-orange hover:text-[#F5F5F5] transition duration-200 hover:bg-opacity-80"
              >
                Read The Story
              </a>
            </div>

            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src="assets/images/SerranoSpeech.jpg"
                  alt="Serrano’s Speech Outside 475 Building"
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
      {/* Quote section */}\
      <div className="">
        <QuoteBlock />
      </div>
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto text-center">
          <h2
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl xl:text-6xl hover:text-orange ease-in transition duration-200"
            style={{ maxWidth: "100%" }}
          >
            <Link to="https://www.hostos.cuny.edu/Home" target="_blank">
              Hostos Community College
            </Link>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Born of struggle by those committed to equity in education,
              Eugenio María de Hostos Community College embodies access and
              empowerment through multilingual learning in the heart of the
              South Bronx.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
