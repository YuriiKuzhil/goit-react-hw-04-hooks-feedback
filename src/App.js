import React, { Component } from 'react';
import FeedbackSection from './feedbackSection';
import FeedbackOptions from './feedbackOptions';
import Statistics from './statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const goodFeedbacks = this.state.good;
    const totalFeedbacks = this.countTotalFeedback();
    return Math.floor((goodFeedbacks / totalFeedbacks) * 100);
  };

  render() {
    const totalFeedbacks = this.countTotalFeedback();
    const positiveFeedbacks = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <FeedbackSection title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedbacks}
          positivePercentage={positiveFeedbacks}
        />
      </FeedbackSection>
    );
  }
}
export default App;
