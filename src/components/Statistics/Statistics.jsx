import css from './Statistics.module.css';
const Statistics = props => {
    // console.log(props);
    const { data, options, totalFeedback, positivePercentage } = props;
    return (
        <>
            <ul className={css.statsList}>
                {options.map((option, idx) => (
                    <li className={css.statsListItem} key={option}>
                        {option}: {data[idx]}
                    </li>
                ))}
            </ul>
            {/* <p>
                {options[0]}: {good}
            </p>
            <p>
                {options[1]}: {neutral}
            </p>
            <p>
                {options[2]}: {bad}
            </p> */}
            <p>Total: {totalFeedback()}</p>
            {totalFeedback() > 0 && (
                <p>Good feedback: {positivePercentage()}%</p>
            )}
        </>
    );
};
export default Statistics;
