const Contact = () => (
  <section className="contact">
    <h2>Contact Us</h2>
    <p>
      We're here to help you with any questions or inquiries. Reach out to us
      and we'll respond as soon as possible.
    </p>
    <form>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Your Phone Number</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
    <div className="contact-info">
      <p>
        <strong>Address:</strong> 123 Data Street, Tech City, TX 75001
      </p>
      <p>
        <strong>Phone:</strong> +1 (123) 456-7890
      </p>
      <p>
        <strong>Email:</strong> contact@datawayz.com
      </p>
      <div className="social-media">
        <a href="https://twitter.com/datawayz" target="_blank">
          Twitter
        </a>
        <a href="https://facebook.com/datawayz" target="_blank">
          Facebook
        </a>
        <a href="https://instagram.com/datawayz" target="_blank">
          Instagram
        </a>
        <a href="https://linkedin.com/company/datawayz" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
