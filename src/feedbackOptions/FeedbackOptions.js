import PropTypes from 'prop-types';
import { ButtonsContainer, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsContainer>
      {options.map(option => (
        <Button
          type="button"
          onClick={() => onLeaveFeedback(option)}
          key={option}
        >
          {option[0].toUpperCase() + option.slice(1)}
        </Button>
      ))}
    </ButtonsContainer>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
