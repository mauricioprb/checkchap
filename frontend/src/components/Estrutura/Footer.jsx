import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="texto fonte-regular-m">
        <span className="copyright fonte-semibold-m">CheckChap</span> &#169;{" "}
        {currentYear}
      </div>
    </footer>
  );
};

export default Footer;
