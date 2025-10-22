import "../styleComponent/contact.css";
const Contact = () => {
  return (
    <div className="contact-containers ">
        <h2 className="contact-head">
          <span className="circle">.</span>Contact
        </h2>
      <div className="contact-container">
        
        <div className="contact-form">
          <form action="https://formspree.io/f/xvgwyqyo" method="POST">
            <label className="contact-text" >
              Name
              <input type="text" placeholder="Full Name" name="name" required/>
            </label>
            <label className="contact-text">
              Email
              <input type="email" placeholder="Email" name="email" required />
            </label>
            <label className="contact-text">
              Message
              <textarea name="message" placeholder="Message" rows="5"
                required></textarea>
            </label>
            {/* <!-- your other form fields go here --> */}
            <button type="submit" className="contact-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
