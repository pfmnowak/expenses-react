import Card from "../UI/Card";
import "./Footer.css";
import Social from "./Social";

const Footer = () => {
  return (
    <footer>
      <Card className="footer">
        <Social />
        <div className="footer__info">
          <p className="footer__copyright">
            Built by{" "}
            <a
              href="https://pfmnowak.github.io/"
              className="footer__link"
              title="Author's page"
            >
              Mikołaj Nowak
            </a>{" "}
            while taking the online course{" "}
            <a
              href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
              className="footer__link"
              title="Link to the course"
            >
              React - The Complete Guide
            </a>
            . Designed & copyright &copy; by Maximilian Schwarzmüller.
          </p>
        </div>
      </Card>
    </footer>
  );
};

export default Footer;
