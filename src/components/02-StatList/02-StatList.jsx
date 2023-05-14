import PropTypes from 'prop-types';
import css from 'components/02-StatList/02-StatList.module.css';

const StatList = ({ statsItem }) => {
  return (
    <ul className={css.statList}>
      {statsItem.map(item => (
        <li className={css.item} key={item.id}>
          <span className={css.label}> {item.label} - </span>

          <span className={css.percentage}> {item.percentage} %;</span>
        </li>
      ))}
    </ul>
  );
};

export default StatList;

StatList.propTypes = {
  statsItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
