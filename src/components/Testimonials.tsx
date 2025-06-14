import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/Testimonials.scss";

interface ClientTestimonial {
  id: number;
  name: string;
  image: string;
  message: string;
  origin: string;
  role: string;
  rating: number; // 1 to 5
}

const clientTestimonials: ClientTestimonial[] = [
  {
    id: 1,
    name: "Kenji Yamamoto",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1vn_7b8ZcJcjCn2G5SivWLBbrjY_yE0UTg&s", // Japanese businessman (Unsplash)
    message: "Working with Roshan on our big data infrastructure was transformative. His technical expertise helped us achieve 40% faster processing times. I wouldn't hesitate to recommend his services to any enterprise dealing with complex data systems.",
    origin: "Japan",
    role: "Senior Data Engineer, Tokyo Data Solutions",
    rating: 5
  },
  {
    id: 2,
    name: "Laura Simmons",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1xf1NhppWQnPk9OFIfkmMKAgowBXs9UOGw&s", // German professional woman (Pexels)
    message: "Roshan's property management system revolutionized our real estate operations. His understanding of workflow automation saved us 20+ hours weekly. For any business looking to modernize operations, Roshan delivers exceptional value.",
    origin: "Germany",
    role: "Head of Operations, Berlin Realty Group",
    rating: 5
  },
  {
    id: 3,
    name: "Carlos Martinez",
    image: "https://randomuser.me/api/portraits/men/32.jpg", // Spanish professional (RandomUser)
    message: "Roshan's tracking system became our most critical tool during the pandemic. Implemented with perfect reliability under tight deadlines. His communication was exemplary - always available, always solutions-oriented.",
    origin: "Spain",
    role: "Director of Operations, Barcelona Tech Institute",
    rating: 4.8
  },
  {
    id: 4,
    name: "Elena Petrova",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", // Russian entrepreneur (Unsplash)
    message: "Roshan delivered our travel app with flawless execution - from wireframes to App Store deployment. The app maintains a 4.9-star rating with zero critical bugs. For any founder needing top-tier development, look no further.",
    origin: "Russia",
    role: "CEO & Co-founder, Ural Travel Tech",
    rating: 5
  },
  {
    id: 5,
    name: "Michael Andersen",
    image: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=600", // Danish agri-tech professional (Pexels)
    message: "Roshan's AI solution achieved 98.7% accuracy in field tests - surpassing our projections. His deep learning implementation was both innovative and practical. Our ongoing partnership drives value across Scandinavia.",
    origin: "Denmark",
    role: "Lead Consultant, Nordic AgriTech",
    rating: 5
  },
  {
    id: 6,
    name: "Sofia Moretti",
    image: "https://randomuser.me/api/portraits/women/44.jpg", // Italian marketing director (RandomUser)
    message: "Our website redesign was completed two weeks ahead of schedule. Roshan's team captured our brand perfectly while implementing cutting-edge optimizations. The site loads in under 1.3 seconds globally.",
    origin: "Italy",
    role: "Director of Digital Marketing, Milano Communications",
    rating: 4.7
  },
  {
    id: 7,
    name: "Tobias Gruber",
    image: "https://d38we5ntdyxyje.cloudfront.net/347977/profile/avatar_medium_square.jpg", // Austrian tech executive (Unsplash)
    message: "The React dashboard Roshan developed processes 50,000 daily transactions with zero downtime. We've engaged him for three subsequent projects because he consistently delivers excellence.",
    origin: "Austria",
    role: "CTO, Vienna Analytics",
    rating: 5
  },
  {
    id: 8,
    name: "Anya Novak",
    image: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=600", // Polish e-commerce director (Pexels)
    message: "Our AI chatbot handles 85% of customer inquiries autonomously with 92% satisfaction. Roshan's NLP implementation understood our product nuances perfectly. The ROI was evident within the first month.",
    origin: "Poland",
    role: "E-commerce Director, Warsaw Retail Group",
    rating: 4.9
  },
  {
    id: 9,
    name: "Lukas Schneider",
    image: "https://randomuser.me/api/portraits/men/22.jpg", // Swiss product executive (RandomUser)
    message: "Roshan's mobile app development expertise was invaluable. His optimizations gave us 30% better battery efficiency than competitors.He treats our success as his priority.",
    origin: "Switzerland",
    role: "VP Product, Zurich FinTech",
    rating: 4.8
  },
  {
    id: 10,
    name: "Eva Lindström",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHSg5Q8qWJ_CF_G3ILwgtXcWBwkf0vCWl0fw&s", // Swedish data scientist (Unsplash)
    message: "The machine learning integration Roshan implemented became our predictive analytics cornerstone. We appreciated his knowledge transfer sessions that upskilled our team.Roshan is uniquely qualified.",
    origin: "Sweden",
    role: "Chief Data Officer, Stockholm AI Labs",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isHovered = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalDots = 5;
  const testimonialsPerDot = Math.ceil(clientTestimonials.length / totalDots);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!isHovered.current) {
        setCurrentIndex((prev) => (prev + 1) % clientTestimonials.length);
      }
    }, 5000);
    return () => clearInterval(timerRef.current!);
  }, []);

  const handleDotClick = (dotIndex: number) => {
    const index = dotIndex * testimonialsPerDot;
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial-vertical-container">
      <h1>What My Clients Say</h1>
      <div className="testimonial-wrapper">
        <div
          className="testimonial-card-vertical"
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
        >
          <img
            className="profile-pic"
            src={clientTestimonials[currentIndex].image}
            alt={clientTestimonials[currentIndex].name}
          />
          <div className="testimonial-content">
            <h2>{clientTestimonials[currentIndex].name}</h2>
            <p className="quote">“{clientTestimonials[currentIndex].message}”</p>

            <div className="stars">
              {Array.from({ length: clientTestimonials[currentIndex].rating }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>

            <div className="info-line">
              <span>🌍 {clientTestimonials[currentIndex].origin}</span>
              <span>💼 {clientTestimonials[currentIndex].role}</span>
            </div>
          </div>
        </div>

        {/* 5 dots only */}
        <div className="testimonial-dots">
          {Array.from({ length: totalDots }).map((_, index) => (
            <span
              key={index}
              className={`dot ${Math.floor(currentIndex / testimonialsPerDot) === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
