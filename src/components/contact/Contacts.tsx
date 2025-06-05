import { ContactLayout } from "@/types";
import StrapiImage from "../StrapiImage";
import { Contact } from "./Contact";

function Contacts({ text, heading, contact }: ContactLayout) {
  return (
    <section className="content-grid padding-block-11">
      <div className="contact-section">
        <div className="grid grid-columns-2 gap-2 bg-accent-200 padding-8">
          <div className="contact-info flow">
            <h2 className="secondary-heading">{heading}</h2>
            <p>{text}</p>
            <ul role="list">
              {contact.map((item) => (
                <li key={item.id} className="flex gap-1 flow">
                  <div className="contact-img">
                    <StrapiImage
                      src={item.image.url}
                      alt={item.image.alternativeText || "Default alt text"}
                      width={18}
                      height={18}
                    />
                  </div>
                  <div>
                    <h3>{item.heading}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Contact />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
