'use client'

import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div>

        {/* Helo and header */}
        <div className="w-full bg-gradient-to-b from-[#3270DD] to-[#6fa8fd] text-white font-golos relative overflow-hidden rounded-b-4xl">
          {/* Header */}
          <header className="flex justify-between items-center px-6 sm:px-10 py-6">
            {/* Logo */}
            <div className="text-white text-xl sm:text-2xl font-bold tracking-tight">
              Fundproject<span className="text-black">X</span>
            </div>


            {/* Nav */}
            <nav className="hidden sm:flex gap-4 items-center text-white/80">
              <button className="text-white font-medium rounded-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition">
                ● Explore
              </button>
              <button className="hover:text-white transition">Raise Money</button>
              <button className="hover:text-white transition">Learn</button>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <button className="text-white/90 border border-white/30 px-4 py-2 rounded-full hover:bg-white/10 transition">
                Log In
              </button>
              <button className="bg-black text-white px-5 py-2 rounded-full hover:opacity-80 transition">
                Sign Up
              </button>
            </div>
          </header>

          {/* Hero Section */}
          <main className="flex flex-col items-center justify-center text-center mb-20 mt-20 px-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight max-w-4xl">
              Support Those Dedicated To Building A Brighter Future
            </h1>
            <p className="text-white/90 text-lg sm:text-xl mt-6 max-w-xl">
              Get equity and front row seats to the startups and small businesses you love—for as little as $100.
            </p>
            <div className="mt-8 flex flex-row sm:flex-row gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition">
                Join Wefunder
              </button>
              <button className="bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition border border-white/30">
                Explore Startups
              </button>
            </div>

          </main>
        </div>

        {/* Stats + Badges Section */}
        <section className="bg-white text-black py-16 px-6 sm:px-10 max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-10">
            Join Over 1 Million Investors
          </h2>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
            <div className="border-3 border-gray-200 rounded-xl py-6">
              <div className="text-3xl font-bold">$250</div>
              <div className="text-sm text-gray-500 mt-1">Median Investment</div>
            </div>
            <div className="border-3 border-gray-200 rounded-xl py-6">
              <div className="text-3xl font-bold">3,668</div>
              <div className="text-sm text-gray-500 mt-1">Founders Funded</div>
            </div>
            <div className="border-3 border-gray-200 rounded-xl py-6">
              <div className="text-3xl font-bold">$891M</div>
              <div className="text-sm text-gray-500 mt-1">raised on Wefunder</div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            {[
              "A coding platform for all",
              "A beloved neighborhood restaurant",
              "Virtual reality workspaces",
              "A cure for cancer in dogs",
              "A brewery in the heart of Appalachia",
              "A community-owned supermarket",
              "Increasing manufacturing access",
            ].map((label, i) => (
              <span
                key={i}
                className={`px-4 py-2 rounded-full border ${label.includes("brewery")
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
                  }`}
              >
                {label}
              </span>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-8 text-black font-golos">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Explore Startups Raising Now</h2>
              <p className="text-gray-600 text-sm mt-1">Backed by top VCs and notable angels.</p>
            </div>
            <button className="mt-4 sm:mt-0 bg-black text-white px-5 py-2 rounded-full hover:opacity-80 transition text-sm">
              Explore Startups →
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm bg-white">
              <Image
                src="/images/1.jpg"
                alt="Startup 1"
                width={600}
                height={600}
                className="w-full h-60 object-cover"
              />

              <div className="p-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-2 text-xs font-medium">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">NOTABLE ANGEL</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">BIOTECH</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">HEALTHCARE</span>
                </div>
                {/* Title & Desc */}
                <h3 className="text-base font-semibold mb-1">Beyond Lithium: Sustainable Power With Mechanical Batteries</h3>
                <p className="text-sm text-gray-600">Demand for battery storage is doubling every 3 years... $2.5M raised.</p>
              </div>
              {/* Footer Stats */}
              <div className="flex justify-between border-t border-gray-200 px-4 py-3 text-sm font-semibold">
                <div>
                  <div>$5,240,140</div>
                  <div className="text-xs text-gray-500 font-normal">Invested</div>
                </div>
                <div className="text-right">
                  <div>1,256</div>
                  <div className="text-xs text-gray-500 font-normal">Investors</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm bg-white">
              <Image
                src="/images/2.jpg"
                alt="Startup 1"
                width={600}
                height={600}
                className="w-full h-60 object-cover"
              />

              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-2 text-xs font-medium">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">NOTABLE ANGEL</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">BIOTECH</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">HEALTHCARE</span>
                </div>
                <h3 className="text-base font-semibold mb-1">Targeting The Root Causes Of Sepsis With XGal-3</h3>
                <p className="text-sm text-gray-600">Targeting a $62B sepsis treatment market in the USA alone...</p>
              </div>
              <div className="flex justify-between border-t border-gray-200 px-4 py-3 text-sm font-semibold">
                <div>
                  <div>$1,483,750</div>
                  <div className="text-xs text-gray-500 font-normal">Invested</div>
                </div>
                <div className="text-right">
                  <div>781</div>
                  <div className="text-xs text-gray-500 font-normal">Investors</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm bg-white">
              <Image
                src="/images/1.jpg"
                alt="Startup 1"
                width={600}
                height={600}
                className="w-full h-60 object-cover"
              />

              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-2 text-xs font-medium">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">VC-BACKED</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Y COMBINATOR</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">TECH</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">AI</span>
                </div>
                <h3 className="text-base font-semibold mb-1">10x Human Productivity Via Robotic Workforces For The Food</h3>
                <p className="text-sm text-gray-600">Annualized sales grew 10X, from $60k in Q3 to $600k 2024.</p>
              </div>
              <div className="flex justify-between border-t border-gray-200 px-4 py-3 text-sm font-semibold">
                <div>
                  <div>$2,557,692</div>
                  <div className="text-xs text-gray-500 font-normal">Invested</div>
                </div>
                <div className="text-right">
                  <div>402</div>
                  <div className="text-xs text-gray-500 font-normal">Investors</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 px-6 sm:px-10 text-black text-center font-golos">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Why Invest On Funder?</h2>
          <p className="text-gray-600 text-sm mb-12">Support founders, build your portfolio, and join a community.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 rounded-full bg-[#f0f4f9] flex items-center justify-center text-[#3270DD] text-xl">
                💲
              </div>
              <h3 className="font-semibold mb-1">Invest And Receive Equity</h3>
              <p className="text-sm text-gray-600">Unlike Kickstarter or Indiegogo where you pledge money for products perks, invest money for equity.</p>
            </div>

            {/* Highlighted Center Card */}
            <div className="flex-1 bg-gradient-to-br from-[#3270DD] to-[#6fa8fd] text-white rounded-2xl p-6 shadow-lg scale-105 flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 rounded-full bg-white/20 flex items-center justify-center text-white text-xl">
                🧠
              </div>
              <h3 className="font-semibold mb-1">Build Wealth Over Time</h3>
              <p className="text-sm text-white/90">Build an investment portfolio for the long-term by leveraging your unique knowledge and the wisdom of the crowd.</p>
            </div>

            {/* Card 3 */}
            <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 rounded-full bg-[#f0f4f9] flex items-center justify-center text-[#3270DD] text-xl">
                📣
              </div>
              <h3 className="font-semibold mb-1">Get Front Row Seats</h3>
              <p className="text-sm text-gray-600">When you invest, you’ll get exclusive investor updates and opportunities to contribute to the companies you love.</p>
            </div>
          </div>
        </section>


      </div>
    </div>


  )
}
