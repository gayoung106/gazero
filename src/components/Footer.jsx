import React from "react";
const footerText = [
  {
    title: "velog",

    link: "https://velog.io/@gazero_",
  },
  {
    title: "github",

    link: "https://github.com/gayoung106",
  },
  {
    title: "resume",

    link: "https://mahogany-actor-87e.notion.site/SONG-GA-YOUNG-aa3c2e10a261465ebdd8cbb25d01bd0e",
  },
];

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__text">
          <span>GAZERO</span>
          <span>© webs</span>
        </div>
        <div className="footer__info">
          {/* <div className="left">
            <div className="title">
              <a href="/"></a>
            </div>
          </div> */}
          <div className="right">
            <h3>social</h3>
            <ul>
              {footerText.map((footer, key) => (
                <li key={key}>
                  <a href={footer.link}>{footer.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__right">
          © 2023 gazero
          <br />이 사이트는 ReactJS와 SCSS를 이용하여 제작하였습니다.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
