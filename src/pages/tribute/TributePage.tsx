import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

function TributePage() {
  const { slug } = useParams<{ slug: string }>(); // /memorial/:slug
  const [activeTab, setActiveTab] = useState("ABOUT");
  const [memorial, setMemorial] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_BASE = process.env.REACT_APP_API_BASE;

  useEffect(() => {
    if (!slug) return;

    async function fetchMemorial() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${API_BASE}/memorials/${slug}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch memorial (${res.status})`);
        }

        const data = await res.json();
        setMemorial(data.memorial ?? data);
      } catch (err: any) {
        console.error("Memorial fetch error:", err);
        setError(err.message || "Failed to load memorial");
      } finally {
        setLoading(false);
      }
    }

    fetchMemorial();
  }, [slug, API_BASE]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Loading memorial…
      </div>
    );
  }

  if (error || !memorial) {
    return (
      <div className="h-screen flex items-center justify-center text-red-600">
        {error || "Unable to load memorial"}
      </div>
    );
  }

  return (
    <>
      {/* TOP HEADER */}
      <div className="h-16 flex items-center justify-between px-6 bg-white border-b border-gray-200">
        <div className="text-red-800 text-xl font-medium">TRIBUTE</div>

        <div className="flex space-x-6 text-gray-600 text-sm">
          <div className="hover:text-red-800 cursor-pointer">SIGN IN</div>
          <div className="hover:text-red-800 cursor-pointer">INVITE OTHERS</div>
          <div className="hover:text-red-800 cursor-pointer">
            CREATE A NEW WEBSITE
          </div>
          <div className="hover:text-red-800 cursor-pointer">
            CONTACT SUPPORT
          </div>
        </div>
      </div>

      {/* HERO */}
      <div
        className="px-6 py-16 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('${
            memorial.heroBackground || "/images/hero-bg.jpg"
          }')`,
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl text-red-800 leading-tight">
              {memorial.fullName ||
                `${memorial.firstName ?? ""} ${memorial.lastName ?? ""}`}
            </h1>

            {(memorial.birthYear || memorial.deathYear) && (
              <p className="text-2xl text-red-800 mt-6">
                {memorial.birthYear} – {memorial.deathYear}
              </p>
            )}
          </div>

          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src={memorial.heroImage || "/images/placeholder.png"}
              alt={memorial.fullName}
              className="w-64 h-80 object-cover bg-white p-1 shadow"
            />
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-center space-x-10 text-sm text-gray-600">
            {["ABOUT", "LIFE", "GALLERY", "STORIES"].map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 cursor-pointer ${
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

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* ABOUT */}
        {activeTab === "ABOUT" && (
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-2/3">
              {memorial.quote && (
                <p className="text-red-700 italic text-lg leading-relaxed text-center">
                  “{memorial.quote}”
                </p>
              )}

              {memorial.about && (
                <p className="mt-8 text-gray-700 text-sm leading-relaxed">
                  {memorial.about}
                </p>
              )}

              <div className="mt-14">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">
                  Tributes
                </h2>

                <div className="space-y-6">
                  {memorial.tributes?.length ? (
                    memorial.tributes.map((t: any, i: number) => (
                      <div
                        key={i}
                        className="bg-gray-50 border border-gray-200 rounded-md p-4"
                      >
                        <div className="text-sm font-medium text-gray-800">
                          {t.author}
                        </div>

                        <div className="text-xs text-gray-500 mt-1">
                          {t.date && new Date(t.date).toDateString()}
                        </div>

                        <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                          {t.text}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No tributes yet.</p>
                  )}
                </div>
              </div>
            </div>

            <Sidebar memorial={memorial} />
          </div>
        )}

        {/* LIFE */}
        {activeTab === "LIFE" && (
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-2/3 space-y-6">
              {memorial.life?.length ? (
                memorial.life.map((section: any, i: number) => (
                  <div
                    key={i}
                    className="bg-gray-50 border border-gray-200 rounded-md p-6"
                  >
                    <h2 className="text-lg font-semibold text-gray-800">
                      {section.title}
                    </h2>

                    {section.quote && (
                      <p className="mt-2 italic text-sm text-gray-600">
                        {section.quote}
                      </p>
                    )}

                    <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">
                  Life details coming soon.
                </p>
              )}
            </div>

            <Sidebar memorial={memorial} />
          </div>
        )}

        {/* GALLERY */}
        {activeTab === "GALLERY" && (
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {memorial.gallery?.photos?.length ? (
                memorial.gallery.photos.map((img: string, i: number) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-200 rounded-md overflow-hidden"
                  >
                    <img
                      src={img}
                      alt="Gallery"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No photos available.</p>
              )}
            </div>

            <Sidebar memorial={memorial} />
          </div>
        )}

        {/* STORIES */}
        {activeTab === "STORIES" && (
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-2/3 space-y-6">
              {memorial.stories?.length ? (
                memorial.stories.map((story: any, i: number) => (
                  <div
                    key={i}
                    className="bg-gray-50 border border-gray-200 rounded-md p-4"
                  >
                    <div className="text-xs text-gray-500 mb-2">
                      {story.date &&
                        new Date(story.date).toDateString()}{" "}
                      · by {story.author}
                    </div>

                    {story.image && (
                      <img
                        src={story.image}
                        alt="Story"
                        className="w-full h-64 object-cover rounded-md mb-4"
                      />
                    )}

                    <p className="text-sm text-gray-700 leading-relaxed">
                      {story.text}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No stories yet.</p>
              )}
            </div>

            <Sidebar memorial={memorial} />
          </div>
        )}
      </div>
    </>
  );
}

export default TributePage;


