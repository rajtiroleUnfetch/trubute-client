import { useState } from "react";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";

function TributePage() {
  const [activeTab, setActiveTab] = useState("ABOUT");

  return (
    <>
      {/* TOP HEADER */}
      <div className="h-16 flex items-center justify-between px-6 bg-white border-b border-gray-200">
        <div className="text-red-800 text-xl font-medium">TRIBUTE</div>
<Box  className="text-red-800 text-xl font-medium">fasdf</Box>
        <div className="flex space-x-6 text-gray-600 text-sm">
          <div className="hover:text-red-800 cursor-pointer">SIGN IN</div>
          <div className="hover:text-red-800 cursor-pointer">INVITE OTHERS</div>
          {/* <div className="hover:text-red-800 cursor-pointer">
            CREATE A NEW WEBSITE
          </div> */}
          <div className="hover:text-red-800 cursor-pointer">
            CONTACT SUPPORT
          </div>
        </div>
      </div>

      {/* HERO BANNER */}
      <div
        className="px-6 py-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('/images/hero-bg.jpg')",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center">
          {/* TEXT */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl text-red-800 leading-tight">
              DOCTOR VELMA <br />
              NICHOLSON-LEE
            </h1>
            <p className="text-2xl text-red-800 mt-6">1933 – 2025</p>
          </div>

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src="/images/test.png"
              alt="Doctor Velma Nicholson-Lee"
              className="w-64 h-80 object-cover bg-white p-1 shadow"
            />
          </div>
        </div>
      </div>

      {/* STICKY TABS */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-center space-x-10 text-sm text-gray-600">
            {["ABOUT", "LIFE", "GALLERY", "STORIES"].map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 cursor-pointer capitalize ${
                  activeTab === tab
                    ? "border-b-2 border-red-800 text-red-800"
                    : "hover:text-red-800"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* ABOUT TAB */}
        {activeTab === "ABOUT" && (
          <div className="flex flex-col md:flex-row gap-10">
            {/* MAIN */}
            <div className="w-full md:w-2/3">
              {/* QUOTE */}
              <p className="text-red-700 italic text-lg leading-relaxed text-center">
                “My life was devoted to the care of others, amid their cries,
                hopes, and the world’s bustle. Now I ask for no ceremony, no
                gathering — only silence, away from noise and duty, to finally
                rest in peace.”
              </p>

              {/* BIO */}
              <p className="mt-8 text-gray-700 text-sm leading-relaxed">
                Born on May 21, 1933 in Spanish Town, St. Catherine Parish,
                Jamaica, Doctor Velma Nicholson-Lee devoted her life to the
                practice of medicine and the service of her community. Her
                compassion, dedication, and unwavering commitment touched
                countless lives and will be remembered always.
              </p>

              {/* TRIBUTES */}
              <div className="mt-14">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Tributes
                  </h2>

                  <button className="text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
                    Leave a Tribute
                  </button>
                </div>

                {/* TRIBUTE LIST */}
                <div className="space-y-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="text-sm font-medium text-gray-800">
                      Association of General Practitioners of Jamaica
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Saturday, August 23
                    </div>
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      Tribute to Dr. Velma Nicholson-Lee (“Dottie”). On August
                      19, 2025, the medical fraternity of Jamaica lost a quiet
                      giant of general practice.
                    </p>
                    <button className="mt-3 text-sm text-red-800 hover:underline">
                      Read more
                    </button>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="text-sm font-medium text-gray-800">
                      Samuel Brown
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Sunday, August 24
                    </div>
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      Thank you for your kindness, wisdom, and compassion. Your
                      legacy will live on in all the lives you touched.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <Sidebar />
          </div>
        )}

        {/* LIFE TAB */}
        {activeTab === "LIFE" && (
          <div className="flex flex-col md:flex-row gap-10">
            {/* MAIN CONTENT */}
            <div className="w-full md:w-2/3 space-y-6">
              {/* LIFE CARD 1 */}
              <div className="bg-gray-50 border border-gray-200 rounded-md p-6">
                <h2 className="text-lg font-semibold text-gray-800">
                  Early Life and Education
                </h2>

                <p className="mt-2 italic text-sm text-gray-600">
                  “I have come that they may have life, and have it more
                  abundantly.” — John 10:10
                </p>

                <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                  Velma Nicholson was born on May 21, 1933, in Spanish Town,
                  Saint Catherine, Jamaica. From her earliest years, she
                  displayed a deep curiosity for learning and a strong sense of
                  compassion.
                </p>

                <button className="mt-4 text-sm text-red-800 hover:underline">
                  Read more
                </button>
              </div>

              {/* LIFE CARD 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-md p-6">
                <h2 className="text-lg font-semibold text-gray-800">
                  Higher Education and Career
                </h2>

                <p className="mt-2 italic text-sm text-gray-600">
                  “Where your talents and the needs of the world cross, there
                  lies your profession.” — Aristotle
                </p>

                <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                  Following her formative years at St. Andrew High School for
                  Girls, Velma pursued medical training and went on to dedicate
                  decades of service to general practice, becoming a pillar in
                  her community.
                </p>

                <button className="mt-4 text-sm text-red-800 hover:underline">
                  Read more
                </button>
              </div>
            </div>

            {/* SIDEBAR — EXACT SAME AS ABOUT */}
            <Sidebar />
          </div>
        )}

        {/* GALLERY TAB */}
        {activeTab === "GALLERY" && (
          <div className="flex flex-col md:flex-row gap-10">
            {/* MAIN CONTENT */}
            <div className="w-full md:w-2/3">
              {/* INNER GALLERY TABS */}
              <div className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-6">
                <div className="flex space-x-8 text-sm text-gray-600 border-b border-gray-200 pb-3 mb-4">
                  <div className="border-b-2 border-red-800 text-red-800 pb-2 cursor-pointer">
                    Photo
                  </div>
                  <div className="cursor-pointer hover:text-red-800">Video</div>
                  <div className="cursor-pointer hover:text-red-800">Audio</div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex space-x-3 mb-4">
                  <button className="text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
                    Add photos
                  </button>
                  <button className="text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
                    Start slideshow
                  </button>
                </div>

                {/* PHOTO GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-gray-200 rounded-md overflow-hidden"
                    >
                      <img
                        src="/images/test.png"
                        alt="Gallery"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SIDEBAR — SAME AS ABOUT/LIFE */}
            <Sidebar />
          </div>
        )}

        {/* STORIES TAB */}
        {activeTab === "STORIES" && (
          <div className="flex flex-col md:flex-row gap-10">
            {/* MAIN CONTENT */}
            <div className="w-full md:w-2/3 space-y-6">
              {/* STORY CARD */}
              <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                <div className="text-xs text-gray-500 mb-2">
                  October 18 · by Association of General Practitioners of
                  Jamaica
                </div>

                <img
                  src="/images/test.png"
                  alt="Story"
                  className="w-full h-64 object-cover rounded-md mb-4"
                />

                <p className="text-sm text-gray-700 leading-relaxed">
                  Church members at the interment of Velma Nicholson at Shooters
                  Hill, with Rev. Barrington Jones, who blessed the urn.
                </p>

                <button className="mt-3 text-sm text-red-800 hover:underline">
                  Share
                </button>
              </div>

              {/* STORY CARD */}
              <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                <div className="text-xs text-gray-500 mb-2">
                  October 16 · by Association of General Practitioners of
                  Jamaica
                </div>

                <img
                  src="/images/test.png"
                  alt="Story"
                  className="w-full h-64 object-cover rounded-md mb-4"
                />

                <p className="text-sm text-gray-700 leading-relaxed">
                  Memorial plaque placed in remembrance of Doctor Velma
                  Nicholson-Lee.
                </p>

                <button className="mt-3 text-sm text-red-800 hover:underline">
                  Share
                </button>
              </div>
            </div>

            {/* SIDEBAR — SAME AS EVERYWHERE */}
            <Sidebar />
          </div>
        )}

        {/* PLACEHOLDER TABS */}
        {activeTab !== "about" && (
          <div className="text-center text-gray-500 py-20">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} content
            coming soon
          </div>
        )}
      </div>
    </>
  );  
}

export default TributePage;
