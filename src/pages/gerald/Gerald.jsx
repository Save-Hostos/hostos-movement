/* eslint-disable react/no-unescaped-entities */
export default function Gerald() {
  return (
    <div className="pt-40 md:pt-40 lg:pt-40 mb-[2%] mx-[2%] lg:mx-[5%]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Gerald Meyer
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Gerald Meyer arrived at Hostos Community College in 1972,
                  immediately investing himself in the college's mission. As
                  founding chair of the Professional Staff Congress Chapter, he
                  helped lead major campaigns to acquire facilities and prevent
                  closure during fiscal crisis. Meyer served on the College
                  Senate, co-chaired activist groups, and advised student
                  organizations, grateful for Hostos' support of his justice
                  efforts.
                </p>
                <p className="mt-8">
                  Though retired since 2002, Dr. Meyer remains committed to
                  Hostos through philanthropy. He co-founded the Circle of 100
                  Scholarship and Emergency Fund to foster a culture of giving
                  benefitting students. Meyer also made a generous $25,000 gift,
                  asking that a room be named for East Harlem Congressman Vito
                  Marcantonio instead of himself.
                </p>
                <p className="mt-8">
                  Meyer's activist spirit stems from his working-class
                  upbringing. At Hostos, he found a community with shared
                  values. He attributes success to his life partner's support,
                  maintaining a modest lifestyle, and dedicating time and
                  resources to advance social justice causes individually and
                  collectively. Now Professor Emeritus, Meyer continues
                  supporting Hostos' mission through volunteerism and
                  generosity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
