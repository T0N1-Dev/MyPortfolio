import { useEffect, useState } from 'react';
import '../assets/css/pages/contact.css';
import emailjs from '@emailjs/browser';
import { useForm } from '../hooks/useForm';

export const Contact = ({ contactRef }) => {

  const [formData, handleInputChange, resetForm] = useForm({
    name: '',
    email: '',
    message: ''
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [toast, setToast] = useState(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsScrolled(scrolledPercentage >= 70);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (type, title, message, imgURL, duration) => {
    setToast({ type, title, message, imgURL });
    setTimeout(() => setToast(null), duration);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSending) return;
    
    setIsSending(true);
    showToast('info', 'Sending...', 'Your request is processing', 'https://img.icons8.com/color/480/info--v1.png', 4000);
    
    emailjs.send(
      'service_bwdbne7',
      'template_eqrxqab',
      formData,
      'm1kE_9UXNLNMvJGZO'
    )
    .then(() => {
      showToast('success', 'Success!', 'Message sent successfully', 'https://img.icons8.com/color/480/ok--v1.png', 4000);
      resetForm();
      setIsSending(false);
    })
    .catch(() => {
      showToast('error', 'Error!', 'Failed to send message', 'https://img.icons8.com/color/480/cancel--v1.png', 4000);
      setIsSending(false);
    });
  };

  return (
    <section className="contact-container" ref={contactRef}>
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          <img src={toast.imgURL} alt={toast.type} className="toast-icon" />
          <div>
            <strong>{toast?.title}</strong>
            <p>{toast?.message}</p>
          </div>
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <h1 className='contact-title'><span>Contact</span> <span className='me'>Me</span></h1>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="form-input"
          pattern="^[A-Za-z\s]+$"
          onInvalid={(e) => e.target.setCustomValidity("Is that really your name?")}
          onInput={(e) => e.target.setCustomValidity("")} 
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="form-input"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          onInvalid={(e) => e.target.setCustomValidity("Your email is not correct, please check. (example@gmail.com)")}
          onInput={(e) => {
            e.target.setCustomValidity("");
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.target.value)) {
              e.target.setCustomValidity("Your email must include a valid domain (e.g., .com, .net, .org).");
            }
          }} 
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Write your message..."
          className="form-textarea"
          required
        />

        <button type="submit" className="btn btn-form resume-btn" disabled={isSending}>
          {isSending ? (
            <span className="spinner"></span>
          ): (
            'Send'
          )}
        </button>
      </form>
      <div className="contact-me-img-container">
      <img 
          src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1741279176/Contact_Me_l5waxg.png" 
          alt="Contact Me"
          className="contact-image"
        />
        <img 
          src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1741279170/Message_tslghp.png"
          alt="Messages"
          className={`floating-img messages-img ${isScrolled ? 'messages-img-animate' : ''}`}
        />
        <img 
          src='https://res.cloudinary.com/dmfs1od9n/image/upload/v1741120204/New_Project_jpme2g.png'
          alt='Doubt'
          className={`floating-img doubt-img ${isScrolled ? 'doubt-img-animate' : ''}`}
        />
        <img 
          src='https://res.cloudinary.com/dmfs1od9n/image/upload/v1741120206/New_Project_1_pm42hh.png'
          alt='Phone-Call'
          className={`floating-img phone-call-img ${isScrolled ? 'phone-call-img-animate' : ''}`}
        />
        <img 
          src='https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1741279168/Calendar_bz3bw7.png'
          alt='Calendar'
          className={`floating-img calendar-img ${isScrolled ? 'calendar-img-animate' : ''}`}
        />
      </div>
    </section>
  )
}
