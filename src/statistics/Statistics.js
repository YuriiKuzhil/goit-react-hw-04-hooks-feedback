import PropTypes from 'prop-types';
import Notification from '../notification';
import {
  StatisticsContainer,
  Title,
  StatisticsList,
  Item,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsContainer>
      <Title>Statistics</Title>
      {total ? (
        <StatisticsList>
          <Item>Good: {good}</Item>
          <Item>Neutral: {neutral}</Item>
          <Item>Bad: {bad}</Item>
          <Item>Total: {total}</Item>
          <Item>Positive feedback: {positivePercentage}%</Item>
        </StatisticsList>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </StatisticsContainer>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
