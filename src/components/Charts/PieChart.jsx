import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { socialMediasData } from '../../API/data';

const generatePieData = () => {
  const platforms = ['linkedin', 'twitter', 'instagram', 'facebook'];
  const pieData = platforms.map(platform => {
    const platformData = socialMediasData.find(data => data.platform === platform);
    const totalLikes = platformData ? platformData.social.posts.reduce((acc, cur) => acc + cur.like_count, 0) : 0;
    return { name: platform, value: totalLikes };
  });
  return pieData;
};

const COLORS = ['#5EBCD8', '#333333', '#EF4123', '#008cba'];

function PieChartComponent() {
  const pieData = generatePieData();

  return (
    <ResponsiveContainer width="100%" height={400} className="mb-4">
      <h6 className='mt-4 text-center'>Total Likes</h6>
      <PieChart>
        <Pie
          data={pieData}
          labelLine={true}
          label={({ name }) => `${name}`}
          outerRadius={130}
          fill="#8884d8"
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer >
  );
}

export default PieChartComponent;
