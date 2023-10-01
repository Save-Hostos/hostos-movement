import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export default function Gerald() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="pt-40 md:pt-40 lg:pt-40 mb-[2%] mx-[2%] lg:mx-[5%]">
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          {/* Image Container */}
          <div className="lg:pr-4 flex flex-col items-center">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 w-full h-[600px] shadow-2xl">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="assets/images/YoungM.jpg"
                alt="Young Gerald Meyers"
              />

              <div
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              ></div>
            </div>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row items-center">
              <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                Gerald Meyer
              </h1>
              <Link
                to="/gallery"
                state="Hostos Moments"
                className="mt-4 sm:mt-0 sm:ml-4 rounded-md px-3.5 py-2.5 text-sm font-semibold leading-6 text-orange shadow-sm border border-orange hover:bg-orange hover:border-orange hover:text-white ease-in transition duration-200"
                onClick={scrollToTop}
              >
                View Collection
              </Link>
            </div>

            <div className="lg:flex  text-base leading-7 text-gray-700 lg:space-x-4">
              <div className="lg:flex-1">
                <p className="mt-6 mb-6 text-xl lg:text-lg ">
                  Dr. Gerald Meyer (5 June 1940—10 November 2021), was a
                  founding member of the faculty at Hostos Community
                  College/City University of New York. Initially a historian, he
                  continued his career as a researcher, activist and educator.
                  Dr. Meyer was the chair of the Save Hostos Committee that
                  worked to keep the college open when the CUNY Board of Higher
                  Education threatened its existence during the mid-1970s New
                  York City fiscal crisis. Meyer joined the Hostos faculty in
                  1972 and immediately became active in the political life of
                  the college. Recognizing the school’s significance, he began
                  saving newsletters, articles and correspondence that
                  documented the fledgling college’s existence. He would not
                  have to wait long before being given the chance to put his
                  political organizing skills and charismatic manner to work.
                  After retirement he remained a Professor Emeritus at Hostos,
                  where he had served as the Chair of the Behavioral and Social
                  Science Department and Coordinator of the Social Science Unit.
                </p>
                <p className="mt-6 mb-6 text-xl lg:text-lg">
                  Also a published author Dr. Meyer wrote the biography Vito
                  Marcantonio: Radical Politician, 1902-1954, which is in its
                  fourth printing. He also co-edited The Lost World of Italian
                  American Radicalism and with Philip Cannistraro. Dr. Meyer
                  published over sixty articles and reviews on a wide range of
                  subjects, including the Italian-American educator, Leonard
                  Covello, as well as the intersection of radicalism and
                  immigrants, culture and the Left. Dr. Meyer served on the
                  editorial boards of Socialism and Democracy and Science &amp;
                  Society, appeared in documentaries, reviewed manuscripts for
                  publication and lectured widely. He has helped launch the Vito
                  Marcantonio Forum, which is dedicated to advancing the life
                  and work of that great Italian American fighter for those left
                  out of the American Dream. Dr. Meyer co-chaired the Hostos
                  Circle of 100 Scholarship and Emergency Fund which he
                  co-founded in 2007. The Fund provides emergency grants of up
                  to $500 to students in need and $1,000 scholarships to those
                  transferring to four-year colleges.
                </p>
                <p className="mt-6 mb-6 text-xl lg:text-lg">
                  For his advocacy and generosity to Hostos Community College,
                  Room B-115 of the college&#39;s B Building was renamed the
                  &quot;Vito Marcantonio Conference Room&quot; in honor of Dr.
                  Meyer in February of 2012. Dr. Meyer earned a B.A. in History
                  from Rutgers in 1965 and an M.A. from City College, CUNY, in
                  Russian and Modern European History in 1968. In 1984, he
                  earned his Ph.D. from CUNY. Dr. Meyer was born in Hoboken, New
                  Jersey, and raised in Hudson County, New Jersey. He was a long
                  time resident of Park Slope Brooklyn.
                </p>
              </div>
            </div>
          </div>
          {/* Image Container */}
          <div className="lg:pr-4 flex flex-col items-center">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 w-full h-[600px] shadow-2xl">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="assets/images/MagdaTorch.jpg"
                alt="Young Magda Vasillov"
              />

              <div
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              ></div>
            </div>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row items-center">
              <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                Magda J. Vasillov
              </h1>
              <Link
                to="/gallery"
                state="Magda Vasillov"
                className="mt-4 sm:mt-0 sm:ml-4 rounded-md px-3.5 py-2.5 text-sm font-semibold leading-6 text-orange shadow-sm border border-orange hover:bg-orange hover:border-orange hover:text-white ease-in transition duration-200"
                onClick={scrollToTop}
              >
                View Collection
              </Link>
            </div>

            <div className="lg:flex  text-base leading-7 text-gray-700 lg:space-x-4">
              <div className="lg:flex-1">
                <p className="mt-6  mb-6 text-xl lg:text-lg">
                  Magda J. Vasillov was a photographer, art historian and
                  teacher whom made her career at Hostos Community College, City
                  University of New York, located in the South Bronx. Vasillov
                  was one of the few original employees that remained with the
                  college through the Twenty-First Century. After graduating
                  from Wellesley College in 1955, Vasillov studied at the
                  Institute of Fine Arts at New York University, during which
                  time she was selected for a research assistant position under
                  renowned Art Historian Walter Friedlaender. Vasillov left the
                  Institute of Fine Arts before completing her degree; in 1958
                  she married professional photographer Bill Vasillov. In the
                  immediate years that followed, Vasillov gave birth to three
                  daughters—Natasha, Susanna, and Marya. Shortly after the birth
                  of their third child, Vasillov’s husband suffered a heart
                  attack and passed away leaving Magda as sole provider.
                  Vasillov later returned to the Institute of Fine Arts and
                  earned her graduate degree in 1980.
                </p>
                <p className="mt-6 mb-6 text-xl lg:text-lg">
                  While at Hostos, Vasillov served the college community in many
                  different roles. In 1970, Vasillov was initially hired as the
                  college’s photographer. She established a darkroom at the
                  college, which quickly received a great deal of attention from
                  the student body. Shortly after, Vasillov began teaching a
                  course on photography and dark room methods. Vasillov went on
                  to serve as a lecturer in Arts and Civilization. After
                  obtaining her graduate degree and exhibiting her “Faces of
                  Hostos” project at the Bronx Museum in 1980, Vasillov secured
                  tenure at the college and became a permanent member of the
                  faculty.
                </p>
                <p className="mt-6 mb-6 text-xl lg:text-lg">
                  During her tenure, Vasillov actively participated in college
                  activity by serving on the College Wide Senate, Hostos Art
                  Committee, various other college committees and tasks forces,
                  and as the Chair of the Humanities Department. In 2006, the
                  college Senate voted to name the Center for Teaching and
                  Learning, “The Magda Vasillov Center for Teaching and
                  Learning,” in memory of Vasillov’s long successful career at
                  Hostos. The center was dedicated in January of 2007—two months
                  after her passing in November of 2006.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
