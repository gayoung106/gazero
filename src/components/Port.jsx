import React from "react";
import port01 from "../assets/img/netflix.png";
const portText = [
  {
    num: "01",
    title: "리액트를 이용한 넷플릭스 웹사이트",
    desc: "리액트JS를 이용한 웹 페이지를 구성하였습니다. movie API로 카테고리에 알맞은 데이터를 받아옵니다. 파이어베이스를 활용 해 서버를 대신하였고, 회원가입과 로그인 그리고 pick(좋아요)기능을 추가했습니다.",
    img: port01,
    code: "https://github.com/gayoung106/react-netflix-webpage",
    view: "https://netflix-gozero.web.app/",
    name: "넷플릭스 포트폴리오",
  },
];

const Port = () => {
  return (
    <section id="port">
      <div className="port__inner">
        <div className="port__title">
          portfolio<em>작업물</em>
        </div>
        <div className="port__wrap">
          {portText.map((port, key) => (
            <article key={key} className={`port__item p${key + 1}`}>
              <span className="num">{port.num}</span>
              <a
                href={port.code}
                target="_blank"
                className="img"
                rel="noreferrer"
              >
                <img src={port.img} alt={port.name} />
              </a>
              <h3 className="title">{port.title}</h3>
              <p className="desc">{port.desc}</p>
              <a
                href={port.view}
                target="_blank"
                className="site"
                rel="noreferrer"
              >
                DEMO 사이트
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Port;
