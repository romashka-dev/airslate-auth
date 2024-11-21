import "../../styles/pages/_home.scss";
import { Link } from "react-router-dom";
import { AuthorInfo } from "../../ui/components/molecules/AuthorInfo";
import { LogoList } from  "../../ui/components/molecules/LogoList";

export const HomePage = () => {
  const logos = [
    {
      id: "1",
      selectorLink: "logo__link",
      href: "https://vite.dev",
      selectorImage: "logo__image logo__image--vite",
      path: "./images/svg/vite.svg",
      width: 64,
      height: 64,
      altText: "Vite logo",
    },
    {
      id: "2",
      selectorLink: "logo__link",
      href: "https://react.dev",
      selectorImage: "logo__image logo__image--react",
      path: "./images/svg/react.svg",
      width: 64,
      height: 64,
      altText: "React logo",
    },
    {
      id: "3",
      selectorLink: "logo__link",
      href: "https://www.typescriptlang.org/",
      selectorImage: "logo__image logo__image--typescript",
      path: "./images/svg/typescript.svg",
      width: 64,
      height: 64,
      altText: "TypeScript logo",
    },
  ];

  return (
      <>
      <div className="layout">
        <div className="layout__header">
          <div className="intro">
            <Link className="intro__link" to="/login">Login to airSlate</Link>
          </div>
        </div>
        <div className="layout__footer">
        <AuthorInfo
          projectDescription="Project: airSlate Auth"
          authorName="Author: Holovizin Roman"
        />
        <LogoList logos={logos} />
      </div>
      </div>
    </>
  );
}
