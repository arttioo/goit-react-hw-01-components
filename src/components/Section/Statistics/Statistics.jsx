import PropTypes from 'prop-types';
import {List,Item} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <List className="stat-list">
        {stats.map(statsEl => (
          <Item className="item" key={statsEl.id}>
            <span className="label">{statsEl.label}</span>
            <span className="percentage">{statsEl.percentage}</span>
          </Item>
        ))}
      </List>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
