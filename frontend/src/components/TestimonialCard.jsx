import "./TestimonialCard.css";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="testimonial-author">
        <strong>{testimonial.author_name}</strong>
        {testimonial.author_title && <span>{testimonial.author_title}</span>}
      </div>
    </div>
  );
}
