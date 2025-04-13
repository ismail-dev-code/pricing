import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';


const MarksChart = ({marksPromise}) => {
   const marksDataRes = use(marksPromise)
   const marksData = marksDataRes.data;

//    data processing for the chart 
const marksChartData = marksData.map(studentData=>{
    const student = {
        id: studentData.id,
        name: studentData.name,
        math: studentData.marks.math,
        english: studentData.marks.english,
        computer: studentData.marks.computer,
    }

    const avg = (student.math+ student.english+student.computer)/3;
    student.avg = avg;
    return student;
})



    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Bar dataKey='avg' fill='yellow'></Bar>
                <Bar dataKey='english' fill='blue'></Bar>

            </BarChart>
        </div>
    );
};

export default MarksChart;