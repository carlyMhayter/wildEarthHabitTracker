import PropTypes from 'prop-types';
import styles from '../styles/component-styles/PageComponent.module.scss';

export default function PageComponent({ footer, children, header }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{header}</div>
      <div className={styles.children}> {children}</div>
      <div className={styles.footer}> {footer}</div>
    </div>
  );
}

PageComponent.propTypes = {
  header: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  footer: PropTypes.object.isRequired,
};
