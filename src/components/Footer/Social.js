import IconSvg from "./IconSvg";
import "./Social.css";

const Social = () => {
  return (
    <div className="social">
      <a
        href="https://github.com/pfmnowak/expenses-react"
        className="social__link"
        title="GitHub Repo with the code"
      >
        <IconSvg name="icon-github" />
      </a>
    </div>
  );
};

export default Social;
