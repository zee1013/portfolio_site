import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { visualWorks } from "../data/visualWorks";
import { posterTallWorks, posterSquareWorks } from "../data/posterGraphic";
import VisualWorkItem from "../components/VisualWorksItem";
import "../css/VisualWorks.css";

function VisualWorks() {
  const [largeItem, ...restItems] = visualWorks;

  return (
    <>
      <section className="visual-works-wrap" id="visual">
        <div className="inner">
          <h1 className="visualWorks-title">Visual Works</h1>
          <div className="visual-work-list">
            <VisualWorkItem project={largeItem} />

            <div className="visual-work-row">
              {restItems.map((project) => (
                <VisualWorkItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* 포스터 & 그래픽 영역 */}
        <section className="posterGraphic-wrap">
          <div className="poster-header inner">
            <div className="poster-title-wrap">
              <h1>
                POSTER &<br />
                GRAPHIC
              </h1>
              <p>
                포토샵과 일러스트레이터를 활용해 제작한 포스터, 카드뉴스 등의 디자인이다. 제품 포스터는 직접 촬영한 이미지를 기반으로 보정, 합성, 레이아웃 작업을 진행했으며, 각 콘텐츠의 목적과 분위기에 맞게 시각적으로 구성했다.
              </p>
            </div>

            <div className="poster-swiper-wrap">
              {/* 윗줄: 세로형 포스터, 오토플레이 3초 간격 */}
              <Swiper
                modules={[Autoplay]}
                slidesPerView={4}
                spaceBetween={16}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="poster-row-tall"
              >
                {posterTallWorks.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="poster-img poster-img--tall">
                      <img src={item.image} alt={item.alt} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* 아랫줄: 1:1 비율, 오토플레이 4.5초 간격 (윗줄과 박자 다르게) */}
              <Swiper
                modules={[Autoplay]}
                slidesPerView={4}
                spaceBetween={16}
                loop={true}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="poster-row-square"
              >
                {posterSquareWorks.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="poster-img poster-img--square">
                      <img src={item.image} alt={item.alt} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default VisualWorks;