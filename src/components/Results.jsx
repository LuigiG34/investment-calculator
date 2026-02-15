import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
    let dataForTable = calculateInvestmentResults(input);

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {dataForTable.map(row => {
                    let totalInterest = row.valueEndOfYear - (row.annualInvestment * row.year) - input.initialInvestment;
                    let totalAmountInvested = row.valueEndOfYear - totalInterest;

                    return (
                        <tr key={row.year}>
                            <td>{row.year}</td>
                            <td>{formatter.format(row.valueEndOfYear)}</td>
                            <td>{formatter.format(row.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}