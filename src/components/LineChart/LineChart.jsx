import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentData = [
        { id: 1, name: "John Smith", math: 95, physics: 88, chemistry: 92 },
        { id: 2, name: "Emily Johnson", math: 75, physics: 80, chemistry: 89 },
        { id: 3, name: "Michael Davis", math: 82, physics: 76, chemistry: 90 },
        { id: 4, name: "Sarah Wilson", math: 88, physics: 92, chemistry: 85 },
        { id: 5, name: "David Brown", math: 72, physics: 85, chemistry: 76 },
        { id: 6, name: "Emma Lee", math: 90, physics: 78, chemistry: 85 },
        { id: 7, name: "Olivia Taylor", math: 95, physics: 92, chemistry: 88 },
        { id: 8, name: "Daniel Anderson", math: 68, physics: 75, chemistry: 72 },
        { id: 9, name: "Sophia Clark", math: 84, physics: 92, chemistry: 88 },
        { id: 10, name: "Ethan Garcia", math: 75, physics: 78, chemistry: 80 },
      ];

    return (
        <div>
            <LChart width={800} height={400} data={studentData 
            }><XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={'physics'} stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;