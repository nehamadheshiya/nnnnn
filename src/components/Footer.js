const Footer = () => {
  return (
    <div>
      <footer className="bg-[#094C3B] text-white py-5 mt-10">
        <div className="container mx-auto flex flex-col items-center space-y-6 md:space-y-2">
          <div className="flex space-x-6 text-sm">
            <a href="/" className="hover:underline">
              Facebook
            </a>
            <span>|</span>
            <a href="/" className="hover:underline">
              Twitter
            </a>
            <span>|</span>
            <a href="/" className="hover:underline">
              Instagram
            </a>
          </div>
          <div className="flex space-x-1 md:space-x-6  text-sm">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span>|</span>
            <a href="privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="terms-conditions" className="hover:underline">
              Terms & Condition
            </a>
            <span>|</span>
            <a href="cookies-policy" className="hover:underline">
              Cookies Policy
            </a>
          </div>
        </div>
      </footer>
      <div className="bg-yellow-400 text-black text-center py-2 text-sm">
        &copy; Copyright 2025 Umeedein. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
