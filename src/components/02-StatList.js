import PropTypes from 'prop-types';

const StatList = ({ statsItem }) => {
  return (
    <ul className="stat-list">
      {statsItem.map(item => (
        <li className="item" key={item.id}>
          <span className="label">Label: {item.label} - </span>

          <span className="percentage"> percentage: {item.percentage} %;</span>
        </li>
      ))}
    </ul>
  );
};

export default StatList;

StatList.propTypes = {
  title: PropTypes.string,
  statsItem: PropTypes.array,
  label: PropTypes.array,
  id: PropTypes.array,
  percentage: PropTypes.number,
};
