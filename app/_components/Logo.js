import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center cursor-pointer">
        <div className="text-emerald-600 mr-2">
          <svg
            className="w-8 h-8"
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
        <div>
          <span className="font-bold text-xl text-gray-800">Parv</span>
          <span className="font-bold text-xl text-emerald-600">Jain</span>
        </div>
      </div>
    </Link>
  );
}

export default Logo;
