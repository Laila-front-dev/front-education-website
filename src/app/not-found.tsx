import Button from "@/components/ui/Button";
import Image from "next/image";

export default function NotFound() {
  return (
    <main>
      <section className="content-grid padding-block-start-11">
        <div className="not-found grid grid-columns-2 items-center">
          <div className="error-content flow">
            <h1 className="secondary-heading">Sorry, Page Not Found!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button href="/" text="Back To Home" className="bg-primary-400" />
          </div>
          <div className="error-image">
            <Image
              src="/images/error.svg"
              alt="error image"
              // width={647}
              // height={513}
              fill
            />
          </div>
        </div>
      </section>
    </main>
  );
}
