"use client";

import moment from "moment";
import React from "react";
import { useDrag } from "react-dnd";

const DraggableEvent = ({ event, hour, day, onDrop, newStart, newEnd }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "EVENT",
    item: {
      type: "EVENT",
      event,
      start: newStart,
      end: newEnd,
    },
  });

  return (
    <div
      ref={drag}
      className={`draggable-event ${
        isDragging ? "dragging" : ""
      } cursor-move p-2 h-full`}
    >
      <div className="border-[2px] border-[#FDEEE9] p-3 h-full w-full rounded-3xl bg-white">
        <p className="text-xs">
          {hour}:00 - {hour + 1}:00
        </p>
        <h5 className="font-semibold text-sm my-2">{event.title}</h5>{" "}
        <p className="text-xs">
          Online
        </p>
      </div>
    </div>
  );
};

// const DraggableEvent = ({ event, hour, day, onDrop }) => {
//   const [{ isDragging }, drag] = useDrag({
//     type: "EVENT",
//     item: { event },
//     end: (item, monitor) => {
//       const dropResult = monitor.getDropResult();
//       if (item && dropResult) {
//         onDrop({
//           event: item.event,
//           start: item.event.start.clone().set({ hour, date: day }),
//           end: item.event.end.clone().set({ hour, date: day }),
//         });
//       }
//     },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   return (
//     <div
//       ref={drag}
//       className={`draggable-event ${isDragging ? "dragging" : ""}`}
//       style={{
//         cursor: isDragging ? "move" : "grab",
//         position: "absolute",
//         /* Add any other styling needed for the event */
//       }}
//     >
//       {/* Render your event content here */}
//       {`Event ${hour}:00 - ${hour + 1}:00`}
//     </div>
//   );
// };

export default DraggableEvent;
