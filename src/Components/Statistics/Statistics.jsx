import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Statistics = () => {

const marks = [
  {
    name: "Assinment-1",
    mark: 60,
  },
  {
    name: "Assinment-2",
    mark: 58,
  },
  {
    name: "Assinment-3",
    mark: 60,
  },
  {
    name: "Assinment-4",
    mark: 53,
  },
  {
    name: "Assinment-5",
    mark: 55,
  },
  {
    name: "Assinment-6",
    mark:58,
  },
  {
    name: "Asinment-7",
    mark: 60,
  },
  ];

  return (
    <div className="bg-pink-100 w-5/6 mx-auto my-16 p-6">

      <AreaChart
        width={1100}
        height={400}
        data={marks}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
}

export default Statistics