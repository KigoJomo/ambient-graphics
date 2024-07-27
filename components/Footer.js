const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>
          © {new Date().getFullYear()} Ambient Graphics. All rights reserved.
        </p>
        <div>
          <a href="#" className="mx-2">
            Privacy Policy
          </a>
          <a href="#" className="mx-2">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
