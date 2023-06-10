import styles from './FeedbackOptions.module.css';
// console.log(styles);
const FeedbackOptions = props => {
    const { options, onLeaveFeedback } = props;
    return (
        <div>
            <ul className={styles.list}>
                {options.map(option => (
                    <li key={option}>
                        <button
                            onClick={onLeaveFeedback}
                            className={styles.option__button}
                        >
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedbackOptions;
