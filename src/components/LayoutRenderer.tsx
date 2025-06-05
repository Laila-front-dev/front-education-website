import { PageComponent } from "@/types";
import TopHeader from "./header/TopHeader";
import NavHeader from "./header/NavHeader";
import HeroSection from "./hero/HeroSection";
import CategoriesSection from "./categories/CategoriesSection";
import AboutUsSection from "./about-us/AboutUs";
import ShooseUsSection from "./shooseUs/ShooseUs";
import DescoverSection from "./descover/DescoverSection";
import Statistics from "./statistics/Statistics";
import Testimonial from "./testimonial/Testimonial";
import Subscribe from "./subscribe/Subscribe";
import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";
import FullImage from "./ui/FullImage";
import Overview from "@/app/courses/components/Overview";
import Curriculum from "@/app/courses/components/Curriculum";
import Instructor from "@/app/courses/components/Instructor";
import Faq from "./faq/Faq";
import Contacts from "./contact/Contacts";
import TermsOfService from "./terms-of-service/TermsOfService";
import PrivacyPolicy from "./privacy-policy/PrivacyPolicy";
import Pricing from "./pricing/Pricing";
import Teacher from "./teacher/Teacher";

function renderComponent(component: PageComponent, index: number) {
  switch (component.__component) {
    case "layout.top-header":
      return <TopHeader {...component} key={index} />;
    case "layout.nav-header":
      return <NavHeader {...component} key={index} />;
    case "blocks.hero-section":
      return <HeroSection {...component} key={index} />;
    case "blocks.categories":
      return <CategoriesSection {...component} key={index} />;
    case "blocks.about-us":
      return <AboutUsSection {...component} key={index} />;
    case "blocks.teacher":
      return <Teacher {...component} key={index} />;
    case "blocks.choose-us":
      return <ShooseUsSection {...component} key={index} />;
    case "blocks.statistics":
      return <Statistics {...component} key={index} />;
    case "blocks.testimonial":
      return <Testimonial {...component} key={index} />;
    case "blocks.coose-your-carrer":
      return <DescoverSection {...component} key={index} />;
    case "blocks.subscribe":
      return <Subscribe {...component} key={index} />;
    case "blocks.contact":
      return <Contacts {...component} key={index} />;
    case "blocks.faq":
      return <Faq {...component} key={index} />;
    case "blocks.heading":
      return <Heading {...component} key={index} />;
    case "blocks.paragraph":
      return <Paragraph {...component} key={index} />;
    case "blocks.full-image":
      return <FullImage {...component} key={index} />;
    case "blocks.overview":
      return <Overview {...component} key={index} />;
    case "blocks.curriculum":
      return <Curriculum {...component} key={index} />;
    case "blocks.instructor":
      return <Instructor {...component} key={index} />;
    case "blocks.terms-of-service":
      return <TermsOfService {...component} key={index} />;
    case "blocks.privacy-policy":
      return <PrivacyPolicy {...component} key={index} />;
    case "blocks.pricing":
      return <Pricing {...component} key={index} />;
    // case "blocks.event":
    //   return <Event {...component} key={index} />;

    default:
      return null;
  }
}

export function RenderComponent({
  components,
}: {
  components: PageComponent[];
}) {
  return components.map((components, index) =>
    renderComponent(components, index)
  );
}
