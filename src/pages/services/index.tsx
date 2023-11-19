import { Container } from "../../components/container";
import { Div } from "../../components/divs";
import { LuCalendarSearch } from "react-icons/lu";
import { BiStore } from "react-icons/bi";
import { PiNewspaperClipping } from "react-icons/pi";
import { GoGraph } from "react-icons/go";
import { GoGlobe } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";
import { PiSlideshow } from "react-icons/pi";

export function Services() {
  return (
    <Container>
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <Div
          title="Search Engine optimization"
          subtitle="Through careful keyword reseach"
          icon={LuCalendarSearch}
        />

        <Div
          title="eCommerce Web Design"
          subtitle="AT-Thrive we understand the nuances"
          icon={BiStore}
        />
        <Div
          title="Search Engine optimization"
          subtitle="Through careful keyword reseach"
          icon={LuCalendarSearch}
        />
        <Div
          title="Pay Per Click(PPC) Management"
          subtitle="Reach your customers quickly and..."
          icon={PiNewspaperClipping}
        />
        <Div
          title="Conversion Rate Optimization(CRO)"
          subtitle="getting visitors to your site is only"
          icon={GoGraph}
        />
        <Div
          title="Online reputation Management(ORM)"
          subtitle="Your reviews and online reputation"
          icon={GoGlobe}
        />
        <Div
          title="Amazon Marketing Services"
          subtitle="Getting found Amazon is not easy!"
          icon={AiOutlineShopping}
        />
        <Div
          title="Social Media Marketing"
          subtitle="Ready to expand and market to your audiencies on social media"
          icon={PiSlideshow}
        />
      </section>
    </Container>
  );
}
