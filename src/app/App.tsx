import "./App.scss"
import { AuthorInfo } from "../ui/components/molecules/author-info/AuthorInfo"
import { LogoList } from  "../ui/components/molecules/logo-list/LogoList"

function App() {
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
          <h1>Hello world!</h1>
          <img src="./images/svg/airslate-mono.svg" width={150} height={48} alt="airSlate logo" />
        </div>
        <main className="layout__body">
          <form action="/" className="form" method="post" name="form" autoComplete="off"></form>
        </main>
        <div className="layout__footer">
          <AuthorInfo
            projectDescription="Project: Counter on ReactJS"
            authorName="Author: Holovizin Roman"
          />
          <LogoList logos={logos} />
        </div>
      </div>
    </>
  )
}

export default App
