import PropTypes from 'prop-types';
import StatList from './02-StatList.js';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title"> {title} </h2>
      <StatList statsItem={stats} />
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.array,
};
