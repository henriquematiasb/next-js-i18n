import type { NextPage } from "next";
import { useAppLocale } from "../src/context/locale";

const Home: NextPage = () => {
  const { translate } = useAppLocale();

  return <h1>{translate.greeting}</h1>;
};

export default Home;
