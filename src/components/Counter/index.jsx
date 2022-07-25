import React from 'react';
import shallow from 'zustand/shallow';
import { bearStore, useStore } from '../../store/store';

const Counter = () => {
  const { count, incre, decre } = useStore((state) => ({
    count: state.count,
    incre: state.incre,
    decre: state.decre
  }), shallow);

  const { bear, increBear, getState } = bearStore((state) => ({
    bear: state.bear,
    increBear: state.increBear,
    getState: state.getState
  }))

  return (
    <div className='counter'>
      <h1 className='counter-title'>Zustand Counter:</h1>
      <div className="btn-group">
        <button onClick={() => incre("incre")} className='btn btn-primary'>Increase</button>
        <button className='btn btn-warning'>{count}</button>
        <button onClick={() => decre("decre")} className='btn btn-danger'>Decrease</button>
      </div>
      <div className="btn-group" style={{display: "block", margin: "50px auto"}}>
        <button onClick={() => getState()} className='btn btn-primary'>IncreBear</button>
        <button className='btn btn-warning'>{bear}</button>
      </div>
    </div>
  )
}

export default Counter;
