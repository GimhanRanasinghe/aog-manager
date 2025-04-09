"use client"
import {
  BarChart as RechartsBarChart,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  Line,
} from "recharts"

interface ChartProps {
  data: any[]
  xField: string
  yField: string
  colors: string[]
  height?: number
}

export function BarChart({ data, xField, yField, colors, height = 300 }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart data={data}>
        <XAxis dataKey={xField} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={yField} fill={colors[0]} />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}

export function LineChart({ data, xField, yField, colors, height = 300 }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLineChart data={data}>
        <XAxis dataKey={xField} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey={yField} stroke={colors[0]} />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}
