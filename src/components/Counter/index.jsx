import React from 'react';
import shallow from 'zustand/shallow';
import stores from '../../store/stores';

const Counter = () => {
  const { bear, count, incre, decre, increBear } = stores((state) => ({
    count: state.count,
    bear: state.bear,
    increBear: state.increBear,
    incre: state.incre,
    decre: state.decre
  }), shallow);

  console.log("count", count);
  console.log("bear", bear);

  return (
    <>
    <div className='counter'>
      <h1 className='counter-title'>Zustand Counter:</h1>
      <div className="btn-group">
        <button onClick={incre()} className='btn btn-primary'>Increase</button>
        <button className='btn btn-warning'>{count}</button>
        <button onClick={decre()} className='btn btn-danger'>Decrease</button>
      </div>
    </div>
    <div className='counter'>
      <h1 className='counter-title'>Zustand Bear:</h1>
      <div className="btn-group">
        <button onClick={increBear()} className='btn btn-primary'>Increase Bear</button>
        <button className='btn btn-warning'>{bear}</button>
      </div>
    </div>
    </>
  )
}

export default Counter;
