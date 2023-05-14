import PropTypes from 'prop-types';
import StatList from 'components/02-StatList/02-StatList.jsx';
import css from 'components/02-Statistic/02-Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}> {title} </h2>}
      <StatList statsItem={stats} />
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
};
