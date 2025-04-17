import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center cursor-pointer">
        <div className="text-emerald-600 mr-2">
          <img src="@/public/logo.png" />
        </div>
        <div>
          <span className="font-bold text-xl text-gray-800">INsurechain</span>
        </div>
      </div>
    </Link>
  );
}

export default Logo;
