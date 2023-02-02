import Card from "../../components/Card";
import mainLogo from "../../assets/logo.svg";
type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen bg-light-grayish-cyan gap-4 transition-all">
        <header>
          <img src={mainLogo} alt="main-logo" className="w-24 mb-10" />
        </header>
        <Card />
        <footer>
          <p className="text-xs font-bold">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              className="text-blue-500"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://github.com/UsamaBinKashif"
              target="_blank"
              className="text-purple-600"
            >
              Usama Bin Kashif
            </a>
            .
          </p>
        </footer>
      </main>
    </>
  );
};

export default Layout;
