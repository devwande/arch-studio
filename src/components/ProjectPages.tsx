import Navigation from "./Navigation";
import PortfolioButton from "./PortfolioButton";

const ProjectPages = ({ src, alt, key, title, content }: any) => {
  return (
    <>
      <div className="relative hidden lg:block">
        <div className="px-14 bg-cover bg-center">
          <img
            src={src}
            alt={alt}
            className=" pt-12 hidden lg:h-[calc(100vh-)] object-cover lg:block"
          />
          <Navigation />
        </div>

        <div className="absolute inset-8 flex flex-col justify-center md:pl-8 lg:pl-48 lg:w-[650px]">
          <h1 className="text-white text-8xl font-spartan font-bold md:pt-16">
            {title}
          </h1>
          <h1 className="text-white font-spartan font-medium text-lg">
            {content}
          </h1>
          <PortfolioButton />
        </div>
      </div>
    </>
  );
};

export default ProjectPages;
