import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import store, { persistor } from "./store/store";
import styles from "./tailwind.css";
import Footer from "./components/Footer";
import { PersistGate } from "redux-persist/integration/react";
import Error from "./components/Error";
export const meta = () => ({
  charset: "utf-8",
  title: "Soet Postres",
  viewport: "width=device-width,initial-scale=1",
  description: "Donas y postres en Maracaibo. No compartirlas seria imperdonable!"
});

function Document({ title, children }) {
  return (
    <html lang="en">
      <head>
        {title && <title>{title}</title>}
        <Meta />
        <Links />
      </head>
      <body>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Header />
            {children}
            <Footer />
          </PersistGate>
        </Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document title="Ha ocurrido un error">
      <main>
        <Error title="Ha ocurrido un errror">
          <p>{error.message || "Algo ha fallado. Intente de nuevo."}</p>
        </Error>
      </main>
    </Document>
  );
}
export const links = () => [{ rel: "stylesheet", href: styles }];
