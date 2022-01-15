import { useState } from 'react';
import FeedbackSection from './feedbackSection';
import FeedbackOptions from './feedbackOptions';
import Statistics from './statistics';

export default function App() {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGoodFeedback(state => state + 1);
        break;
      case 'neutral':
        setNeutralFeedback(state => state + 1);
        break;
      case 'bad':
        setBadFeedback(state => state + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const positiveFeedbackPercentage = () => {
    const totalFeedbacks = countTotalFeedback();
    return Math.floor((good / totalFeedbacks) * 100);
  };

  const kindOfFeedbacks = ['good', 'neutral', 'bad'];
  return (
    <FeedbackSection title="Please leave feedback">
      <FeedbackOptions
        options={kindOfFeedbacks}
        onLeaveFeedback={onLeaveFeedback}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={positiveFeedbackPercentage()}
      />
    </FeedbackSection>
  );
}
