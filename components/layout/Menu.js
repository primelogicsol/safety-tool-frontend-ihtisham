import Link from "next/link";
// import { useRouter } from "next/router"
import { useEffect } from "react";

export default function Menu() {
  // const router = useRouter()

  // Add effect to handle hover interactions
  useEffect(() => {
    // Add hover effects to match other menu items
    const menuItems = document.querySelectorAll(".home-showcase__item ul li a");
    menuItems.forEach((item) => {
      item.classList.add("mega-menu-link");
    });

    // Add styling for category headings
    const categoryHeadings = document.querySelectorAll(".home-showcase__title");
    categoryHeadings.forEach((heading) => {
      heading.classList.add("category-heading");
    });

    // Function to align headings in each row
    const alignHeadingsInRow = () => {
      // Group items by row (first 3 in each column are in the same row)
      for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        // Select all headings in this row (one from each column)
        const headingsInRow = document.querySelectorAll(
          `.col-lg-3 .home-showcase__item:nth-child(${
            rowIndex + 1
          }) .home-showcase__title`
        );

        // Find the maximum height in this row
        let maxHeight = 0;
        headingsInRow.forEach((heading) => {
          const height = heading.offsetHeight;
          if (height > maxHeight) {
            maxHeight = height;
          }
        });

        // Set all headings in this row to the same height
        headingsInRow.forEach((heading) => {
          heading.style.height = `${maxHeight}px`;
        });
      }
    };

    // Run alignment after a short delay to ensure DOM is fully loaded
    setTimeout(alignHeadingsInRow, 500);

    // Also run on window resize for responsiveness
    window.addEventListener("resize", alignHeadingsInRow);

    // Cleanup
    return () => {
      window.removeEventListener("resize", alignHeadingsInRow);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        /* Mega menu styling */
        .home-showcase__item ul {
          padding-left: 0;
          list-style: none;
          margin-top: 10px;
        }

        .home-showcase__item ul li {
          margin-bottom: 8px;
        }

        .home-showcase__item ul li a {
          color: #555;
          font-size: 14px;
          transition: all 0.3s ease;
          position: relative;
          padding-left: 15px;
          display: block;
        }

        .home-showcase__item ul li a:before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #ff5e14;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .home-showcase__item ul li a:hover {
          color: #ff5e14;
          padding-left: 20px;
        }

        .home-showcase__item ul li a:hover:before {
          opacity: 1;
        }

        /* Improved heading styling for horizontal alignment */
        .home-showcase__title {
          color: #333;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 15px;
          border-bottom: 2px solid #ff5e14;
          padding-bottom: 10px;
          display: block; /* Change from inline-block to block */
          min-height: 45px;
          width: 100%; /* Ensure full width */
          box-sizing: border-box;
          position: relative; /* For absolute positioning of border */
        }

        /* Add border as a pseudo-element to maintain consistent appearance */
        .home-showcase__title:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 80%; /* Width of the border */
          height: 2px;
          background-color: #ff5e14;
        }

        /* Create row groups for sections */
        .row-group {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 15px;
        }

        .home-showcase__item {
          margin-bottom: 25px;
          display: flex;
          flex-direction: column;
        }

        /* Container for links to maintain consistent spacing */
        .links-container {
          flex-grow: 1;
        }

        /* Ensure consistent spacing in mega menu */
        .home-showcase .container {
          padding: 25px 15px;
        }

        .home-showcase {
          width: 100%;
          background-color: #fff;
          position: relative;
          z-index: 999;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          padding-bottom: 20px;
        }

        /* Fix dropdown behavior */
        .dropdown.megamenu > ul {
          max-height: none !important;
          overflow: visible !important;
          height: auto !important;
        }

        .dropdown.megamenu:hover > ul {
          display: block;
          visibility: visible;
          opacity: 1;
          z-index: 9999;
        }

        /* Row spacing */
        .home-showcase__inner {
          margin-top: 0;
          padding-top: 0;
        }

        .row {
          margin-bottom: 0;
        }
      `}</style>

      <ul className="main-menu__list">
        <li className="dropdown megamenu">
          <a href="/">Solutions </a>
          <ul>
            <li>
              <section className="home-showcase">
                <div className="container">
                  <div className="home-showcase__inner">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="home-showcase__item">
                          <h3 className="home-showcase__title">Distribution</h3>
                          <ul>
                            <li>
                              <Link href="/solutions/safety-supplies">
                                Safety Supplies/PPE
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/in-plant-service">
                                In-Plant Service Center
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/garment-customizations">
                                Garment Customizations
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/mill-tool-welding">
                                Mill, Tool and Welding Supplies
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/vending-solutions">
                                Vending Solutions
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="home-showcase__item">
                          <h3 className="home-showcase__title">
                            Medical Management
                          </h3>
                          <ul>
                            <li>
                              <Link href="/solutions/emergency-medical">
                                Emergency Medical Management
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/covid-management">
                                COVID-19 Management
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/onsite-medical">
                                On-site Medical Services
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/health-compliance">
                                Health Compliance Officers
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="home-showcase__item">
                          <h3 className="home-showcase__title">Training</h3>
                          <ul>
                            <li>
                              <Link href="/solutions/safety-compliance-training">
                                Safety Compliance Training
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/equipment-care-training">
                                Safety Equipment Care and Use Training
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/confined-space-training">
                                Confined Space Entry Training
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="home-showcase__item">
                          <h3 className="home-showcase__title">
                            Specialized Safety Personnel
                          </h3>
                          <ul>
                            <li>
                              <Link href="/solutions/safety-attendants">
                                Safety Attendants
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/safety-technicians">
                                Safety Technicians
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/safety-supervisors">
                                Safety Supervisors
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/permit-writers">
                                Permit Writers
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="home-showcase__item">
                          <h3 className="home-showcase__title">
                            Gas Detection Services
                          </h3>
                          <ul>
                            <li>
                              <Link href="/solutions/gas-detection-equipment">
                                Gas Detection Equipment Rental and Sales
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/gas-detection-inspection">
                                Gas Detection Equipment Inspection, Testing and
                                Maintenance
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/calibration-services">
                                Calibration Services
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="home-showcase__item">
                          <h3 className="home-showcase__title">Compliance</h3>
                          <ul>
                            <li>
                              <Link href="/solutions/safety-compliance-inspection">
                                Safety Compliance Inspection
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/regulatory-compliance">
                                Regulatory Compliance Consults
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/industrial-rescue">
                                Industrial Rescue Services
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/emergency-response">
                                Emergency Response Planning
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="home-showcase__item">
                          <h3 className="home-showcase__title">
                            Industrial Communication
                          </h3>
                          <ul>
                            <li>
                              <Link href="/solutions/radio-equipment">
                                2-way Radio Equipment Rental and Sales
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/communications-testing">
                                Communications Equipment Testing, Repair and
                                Maintenance
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/motorola-consulting">
                                Motorola Communication Consulting & System
                                Design
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="home-showcase__item">
                          <h3 className="home-showcase__title">
                            Fire Protection
                          </h3>
                          <ul>
                            <li>
                              <Link href="/solutions/fire-extinguisher">
                                Fixed Systems and Portable Fire Extinguisher
                                Services and Sales
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/fire-protection-design">
                                Fire Protection Engineering, Design and
                                Installation
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/fire-protection-inspections">
                                Fire Protection Inspections, Testing and
                                Maintenance
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="home-showcase__item">
                          <h3 className="home-showcase__title">
                            Fall Protection
                          </h3>
                          <ul>
                            <li>
                              <Link href="/solutions/fall-protection-systems">
                                Fall Protection Systems
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/fall-protection-equipment">
                                Fall Protection Equipment Rental and Sales
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/fall-protection-inspection">
                                Fall Protection Inspections, Testing and
                                Maintenance
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="home-showcase__item">
                          <h3 className="home-showcase__title">Turnarounds</h3>
                          <ul>
                            <li>
                              <Link href="/solutions/safety-equipment">
                                Technical Safety Equipment Rental and Sales
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/breathing-air">
                                Grade D Breathing Air Services
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/turnaround-support">
                                Trained On-Site Technicians for Turnaround
                                Safety Support
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="home-showcase__item">
                          <h3 className="home-showcase__title">
                            Professional Safety Solutions
                          </h3>
                          <ul>
                            <li>
                              <Link href="/solutions/industrial-hygiene">
                                Industrial Hygiene Services/Certified Industrial
                                Hygienist
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/hygiene-compliance">
                                Industrial Hygiene Compliance
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/workplace-exposure">
                                Workplace Exposure Consulting
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="home-showcase__item">
                          <h3 className="home-showcase__title">
                            Respiratory Protection
                          </h3>
                          <ul>
                            <li>
                              <Link href="/solutions/respiratory-equipment">
                                Respiratory Protection Equipment Rental and
                                Sales
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/respiratory-inspection">
                                Respiratory Protection Equipment Inspection,
                                Testing and Maintenance
                              </Link>
                            </li>
                            <li>
                              <Link href="/solutions/grade-d-breathing">
                                Grade D Breathing Air Systems
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </li>
          </ul>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
        <li className="dropdown">
          <Link href="#">Pages</Link>
          <ul>
            <li>
              <Link href="team">Team</Link>
            </li>
            <li>
              <Link href="pricing">Pricing</Link>
            </li>
            <li>
              <Link href="appointment">appointment</Link>
            </li>
            <li>
              <Link href="gallery">Gallery</Link>
            </li>
            <li>
              <Link href="faq">Faq</Link>
            </li>
            <li>
              <Link href="/error">404 Error</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#">Services</Link>
          <ul>
            <li>
              <Link href="services">Services</Link>
            </li>
            <li>
              <Link href="services-details">Services Details</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#">Blog</Link>
          <ul>
            <li>
              <Link href="blog-v-1">Blog V-1</Link>
            </li>
            <li>
              <Link href="blog-v-2">Blog V-2</Link>
            </li>
            <li>
              <Link href="blog-details">Blog Details V-1</Link>
            </li>
            <li>
              <Link href="blog-details-2">Blog Details V-2</Link>
            </li>
            <li>
              <Link href="blog-details-3">Blog Details V-3</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#">Shop</Link>
          <ul>
            <li>
              <Link href="products">Products</Link>
            </li>
            <li>
              <Link href="product-details">Product Details</Link>
            </li>
            <li>
              <Link href="cart">Cart</Link>
            </li>
            <li>
              <Link href="checkout">Checkout</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
