
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const AppChart = ({ data }) => {
  const sortedData = [...data].reverse();

  return (
    <div className="container mx-auto w-full h-75 border-t border-gray-300 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Ratings</h2>

      <ResponsiveContainer width={"100%"} height="80%">
        <BarChart layout="vertical" data={sortedData}>
          {/* X axis (numbers) */}
          <XAxis
            type="number"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />

          {/* Y axis (labels) */}
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            width={60}
          />

          {/* Bars */}
          <Bar
            dataKey="count"
            fill="#f97316" // orange color
            barSize={12}
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppChart;
