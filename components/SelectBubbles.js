import PropTypes from 'prop-types';
import styles from '../styles/component-styles/SelectBubbles.module.scss';

export default function SelectBubbles({ labelName, bubbles }) {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{labelName}</div>
      <div className={styles.row}>
        {bubbles.map((item) => (
          <div
            key={item.time}
            className={`${styles.bubble} ${
              item.selected ? styles.selected : ''
            }`}
          >
            {item.time}
          </div>
        ))}
      </div>
    </div>
  );
}

SelectBubbles.propTypes = {
  labelName: PropTypes.string.isRequired,
  bubbles: PropTypes.array.isRequired,
};
