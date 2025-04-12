"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import CounterUp from "@/components/elements/CounterUp";

export default function MillToolWelding() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={2}
        breadcrumbTitle="Industrial Tools & Welding Equipment"
        breadcrumbDescription="Industrial tools, welding gear & safety equipment—top brands, expert support, and flexible rentals for maximum productivity."
      >
        {/* Mill Tool & Welding Top Start */}
        <section className="team-top">
          <div className="container">
            <div className="section-title section-title--two text-center">
              <span className="section-title__tagline">
                Industrial Equipment Solutions
              </span>
              <h2 className="section-title__title">
                Professional-Grade Tools & <br /> Welding Equipment
              </h2>
              <p className="section-title__text">
                FixNix provides comprehensive industrial tool and welding
                equipment solutions with <br /> expert support, flexible rental
                options, and equipment maintenance services.
              </p>
              <div className="mt-5 flex justify-center gap-4 flex-wrap">
                <Link href="/contact" className="thm-btn team-top__btn">
                  Get A Quote
                </Link>
                <Link
                  href="/product-line"
                  className="thm-btn thm-btn--dark team-top__btn"
                >
                  Equipment Catalog
                </Link>
                <Link
                  href="/rental-options"
                  className="thm-btn thm-btn--outline team-top__btn"
                >
                  Rental Options
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Mill Tool & Welding Top End */}

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
                Equipment Categories
              </span>
              <h2 className="section-title__title">
                Industrial-Grade Tools & Equipment <br /> For Every Application
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
                    <span className="icon-drill"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="/power-tools">Power Tools</Link>
                    </h3>
                    <p className="experience-one__text">
                      Professional-grade power tools from top manufacturers for
                      construction, maintenance, and industrial applications.
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
                    <span className="icon-welding"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="/welding-equipment">Welding Equipment</Link>
                    </h3>
                    <p className="experience-one__text">
                      Comprehensive range of MIG, TIG, and stick welders, plus
                      plasma cutters, engine drives and welding accessories.
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
                    <span className="icon-hydraulic"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="/hydraulic-tools">Hydraulic Tools</Link>
                    </h3>
                    <p className="experience-one__text">
                      Heavy-duty hydraulic equipment including pumps, cylinders,
                      torque wrenches, and specialized industrial tools.
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
                    <CounterUp end={5000} />
                    <span className="counter-one__plus">+</span>
                    <p className="counter-one__text">Tool Types</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={75} />
                    <span className="counter-one__plus">+</span>
                    <p className="counter-one__text">Brand Partners</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={24} />
                    <span className="counter-one__plus">/7</span>
                    <p className="counter-one__text">Support</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={98} />
                    <span className="counter-one__plus">%</span>
                    <p className="counter-one__text">Uptime</p>
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
                Our Equipment Categories
              </span>
              <h2 className="section-title__title">
                Comprehensive Selection of <br /> Industrial Equipment
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
                      <span className="icon-pneumatic"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Pneumatic Tools</Link>
                    </h3>
                    <p className="services-one__text">
                      Air-powered tools including impact wrenches, air hammers,
                      grinders, and specialized pneumatic equipment for
                      industrial applications.
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
                      <span className="icon-measure"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Measuring Tools</Link>
                    </h3>
                    <p className="services-one__text">
                      Precision measuring instruments, gauges, calipers,
                      micrometers, and specialized measurement devices for
                      quality control.
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
                      <span className="icon-welding-machine"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Welding Machines</Link>
                    </h3>
                    <p className="services-one__text">
                      Professional welding equipment including MIG, TIG, and
                      stick welders from leading brands for industrial welding
                      applications.
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
                      <span className="icon-metal-cutting"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Metal Fabrication</Link>
                    </h3>
                    <p className="services-one__text">
                      Specialized equipment for cutting, bending, forming, and
                      fabricating metal including plasma cutters and shears.
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
                      <span className="icon-safety-equipment"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Safety Equipment</Link>
                    </h3>
                    <p className="services-one__text">
                      Comprehensive safety gear for welding and industrial
                      applications including helmets, gloves, jackets, and
                      respirators.
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
                      <span className="icon-grinding"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Abrasives & Grinding</Link>
                    </h3>
                    <p className="services-one__text">
                      Complete range of grinding wheels, sandpaper, abrasive
                      discs, and polishing materials for metal finishing
                      applications.
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

        {/* Rental Program Start */}
        <section className="feature-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="feature-one__left">
                  <div className="section-title">
                    <span className="section-title__tagline">
                      Tool Rental Program
                    </span>
                    <h2 className="section-title__title">
                      Flexible Equipment Rental Solutions For Every Project
                    </h2>
                  </div>
                  <p className="feature-one__text">
                    FixNix offers comprehensive tool and equipment rental
                    programs that provide access to professional-grade equipment
                    without the capital investment, ideal for short-term
                    projects or equipment testing.
                  </p>
                  <ul className="feature-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Daily, weekly, and monthly rental options with
                          competitive rates
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          All equipment certified and maintained to manufacturer
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
                          Custom tool trailers and containers for job site
                          equipment management
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Rent-to-own programs available for long-term equipment
                          needs
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          24/7 emergency equipment replacement for minimal
                          downtime
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
                    {/* Replace with proper tools/equipment image */}
                    <img
                      src="assets/images/resources/feature-1-1.jpg"
                      alt="Tool Rental Program"
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
        {/* Rental Program End */}

        {/* Equipment Maintenance Start */}
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
                      {/* Replace with proper maintenance/repair image */}
                      <img
                        src="assets/images/resources/about-one-1-1.jpg"
                        alt="Equipment Maintenance"
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
                      Equipment Service & Repair
                    </span>
                    <h2 className="section-title__title">
                      Professional Maintenance <br /> For Your Industrial
                      Equipment
                    </h2>
                  </div>
                  <p className="about-one__text">
                    Our certified technicians provide comprehensive maintenance
                    and repair services for all types of industrial equipment
                    and tools, helping to minimize downtime and extend equipment
                    life.
                  </p>
                  <div className="about-one__points-box">
                    <div className="about-one__points-left">
                      <ul className="list-unstyled about-one__points">
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>Preventative Maintenance</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>Warranty Repairs</p>
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
                            <p>Calibration Services</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>Parts Replacement</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="about-one__text-2">
                    Our service centers are equipped with manufacturer-specific
                    diagnostic tools and genuine replacement parts to ensure
                    your equipment performs to factory specifications after
                    servicing.
                  </p>
                  <Link href="/contact" className="thm-btn about-one__btn">
                    Schedule Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Equipment Maintenance End */}

        {/* Partner Brands Start */}
        <section className="team-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Trusted Brands</span>
              <h2 className="section-title__title">
                Our Featured Tool & Equipment <br /> Manufacturers
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
                          Milwaukee
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
                          Lincoln Electric
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
                          DeWalt
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
                          Makita
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
                <h3>Need industrial tools or welding equipment?</h3>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/contact" className="thm-btn cta-one__btn">
                  Request Quote
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
