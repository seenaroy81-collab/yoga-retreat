import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import "./Home.css";

// 1. Static data moved outside to reduce memory usage per render
const OFFERINGS = [
  {
    title: "Equipped Studios",
    desc: "Professional spaces with all yoga props and sound systems.",
    img: "/images/optimized/studio2.webp",
  },
  {
    title: "Peaceful Environment",
    desc: "A serene sanctuary surrounded by nature for deep practice.",
    img: "/images/optimized/relaxingSpace.webp",
  },
  {
    title: "For All Levels",
    desc: "Perfect for yoga instructors, students, and practitioners.",
    img: "/images/optimized/privateStudio.webp",
  },
  {
    title: "Flexible Booking",
    desc: "Book by the hour, day, or weekend to suit your schedule.",
    img: "/images/optimized/welcomingGuests.webp",
  },
];

const WHY_US = [
  "Prime location surrounded by nature",
  "Professional, peaceful atmosphere",
  "All equipment included",
  "Affordable rates",
  "Clean, well-maintained facilities",
];

const ANIMATIONS = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  },
};

const Home = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          {" "}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="hero-video"
          >
            <source src="/Aerial_optimized.webm" type="video/webm" />
            <source src="/Aerial_optimized.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Visualizing the "Perfect Yoga Space" concept for context */}

        <motion.div
          className="container hero-content"
          initial="hidden"
          animate="visible"
          variants={ANIMATIONS.stagger}
        >
          <motion.h1 variants={ANIMATIONS.fadeIn}>
            Your Perfect Yoga Space Awaits
          </motion.h1>
          <motion.p variants={ANIMATIONS.fadeIn}>
            Premium studio space for instructors and practitioners
          </motion.p>
          <motion.div className="hero-btns" variants={ANIMATIONS.fadeIn}>
            <button
              onClick={() => scrollTo("booking")}
              className="btn btn-primary"
            >
              Book Space Now
            </button>
            <button
              onClick={() => scrollTo("studios")}
              className="btn btn-outline"
              style={{ color: "white", borderColor: "white" }}
            >
              View Studios
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* What We Offer */}
      <section className="offer-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATIONS.fadeIn}
          >
            <h2>What We Offer</h2>
            <div className="underline"></div>
            <p>Experience the perfect balance of luxury and tranquility</p>
          </motion.div>

          <motion.div
            className="offer-grid-enhanced"
            variants={ANIMATIONS.stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {OFFERINGS.map((item, index) => (
              <motion.div
                key={index}
                className="offer-card-enhanced"
                variants={ANIMATIONS.fadeIn}
              >
                {/* Added lazy loading for performance */}
                <div className="offer-img">
                  <img src={item.img} alt={item.title} loading="lazy" />
                </div>
                <div className="offer-content">
                  <div className="offer-header">
                    <CheckCircle className="icon" />
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container why-grid">
          <div className="why-img">
            <img
              src="/images/optimized/outsideImage.webp"
              alt="Yoga Session"
              loading="lazy"
            />
          </div>
          <div className="why-content">
            <h2>Why Choose Our Space</h2>
            {/* Visual reference for the "Equipped" and "Props" mentioned in the list */}

            <ul className="why-list">
              {WHY_US.map((item, index) => (
                <li key={index}>
                  <div className="bullet"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Book Your Space Today</h2>
          <p>
            Ready to host your next class or workshop? Secure your preferred
            slot now.
          </p>
          <button
            onClick={() => scrollTo("booking")}
            className="btn btn-primary btn-lg"
          >
            Book Space Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
