import "../css/Hero.css";
import useScrollReplay from "../hooks/useScrollReplay";


function Hero() {
    const [imgRef, isVisible] = useScrollReplay(0.3);
    return (
        <section className="hero">
            <div className="hero-line">
                <img src="/assets/hero_img/hero_line.png" alt="" />
            </div>

            {/* 애니메이션 데코 이미지들을 하나의 wrap으로 묶어서 옵저버 공유 */}
            <div className="ani-deco-wrap" ref={imgRef}>
                <div className={`folder-img ${isVisible ? "roll-in" : ""}`} id="ani-img">
                    <img src="/assets/hero_img/folder.png" alt="folder" className="folder-ani" />
                </div>

                <div className={`command-img ${isVisible ? "roll-in" : ""}`} id="ani-img-command">
                    <img src="/assets/hero_img/command.png" alt="command key" className="command-ani" />
                </div>

                <div className={`skey-img ${isVisible ? "roll-in" : ""}`} id="ani-img-skey">
                    <img src="/assets/hero_img/s_key.png" alt="s key" className="skey-ani" />
                </div>
            </div>
            {/* 반짝이는 sparkle 데코, 항상 재생 */}
                <div className="sparkle-img" id="ani-img-sparkle">
                    <img src="/assets/decoration/sparkle-big.png" alt="" className="sparkle-ani" />
                </div>
                <div className="sparkle-img" id="ani-img-sparkle2">
                    <img src="/assets/decoration/sparkle-big.png" alt="" className="sparkle-ani" />
                </div>

            <div className="inner">
                <div className="title_img">
                    <img src="/assets/hero_img/title.png" alt="Hero Title" />
                </div>
            </div>
        </section>
    )
}
export default Hero;