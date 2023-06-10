import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Statistics from 'components/Statistics/Statistics';

const Section = props => {
    // console.log([props]);
    const {
        title,
        // good,
        // neutral,
        // bad,
        data,
        options,
        onLeaveFeedback,
        totalFeedback,
        positiveFeedback,
    } = props;
    return (
        <>
            <h2>{title}</h2>
            <FeedbackOptions
                options={options}
                onLeaveFeedback={onLeaveFeedback}
            />
            {!totalFeedback() > 0 ? (
                <Notification message="There is no feedback" />
            ) : (
                <Statistics
                    // options={options}
                    // good={good}
                    // neutral={neutral}
                    // bad={bad}
                    data={data}
                    options={options}
                    totalFeedback={totalFeedback}
                    positivePercentage={positiveFeedback}
                />
            )}
        </>
    );
};

export default Section;
