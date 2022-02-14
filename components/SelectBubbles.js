import PropTypes from 'prop-types';
import styles from '../styles/component-styles/SelectBubbles.module.scss';

export default function SelectBubbles({ labelName, bubbles, updater }) {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{labelName}</div>
      <div className={styles.row}>
        {bubbles.map((item, index) => (
          <div
            onClick={() => {
              let newBubbles = bubbles.map((bubble) => {
                return { ...bubble, selected: false };
              });
              newBubbles[index] = { ...item, selected: true };
              updater(newBubbles);
            }}
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
