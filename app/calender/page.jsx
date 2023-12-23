"use client";
// src/CalendarGrid.js
import React, { useState } from "react";
import Dashboard from "../_components/dashboard/dashboard";

import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableEvent from "../_components/draggableEvent/draggableEvent"; // Adjust the import path based on your project structure
import moment from "moment";

const CalendarPage = () => {
  // Dummy data for demonstration

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const hours = Array.from({ length: 24 }, (_, index) => index);

  const [currentDate, setCurrentDate] = useState(moment()); // Initial date is the current date

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "UI Task",
      start: moment("2023-12-01 00:50"),
      end: moment("2023-12-01 00:50").add(1, "hours"),
    },
    {
      id: 8,
      title: "Integration",
      start: moment("2023-12-01 00:50"),
      end: moment("2023-12-01 00:50").add(1, "hours"),
    },
    {
      id: 2,
      title: "Coaching Class",
      start: moment("2023-12-03 02:50").add(1, "hours"),
      end: moment("2023-12-03 02:50").add(4, "hours"),
    },
    {
      id: 3,
      title: "Meeting",
      start: moment("2023-12-03 01:50"),
      end: moment("2023-12-03 01:50").add(1, "hours"),
    },
    {
      id: 4,
      title: "Guidance",
      start: moment("2023-12-05T02:50:55.156Z").add(1, "hours"),
      end: moment("2023-12-03T05:50:55.156Z").add(2, "hours"),
    },
    {
      id: 5,
      title: "Semester Review",
      start: moment("2023-12-01T02:50:55.156Z"),
      end: moment("2023-12-01 02:50").add(1, "hours"),
    },
    {
      id: 6,
      title: "Vocublary Class",
      start: moment("2023-12-06T02:50:55.156Z").add(1, "hours"),
      end: moment("2023-12-06T02:50:55.156Z").add(4, "hours"),
    },
  ]);

  const handleDrop = (eventData) => {
    const { event, start, end } = eventData;
    console.log(eventData, " event");
    const updatedEvents = events.map((ev) =>
      ev.id === event.id ? { ...ev, start, end } : ev
    );
    setEvents(updatedEvents);
  };

  const goToPreviousMonth = () => {
    setCurrentDate((prevDate) => prevDate.clone().subtract(1, "month"));
  };

  const goToNextMonth = () => {
    setCurrentDate((prevDate) => prevDate.clone().add(1, "month"));
  };

  const generateDatesForCurrentMonth = () => {
    const numberOfDaysInMonth = currentDate.daysInMonth();
    const datesArray = [];

    for (let day = 1; day <= numberOfDaysInMonth; day++) {
      const date = currentDate.clone().date(day);
      datesArray.push(date);
    }

    return datesArray;
  };

  const datesInCurrentMonth = generateDatesForCurrentMonth();

  console.log(currentDate, "events");
  return (
    <Dashboard
      main={
        <div>
          <div>
            <input
              type="month"
              id="monthYearInput"
              value={currentDate.format("YYYY-MM")}
              onChange={(e) => setCurrentDate(moment(e.target.value))}
              className="text-lg text-orange-500 font-bold p-2 bg-primary"
            />{" "}
          </div>

          <div className="">
            <div className={`flex gap-[4px] `}>
              <div className="min-w-[160px]"></div>
              {datesInCurrentMonth.map((day, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center min-w-[160px]"
                >
                  <label className="text-[14px]">{day.format("dddd")}</label>{" "}
                  <h1 className="text-secondary text-[24px] font-bold">
                    {day.format("DD")}
                  </h1>
                </div>
              ))}
            </div>

            <DndProvider backend={HTML5Backend}>
              <div className="">
                {hours.map((hour) => (
                  <div key={hour} className="flex">
                    <div className="flex justify-center items-center border-2 border-primary min-w-[160px]">{`${hour}:00`}</div>
                    {datesInCurrentMonth.map((day, index) => (
                      <div
                        key={`${day}-${hour}`}
                        className="h-[150px] border-2 border-primary min-w-[160px]"
                      >
                        <DropContainer
                          events={events}
                          onDrop={handleDrop}
                          hour={hour}
                          day={day}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </DndProvider>
          </div>
        </div>
      }
    />
  );
};

const DropContainer = ({ events, onDrop, hour, day, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "EVENT",
    drop: (item, monitor) => {
      console.log(item, "item start", hour, day);
      // const delta = monitor.getDifferenceFromInitialOffset();
      // const left = Math.round(item.start.x + delta.x);
      // const top = Math.round(item.start.y + delta.y);
      // const newHour = calculateNewHour(top);
      // const newDay = calculateNewDay(left);

      onDrop({
        ...item,
        start: day.hour(hour),
        end: day.hour(hour),
      });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });


  return (
    <div
      ref={drop}
      className={`relative ${isOver ? "bg-gray-200" : ""}`}
      style={{ minHeight: "150px", minWidth: "130px" }} // Set the minimum size for the drop container
    >
      {/* {children} */}
      {events
        .filter(
          (event) =>
            event.start.hour() === parseInt(hour) &&
            event.start.format("DD-MM-YYYY") === day.format("DD-MM-YYYY")
        )
        .map((filteredEvent, index) => (
          <DraggableEvent
            key={index}
            event={filteredEvent}
            hour={hour}
            day={day.format("DD")}
            onDrop={onDrop}
            newStart={day.hour(hour)}
            newEnd={day.hour(hour)}
          />
        ))}
    </div>
  );
};

// const DropContainer = ({ onDrop, hour, day, children }) => {
//   const [{ isOver }, drop] = useDrop({
//     accept: "EVENT",
//     drop: (item) => onDrop({ ...item, newHour: hour, newDay: day }),
//     collect: (monitor) => ({
//       isOver: monitor.isOver(),
//     }),
//   });

//   return (
//     <div ref={drop} className={`relative ${isOver ? "bg-gray-200" : ""}`}>
//       {children}
//     </div>
//   );
// };

export default CalendarPage;
