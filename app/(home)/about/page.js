// app/about/page.jsx
// import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us",
};

export default function Page() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-emerald-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About Nexus Mutual
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Pioneering decentralized risk-sharing since 2019. We&apos;re on
                a mission to reduce the risk of DeFi and make blockchain
                technology safer for everyone.
              </p>
              <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                <blockquote className="text-gray-700 italic">
                  &quot;We believe insurance should be accessible, transparent,
                  and controlled by the community, not by profit-driven
                  corporations.&quot;
                </blockquote>
              </div>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Our Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                From Idea to Reality
              </h3>
              <p className="text-gray-600 mb-4">
                Founded in 2019, Nexus Mutual began with a simple idea: bring
                the mutual insurance model to the blockchain. Traditional
                insurance companies often have misaligned incentives with their
                customers. We wanted to change that.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, Hugh Karp, experienced firsthand the devastation of
                The DAO hack and realized the need for protection against smart
                contract vulnerabilities. This experience led to the creation of
                Nexus Mutual.
              </p>
              <p className="text-gray-600">
                Since then, we&apos;ve grown from a small project to the leading
                decentralized insurance protocol, covering hundreds of millions
                in value across the DeFi ecosystem.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-semibold">2019</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Platform Launch</h4>
                    <p className="text-gray-600">
                      Nexus Mutual launched with smart contract cover for
                      Ethereum DeFi protocols.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-semibold">2020</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">First Claims Paid</h4>
                    <p className="text-gray-600">
                      Successfully processed our first wave of claims following
                      protocol exploits.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-semibold">2022</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">
                      Multi-Chain Expansion
                    </h4>
                    <p className="text-gray-600">
                      Expanded coverage to multiple blockchains including
                      Polygon and Arbitrum.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-semibold">2024</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Global Reach</h4>
                    <p className="text-gray-600">
                      Reached 25,000+ members worldwide and expanded protocol
                      coverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="bg-emerald-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Security First</h3>
              <p className="text-gray-600">
                We believe security is the foundation of financial freedom. Our
                mission is to make blockchain technology safer for everyone
                through community-driven risk assessment and protection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="bg-emerald-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6.406 8.89c.94 0 1.694-.755 1.694-1.695v-1.19a1.7 1.7 0 00-1.694-1.695h-.109a1.674 1.674 0 00-1.594 1.178 6.12 6.12 0 01-.556 1.238 1.677 1.677 0 00.18 1.98l.076.077a1.7 1.7 0 000 2.396l.842.843a1.7 1.7 0 002.396 0l.076-.077a1.677 1.677 0 001.98-.18 6.12 6.12 0 011.238-.556 1.674 1.674 0 001.178-1.594v-.109z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Community Governance
              </h3>
              <p className="text-gray-600">
                We are owned and operated by our members. Every major decision,
                from coverage options to claims assessment, is determined by our
                community through transparent governance processes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="bg-emerald-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Global Accessibility
              </h3>
              <p className="text-gray-600">
                Insurance shouldn&apos;t be limited by borders or backgrounds.
                We&apos;re building a platform that&apos;s accessible to anyone,
                anywhere in the world, regardless of their financial status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Our Team
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We&apos;re a diverse team of blockchain experts, insurance
            professionals, and developers committed to building the future of
            decentralized risk protection.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Team Member Cards - Using placeholder gradient circles instead of actual photos */}
            {[
              { name: "Parv Jain", role: "Founder & CEO" },
              { name: "Raghav Madan", role: "Chief Strategy Officer" },
              { name: "Pranav Chinmay Aditya", role: "Lead Developer" },
              { name: "Rishet Mehra", role: "Community Lead" },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Mutual</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of our community and help shape the future of
            decentralized insurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marketplace"
              className="bg-white text-emerald-600 py-3 px-8 rounded-md font-medium hover:bg-gray-100 transition duration-300"
            >
              Explore Coverage
            </Link>
            <Link
              href="/learn"
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-md font-medium hover:bg-white hover:text-emerald-600 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
