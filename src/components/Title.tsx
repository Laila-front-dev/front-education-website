interface TitleProps {
  span: string;
  heading: string;
}

function Title({ span, heading }: TitleProps) {
  return (
    <>
      <span
        className="bg-accent-100 text-primary-400 text-transform-uppercase ff-secondary padding-2 "
        style={{ width: "fit-content" }}
      >
        {span}
      </span>
      <h2 className="secondary-heading">{heading}</h2>
    </>
  );
}

export default Title;
