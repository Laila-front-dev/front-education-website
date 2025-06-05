import { PricingLayout } from "@/types";
import Button from "../ui/Button";

function Pricing({ priceList }: PricingLayout) {
  return (
    <section className="content-grid padding-block-start-11">
      <div className="grid grid-columns-3 gap-1">
        {priceList.map((item) => (
          <div key={item.id} className="price-content flow">
            <h3>{item.heading}</h3>
            <div className="price">
              {item.price}
              <span>/month</span>
            </div>
            <ul role="list" className="pricing-list">
              {item.list.map((list) => (
                <li key={list.id}>{list.text}</li>
              ))}
            </ul>
            <Button
              href={item.cta.href}
              text={item.cta.text}
              className="bg-primary-400 pricing-btn"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
