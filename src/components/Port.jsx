import React, { useEffect, useRef } from "react";
import study1 from "../assets/img/js.png";
import study2 from "../assets/img/react.png";
import study3 from "../assets/img/ts.png";
import study4 from "../assets/img/python.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const portText = [
  {
    num: "01",
    title: "JavaScript",
    desc: "자바스크립트를 개인적으로 공부하며, 자바스크립트 구조를 이해하면서 풀리지 않았던 의문을 주로 담고 있다. 자바스크립트를 접근하기 어렵다고 생각했다면 한 번 둘러 보는 것을 추천한다. 하나의 포스팅마다 디자인 & 문과생이 자바스크립트를 바라보는 과정과 해결하고 결론을 내는 모든 과정이 담겨있다.",
    img: study1,
    code: "https://velog.io/@gazero_/series/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8",
    view: "https://velog.io/@gazero_/series/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8",
    name: "자바스크립트",
  },
  {
    num: "02",
    title: "React.JS",
    desc: "자바스크립트의 라이브러리(프레임워크 아님)를 학습함으로써, 자바스크립트와 연관되는 개념은 물론이고, 리액트만의 특수한 부분을 담고 있다. 특히 대부분의 질문은 프론트엔드 면접에서 많이 다룬 주제들이기 때문에 알고 있는 내용이라고 하더라도 면접 전에 봐도 좋다.",
    img: study2,
    code: "https://velog.io/@gazero_/series/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%8A%A4%ED%84%B0%EB%94%94",
    view: "https://velog.io/@gazero_/series/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%8A%A4%ED%84%B0%EB%94%94",
    name: "리액트",
  },
  {
    num: "03",
    title: "TypeScript",
    desc: "프론트엔드는 자바스크립트와 리액트만 알면 되는줄 알았지만, 아니었다. 하지만 타입스크립트를 공부하기 위해 어떻게 접근해야 하는지부터 막막했고 스터디원을 모집해서 '러닝 타입스크립트'라는 책을 지정해 한 주에 한 chpter씩 공부하고, 발표와 토론을 통해 학습하는 내용들이 담겨있다. 특히 다른 팀원들이 접근하는 과정과 이해하는 과정이 모두 담겨 있어서 다양한 사람들의 의견이 필요할 때는 물론이고 타입스크립트의 기본기가 궁금하다면, 혹은 책 읽기가 망설여진다면 둘러볼 만 하다",
    img: study3,
    code: "https://github.com/FE-Friends/typescript_study",
    view: "https://github.com/FE-Friends/typescript_study",
    name: "타입스크립트",
  },
  {
    num: "04",
    title: "Python",
    desc: "파이썬 언젠가 꼭 공부하고 싶었던 분야다. 프론트엔드로써 필수항목이 아닐 수 있지만 예전에 R을 다뤄본 적이 있기때문에 더욱 궁금한 언어였다. 아직은 초보단계이며 내용도 한정적이지만 앞으로 더 많은 지식과 내용을 채워나갈 것이기에 기대해도 좋다.",
    img: study4,
    code: "https://velog.io/@gazero_/series/%ED%8C%8C%EC%9D%B4%EC%8D%AC",
    view: "https://velog.io/@gazero_/series/%ED%8C%8C%EC%9D%B4%EC%8D%AC",
    name: "파이썬",
  },
];

const Port = () => {
  const horizontalRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionsRef.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -120 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top 56px",
        end: () => "+=" + horizontal.offsetWidth,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  return (
    <section id="port" ref={horizontalRef}>
      <div className="port__inner">
        <div className="port__title">
          Blog series<em></em>
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
                둘러보기
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Port;
