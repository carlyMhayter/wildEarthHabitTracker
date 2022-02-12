import Image from "next/image";

export default function Footer(props) {
  const { nextButton } = props;
  return (
    <footer className="footer-container">
      {/* either display home footer */}
      {!nextButton && (
        <div className="footer-normal-container">
          <div className="footer-container-img-container selected-footer-container">
            <div className="footer-container-img-house-container">
              <Image src="/home.svg" alt="house-icon" layout="fill" />
            </div>
          </div>
          <div div className="footer-container-img-container add-img-container">
            <div className="footer-container-img-add-container">
              <Image src="/addButton.svg" alt="add-icon" layout="fill" />
            </div>
          </div>
          <div div className="footer-container-img-container">
            <div className="footer-container-img-stats-container">
              <Image src="/stats.svg" alt="stats-icon" layout="fill" />
            </div>
          </div>
        </div>
      )}
      {/* or display next button */}
      {nextButton && <button>Next</button>}
    </footer>
  );
}
