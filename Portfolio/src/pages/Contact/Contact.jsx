function Contact(){
  return<>
  <section className="contact">
    <header>
      <h2 className="h2 article-title"></h2>
    </header>
    <section className="mapbox">
      <figure>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14200.916199734022!2d79.50078245!3d27.149082649999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e1885993f7c5b%3A0x7015a5a6949fbb59!2sChhibramau%2C%20Uttar%20Pradesh%20209721!5e0!3m2!1sen!2sin!4v1740601273460!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </figure>
    </section>
    <section className="contact-form"> 

      <h3 className="h3 form-title"> Contact Form</h3>
      <form action="" className="form">
  <div className="input-wrapper">
    <input type="text" name="flullname" id="fullname" className="form-input" placeholder="Full Name" />
    <input type="email" name="email" id="email" className="form-input" placeholder="Email address" />
  </div>
  <textarea name="message" className="form-input" placeholder="Your message"></textarea>
  <button className="form-btn" type="submit">
    <span>Send Message</span>
  </button>
      </form>
    </section>
  </section>
  </>
  
  
  }
  
  export default Contact;