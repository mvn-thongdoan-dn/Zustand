import React from 'react';
import shallow from 'zustand/shallow';
import bearStore from '../../store/bearStore';
import countStore from '../../store/countStore';

const Counter = () => {
  const { count, incre, decre } = countStore((state) => ({
    count: state.count,
    incre: state.incre,
    decre: state.decre
  }), shallow);

  const { bear, increBear } = bearStore((state) => ({
    bear: state.bear,
    increBear: state.increBear,
  }))

  return (
    <>
    <div className='counter'>
      <h1 className='counter-title'>Zustand Counter:</h1>
      <div className="btn-group">
        <button onClick={() => incre("incre")} className='btn btn-primary'>Increase</button>
        <button className='btn btn-warning'>{count}</button>
        <button onClick={() => decre("decre")} className='btn btn-danger'>Decrease</button>
      </div>
    </div>
    <div className='counter'>
      <h1 className='counter-title'>Zustand Bear:</h1>
      <div className="btn-group">
        <button onClick={() => increBear("incre")} className='btn btn-primary'>Increase Bear</button>
        <button className='btn btn-warning'>{bear}</button>
      </div>
    </div>
    </>
  )
}

export default Counter;
