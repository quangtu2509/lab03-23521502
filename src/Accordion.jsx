// src/Accordion.jsx
import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Accordion (Lifted State)</h2>

      <Panel
        title="Panel 1 (About)"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Đây là nội dung cho panel đầu tiên.
      </Panel>

      <Panel
        title="Panel 2 (Contact)"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Đây là nội dung cho panel thứ hai.
      </Panel>
    </>
  );
}
