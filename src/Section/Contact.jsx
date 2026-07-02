import "../css/Contact.css"

function Contact() {
    return (
        <>
        <section className="contact-wrap">
            <div className="inner">
                <h1>Contact</h1>
                <div className="contact-list-box">
                    <div className="contact-folder-imgbox">
                    <img src="../../public/assets/contact/folder.png" alt="" />
                    </div>
                    <ul className="contact-list">
                        <li><i class="fa-solid fa-mobile-screen-button"></i>010-7193-1251</li>
                <li><i class="fa-regular fa-envelope"></i>dmswl1251@gmail.com</li>
                  <li><i class="fa-brands fa-github"></i>
                    <a
                      href="https://github.com/zee1013"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github
                    </a>
                  </li>
                  <li><i class="fa-brands fa-notion"></i>
                    <a href="#">notion</a>
                  </li>
                    </ul>
                </div>
            <div className="thankyou-imgbox">
                <img src="../../public/assets/contact/Thankyou.png" alt="thankyou" />
            </div>
            </div>
        </section>
        </>
    )
}
export default Contact;