import HomeNavigation from "./HomeNavigation";
import Logo from "./Logo";

function HomeHeader() {
  return (
    <header className="border-b border-gray-100 px-6 md:px-8 py-5 sticky top-0 bg-white z-10 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <HomeNavigation />
      </div>
    </header>
  );
}

export default HomeHeader;
