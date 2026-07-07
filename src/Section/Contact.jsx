import "../css/Contact.css";

function Contact() {
  return (
    <>
      <section className="contact-wrap">
        <div className="contact-line">
          <img src="/assets/decoration/line-4.png" alt="" />
        </div>

        {/* 반짝이는 sparkle 데코 2개 */}
        <div className="contact-sparkle-wrap">
          <div className="sparkle-img" id="contact-sparkle-1">
            <img
              src="/assets/decoration/sparkle-big.png"
              alt=""
              className="sparkle-ani"
            />
          </div>
          <div className="sparkle-img" id="contact-sparkle-2">
            <img
              src="/assets/decoration/sparkle-big.png"
              alt=""
              className="sparkle-ani"
            />
          </div>
          <div className="sparkle-img" id="contact-sparkle-3">
            <img
              src="/assets/decoration/sparkle-big.png"
              alt=""
              className="sparkle-ani"
            />
          </div>
        </div>

        <div className="inner">
          <h1>Contact</h1>
          <div className="contact-list-box">
            <div className="contact-folder-imgbox">
              <img src="/assets/contact/folder.png" alt="" />
            </div>
            <ul className="contact-list">
              <li>
                <i class="fa-solid fa-mobile-screen-button"></i>010-7193-1251
              </li>
              <li>
                <i class="fa-regular fa-envelope"></i>dmswl1251@gmail.com
              </li>
              <li>
                <i class="fa-brands fa-github"></i>
                <a
                  href="https://github.com/zee1013"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </li>
              <li>
                <i class="fa-brands fa-notion"></i>
                <a href="https://app.notion.com/p/Portfolio-67d7c519a23083f1bdd6018d21b284db?source=copy_link"
                target="_blank"
                >
                  notion
                </a>
              </li>
            </ul>
          </div>
          <div className="thankyou-imgbox">
            <img src="/assets/contact/Thankyou.png" alt="thankyou" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
