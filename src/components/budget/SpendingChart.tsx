import { PieChart, Pie, Cell } from "recharts"

interface SpendingChartProps {
  chartData: { name: string; amount: number; color: string }[]
  totalRemaining: number
  totalBudget: number
}

const SpendingChart = ({ chartData, totalRemaining, totalBudget }: SpendingChartProps) => {
  return (
    <div className="flex justify-center relative w-64 h-64 items-center mx-auto">
      <PieChart width={280} height={280}>
        <Pie
          data={chartData}
          dataKey="amount"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          startAngle={90}
          endAngle={450}
        >
          {chartData.map((item, index) => (
            <Cell key={`cell-${index}`} fill={item.color} />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-2xl font-bold">${totalRemaining.toFixed(0)}</div>
        <div className="text-sm text-gray-500">of ${totalBudget} limit</div>
      </div>
    </div>
  )
}

export default SpendingChart
