export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 pb-20">
      <div className="grid md:grid-cols-2 gap-8">
        {/* CARD 1 */}
        <div className="bg-white rounded-xl p-8 flex items-center gap-6 shadow">
          <img
            src="/chef.jpg"
            alt=""
            className="w-28 h-28 rounded-lg object-cover"
          />

          <div>
            <p className="text-xs text-gray-500 mb-1">HERO SECTION</p>

            <h2 className="text-2xl font-serif mb-3">Wedding Event Planner</h2>

            <button className="bg-[#b8865b] text-white px-5 py-2 rounded text-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="rounded-xl p-8 text-white bg-gradient-to-r from-[#b8865b] to-[#8b5e3c] shadow flex items-center">
          <h2 className="text-2xl font-serif">
            Female Chef Event <br />
            Wedding Event Planner
          </h2>
        </div>
      </div>
    </section>
  );
}
