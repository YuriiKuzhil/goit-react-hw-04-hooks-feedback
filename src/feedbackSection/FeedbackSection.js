import PropTypes from 'prop-types';
import { Section, Title } from './FeedbackSection.styled';

const FeedbackSection = ({ title, children }) => {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
};
FeedbackSection.protoTypes = {
  children: PropTypes.node.isRequired,
};
export default FeedbackSection;
