import React from "react";
import EventItem from "./event-item";

const EventList = (props) => {
  const { item } = props;
  return (
    <ul>
      {items.map((event, key) => (
        <EventItem key={key} />
      ))}
    </ul>
  );
};

export default EventList;
