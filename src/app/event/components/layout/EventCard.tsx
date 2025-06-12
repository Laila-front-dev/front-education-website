import { Card, type CardProps } from "./Card";

const EventCard = (props: Readonly<CardProps>) => (
  <Card {...props} basePath="event" />
);

export default EventCard;
