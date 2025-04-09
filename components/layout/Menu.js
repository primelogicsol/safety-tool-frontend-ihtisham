import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      <ul className="main-menu__list">
        <li className="dropdown">
          <Link href="#">Solutions</Link>
          <ul>
            {/* Row 1 - First 4 sections */}
            <li>
              <Link href="/solutions/distribution">Distribution</Link>
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
            </li>
            <li>
              <Link href="/solutions/medical-management">
                Medical Management
              </Link>
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
            </li>
            <li>
              <Link href="/solutions/specialized-safety">
                Specialized Safety Personnel
              </Link>
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
                  <Link href="/solutions/permit-writers">Permit Writers</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/solutions/gas-detection">
                Gas Detection Services
              </Link>
              <ul>
                <li>
                  <Link href="/solutions/gas-detection-equipment">
                    Gas Detection Equipment Rental and Sales
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/gas-detection-inspection">
                    Gas Detection Equipment Inspection, Testing and Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/calibration-services">
                    Calibration Services
                  </Link>
                </li>
              </ul>
            </li>

            {/* Row 2 - Next 4 sections */}
            <li>
              <Link href="/solutions/industrial-communication">
                Industrial Communication
              </Link>
              <ul>
                <li>
                  <Link href="/solutions/radio-equipment">
                    2-way Radio Equipment Rental and Sales
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/communications-testing">
                    Communications Equipment Testing, Repair and Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/motorola-consulting">
                    Motorola Communication Consulting & System Design
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/solutions/fire-protection">Fire Protection</Link>
              <ul>
                <li>
                  <Link href="/solutions/fire-extinguisher">
                    Fixed Systems and Portable Fire Extinguisher Services and
                    Sales
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
            </li>
            <li>
              <Link href="/solutions/turnarounds">Turnarounds</Link>
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
                    Trained On-Site Technicians for Turnaround Safety Support
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/solutions/training">Training</Link>
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
            </li>

            {/* Row 3 - Final 4 sections */}
            <li>
              <Link href="/solutions/compliance">Compliance</Link>
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
            </li>
            <li>
              <Link href="/solutions/fall-protection">Fall Protection</Link>
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
                    Fall Protection Inspections, Testing and Maintenance
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/solutions/safety-solutions">
                Professional Safety Solutions
              </Link>
              <ul>
                <li>
                  <Link href="/solutions/industrial-hygiene">
                    Industrial Hygiene Services/Certified Industrial Hygienist
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
            </li>
            <li>
              <Link href="/solutions/respiratory-protection">
                Respiratory Protection
              </Link>
              <ul>
                <li>
                  <Link href="/solutions/respiratory-equipment">
                    Respiratory Protection Equipment Rental and Sales
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/respiratory-inspection">
                    Respiratory Protection Equipment Inspection, Testing and
                    Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/grade-d-breathing">
                    Grade D Breathing Air Systems
                  </Link>
                </li>
              </ul>
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
