import React from 'react';
import shallow from 'zustand/shallow';
import useStore from '../../store/store';

const Counter = () => {
  const { count, incre, decre } = useStore((state) => ({
    count: state.count,
    incre: state.incre,
    decre: state.decre
  }), shallow);

  return (
    <div className='counter'>
      <h1 className='counter-title'>Zustand Counter:</h1>
      <div className="btn-group">
        <button onClick={() => incre("incre")} className='btn btn-primary'>Increase</button>
        <button className='btn btn-warning'>{count}</button>
        <button onClick={() => decre("decre")} className='btn btn-danger'>Decrease</button>
      </div>
    </div>
  )
}

export default Counter;
