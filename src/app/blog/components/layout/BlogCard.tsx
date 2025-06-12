import { Card, type CardProps } from "./Card";

const BlogCard = (props: Readonly<CardProps>) => (
  <Card {...props} basePath="blog" />
);

export default BlogCard;
