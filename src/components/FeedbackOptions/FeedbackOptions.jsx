const FeedbackOptions = props => {
    const { options, onLeaveFeedback } = props;
    return (
        <div>
            <ul>
                {options.map(option => (
                    <li key={option}>
                        <button onClick={onLeaveFeedback}>{option}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedbackOptions;
