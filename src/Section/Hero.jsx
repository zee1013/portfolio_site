import "../css/Hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-line">
                <img src="/assets/hero_img/hero_line.png" alt="" />
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