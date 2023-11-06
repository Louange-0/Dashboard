import React,{PureComponent} from 'react'
import { BarChart, Bar} from 'recharts';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer,
  } from 'recharts';
  
  const graph = [
    { name: 'Jan', uv: getRandomValue(), pv: getRandomValue() },
    { name: 'Feb', uv: getRandomValue(), pv: getRandomValue() },
    { name: 'Mar', uv: getRandomValue(), pv: getRandomValue() },
    { name: 'Apr', uv: getRandomValue(), pv: getRandomValue() },
    { name: 'May', uv: getRandomValue(), pv: getRandomValue() },
    { name: 'Jun', uv: getRandomValue(), pv: getRandomValue() },
    { name: 'Jul', uv: getRandomValue(), pv: getRandomValue() },
    { name: 'Aug', uv: getRandomValue(), pv: getRandomValue() },
    { name: 'Sep', uv: getRandomValue(), pv: getRandomValue() },
    { name: 'Oct', uv: getRandomValue(), pv: getRandomValue() },
    { name: 'Nov', uv: getRandomValue(), pv: getRandomValue() },
    { name: 'Dec', uv: getRandomValue(), pv: getRandomValue() },
  ];
  
  function getRandomValue() {
    return Math.floor(Math.random() * 5000) + 1000; // Generates a random number between 1000 and 6000
  }
  
  

const b = [
    
        { name: 'M', uv: getRandomValue(), pv: getRandomValue() },
        { name: 'T', uv: getRandomValue(), pv: getRandomValue() },
        { name: 'W', uv: getRandomValue(), pv: getRandomValue() },
        { name: 'T', uv: getRandomValue(), pv: getRandomValue() },
        { name: 'F', uv: getRandomValue(), pv: getRandomValue() },
        { name: 'S', uv: getRandomValue(), pv: getRandomValue() },
   
        
  ];
  const c = [
    { name: 'M', uv: getRandomValue(), pv: getRandomValue() },
        { name: 'T', uv: getRandomValue(), pv: getRandomValue() },
        { name: 'W', uv: getRandomValue(), pv: getRandomValue() },
        { name: 'T', uv: getRandomValue(), pv: getRandomValue() },
        { name: 'F', uv: getRandomValue(), pv: getRandomValue() },
        { name: 'S', uv: getRandomValue(), pv: getRandomValue() },
  ];
  const data = [
    { name: 'M', uv: getRandomValue(), pv: getRandomValue() },
        { name: 'T', uv: getRandomValue(), pv: getRandomValue() },
        { name: 'W', uv: getRandomValue(), pv: getRandomValue() },
        { name: 'T', uv: getRandomValue(), pv: getRandomValue() },
        { name: 'F', uv: getRandomValue(), pv: getRandomValue() },
        { name: 'S', uv: getRandomValue(), pv: getRandomValue() },
  ];
  
  
function Graph() {
  return (
    <div className='flex gap-4'>
    <ResponsiveContainer className='absolute top-[640px] left-10' width="20%" height="15%">
  <BarChart width={50} height={40} data={data} margin={{ top: 10, right: 0, left: 0, bottom: 10 }}>
    <XAxis dataKey="name" axisLine={false} tick={{ dy: 10 }} />
    <Bar dataKey="uv" fill="orange" radius={[4, 4, 0, 0]} barSize={60} />
  </BarChart>
</ResponsiveContainer>
<ResponsiveContainer className='absolute top-[640px] left-[255px]' width="20%" height="15%">
  <BarChart width={50} height={40} data={b} margin={{ top: 10, right: 0, left: 0, bottom: 10 }}>
    <XAxis dataKey="name" axisLine={false} tick={{ dy: 10 }} />
    <Bar dataKey="uv" fill="pink" radius={[4, 4, 0, 0]} barSize={60} />
  </BarChart>
</ResponsiveContainer>
<ResponsiveContainer className='absolute top-[640px] left-[470px]' width="20%" height="15%">
  <BarChart width={50} height={40} data={c} margin={{ top: 10, right: 0, left: 0, bottom: 10 }}>
    <XAxis dataKey="name" axisLine={false} tick={{ dy: 10 }} />
    <Bar dataKey="uv" fill="skyblue" radius={[4, 4, 0, 0]} barSize={60} />
  </BarChart>
</ResponsiveContainer>
<ResponsiveContainer className='absolute top-[340px] left-[10px]' width="100%" height={180}>
          <AreaChart
            width={500}
            height={200}
            data={graph}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            
            <XAxis dataKey="name" />
            <YAxis tick={{ dx: -10 }} axisLine={false}/>
           
            
            <Area type="monotone" dataKey="pv" stroke="skyblue" fill="#9C9C9C" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
<div className='bg-gray-800 grid  justify-center p-2 aspect-square h-[200px] rounded-2xl'>
      <b>Activity Level</b>             
</div>
<div className='bg-gray-800 grid  justify-center p-2 aspect-square h-[200px] rounded-2xl'>
            <b>Nutrition</b>    
</div>
<div className='bg-gray-800 grid  justify-center p-2 aspect-square h-[200px] rounded-2xl'>
                 <b>Hydration Level</b>  
</div>

    </div>
  )
}

export default Graph