import {ReactNode} from "react";

const Section = ({children}: {children: ReactNode}) => {
  return (
    <section
      className="w-full 
                  bg-transparent
                  flex flex-col justify-center items-center
                  text-white
                  sm:px-20 px-10 py-10"
    >
      {children}
    </section>
  );
};

export default Section;
