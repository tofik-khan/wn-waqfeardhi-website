import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { useEffect } from "react";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <SSRProvider>
      <title>Waqf-e-Nau | Serve</title>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
