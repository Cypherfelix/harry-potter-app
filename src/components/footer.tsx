import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-white text-center py-3 w-full mt-auto">
      <p className="text-sm">
        © {new Date().getFullYear()} WezaCare. All rights reserved.
      </p>
      <p className="text-sm">Designed by Cypherfellix</p>
    </footer>
  );
};

export default Footer;
