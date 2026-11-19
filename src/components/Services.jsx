import { services } from "../data/services";
import { useEnquiry } from "../context/enquiry-context";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const { selectProject } = useEnquiry();

  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="services-heading"
            index="04"
            eyebrow="Services"
            title="Digital Solutions for Your Business."
            description="I help businesses, startups and individuals build a strong digital presence through modern, responsive and user-friendly websites."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={Math.min(index * 0.04, 0.24)} className="h-full">
              <ServiceCard service={service} onEnquire={selectProject} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
