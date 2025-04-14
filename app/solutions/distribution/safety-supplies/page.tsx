"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import CounterUp from "@/components/elements/CounterUp";

export default function SafetySupplies() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={2}
        breadcrumbTitle="Safety Supplies & PPE"
      >
        {/* Safety Supplies Top Start */}
        <section className="team-top">
          <div className="container">
            <div className="section-title section-title--two text-center">
              <span className="section-title__tagline">
                Safety Equipment & PPE
              </span>
              <h2 className="section-title__title">
                With 130,000+ Safety Products <br /> We Have Your Needs Covered
              </h2>
              <p className="section-title__text">
                FixNix runs one of the largest safety equipment rental fleets in
                the world, offering customized <br /> safety solutions for
                businesses of all sizes across all industries.
              </p>
              <div className="mt-5 flex justify-center gap-4 flex-wrap">
                <Link href="/contact" className="thm-btn team-top__btn">
                  Get A Quote
                </Link>
                <Link
                  href="/product-line"
                  className="thm-btn thm-btn--dark team-top__btn"
                >
                  Product Line Card
                </Link>
                <Link
                  href="/service-line"
                  className="thm-btn thm-btn--outline team-top__btn"
                >
                  Service Line Card
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Safety Supplies Top End */}

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
                Professional Protection
              </span>
              <h2 className="section-title__title">
                Personal Protective Wear Designed <br /> To Keep Your Team Safe
                & Compliant
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
                    <span className="icon-headphones"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="/head-face-protection">
                        Head & Face Protection
                      </Link>
                    </h3>
                    <p className="experience-one__text">
                      Hard hats, safety glasses, face shields, and welding
                      helmets to protect against impact, splashes, and radiation
                      hazards.
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
                    <span className="icon-shield"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="/fr-garments">FR Garments</Link>
                    </h3>
                    <p className="experience-one__text">
                      Fire-resistant clothing and garments providing protection
                      against flash fire, arc flash, and other heat hazards.
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
                    <span className="icon-repair"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="/hand-protection">Hand Protection</Link>
                    </h3>
                    <p className="experience-one__text">
                      Gloves designed for various hazards including chemical,
                      cut, heat, and flame resistance to protect workers' hands.
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
                    <CounterUp end={130} />
                    <span className="counter-one__plus">k+</span>
                    <p className="counter-one__text">Safety Products</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={25} />
                    <span className="counter-one__plus">+</span>
                    <p className="counter-one__text">Major Brands</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={10} />
                    <span className="counter-one__plus">k+</span>
                    <p className="counter-one__text">Customers</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={99} />
                    <span className="counter-one__plus">%</span>
                    <p className="counter-one__text">Satisfaction</p>
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
                Our Products & Services
              </span>
              <h2 className="section-title__title">
                Comprehensive Safety Equipment <br /> & Protection Solutions
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
                        Respiratory Protection
                      </Link>
                    </h3>
                    <p className="services-one__text">
                      Full range of respiratory protection including disposable
                      masks, half-face and full-face respirators, and supplied
                      air systems.
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
                      <span className="icon-analytics"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Gas Detection</Link>
                    </h3>
                    <p className="services-one__text">
                      Portable and fixed gas detection systems from top brands
                      like MSA, Industrial Scientific, and Blackline Safety.
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
                      <span className="icon-fire"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Fire Protection</Link>
                    </h3>
                    <p className="services-one__text">
                      Fire safety equipment and protective gear for emergency
                      situations, ensuring workplace readiness.
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
                      Complete range of fall arrest, restraint, and positioning
                      equipment including harnesses, lanyards, and anchor
                      points.
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
                      <span className="icon-radio"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Radio Equipment</Link>
                    </h3>
                    <p className="services-one__text">
                      Communication tools for workplace safety and emergency
                      coordination to keep your team connected.
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
                      <span className="icon-emergency-kit"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Emergency Supplies</Link>
                    </h3>
                    <p className="services-one__text">
                      Preparedness supplies and equipment for workplace
                      emergencies, including first aid kits and evacuation
                      tools.
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

        {/* Apparel Services Start */}
        <section className="feature-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="feature-one__left">
                  <div className="section-title">
                    <span className="section-title__tagline">
                      Managed Apparel Services
                    </span>
                    <h2 className="section-title__title">
                      Specialized Garment Solutions For Every Industry
                    </h2>
                  </div>
                  <p className="feature-one__text">
                    FixNix specializes in providing garment solutions for every
                    industry to help protect your employees against job site
                    risks. Our products help keep your workers safe and
                    compliant.
                  </p>
                  <ul className="feature-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Managed apparel services including online ordering and
                          employee allowance programs
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Custom garments and uniforms tailored to your
                          specifications
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Allotment programs and turnkey solutions for easy
                          management
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Wide range of flame-resistant (FR) and workwear
                          garments
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Garments specific to job requirements and industry
                          standards
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
                    {/* Replace with proper safety image */}
                    <img
                      src="assets/images/resources/feature-1-1.jpg"
                      alt="Safety Equipment"
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
        {/* Apparel Services End */}

        {/* Fast Delivery Start */}
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
                      {/* Replace with proper delivery image */}
                      <img
                        src="assets/images/resources/about-one-1-1.jpg"
                        alt=""
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
                      Fast Delivery
                    </span>
                    <h2 className="section-title__title">
                      Rapid Response To Your <br /> Safety Equipment Needs
                    </h2>
                  </div>
                  <p className="about-one__text">
                    Thanks to our global capabilities, local footprint and
                    efficient distribution systems, we are on hand to supply the
                    safety equipment, supplies, and personal protective
                    equipment you require with a quick turnaround.
                  </p>
                  <div className="about-one__points-box">
                    <div className="about-one__points-left">
                      <ul className="list-unstyled about-one__points">
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>Global Capabilities</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>Local Footprint</p>
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
                            <p>Efficient Distribution</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>Certified Technicians</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="about-one__text-2">
                    Before delivery, all rental safety equipment and protective
                    gear is cleaned, maintained, calibrated and tested in full
                    compliance of manufacturers' recommendations by our
                    certified technicians.
                  </p>
                  <Link href="/contact" className="thm-btn about-one__btn">
                    Get A Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Fast Delivery End */}

        {/* Partner Brands Start */}
        <section className="team-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Trusted Partners</span>
              <h2 className="section-title__title">
                Our Leading Safety Equipment <br /> Brands and Manufacturers
              </h2>
            </div>
            <div className="row">
              {/* Partner Brand Item Start */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__img-box brand-box">
                    <div className="team-one__img brand-img">
                      {/* Replace with actual brand logo */}
                      <div className="flex items-center justify-center h-full bg-gray-100">
                        <span className="text-2xl font-bold text-blue-800">
                          MSA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Partner Brand Item End */}

              {/* Partner Brand Item Start */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__img-box brand-box">
                    <div className="team-one__img brand-img">
                      {/* Replace with actual brand logo */}
                      <div className="flex items-center justify-center h-full bg-gray-100">
                        <span className="text-2xl font-bold text-blue-800">
                          Industrial Scientific
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Partner Brand Item End */}

              {/* Partner Brand Item Start */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__img-box brand-box">
                    <div className="team-one__img brand-img">
                      {/* Replace with actual brand logo */}
                      <div className="flex items-center justify-center h-full bg-gray-100">
                        <span className="text-2xl font-bold text-blue-800">
                          3M
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Partner Brand Item End */}

              {/* Partner Brand Item Start */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__img-box brand-box">
                    <div className="team-one__img brand-img">
                      {/* Replace with actual brand logo */}
                      <div className="flex items-center justify-center h-full bg-gray-100">
                        <span className="text-2xl font-bold text-blue-800">
                          Honeywell
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Partner Brand Item End */}

              {/* Partner Brand Item Start */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__img-box brand-box">
                    <div className="team-one__img brand-img">
                      {/* Replace with actual brand logo */}
                      <div className="flex items-center justify-center h-full bg-gray-100">
                        <span className="text-2xl font-bold text-blue-800">
                          Blackline Safety
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Partner Brand Item End */}
            </div>
          </div>
        </section>
        {/* Partner Brands End */}

        {/* CTA Start */}
        <section className="cta-one">
          <div className="container">
            <div className="cta-one__inner">
              <div className="cta-one__shape-1 float-bob-x">
                <img src="assets/images/shapes/cta-one-shape-1.png" alt="" />
              </div>
              <div className="cta-one__title">
                <h3>Need help selecting the right safety equipment?</h3>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/contact" className="thm-btn cta-one__btn">
                  Get A Quote
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
