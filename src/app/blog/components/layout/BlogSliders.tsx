import { BlogSlider, type BlogSliderProps } from "../BlogSlider";
const BlogSliders = (props: Readonly<BlogSliderProps>) => (
  <BlogSlider {...props} basePath="blog" />
);
export default BlogSliders;
