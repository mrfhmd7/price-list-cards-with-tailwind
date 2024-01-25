import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

     const markArray = [
          { "id": 1, "name": "Student1", "phy": 85, "chem": 75, "math": 92 },
          { "id": 2, "name": "Student2", "phy": 78, "chem": 90, "math": 88 },
          { "id": 3, "name": "Student3", "phy": 92, "chem": 82, "math": 95 },
          { "id": 4, "name": "Student4", "phy": 70, "chem": 88, "math": 78 },
          { "id": 5, "name": "Student5", "phy": 96, "chem": 94, "math": 80 },
          { "id": 6, "name": "Student6", "phy": 82, "chem": 76, "math": 98 },
          { "id": 7, "name": "Student7", "phy": 88, "chem": 80, "math": 91 },
          { "id": 8, "name": "Student8", "phy": 75, "chem": 85, "math": 89 },
          { "id": 9, "name": "Student9", "phy": 94, "chem": 92, "math": 76 },
          { "id": 10, "name": "Student10", "phy": 80, "chem": 78, "math": 87 },
          { "id": 11, "name": "Student11", "phy": 89, "chem": 96, "math": 84 },
          { "id": 12, "name": "Student12", "phy": 72, "chem": 98, "math": 93 }
     ]

     return (
          <div className='mt-10'>
               <LineChart
                    width={1000}
                    height={700}
                    data={markArray}
               >
                    <XAxis dataKey="name" />
                    <YAxis />
                    {/* <Legend/> */}
                    <Tooltip />
                    <Line type="monotone" stroke="#8884d8" dataKey="phy"></Line>
                    <Line type="monotone" dataKey="chem"></Line>
                    <Line type="monotone" stroke="#82ca9d" dataKey="math"></Line>
               </LineChart>
          </div>
     );
};

export default Dashboard;