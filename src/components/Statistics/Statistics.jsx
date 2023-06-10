const Statistics = props => {
    // console.log(props);
    const { data, options, totalFeedback, positivePercentage } = props;
    return (
        <div>
            <ul>
                {options.map((option, idx) => (
                    <li key={option}>
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
            {/* {console.log(totalFeedback())}   */}
            {totalFeedback() > 0 && (
                <p>Good feedback: {positivePercentage()}%</p>
            )}
        </div>
    );
};
export default Statistics;
