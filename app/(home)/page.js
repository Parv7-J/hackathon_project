import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>INsurechain</title>
        <meta
          name="description"
          content="The leading onchain insurance alternative"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section with Large Site Name */}
      <section className="bg-emerald-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center mb-8">
            <Image
              src="/logo.png"
              alt="INsurechain Logo"
              width={60}
              height={60}
              className="mr-4"
            />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800">
              INsurechain
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            Decentralized Insurance Claiming System
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

      {/* Problem Statement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
            What is the issue? Who is facing it? Why does it matter?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Issue Overview Card */}
            <div className="bg-[#f4f5ee] p-8 rounded-lg relative">
              <div className="bg-[#617547] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Issue Overview
              </h3>
              <p className="mb-2">
                Traditional vehicle insurance claim processing is{" "}
                <span className="font-semibold">
                  inefficient and time-consuming
                </span>
                , often taking weeks to complete.
              </p>
              <p className="mb-2">
                This not only frustrates policyholders but also deters potential
                customers who are seeking faster, more streamlined insurance
                solutions.
              </p>
              <p className="mb-2">
                The lack of speed and transparency in the process{" "}
                <span className="font-semibold">
                  reduces customer satisfaction
                </span>{" "}
                and hinders the growth of insurers in a competitive market.
              </p>
              <div className="w-32 h-1 bg-[#617547] mt-6 mx-auto"></div>
            </div>

            {/* Effect on Those Involved Card */}
            <div className="bg-[#f4f5ee] p-8 rounded-lg relative">
              <div className="bg-[#617547] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Effect on Those Involved
              </h3>

              <p className="font-semibold mb-1">Policyholders:</p>
              <ul className="list-disc list-inside mb-4 text-sm">
                <li>Frustration, financial strain, loss of trust.</li>
              </ul>

              <p className="font-semibold mb-1">Insurance Companies:</p>
              <ul className="list-disc list-inside mb-4 text-sm">
                <li>Customer churn, reputational damage, higher costs.</li>
              </ul>

              <p className="font-semibold mb-1">Regulatory Bodies:</p>
              <ul className="list-disc list-inside mb-4 text-sm">
                <li>Non-compliance risks, trust issues.</li>
              </ul>

              <p className="font-semibold mb-1">New Customers:</p>
              <ul className="list-disc list-inside mb-2 text-sm">
                <li>Hesitation to choose slow insurers.</li>
              </ul>

              <div className="w-32 h-1 bg-[#617547] mt-6 mx-auto"></div>
            </div>

            {/* InsureChainAI's Mission Card */}
            <div className="bg-[#f4f5ee] p-8 rounded-lg relative">
              <div className="bg-[#617547] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                InsureChainAI&apos;s Mission
              </h3>
              <p className="mb-3 text-sm">
                To revolutionize vehicle insurance claims by combining machine
                learning and blockchain to:
              </p>

              <ol className="space-y-2 mb-2">
                <li className="text-sm">
                  <span className="font-semibold">1.</span> Automatically assess
                  claims through document and image analysis.
                </li>
                <li className="text-sm">
                  <span className="font-semibold">2.</span> Predict fraud in
                  real time with ML models.
                </li>
                <li className="text-sm">
                  <span className="font-semibold">3.</span> Use smart contracts
                  to autonomously approve or reject claims based on transparent,
                  verifiable logic.
                </li>
                <li className="text-sm">
                  <span className="font-semibold">4.</span> Provide an
                  immutable, audit-friendly history of each claim on blockchain.
                </li>
              </ol>

              <div className="w-32 h-1 bg-[#617547] mt-6 mx-auto"></div>
            </div>

            {/* Financial Impact Card */}
            <div className="bg-[#f4f5ee] p-8 rounded-lg relative">
              <div className="bg-[#617547] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Financial Impact
              </h3>
              <div className="space-y-3">
                <p className="text-sm">
                  According to industry data, up to 15-20% of insurance claims
                  are fraudulent, costing companies billions annually.
                </p>

                <p className="text-sm">
                  Middlemen can take up to 25-50% in hidden commissions,
                  increasing premiums for customers.
                </p>

                <p className="text-sm">
                  Delayed payouts undermine trust in the insurance system and
                  negatively affect customer retention.
                </p>
              </div>
              <div className="w-32 h-1 bg-[#617547] mt-6 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What it Does Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
            Decentralized Insurance Claims Simplified
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
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

            <div className="bg-white p-8 rounded-lg shadow-sm">
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

            <div className="bg-white p-8 rounded-lg shadow-sm">
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
              Join thousands of users who trust INsurechain for their
              decentralized insurance needs.
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
