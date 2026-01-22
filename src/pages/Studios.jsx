import { ArrowRight, Wind, Shield, Users, Music, Coffee, Wifi, Car, Waves } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Studios.css';

const Studios = () => {
    const studios = [
        {
            id: 1,
            name: "Studio 1 – Main Yoga Hall",
            capacity: "20–30 people",
            features: [
                "Spacious with natural lighting and ventilation",
                "Wooden or anti-slip flooring",
                "Equipped with mats, blocks, bolsters, and sound system",
                "Ideal for group sessions, workshops, and teacher trainings",
            ],
            img: "/images/optimized/studio.webp",
        },
        {
            id: 2,
            name: "Studio 2 – Private Studio",
            capacity: "5–10 people",
            features: [
                "Cozy, calm atmosphere",
                "Perfect for private sessions or small groups",
                "Equipped with essential yoga props",
            ],
            img: "/images/optimized/yoga2.webp",
        },
    ];

    const amenities = [
        { icon: <Wind />, label: "Yoga props (Mats, blocks, etc.)" },
        { icon: <Music />, label: "Sound system" },
        { icon: <Shield />, label: "Storage lockers" },
        { icon: <Users />, label: "Changing rooms" },
        { icon: <Waves />, label: "Shower facilities" },
        { icon: <Coffee />, label: "Tea/Water setup" },
        { icon: <Wifi />, label: "Free Wi-Fi" },
        { icon: <Car />, label: "Parking space" },
    ];

    return (
        <div className="studios-page">
            <header className="page-header">
                <div className="container">
                    <h1>Explore Our Yoga Spaces</h1>
                    <p>Find the perfect environment for your practice or teaching.</p>
                </div>
            </header>

            <section className="studios-list">
                <div className="container">
                    {studios.map((studio, index) => (
                        <motion.div
                            key={studio.id}
                            className={`studio-detail-card ${index % 2 !== 0 ? 'reverse' : ''}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="studio-img">
                                <img src={studio.img} alt={studio.name} />
                            </div>
                            <div className="studio-content">
                                <span className="capacity">Capacity: {studio.capacity}</span>
                                <h2>{studio.name}</h2>
                                <ul className="feature-list">
                                    {studio.features.map((f, i) => (
                                        <li key={i}>{f}</li>
                                    ))}
                                </ul>
                                <Link to="/booking" className="btn btn-primary">Book This Space</Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="amenities bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Amenities Included</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="amenities-grid">
                        {amenities.map((item, index) => (
                            <div key={index} className="amenity-item">
                                <div className="amenity-icon">{item.icon}</div>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="virtual-tour">
                <div className="container text-center">
                    <div className="tour-box">
                        <h2>360° Virtual Tour</h2>
                        <p>Experience our space from anywhere in the world.</p>
                        <span className="badge">Coming Soon</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Studios;
