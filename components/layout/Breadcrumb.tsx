import Link from "next/link";

interface BreadcrumbProps {
  breadcrumbTitle: string;
  breadcrumbDescription: string;
}

export default function Breadcrumb({ breadcrumbTitle, breadcrumbDescription }: BreadcrumbProps) {
  return (
    <>
      {/*Page Header Start*/}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/page-header-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>{breadcrumbTitle}</h2>
            <p>{breadcrumbDescription}</p>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*Page Header End*/}
    </>
  );
}
