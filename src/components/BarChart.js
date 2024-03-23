import {
  ResponsiveContainer,
  BarChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area barSize={75} dataKey="count" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarChartComponent;
