'use client';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./globalRedux/store";
import { decrement, increment, incrementByAmount } from "./globalRedux/features/counter/counterSlice";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main>
      <div>
        <button
          onClick={() => dispatch(increment())}
        >Increment</button>
      </div>
      <div>
        <span>{count}</span>
      </div>
      <div>
        <button
          onClick={() => dispatch(decrement())}
        >Decrement</button>
      </div>
      <div>
        <button
          onClick={() => dispatch(incrementByAmount(2))}
        >Increment by 2</button>
      </div>
    </main>
  );
}
