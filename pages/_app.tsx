import { AppProps } from "next/app";
import "../styles/index.css";
import "react-loading-skeleton/dist/skeleton.css";
import NavBar from "../lib/components/layout/nav-bar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <NavBar />
      <Component {...pageProps} />
    </main>
  );
}
