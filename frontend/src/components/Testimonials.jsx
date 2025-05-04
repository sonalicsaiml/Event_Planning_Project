import React, { useState, useEffect } from "react";
import './Testimonials.css';
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael",
      event: "Wedding",
      text: "Majestic Plans transformed our wedding into a fairytale! Every detail was perfect, from the venue decoration to the coordination on the day. We couldn't have asked for a better team.",
      image: "/testimonial1.jpg", // You'll need to add these images to your public folder
    },
    {
      id: 2,
      name: "John Hamilton",
      event: "Corporate Conference",
      text: "Our annual conference was a huge success thanks to Majestic Plans. Their attention to detail and professionalism impressed not just our team but all of our attendees.",
      image: "/testimonial2.jpg",
    },
    {
      id: 3,
      name: "Emily Chen",
      event: "Birthday Celebration",
      text: "I wanted something special for my 30th birthday, and the team at Majestic Plans delivered beyond my expectations. My guests are still talking about it months later!",
      image: "/testimonial3.jpg",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials container" id="testimonials">
      <h4>What People Say</h4>
      <h2>TESTIMONIALS</h2>
      
      <div className="testimonial-carousel">
        <div 
          className="testimonial-inner"
          key={currentTestimonial}
          style={{
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'opacity 0.5s, transform 0.5s'
          }}
        >
          <div className="testimonial-content">
            <div className="quote">"</div>
            <p>{testimonials[currentTestimonial].text}</p>
            <div className="testimonial-author">
              <div className="author-image">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  onError={(e) => {
                    e.target.src = "/placeholder-avatar.jpg"; // Fallback image
                  }}
                />
              </div>
              <div className="author-info">
                <h4>{testimonials[currentTestimonial].name}</h4>
                <p>{testimonials[currentTestimonial].event}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentTestimonial ? "active" : ""}`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;