import { ReactNode } from "react";

const Section = ({
  children,
  backgroundColour,
  id,
}: {
  children: ReactNode;
  backgroundColour: string;
  id: string;
}) => {
  return (
    <section
      className='h-screen w-full pt-4 md:p-16'
      style={{
        background: backgroundColour,
        color: backgroundColour === "white" ? "black" : "white",
      }}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
