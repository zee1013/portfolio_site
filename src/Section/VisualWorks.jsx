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
      <section className="visual-works-wrap">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Convincere honeste industria sint debemus, periculis ullius
                indoctum. Legantur disserendum
              </p>
            </div>

            <div className="poster-swiper-wrap">
              {/* 윗줄: 세로형 포스터, 오토플레이 3초 간격 */}
              <Swiper
                modules={[Autoplay]}
                slidesPerView={3.5}
                spaceBetween={16}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: { slidesPerView: 1.5 },
                  768: { slidesPerView: 2.5 },
                  1024: { slidesPerView: 3.5 },
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
                slidesPerView={3.5}
                spaceBetween={16}
                loop={true}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: { slidesPerView: 1.5 },
                  768: { slidesPerView: 2.5 },
                  1024: { slidesPerView: 3.5 },
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