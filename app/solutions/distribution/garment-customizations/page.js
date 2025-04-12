"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import CounterUp from "@/components/elements/CounterUp";

export default function GarmentsCustomizations() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={2}
        breadcrumbTitle="Garment Customizations"
        breadcrumbDescription="Compliant, customizable safety workwear—FR gear, uniforms & EH-rated apparel with easy online ordering & fast delivery."
      >
        {/* Garment Customizations Top Start */}
        <section className="team-top">
          <div className="container">
            <div className="section-title section-title--two text-center">
              <span className="section-title__tagline">
                Custom Workwear & Safety Apparel
              </span>
              <h2 className="section-title__title">
                Premium Customizable Safety Workwear <br /> Tailored To Your
                Company Needs
              </h2>
              <p className="section-title__text">
                FixNix provides industry-leading personalized workwear solutions
                with custom branding, <br /> ensuring both safety compliance and
                professional identity for your team.
              </p>
              <div className="mt-5 flex justify-center gap-4 flex-wrap">
                <Link href="/contact" className="thm-btn team-top__btn">
                  Get A Quote
                </Link>
                <Link
                  href="/product-line"
                  className="thm-btn thm-btn--dark team-top__btn"
                >
                  Customization Options
                </Link>
                <Link
                  href="/service-line"
                  className="thm-btn thm-btn--outline team-top__btn"
                >
                  View Catalog
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Garment Customizations Top End */}

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
                Premium Customization
              </span>
              <h2 className="section-title__title">
                Professional Safety Workwear <br /> With Your Unique Brand
                Identity
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
                    <span className="icon-fire"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="/fr-garments">Flame-Resistant Apparel</Link>
                    </h3>
                    <p className="experience-one__text">
                      Customizable FR clothing meeting NFPA 2112, 70E, and NESC
                      standards with your company branding.
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
                      <Link href="/hi-vis-clothing">
                        High-Visibility Clothing
                      </Link>
                    </h3>
                    <p className="experience-one__text">
                      ANSI/ISEA 107 compliant hi-vis workwear with reflective
                      elements and custom logo application.
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
                      <Link href="/uniform-programs">Uniform Programs</Link>
                    </h3>
                    <p className="experience-one__text">
                      Complete uniform programs with managed ordering, employee
                      allowances, and consistent branding.
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
                    <CounterUp end={1000} />
                    <span className="counter-one__plus">+</span>
                    <p className="counter-one__text">Customization Options</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={48} />
                    <span className="counter-one__plus">hr</span>
                    <p className="counter-one__text">Fast Turnaround</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={15} />
                    <span className="counter-one__plus">k+</span>
                    <p className="counter-one__text">Businesses Served</p>
                  </li>
                  <li className="counter-one__single">
                    <CounterUp end={100} />
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
                Our Customization Services
              </span>
              <h2 className="section-title__title">
                Professional Garment Customization <br /> With Multiple Branding
                Options
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
                      <span className="icon-sewing"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Embroidery Services</Link>
                    </h3>
                    <p className="services-one__text">
                      High-quality embroidery with up to 15 colors for logo
                      application, employee names, and department designations.
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
                      <span className="icon-heat"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Heat Transfer</Link>
                    </h3>
                    <p className="services-one__text">
                      Full-color heat press applications ideal for
                      high-visibility garments and detailed designs on FR
                      clothing.
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
                      <span className="icon-printing"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Screen Printing</Link>
                    </h3>
                    <p className="services-one__text">
                      Cost-effective solution for large volume orders with
                      durable results that stand up to industrial washing.
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
                      <span className="icon-patch"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Patch Application</Link>
                    </h3>
                    <p className="services-one__text">
                      Removable or permanent patches for company logos,
                      certifications, and safety indicators on workwear.
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
                      <span className="icon-tailor"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Custom Sizing</Link>
                    </h3>
                    <p className="services-one__text">
                      Tailored sizing options for perfect fit across all
                      employee sizes with alterations for comfort and safety.
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
                      <span className="icon-design"></span>
                    </div>
                    <h3 className="services-one__title">
                      <Link href="/services-details">Design Services</Link>
                    </h3>
                    <p className="services-one__text">
                      Professional design assistance to create or adapt your
                      branding for optimal presentation on workwear.
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

        {/* Managed Apparel Program Start */}
        <section className="feature-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="feature-one__left">
                  <div className="section-title">
                    <span className="section-title__tagline">
                      Managed Apparel Program
                    </span>
                    <h2 className="section-title__title">
                      Streamlined Workwear Management For Your Team
                    </h2>
                  </div>
                  <p className="feature-one__text">
                    FixNix offers comprehensive managed apparel programs that
                    simplify the process of outfitting your team with customized
                    safety workwear while maintaining compliance and brand
                    consistency.
                  </p>
                  <ul className="feature-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Custom online ordering portal with employee profiles
                          and approval workflows
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Automated employee allowance tracking and reporting
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Consistent branding across all garment types and
                          departments
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Regular replacement schedules for worn items with
                          usage tracking
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check"></span>
                      </div>
                      <div className="text">
                        <p>
                          Consolidated billing and detailed usage reports by
                          department
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
                    {/* Replace with proper workwear image */}
                    <img
                      src="assets/images/resources/feature-1-1.jpg"
                      alt="Managed Apparel Program"
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
        {/* Managed Apparel Program End */}

        {/* Quick Turnaround Start */}
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
                        alt="Quick Turnaround"
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
                      Quick Turnaround
                    </span>
                    <h2 className="section-title__title">
                      Fast Production & Delivery <br /> Of Your Custom Workwear
                    </h2>
                  </div>
                  <p className="about-one__text">
                    We understand that time is critical when outfitting your
                    workforce. Our streamlined customization process and
                    efficient production facilities ensure you receive your
                    branded safety workwear when you need it.
                  </p>
                  <div className="about-one__points-box">
                    <div className="about-one__points-left">
                      <ul className="list-unstyled about-one__points">
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>48-Hour Rush Service</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>Bulk Order Capability</p>
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
                            <p>Nationwide Delivery</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="text">
                            <p>Reorder Simplicity</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="about-one__text-2">
                    Our in-house customization facilities and quality control
                    processes ensure consistent branding application while
                    maintaining the safety properties and compliance of all
                    garments.
                  </p>
                  <Link href="/contact" className="thm-btn about-one__btn">
                    Get A Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Quick Turnaround End */}

        {/* Brand Partners Start */}
        <section className="team-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Featured Brands</span>
              <h2 className="section-title__title">
                Premium Workwear Brands <br /> Available For Customization
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
                          Carhartt
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
                          Bulwark FR
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
                          Red Kap
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
                          Timberland PRO
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
        {/* Brand Partners End */}

        {/* CTA Start */}
        <section className="cta-one">
          <div className="container">
            <div className="cta-one__inner">
              <div className="cta-one__shape-1 float-bob-x">
                <img src="assets/images/shapes/cta-one-shape-1.png" alt="" />
              </div>
              <div className="cta-one__title">
                <h3>Ready to customize workwear for your team?</h3>
              </div>
              <div className="cta-one__btn-box">
                <Link href="/contact" className="thm-btn cta-one__btn">
                  Request Consultation
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
