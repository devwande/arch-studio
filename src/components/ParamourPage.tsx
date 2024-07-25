import ProjectPages from "./ProjectPages";
import paramourDesktop from "../assets/paramourDesktop.png";

const ParamourPage = () => {
  return (
    <ProjectPages
      src={paramourDesktop}
      alt="paramour"
      title="Project Paramour"
      content="Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture."
    />
  );
};

export default ParamourPage;
