import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full fixed">
        <div className="container m-auto py-2">
          <div className="grid grid-cols-2">
            <div className="flex items-center">
              <img
                src="https://images.squarespace-cdn.com/content/v1/59f050f4edaed8e2b6dc5a1e/1509044011018-UKR98VFRGVSE8MPHLFXX/FENIX+LOGO+transparent+vit-svart.png?format=1500w"
                alt="logo"
                className="w-20 mr-20"
              />

              <div className="nav-links text-textPrimary">
                <Link to="/" className="mx-1">
                  Home
                </Link>
                <Link to="/about" className="mx-1">
                  About
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="search"
                name="search"
                className="w-full mx-2 px-2 py-1 bg-primary focus:outline-none text-white"
                placeholder="Search ..."
              />
              <button className="w-28 bg-[#F2B56A] py-2 px-10 rounded-full text-sm">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
