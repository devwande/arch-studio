import ProjectPages from "./ProjectPages";
import seraph from "../assets/seraph.png";

const SeraphPage = () => {
  return (
    <ProjectPages
      src={seraph}
      alt="seraph"
      title="Seraph Station"
      content="The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations."
    />
  );
};

export default SeraphPage;
