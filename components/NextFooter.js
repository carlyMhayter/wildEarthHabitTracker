import Link from 'next/link';
import styles from '../styles/component-styles/NextFooter.module.scss';
import PropTypes from 'prop-types';

export default function NextFooter({ habitsList, updateHabits }) {
  const habit = { text: 'Do yoga', count: 0, goal: 1 };

  const handleClick = () => {
    const newList = [...habitsList, habit];
    updateHabits(newList);
  };

  return (
    <footer className={styles.container}>
      <Link href="/">
        <a
          tabIndex={0}
          role="button"
          onClick={handleClick}
          onKeyDown={handleClick}
          className={styles.bubble}
        >
          Next
        </a>
      </Link>
    </footer>
  );
}

NextFooter.propTypes = {
  habitsList: PropTypes.array.isRequired,
  updateHabits: PropTypes.func.isRequired,
};
