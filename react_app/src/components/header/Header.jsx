import React from "react";
import "./Header.css";

const Header = ({ ime_kor, prez_kor }) => {
  let brojac = 0;

  const mojaFunc = () => {
    brojac += 1;
    console.log("Izvrsenje funcije", brojac);
  };

  return (
    <div className="header-body">
      <ul>
        <li>PAGE1</li>
        <li>PAGE2</li>
        <li>PAGE3</li>
        <li>PAGE4</li>
        <li>
          {ime_kor} {prez_kor}
        </li>
      </ul>
      <button onClick={mojaFunc}>Test</button>
    </div>
  );
};

export default Header;
