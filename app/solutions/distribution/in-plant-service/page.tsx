"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import CounterUp from "@/components/elements/CounterUp";

export default function InPlantService() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={2}
        breadcrumbTitle="In-Plant Service Center"
        breadcrumbDescription="On-site safety hubs: expert technicians, equipment maintenance & compliance support—24/7, pay-as-you-use."
      >
        {/* In-Plant Service Top Start */}
        <section className="team-top">
          <div className="container">
            <div className="section-title section-title--two text-center">
              <span className="section-title__tagline">
                On-site Safety Hubs
              </span>
              <h2 className="section-title__title">
                In-Plant Service Centers For <br /> Streamlined Safety
                Operations
              </h2>
              <p className="section-title__text">
                FixNix integrates safety professionals directly into your
                facility with dedicated <br /> service centers providing 24/7
                support, equipment maintenance, and compliance management.
              </p>
              <div className="mt-5 flex justify-center gap-4 flex-wrap">
                <Link href="/contact" className="thm-btn team-top__btn">
                  Request Consultation
                </Link>
                <Link
                  href="/product-line"
                  className="thm-btn thm-btn--dark team-top__btn"
                >
                  Service Options
                </Link>
                <Link
                  href="/service-line"
                  className="thm-btn thm-btn--outline team-top__btn"
                >
                  Download Brochure
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* In-Plant Service Top End */}

        {/* Experience One Start */}
        <section className="experience-one about-page__experience">
          <div
            className="experience-one-shape-1 shapeMover"
            style={{
              backgroundImage:
                "url(assets/images/shapes/experience-one-shape-1.png)",
            }}
          ></div>
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">
                Comprehensive Coverage
              </span>
              <h2 className="section-title__title">
                Complete On-Site Safety Services <br /> Tailored To Your
                Operation
              </h2>
            </div>
            <div className="row">
              {/* Experience One Single Start */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="experience-one__single">
                  <div className="experience-one__icon">
                    <span className="icon-maintenance"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="/equipment-maintenance">
                        Equipment Maintenance
                      </Link>
                    </h3>
                    <p className="experience-one__text">
                      OSHA-compliant inspections, repairs, and regular
                      maintenance for all your safety equipment and tools.
                    </p>
                  </div>
                </div>
              </div>
              {/* Experience One Single End */}

              {/* Experience One Single Start */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="experience-one__single">
                  <div className="experience-one__icon">
                    <span className="icon-inventory"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="/safety-inventory">Inventory Management</Link>
                    </h3>
                    <p className="experience-one__text">
                      Just-in-time PPE and safety supply distribution with
                      automated reordering and usage tracking systems.
                    </p>
                  </div>
                </div>
              </div>
              {/* Experience One Single End */}

              {/* Experience One Single Start */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="experience-one__single">
                  <div className="experience-one__icon">
                    <span className="icon-training"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="/safety-training">On-Site Training</Link>
                    </h3>
                    <p className="experience-one__text">
                      Customized safety training and certification programs
                      delivered on-site by certified safety professionals.
                    </p>
                  </div>
                </div>
              </div>
              {/* Experience One Single End */}
            </div>
            <div className="row">
              <div className="col-xl-12">
                <ul className="counter-one__list list-unstyled">
                  <li className="counter-one__single">
                    <CounterUp end={24} />
                    <span className="counter-one__plus">/7</span>
                    <p className="counter-one__text">Service Availability</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={30} />
                    <span className="counter-one__plus">%</span>
                    <p className="counter-one__text">Average Cost Reduction</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={45} />
                    <span className="counter-one__plus">min</span>
                    <p className="counter-one__text">Response Time</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={500} />
                    <span className="counter-one__plus">+</span>
                    <p className="counter-one__text">Active Installations</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Experience One End */}

        {/* Services Start */}
        <section className="services-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">
                Our In-Plant Services
              </span>
              <h2 className="section-title__title">
                Comprehensive On-Site <br /> Safety Management Solutions
              </h2>
            </div>
            <div className="row">
              {/* Services One Single Start */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="services-one__single">
                  <div className="services-one__single-inner">
                    <div className="services-one__icon">
                      <span className="icon-breathing"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">
                        Breathing Air Systems
                      </Link>
                    </h3>
                    <p className="services-one__text">
                      Complete management of SCBA units, breathing air quality
                      testing, and compressor maintenance to ensure respiratory
                      protection.
                    </p>
                    <Link
                      href="/services-details"
                      className="services-one__btn"
                    >
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}

              {/* Services One Single Start */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="services-one__single">
                  <div className="services-one__single-inner">
                    <div className="services-one__icon">
                      <span className="icon-gas-detector"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Gas Detection</Link>
                    </h3>
                    <p className="services-one__text">
                      Calibration, maintenance, and repair of portable and fixed
                      gas detection systems with detailed documentation.
                    </p>
                    <Link
                      href="/services-details"
                      className="services-one__btn"
                    >
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}

              {/* Services One Single Start */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="services-one__single">
                  <div className="services-one__single-inner">
                    <div className="services-one__icon">
                      <span className="icon-eyewash"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Emergency Equipment</Link>
                    </h3>
                    <p className="services-one__text">
                      Installation, inspection, and maintenance of eyewash
                      stations, safety showers, and other emergency equipment.
                    </p>
                    <Link
                      href="/services-details"
                      className="services-one__btn"
                    >
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}

              {/* Services One Single Start */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="400ms"
              >
                <div className="services-one__single">
                  <div className="services-one__single-inner">
                    <div className="services-one__icon">
                      <span className="icon-safety-harness"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Fall Protection</Link>
                    </h3>
                    <p className="services-one__text">
                      Inspection, testing, and certification of fall protection
                      equipment with comprehensive documentation and training.
                    </p>
                    <Link
                      href="/services-details"
                      className="services-one__btn"
                    >
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}

              {/* Services One Single Start */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="500ms"
              >
                <div className="services-one__single">
                  <div className="services-one__single-inner">
                    <div className="services-one__icon">
                      <span className="icon-audit"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Safety Audits</Link>
                    </h3>
                    <p className="services-one__text">
                      Regular workplace safety audits, hazard assessments, and
                      regulatory compliance reviews with actionable
                      recommendations.
                    </p>
                    <Link
                      href="/services-details"
                      className="services-one__btn"
                    >
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}

              {/* Services One Single Start */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="600ms"
              >
                <div className="services-one__single">
                  <div className="services-one__single-inner">
                    <div className="services-one__icon">
                      <span className="icon-tool-maintenance"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Tool Management</Link>
                    </h3>
                    <p className="services-one__text">
                      Complete industrial tool inventory management,
                      maintenance, repair, calibration, and replacement
                      tracking.
                    </p>
                    <Link
                      href="/services-details"
                      className="services-one__btn"
                    >
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}
            </div>
          </div>
        </section>
        {/* Services End */}

        {/* Value Proposition Start */}
        <section className="feature-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="feature-one__left">
                  <div className="section-title">
                    <span className="section-title__tagline">
                      Business Value Proposition
                    </span>
                    <h2 className="section-title__title">
                      Why Implement An In-Plant Service Center
                    </h2>
                  </div>
                  <p className="feature-one__text">
                    FixNix's In-Plant Service Centers create operational
                    efficiencies, reduce costs, and improve safety compliance
                    through on-site expertise and dedicated support - all with a
                    pay-as-you-use model.
                  </p>
                  <ul className="feature-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Reduce downtime with immediate access to safety
                          equipment, maintenance, and support
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Lower total cost of ownership through preventative
                          maintenance and optimized inventory
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Improve compliance with regular inspections,
                          documentation, and automated record-keeping
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Streamline operations with a single point of contact
                          for all safety needs
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Flexible pay-as-you-use model eliminates capital
                          investments and fixed overhead
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="feature-one__btn-box">
                    <Link href="/contact" className="feature-one__btn thm-btn">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="feature-one__right">
                  <div className="feature-one__img">
                    {/* Replace with proper in-plant service image */}
                    <img
                      src="assets/images/resources/feature-1-1.jpg"
                      alt="In-Plant Service Center"
                    />
                    <div className="feature-one__shape-1">
                      <img
                        src="assets/images/shapes/feature-one-shape-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Value Proposition End */}

        {/* Implementation Process Start */}
        <section className="about-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="about-one__left">
                  <div
                    className="about-one__img-box wow slideInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="2500ms"
                  >
                    <div className="about-one__img">
                      {/* Replace with proper implementation image */}
                      <img
                        src="assets/images/resources/about-one-1-1.jpg"
                        alt="Implementation Process"
                      />
                    </div>
                    <div className="about-one__shape-1">
                      <img
                        src="assets/images/shapes/about-one-shape-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-one__right">
                  <div className="section-title">
                    <span className="section-title__tagline">
                      Implementation Process
                    </span>
                    <h2 className="section-title__title">
                      How We Establish Your <br /> In-Plant Service Center
                    </h2>
                  </div>
                  <p className="about-one__text">
                    Our proven implementation methodology ensures a smooth
                    transition to an In-Plant Service model with minimal
                    disruption to your operations and maximum value from day
                    one.
                  </p>
                  <div className="about-one__points-box">
                    <div className="about-one__points-left">
                      <ul className="list-unstyled about-one__points">
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>Needs Assessment</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>Service Design</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="about-one__points-right">
                      <ul className="list-unstyled about-one__points">
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>Staff Integration</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>Continuous Improvement</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="about-one__text-2">
                    Each In-Plant Service Center is custom-designed to meet your
                    specific operational needs, industry requirements, and
                    facility constraints, with flexible staffing models and
                    service offerings.
                  </p>
                  <Link href="/contact" className="thm-btn about-one__btn">
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Implementation Process End */}

        {/* Compliance Section Start */}
        <section className="team-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">
                Compliance Certification
              </span>
              <h2 className="section-title__title">
                Maintaining Regulatory Compliance <br /> Through Certified
                Services
              </h2>
            </div>
            <div className="row">
              {/* Certification Item Start */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__img-box brand-box">
                    <div className="team-one__img brand-img">
                      {/* Replace with actual certification logo */}
                      <div className="flex items-center justify-center h-full bg-gray-100">
                        <span className="text-2xl font-bold text-blue-800">
                          OSHA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Certification Item End */}

              {/* Certification Item Start */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__img-box brand-box">
                    <div className="team-one__img brand-img">
                      {/* Replace with actual certification logo */}
                      <div className="flex items-center justify-center h-full bg-gray-100">
                        <span className="text-2xl font-bold text-blue-800">
                          NFPA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Certification Item End */}

              {/* Certification Item Start */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__img-box brand-box">
                    <div className="team-one__img brand-img">
                      {/* Replace with actual certification logo */}
                      <div className="flex items-center justify-center h-full bg-gray-100">
                        <span className="text-2xl font-bold text-blue-800">
                          ANSI
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Certification Item End */}

              {/* Certification Item Start */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__img-box brand-box">
                    <div className="team-one__img brand-img">
                      {/* Replace with actual certification logo */}
                      <div className="flex items-center justify-center h-full bg-gray-100">
                        <span className="text-2xl font-bold text-blue-800">
                          ISO 9001
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Certification Item End */}
            </div>
          </div>
        </section>
        {/* Compliance Section End */}

        {/* CTA Start */}
        <section className="cta-one">
          <div className="container">
            <div className="cta-one__inner">
              <div className="cta-one__shape-1 float-bob-x">
                <img src="assets/images/shapes/cta-one-shape-1.png" alt="" />
              </div>
              <div className="cta-one__title">
                <h3>Ready to implement an In-Plant Service Center?</h3>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/contact" className="thm-btn cta-one__btn">
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* CTA End */}

        <style jsx>{`
          .brand-box {
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
          }
          .brand-img {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f5f5f5;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
          }
          .brand-img:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </Layout>
    </>
  );
}
