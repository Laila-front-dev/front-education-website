export interface ContactInfoProps {
  id: number;
  text: string;
  image: ImageProps;
}

export interface NavbarProps {
  id: number;
  text: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialMediaProps {
  id: number;
  href: string;
  isExternal?: boolean;
  image: ImageProps;
}

export interface LogoProps {
  id: number;
  href: string;
  image: ImageProps;
}

export interface ImageProps {
  id: number;
  dodocumentId?: string;
  url: string;
  alternativeText?: string;
}

export interface CtaProps {
  id: number;
  theme: "purple" | "orange";
  text: string;
  href: string;
  isExternal?: boolean;
}

export interface IconProps {
  id: number;
  // text: string;
  image: ImageProps;
}
export interface NameCategoriesProps {
  id: number;
  text: string;
  image: ImageProps;
}
export interface ContentProps {
  id: number;
  title: string;
  description: string;
}
export interface DiscoverProps {
  id: number;
  text: string;
  paragraph: string;
  image: ImageProps;
  cta: CtaProps;
}

export interface StatisticsProps {
  id: number;
  number: string;
  text: string;
  icon: ImageProps;
}

export interface TestimonialProps {
  id: number;
  text: string;
  heading: string;
  paragraph: string;
}

type ComponentType =
  | "layout.top-header"
  | "layout.nav-header"
  | "blocks.hero-section"
  | "blocks.categories"
  | "blocks.about-us"
  | "blocks.teacher"
  | "blocks.choose-us"
  | "blocks.statistics"
  | "blocks.testimonial"
  | "blocks.coose-your-carrer"
  | "blocks.subscribe"
  | "blocks.contact"
  | "blocks.faq"
  | "blocks.event"
  | "blocks.heading"
  | "blocks.paragraph"
  | "blocks.full-image"
  | "blocks.overview"
  | "blocks.curriculum"
  | "blocks.instructor"
  | "blocks.terms-of-service"
  | "blocks.privacy-policy"
  | "blocks.pricing";

interface Base<
  T extends ComponentType,
  D extends object = Record<string, unknown>
> {
  id: number;
  __component?: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
}

export type PageComponent =
  | TopHeaderLayout
  | NavHeaderLayout
  | HeroSectionLayout
  | CategoriesLayout
  | AboutUsLayout
  | TeacherLayout
  | ShooseUsLayout
  | StatisticsLayout
  | TestimonialLayout
  | OurInstructorLayout
  | SubscribeLayout
  | ContactLayout
  | FaqLayout
  | EventLayout
  | HeadingProps
  | ParagraphProps
  | FullImageProps
  | OverviewProps
  | CurriculumProps
  | InstructorProps
  | TermsOfServiceLayout
  | PrivacyPolicyLayout
  | PricingLayout;

export interface TopHeaderLayout extends Base<"layout.top-header"> {
  id: number;
  contactInfo: ContactInfoProps[];
  socialMedia: SocialMediaProps[];
}

export interface NavHeaderLayout extends Base<"layout.nav-header"> {
  id: number;
  logo: LogoProps;
  navbar: NavbarProps[];
  cta: CtaProps;
}

export interface HeroSectionLayout extends Base<"blocks.hero-section"> {
  id: number;
  text: string;
  heading: string;
  paragraph: string;
  image: ImageProps;
  cta: CtaProps;
  background: ImageProps;
}

export interface CategoriesLayout extends Base<"blocks.categories"> {
  id: number;
  text: string;
  heading: string;
  nameCategories: NameCategoriesProps[];
}

export interface AboutUsLayout extends Base<"blocks.about-us"> {
  id: number;
  theme: "yellow" | "orange";
  text: string;
  heading: string;
  paragraph: string;
  number: string;
  years: string;
  cta: CtaProps;
  image: ImageProps[];
  content: ContentProps[];
}

interface TeacherProps {
  id: number;
  heading: string;
  text: string;
  image: ImageProps;
}

export interface TeacherLayout extends Base<"blocks.teacher"> {
  id: number;
  teacher: TeacherProps[];
}

export interface ShooseUsLayout extends Base<"blocks.choose-us"> {
  id: number;
  text: string;
  heading: string;
  paragraph: string;
  image: ImageProps;
  content: ContentProps[];
}

export interface StatisticsLayout extends Base<"blocks.statistics"> {
  id: number;
  Statistics: StatisticsProps[];
}

export interface TestimonialLayout extends Base<"blocks.testimonial"> {
  id: number;
  text: string;
  heading: string;
  testimonial: TestimonialProps[];
}

export interface OurInstructorLayout extends Base<"blocks.coose-your-carrer"> {
  id: number;
  text: string;
  heading: string;
  discover: DiscoverProps[];
}

export interface SubscribeLayout extends Base<"blocks.subscribe"> {
  heading: string;
  paragraph: string;
  placeholder: string;
  buttonText: string;
}

export interface ContactProps {
  id: number;
  text: string;
  heading: string;
  image: ImageProps;
}

export interface ContactLayout extends Base<"blocks.contact"> {
  id: number;
  text: string;
  heading: string;
  contact: ContactProps[];
}

export interface FaqProps {
  id: number;
  question: string;
  answer: string;
}

export interface FaqLayout extends Base<"blocks.faq"> {
  questions: FaqProps[];
}

export interface TermsOfServiceLayout extends Base<"blocks.terms-of-service"> {
  id: number;
  text: string;
}

export interface PrivacyPolicyLayout extends Base<"blocks.privacy-policy"> {
  id: number;
  text: string;
}

interface ListProps {
  id: number;
  text: string;
}

interface priceListProps {
  id: number;
  heading: string;
  price: string;
  list: ListProps[];
  cta: CtaProps;
}

export interface PricingLayout extends Base<"blocks.pricing"> {
  id: number;
  priceList: priceListProps[];
}

export interface EventLayout extends Base<"blocks.event"> {
  id: number;
  text: {
    span: string;
  };
  title: {
    heading: string;
  };
}

export interface ArticleProps {
  id: number;
  documentId?: string;
  title: string;
  description: string;
  slug: string;
  image: ImageProps;
  author: string;
  featured: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  basePath?: string;
  skillsTags?: Array<{ id: string; name: string }>;
}

export interface ArticledetailsProps {
  title: string;
  description: string;
  image: ImageProps;
}

export interface HeadingProps extends Base<"blocks.heading"> {
  id: number;
  heading: string;
}

export interface ParagraphProps extends Base<"blocks.paragraph"> {
  id: number;
  content: string;
}

export interface FullImageProps extends Base<"blocks.full-image"> {
  id: number;
  image: ImageProps;
}

export interface OverviewProps extends Base<"blocks.overview"> {
  overview: string;
  id: number;
}

export interface CurriculumProps extends Base<"blocks.curriculum"> {
  curriculum: string;
  id: number;
}

export interface InstructorProps extends Base<"blocks.instructor"> {
  instructor: string;
}

export interface CoursedetailsProps {
  id: number;
  documentId?: string;
  title: string;
  description: string;
  image: ImageProps;
  lesson: string;
  hours: string;
  price?: string;
  startDate?: string;
  enrolled?: string;
  lectures?: string;
  skillLevel?: string;
  classNameDay?: string;
  language?: string;
  students?: string;
  overviews: OverviewProps;
  curriculums: CurriculumProps;
  instructors: InstructorProps;
  basePath?: string;
}

export interface EventProps {
  id?: number;
  documentId?: string;
  title: string;
  description: string;
  slug?: string;
  image: ImageProps;
  featured?: boolean;
  basePath?: string;
  location: string;
  hours: string;
  date: string;
  time?: string;
}
