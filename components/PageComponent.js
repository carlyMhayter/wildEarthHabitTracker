import PropTypes from 'prop-types';

export default function PageComponent({ footer, children, header }) {
  return (
    <div className="page-component-container">
      <div className="header-container">{header}</div>
      <div className="children-container"> {children}</div>
      <div className="footer-component-container"> {footer}</div>
    </div>
  );
}

PageComponent.propTypes = {
  header: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  footer: PropTypes.object.isRequired,
};
