// src/Counter.jsx

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // 3. Tạo một hàm xử lý sự kiện
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Simple Counter</h2>
      <p>Current count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
