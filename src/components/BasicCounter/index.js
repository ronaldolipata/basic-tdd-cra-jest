import { useState } from 'react';
import style from './style.module.css';

const BasicCounter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue ?? 0);

  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const remove = () => {
    setCount((prevCount) => {
      const result = prevCount - 1;
      if (result < 0) {
        return 0;
      }

      return result;
    });
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Basic Counter</h1>
      <div className={style.subContainer}>
        <button className={style.button} onClick={remove} type='button'>
          Remove
        </button>
        <span className={style.count}>{count}</span>
        <button className={style.button} onClick={add} type='button'>
          Add
        </button>
      </div>
    </div>
  );
};

export default BasicCounter;
