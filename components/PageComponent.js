export default function PageComponent({ footer, children }) {
  return (
    <div className="page-component-container">
      <div className="children-container"> {children}</div>
      <div className="footer-component-container"> {footer}</div>
    </div>
  );
}
