"use client";
import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  isSidebar?: boolean;
  handleMobileMenu: () => void;
  handleSidebar: () => void;
}

interface ActiveState {
  status: boolean;
  key: string | number;
  subMenuKey: string;
}

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }: MobileMenuProps) => {
  const [isActive, setIsActive] = useState<ActiveState>({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key: number, subMenuKey: string = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
  
  return (
    <>
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        ></div>
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link href="/" aria-label="logo image">
              <img
                src="assets/images/resources/logo-1.png"
                width="150"
                alt=""
              />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="main-menu__list">
                <li
                  className={
                    isActive.key == 1 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="#">Solutions</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 1 ? "block" : "none"}`,
                    }}
                  >
                    <li
                      className={
                        isActive.subMenuKey == "distribution"
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/solutions/distribution">Distribution</Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == "distribution"
                              ? "block"
                              : "none"
                          }`,
                        }}
                      >
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
                      <button
                        className={
                          isActive.subMenuKey == "distribution"
                            ? "expanded open"
                            : ""
                        }
                        onClick={() => handleToggle(1, "distribution")}
                      >
                        <span className="fa fa-angle-right" />
                      </button>
                    </li>
                    <li
                      className={
                        isActive.subMenuKey == "medical"
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/solutions/medical-management">
                        Medical Management
                      </Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == "medical" ? "block" : "none"
                          }`,
                        }}
                      >
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
                      <button
                        className={
                          isActive.subMenuKey == "medical"
                            ? "expanded open"
                            : ""
                        }
                        onClick={() => handleToggle(1, "medical")}
                      >
                        <span className="fa fa-angle-right" />
                      </button>
                    </li>
                    <li
                      className={
                        isActive.subMenuKey == "specialized"
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/solutions/specialized-safety">
                        Specialized Safety Personnel
                      </Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == "specialized"
                              ? "block"
                              : "none"
                          }`,
                        }}
                      >
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
                      <button
                        className={
                          isActive.subMenuKey == "specialized"
                            ? "expanded open"
                            : ""
                        }
                        onClick={() => handleToggle(1, "specialized")}
                      >
                        <span className="fa fa-angle-right" />
                      </button>
                    </li>
                    <li
                      className={
                        isActive.subMenuKey == "gas"
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/solutions/gas-detection">
                        Gas Detection Services
                      </Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == "gas" ? "block" : "none"
                          }`,
                        }}
                      >
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
                      <button
                        className={
                          isActive.subMenuKey == "gas" ? "expanded open" : ""
                        }
                        onClick={() => handleToggle(1, "gas")}
                      >
                        <span className="fa fa-angle-right" />
                      </button>
                    </li>
                    <li
                      className={
                        isActive.subMenuKey == "communication"
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/solutions/industrial-communication">
                        Industrial Communication
                      </Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == "communication"
                              ? "block"
                              : "none"
                          }`,
                        }}
                      >
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
                            Motorola Communication Consulting & System Design
                          </Link>
                        </li>
                      </ul>
                      <button
                        className={
                          isActive.subMenuKey == "communication"
                            ? "expanded open"
                            : ""
                        }
                        onClick={() => handleToggle(1, "communication")}
                      >
                        <span className="fa fa-angle-right" />
                      </button>
                    </li>
                    <li
                      className={
                        isActive.subMenuKey == "fire"
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/solutions/fire-protection">
                        Fire Protection
                      </Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == "fire" ? "block" : "none"
                          }`,
                        }}
                      >
                        <li>
                          <Link href="/solutions/fire-extinguisher">
                            Fixed Systems and Portable Fire Extinguisher
                            Services and Sales
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/fire-protection-design">
                            Fire Protection Engineering, Design and Installation
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/fire-protection-inspections">
                            Fire Protection Inspections, Testing and Maintenance
                          </Link>
                        </li>
                      </ul>
                      <button
                        className={
                          isActive.subMenuKey == "fire" ? "expanded open" : ""
                        }
                        onClick={() => handleToggle(1, "fire")}
                      >
                        <span className="fa fa-angle-right" />
                      </button>
                    </li>
                    <li
                      className={
                        isActive.subMenuKey == "turnarounds"
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/solutions/turnarounds">Turnarounds</Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == "turnarounds"
                              ? "block"
                              : "none"
                          }`,
                        }}
                      >
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
                            Trained On-Site Technicians for Turnaround Safety
                            Support
                          </Link>
                        </li>
                      </ul>
                      <button
                        className={
                          isActive.subMenuKey == "turnarounds"
                            ? "expanded open"
                            : ""
                        }
                        onClick={() => handleToggle(1, "turnarounds")}
                      >
                        <span className="fa fa-angle-right" />
                      </button>
                    </li>
                    <li
                      className={
                        isActive.subMenuKey == "training"
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/solutions/training">Training</Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == "training" ? "block" : "none"
                          }`,
                        }}
                      >
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
                      <button
                        className={
                          isActive.subMenuKey == "training"
                            ? "expanded open"
                            : ""
                        }
                        onClick={() => handleToggle(1, "training")}
                      >
                        <span className="fa fa-angle-right" />
                      </button>
                    </li>
                    <li
                      className={
                        isActive.subMenuKey == "compliance"
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/solutions/compliance">Compliance</Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == "compliance"
                              ? "block"
                              : "none"
                          }`,
                        }}
                      >
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
                      <button
                        className={
                          isActive.subMenuKey == "compliance"
                            ? "expanded open"
                            : ""
                        }
                        onClick={() => handleToggle(1, "compliance")}
                      >
                        <span className="fa fa-angle-right" />
                      </button>
                    </li>
                    <li
                      className={
                        isActive.subMenuKey == "fall"
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/solutions/fall-protection">
                        Fall Protection
                      </Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == "fall" ? "block" : "none"
                          }`,
                        }}
                      >
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
                            Fall Protection Inspections, Testing and Maintenance
                          </Link>
                        </li>
                      </ul>
                      <button
                        className={
                          isActive.subMenuKey == "fall" ? "expanded open" : ""
                        }
                        onClick={() => handleToggle(1, "fall")}
                      >
                        <span className="fa fa-angle-right" />
                      </button>
                    </li>
                    <li
                      className={
                        isActive.subMenuKey == "professional"
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/solutions/safety-solutions">
                        Professional Safety Solutions
                      </Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == "professional"
                              ? "block"
                              : "none"
                          }`,
                        }}
                      >
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
                      <button
                        className={
                          isActive.subMenuKey == "professional"
                            ? "expanded open"
                            : ""
                        }
                        onClick={() => handleToggle(1, "professional")}
                      >
                        <span className="fa fa-angle-right" />
                      </button>
                    </li>
                    <li
                      className={
                        isActive.subMenuKey == "respiratory"
                          ? "dropdown current"
                          : "dropdown"
                      }
                    >
                      <Link href="/solutions/respiratory-protection">
                        Respiratory Protection
                      </Link>
                      <ul
                        style={{
                          display: `${
                            isActive.subMenuKey == "respiratory"
                              ? "block"
                              : "none"
                          }`,
                        }}
                      >
                        <li>
                          <Link href="/solutions/respiratory-equipment">
                            Respiratory Protection Equipment Rental and Sales
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/respiratory-inspection">
                            Respiratory Protection Equipment Inspection, Testing
                            and Maintenance
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/grade-d-breathing">
                            Grade D Breathing Air Systems
                          </Link>
                        </li>
                      </ul>
                      <button
                        className={
                          isActive.subMenuKey == "respiratory"
                            ? "expanded open"
                            : ""
                        }
                        onClick={() => handleToggle(1, "respiratory")}
                      >
                        <span className="fa fa-angle-right" />
                      </button>
                    </li>
                  </ul>
                  <button
                    className={isActive.key == 1 ? "expanded open" : ""}
                    onClick={() => handleToggle(1)}
                  >
                    <span className="fa fa-angle-right" />
                  </button>
                </li>
                <li>
                  <Link href="/about/">About</Link>
                </li>
                <li
                  className={
                    isActive.key == 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#">Pages</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
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
                  <button
                    className={isActive.key == 2 ? "expanded open" : ""}
                    onClick={() => handleToggle(2)}
                  >
                    <span className="fa fa-angle-right" />
                  </button>
                </li>
                <li
                  className={
                    isActive.key == 3 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#">Services</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 3 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="services">Services</Link>
                    </li>
                    <li>
                      <Link href="services-details">Services Details</Link>
                    </li>
                  </ul>
                  <button
                    className={isActive.key == 3 ? "expanded open" : ""}
                    onClick={() => handleToggle(3)}
                  >
                    <span className="fa fa-angle-right" />
                  </button>
                </li>
                <li
                  className={
                    isActive.key == 4 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#">News</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 4 ? "block" : "none"}`,
                    }}
                  >
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
                  <button
                    className={isActive.key == 4 ? "expanded open" : ""}
                    onClick={() => handleToggle(4)}
                  >
                    <span className="fa fa-angle-right" />
                  </button>
                </li>
                <li
                  className={
                    isActive.key == 5 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#">Shop</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 5 ? "block" : "none"}`,
                    }}
                  >
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
                  <button
                    className={isActive.key == 5 ? "expanded open" : ""}
                    onClick={() => handleToggle(4)}
                  >
                    <span className="fa fa-angle-right" />
                  </button>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link href="mailto:needhelp@elitecons.com">
                needhelp@elitecons.com
              </Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <Link href="tel:666-888-0000">666 888 0000</Link>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link href="#" className="fab fa-twitter"></Link>
              <Link href="#" className="fab fa-facebook-square"></Link>
              <Link href="#" className="fab fa-pinterest-p"></Link>
              <Link href="#" className="fab fa-instagram"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
