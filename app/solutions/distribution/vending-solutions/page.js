"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import CounterUp from "@/components/elements/CounterUp";

export default function VendorSolutions() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={2}
        breadcrumbTitle="Vending Solutions"
        breadcrumbDescription="Smart industrial vending solutions—automated PPE, tool & inventory tracking with 24/7 support to cut costs and boost compliance."
      >
        {/* Vending Solutions Top Start */}
        <section className="team-top">
          <div className="container">
            <div className="section-title section-title--two text-center">
              <span className="section-title__tagline">
                Smart Industrial Vending
              </span>
              <h2 className="section-title__title">
                Automated Inventory Management <br /> For Maximum Control &
                Efficiency
              </h2>
              <p className="section-title__text">
                FixNix provides intelligent vending solutions that streamline
                inventory management, <br /> reduce consumption, improve
                accountability, and eliminate stockouts with 24/7 availability.
              </p>
              <div className="mt-5 flex justify-center gap-4 flex-wrap">
                <Link href="/contact" className="thm-btn team-top__btn">
                  Get A Quote
                </Link>
                <Link
                  href="/vending-products"
                  className="thm-btn thm-btn--dark team-top__btn"
                >
                  Vending Options
                </Link>
                <Link
                  href="/case-studies"
                  className="thm-btn thm-btn--outline team-top__btn"
                >
                  Success Stories
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Vending Solutions Top End */}

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
                Strategic Advantages
              </span>
              <h2 className="section-title__title">
                Intelligent Management Systems <br /> For Critical Supplies &
                Equipment
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
                    <span className="icon-cost-saving"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="/cost-reduction">Enhanced Cost Savings</Link>
                    </h3>
                    <p className="experience-one__text">
                      Reduce consumption by 25-40% through controlled access,
                      increased accountability, and elimination of shrinkage.
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
                      <Link href="/inventory-management">
                        Automated Tracking
                      </Link>
                    </h3>
                    <p className="experience-one__text">
                      Real-time inventory visibility with automated reporting,
                      reordering, and detailed usage analytics by department,
                      job, or employee.
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
                    <span className="icon-productivity"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="/productivity-boost">24/7 Availability</Link>
                    </h3>
                    <p className="experience-one__text">
                      Instant access to critical supplies and equipment whenever
                      needed, reducing downtime and increasing workplace
                      productivity.
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
                    <CounterUp end={30} />
                    <span className="counter-one__plus">%</span>
                    <p className="counter-one__text">Average Cost Reduction</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={99} />
                    <span className="counter-one__plus">.9%</span>
                    <p className="counter-one__text">Machine Uptime</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={24} />
                    <span className="counter-one__plus">/7</span>
                    <p className="counter-one__text">Support Availability</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={2500} />
                    <span className="counter-one__plus">+</span>
                    <p className="counter-one__text">Installations</p>
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
                Vending Solution Options
              </span>
              <h2 className="section-title__title">
                Comprehensive Range Of <br /> Industrial Vending Machines
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
                      <span className="icon-ppe-dispensing"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">PPE Dispensing</Link>
                    </h3>
                    <p className="services-one__text">
                      Controlled distribution of safety gloves, glasses,
                      earplugs, and other personal protective equipment with
                      individual user accountability.
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
                      <span className="icon-tool-crib"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Tool Tracking</Link>
                    </h3>
                    <p className="services-one__text">
                      Secure check-out and return systems for tools with
                      automated tracking of usage history, calibration status,
                      and maintenance needs.
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
                      <span className="icon-locker"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Locker Systems</Link>
                    </h3>
                    <p className="services-one__text">
                      Secure storage for larger equipment and returnable assets
                      with electronic access control and comprehensive audit
                      trails.
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
                      <span className="icon-coil-vending"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Coil Machines</Link>
                    </h3>
                    <p className="services-one__text">
                      Traditional vending format ideal for smaller consumables
                      like safety glasses, gloves, earplugs, and batteries with
                      individual dispensing.
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
                      <span className="icon-carousel"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Carousel Systems</Link>
                    </h3>
                    <p className="services-one__text">
                      High-density storage for maximum product variety in a
                      small footprint, with control over access to specific
                      items by user permissions.
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
                      <span className="icon-weight-scale"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Weight-Based Systems</Link>
                    </h3>
                    <p className="services-one__text">
                      Advanced scales that track inventory by weight changes,
                      ideal for small components, fasteners, and bulk
                      consumables with precise counting.
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

        {/* Cost Savings Start */}
        <section className="feature-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="feature-one__left">
                  <div className="section-title">
                    <span className="section-title__tagline">
                      Cost Reduction & Efficiency
                    </span>
                    <h2 className="section-title__title">
                      Maximize Savings While Improving Workflow
                    </h2>
                  </div>
                  <p className="feature-one__text">
                    FixNix vending solutions deliver immediate financial
                    benefits while streamlining operations. Our systems are
                    designed to reduce waste, eliminate shrinkage, and provide
                    detailed visibility into consumption patterns.
                  </p>
                  <ul className="feature-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Reduce consumption by 25-40% through restricted access
                          and increased accountability
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Eliminate emergency orders and rush shipping fees with
                          automated reordering
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Lower inventory carrying costs by optimizing stock
                          levels based on actual usage
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Charge costs to specific jobs, departments, or cost
                          centers for accurate allocation
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Free up valuable staff time by automating purchasing,
                          receiving, and distribution tasks
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="feature-one__btn-box">
                    <Link href="/contact" className="feature-one__btn thm-btn">
                      Calculate ROI
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="feature-one__right">
                  <div className="feature-one__img">
                    {/* Replace with proper vending image */}
                    <img
                      src="assets/images/resources/feature-1-1.jpg"
                      alt="Vending Solutions"
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
        {/* Cost Savings End */}

        {/* Implementation & Support Start */}
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
                        alt="Implementation & Support"
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
                      Implementation & Support
                    </span>
                    <h2 className="section-title__title">
                      Turnkey Managed Vending <br /> With End-to-End Support
                    </h2>
                  </div>
                  <p className="about-one__text">
                    Our vending solutions include comprehensive support from
                    initial planning through ongoing operations. We handle
                    everything from needs assessment to installation, training,
                    maintenance, and continuous optimization.
                  </p>
                  <div className="about-one__points-box">
                    <div className="about-one__points-left">
                      <ul className="list-unstyled about-one__points">
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>Expert Consultation</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>Custom Configuration</p>
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
                            <p>Machine Maintenance</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>24/7 Technical Support</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="about-one__text-2">
                    Our experienced technicians provide regular preventative
                    maintenance, prompt repairs, and seamless inventory
                    management to ensure your vending solutions operate
                    flawlessly with minimal involvement from your team.
                  </p>
                  <Link href="/contact" className="thm-btn about-one__btn">
                    Request Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Implementation & Support End */}

        {/* Integration Technologies Start */}
        <section className="team-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">
                Technology & Integration
              </span>
              <h2 className="section-title__title">
                Advanced Software Platform <br /> For Complete Visibility &
                Control
              </h2>
            </div>
            <div className="row">
              {/* Tech Feature Item Start */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__content tech-feature">
                    <div className="team-one__icon-box">
                      <span className="icon-cloud-software"></span>
                    </div>
                    <h3 className="team-one__name">Cloud-Based Dashboard</h3>
                  </div>
                </div>
              </div>
              {/* Tech Feature Item End */}

              {/* Tech Feature Item Start */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__content tech-feature">
                    <div className="team-one__icon-box">
                      <span className="icon-integration"></span>
                    </div>
                    <h3 className="team-one__name">ERP Integration</h3>
                  </div>
                </div>
              </div>
              {/* Tech Feature Item End */}

              {/* Tech Feature Item Start */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__content tech-feature">
                    <div className="team-one__icon-box">
                      <span className="icon-access-control"></span>
                    </div>
                    <h3 className="team-one__name">Access Controls</h3>
                  </div>
                </div>
              </div>
              {/* Tech Feature Item End */}

              {/* Tech Feature Item Start */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__content tech-feature">
                    <div className="team-one__icon-box">
                      <span className="icon-reporting"></span>
                    </div>
                    <h3 className="team-one__name">Custom Reporting</h3>
                  </div>
                </div>
              </div>
              {/* Tech Feature Item End */}
            </div>
          </div>
        </section>
        {/* Integration Technologies End */}

        {/* CTA Start */}
        <section className="cta-one">
          <div className="container">
            <div className="cta-one__inner">
              <div className="cta-one__shape-1 float-bob-x">
                <img src="assets/images/shapes/cta-one-shape-1.png" alt="" />
              </div>
              <div className="cta-one__title">
                <h3>Ready to implement automated vending solutions?</h3>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/contact" className="thm-btn cta-one__btn">
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* CTA End */}

        <style jsx>{`
          .tech-feature {
            padding: 30px 20px;
            background-color: #f5f5f5;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .tech-feature:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          .team-one__icon-box {
            font-size: 3rem;
            color: #0056b3;
            margin-bottom: 15px;
          }
          .team-one__name {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 10px;
          }
          .team-one__text {
            font-size: 0.95rem;
            color: #555;
          }
        `}</style>
      </Layout>
    </>
  );
}
