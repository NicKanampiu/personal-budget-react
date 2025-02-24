import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart(props) {
    const data = props.data.data.myBudget;

    const chartData = {
        labels: data.map(item => item.title),
        datasets: [
            {
                data: data.map(item => item.budget),
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                    "#FF9F40",
                    "#FF6384"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                    "#FF9F40",
                    "#FF6384"
                ]
            }
        ]
    };

    return (
        <div className="PieChart">
            <Pie data={chartData} />
        </div>
    );
}

export default PieChart;