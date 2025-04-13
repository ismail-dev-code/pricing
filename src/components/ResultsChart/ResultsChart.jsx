import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultsData = [
    {
      id: 1,
      name: "ismail hossain",
      math: 85,
      english: 78,
      science: 91
    },
    {
      id: 2,
      name: "hafiz al asad",
      math: 72,
      english: 80,
      science: 67
    },
    {
      id: 3,
      name: "Jumur Akter",
      math: 93,
      english: 88,
      science: 95
    },
    {
      id: 4,
      name: "yeasin shamim",
      math: 64,
      english: 70,
      science: 59
    },
    {
      id: 5,
      name: "Nusrat Jahan",
      math: 89,
      english: 92,
      science: 87
    }
  ];
  

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultsData}> 
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={'science'}></YAxis>
            <Line dataKey={'english'}></Line>
            <Line dataKey={'math'} stroke='red'></Line>
           

            </LineChart>
        </div> 
    );
};

export default ResultsChart;