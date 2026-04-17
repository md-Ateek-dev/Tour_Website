import { Link, useLocation } from "react-router-dom";
import breadcrumbBg from "../../assets/bredcrubs/bredcrub.png";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div
      className="relative w-full h-80 md:h-80 bg-cover bg-center flex items-center text-white"
      style={{
        backgroundImage: `url(${breadcrumbBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Breadcrumb Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <h1 className="text-4xl font-bold uppercase">
          {pathnames[pathnames.length - 1] || "Home"}
        </h1>

        <div className="flex space-x-2 text-lg mt-2">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            return (
              <span key={name} className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link
                  to={routeTo}
                  className="capitalize text-gray-300 hover:text-white"
                >
                  {name}
                </Link>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
