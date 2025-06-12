import { Card, type CardProps } from "./Card";

const CourseCard = (props: Readonly<CardProps>) => (
  <Card {...props} basePath="courses" />
);

export default CourseCard;
