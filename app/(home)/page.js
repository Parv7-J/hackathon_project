import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Parv Jain - Decentralized Insurance</title>
        <meta
          name="description"
          content="The leading onchain insurance alternative"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section with Large Site Name */}
      <section className="bg-emerald-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-6">
            Parv Jain
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            The leading decentralized insurance alternative, protecting you
            against smart contract failures, exchange hacks, and protocol risks.
          </p>
          <div className="mt-12">
            <Link
              href="/marketplace"
              className="bg-emerald-600 text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-emerald-700 transition duration-300"
            >
              Explore Coverage
            </Link>
            <Link
              href="/learn"
              className="ml-4 bg-white text-emerald-600 border border-emerald-600 py-3 px-8 rounded-md text-lg font-medium hover:bg-emerald-50 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* What it Does Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
            Decentralized Insurance Claims Simplified
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Smart Contract Cover
              </h3>
              <p className="text-gray-600">
                Get protected against bugs, hacks, and vulnerabilities in smart
                contracts. Our coverage ensures you&apos;re protected if the
                code fails.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Custody Cover</h3>
              <p className="text-gray-600">
                Protection against hacks or insolvency of centralized exchanges
                and custodians, securing your assets when they&apos;re not in
                your control.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
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
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Protocol Cover</h3>
              <p className="text-gray-600">
                Stay protected against economic attacks, governance failures,
                and other systemic risks that can impact entire blockchain
                protocols.
              </p>
            </div>
          </div>

          <div className="bg-emerald-50 p-10 rounded-xl mb-16">
            <h2 className="text-2xl font-bold mb-6">
              How Our Claims Process Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-emerald-600 font-bold mb-4 shadow-md">
                  1
                </div>
                <h3 className="text-lg font-medium mb-2 text-center">
                  Submit Claim
                </h3>
                <p className="text-gray-600 text-center">
                  File your claim with details and evidence through our dApp.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-emerald-600 font-bold mb-4 shadow-md">
                  2
                </div>
                <h3 className="text-lg font-medium mb-2 text-center">
                  Assessment
                </h3>
                <p className="text-gray-600 text-center">
                  Claim assessors review and vote on the validity of your claim.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-emerald-600 font-bold mb-4 shadow-md">
                  3
                </div>
                <h3 className="text-lg font-medium mb-2 text-center">
                  Decision
                </h3>
                <p className="text-gray-600 text-center">
                  The community reaches a decision through our decentralized
                  governance system.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-emerald-600 font-bold mb-4 shadow-md">
                  4
                </div>
                <h3 className="text-lg font-medium mb-2 text-center">Payout</h3>
                <p className="text-gray-600 text-center">
                  If approved, payouts are automatically executed through smart
                  contracts.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">
              Why Choose Decentralized Insurance?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Trustless Protection
                </h3>
                <p className="text-gray-600 mb-6">
                  Unlike traditional insurance, our system operates without a
                  central authority. Smart contracts automate claims processing,
                  making the system transparent, tamper-proof, and resistant to
                  corruption.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Community Governed
                </h3>
                <p className="text-gray-600">
                  Decisions about claims, coverage, and protocol upgrades are
                  made by token holders through decentralized governance. This
                  ensures the system evolves to meet the needs of its users.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Global Accessibility
                </h3>
                <p className="text-gray-600 mb-6">
                  Our platform is accessible to anyone with an internet
                  connection, regardless of location or financial status. No
                  need for credit checks or complex documentation.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Incentive Alignment
                </h3>
                <p className="text-gray-600">
                  Claim assessors stake tokens when voting on claims, aligning
                  their incentives with the health of the protocol. This reduces
                  fraud and ensures fair claim assessments.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center py-10">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Protected?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of users who trust Parv for their decentralized
              insurance needs.
            </p>
            <Link
              href="/get-started"
              className="bg-emerald-600 text-white py-4 px-10 rounded-md text-lg font-medium hover:bg-emerald-700 transition duration-300"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - More content to ensure scrolling */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Trusted by the DeFi Community
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-emerald-600 mb-2">$500M+</p>
              <p className="text-gray-600">Cover Available</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-emerald-600 mb-2">
                25,000+
              </p>
              <p className="text-gray-600">Members Worldwide</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-emerald-600 mb-2">$15M+</p>
              <p className="text-gray-600">Claims Paid</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-emerald-600 mb-2">100+</p>
              <p className="text-gray-600">Protocols Covered</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
