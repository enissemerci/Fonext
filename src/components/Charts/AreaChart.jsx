import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { socialMediasData } from '../../API/data';

const socialMediaData = {
  linkedin: socialMediasData.find(data => data.platform === "linkedin").social.posts,
  twitter: socialMediasData.find(data => data.platform === "twitter").social.posts,
  instagram: socialMediasData.find(data => data.platform === "instagram").social.posts,
  facebook: socialMediasData.find(data => data.platform === "facebook").social.posts
};

const generatePostData = () => {
  const postLikes = [];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  months.forEach((month, index) => {
    postLikes.push({
      name: month,
      instagram: socialMediaData.instagram.length + ((index % 2 === 0) ? 1 : -2),
      twitter: socialMediaData.twitter.length + ((index % 2 === 0) ? -2 : 2),
      linkedin: socialMediaData.linkedin.length + ((index % 2 === 0) ? 3 : -4),
      facebook: socialMediaData.facebook.length + ((index % 2 === 0) ? -1 : 5)
    });
  });

  return postLikes;
};

function AreaChartComponent() {
  const postLikes = generatePostData();

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={postLikes}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {Object.keys(socialMediaData).map((platform, index) => (
          <Area
            key={index}
            type="monotone"
            dataKey={platform}
            stroke={getStrokeColor(platform)}
            fill={getFillColor(platform)}
            stackId="1"
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}

function getStrokeColor(platform) {
  switch (platform) {
    case 'instagram':
      return '#EF4123';
    case 'twitter':
      return '#333333';
    case 'linkedin':
      return '#5EBCD8';
    case 'facebook':
      return '#008cba';
    default:
      return '#000000';
  }
}

function getFillColor(platform) {
  switch (platform) {
    case 'instagram':
      return '#EF4123';
    case 'twitter':
      return '#333333';
    case 'linkedin':
      return '#5EBCD8';
    case 'facebook':
      return '#008cba';
    default:
      return '#000000';
  }
}

export default AreaChartComponent;
