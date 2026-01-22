import { motion } from 'framer-motion';
import { Leaf, Home, Heart, Clock, Users, ShieldCheck } from 'lucide-react';
import './Services.css';

const Services = () => {
    const packages = [
        {
            id: 1,
            name: "Space-Only Package",
            icon: <Leaf size={40} />,
            includes: [
                "Indoor/outdoor yoga hall with mats, sound system & lighting",
                "Access to washrooms",
                "Optional use of gardens/nature area",
                "Tea/water setup",
            ],
            bestFor: "Experienced yoga teachers or schools with their own travel/accommodation plans.",
            img: "/images/optimized/yoga5.webp",
            color: "var(--primary-color)",
        },
        {
            id: 2,
            name: "With Accommodation Package",
            icon: <Home size={40} />,
            includes: [
                "Yoga hall + equipment",
                "Comfortable single or twin-sharing rooms",
                "Satvik / Ayurvedic vegetarian meals (3 per day)",
                "Wi-Fi & housekeeping",
            ],
            bestFor: "Yoga teachers who want a ready-made retreat experience without managing logistics.",
            img: "/images/optimized/room3.webp",
            color: "#5c8a54",
        },
        {
            id: 3,
            name: "With Ayurveda Treatments Package",
            icon: <Heart size={40} />,
            includes: [
                "Everything from Package 2 (space+stay+meals)",
                "Ayurvedic treatments (Abhyangam, Shirodhara, etc.)",
                "Doctor consultation",
                "Optional Panchakarma add-ons",
            ],
            bestFor: "Yoga teachers offering holistic “Yoga + Ayurveda” retreats.",
            img: "/images/optimized/ayurvedic.webp",
            color: "#3d6638",
        },
    ];

    return (
        <div className="services-page">
            <header className="page-header services-header">
                <div className="container">
                    <h1>Retreat Packages & Services</h1>
                    <p>Flexible options for instructors and practitioners</p>
                </div>
            </header>

            <section className="booking-info">
                <div className="container grid-2">
                    <div>
                        <h2>Who Can Book Our Space</h2>
                        <div className="who-list">
                            <div className="who-item"><strong>Yoga Instructors</strong> – Host your retreats or workshops</div>
                            <div className="who-item"><strong>Individual Practitioners</strong> – Personal practice sessions</div>
                            <div className="who-item"><strong>Small Groups</strong> – Friends or yoga communities</div>
                            <div className="who-item"><strong>Corporate Wellness Teams</strong> – Relaxation sessions</div>
                        </div>
                    </div>
                    <div className="booking-options">
                        <h3>Booking Options</h3>
                        <ul className="options-list">
                            <li><Clock size={18} /> Hourly Rental</li>
                            <li><Clock size={18} /> Half-Day or Full-Day Rental</li>
                            <li><Clock size={18} /> Weekly Packages</li>
                            <li><Clock size={18} /> Monthly Membership</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="packages" className="packages bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Retreat Packages for Instructors</h2>
                        <p>(Chamundi Hill Palace)</p>
                        <div className="underline"></div>
                    </div>
                    <div className="packages-grid">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={pkg.id}
                                className="package-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                style={{ borderTop: `6px solid ${pkg.color}` }}
                            >
                                <div className="package-img">
                                    <img src={pkg.img} alt={pkg.name} />
                                </div>
                                <div className="package-content">
                                    <div className="package-icon" style={{ color: pkg.color }}>{pkg.icon}</div>
                                    <h3>{pkg.name}</h3>
                                    <ul>
                                        {pkg.includes.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                    <div className="best-for">
                                        <strong>Best for:</strong> {pkg.bestFor}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="additional-services">
                <div className="container">
                    <div className="grid-3">
                        <div className="service-box">
                            <ShieldCheck className="icon" />
                            <h4>Included in Rental</h4>
                            <p>Studio space, basic equipment, changing facilities, and parking.</p>
                        </div>
                        <div className="service-box">
                            <Users className="icon" />
                            <h4>Additional Support</h4>
                            <p>Reception / Check-in support and marketing support for instructors.</p>
                        </div>
                        <div className="service-box">
                            <Clock className="icon" />
                            <h4>Flexible Extensions</h4>
                            <p>Extended hours and extra equipment rental available on request.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
