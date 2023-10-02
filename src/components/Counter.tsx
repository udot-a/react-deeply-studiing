import React, { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrementPress = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1 className={classes.h1}>{count}</h1>
      <button onClick={onIncrementPress} className={classes.btn}>increment</button>
    </div>
  );
};
