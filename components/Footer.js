import Image from "next/image";
import Link from "next/link";

export default function Footer(props) {
  const { nextButton } = props;
  return (
    <footer className="footer-container">
      {/* either display home footer */}
      {!nextButton && (
        <div className="footer-buttons-container">
          <Link href="/">
            <div className="footer-container-img-container selected-footer-container">
              <button className="footer-container-img-house-container">
                <Image src="/home.svg" alt="house-icon" layout="fill" />
              </button>
            </div>
          </Link>
          <Link href="/Page5">
            <div className="footer-container-img-container add-img-container">
              <button className="footer-container-img-add-container">
                <Image src="/addButton.svg" alt="add-icon" layout="fill" />
              </button>
            </div>
          </Link>
          <div div className="footer-container-img-container">
            <button className="footer-container-img-stats-container">
              <Image src="/stats.svg" alt="stats-icon" layout="fill" />
            </button>
          </div>
        </div>
      )}
      {/* or display next button */}
      {nextButton && <button>Next</button>}
    </footer>
  );
}
