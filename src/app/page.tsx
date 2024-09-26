import Banner from "../../src/app/components/baner/baner";
import Header from "../../src/app/components/header/header";
import Publicidas from "../../src/app/components/publicidad/publicidad";
import Publicidad2 from "../../src/app/components/publicidad2/publicidad2";
import Principal from "./components/cardsPrincipal/principal";
import "./page.styles.css";

export default async function Home() {
  return (
    <div className="container mx-auto">
      <div className="m-8">
        <Header />
        <Banner />
      </div>
      <div className="m-2">
        <Publicidas />
      </div>
      <Principal />
      <div>
        <Publicidad2 />
      </div>
    </div>
  );
}
