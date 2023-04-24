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
  description:
    "Donas y postres en Maracaibo. No compartirlas seria imperdonable!",
});
import { Suspense } from "react";

function Document({ title, children }) {
  return (
    <html>
      <head>
        {title && <title>{title}</title>}
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen">
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
            <Suspense fallback={<div>Loading...</div>}>
              <Header />
              {children}
              <Footer />
            </Suspense>
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
  console.log(error);
  return (
    <Document title="Ha ocurrido un error">
      <main className="min-h-screen">
        <Error title="Ha ocurrido un errror">
          <p>{error.message || "Algo ha fallado. Intente de nuevo."}</p>
        </Error>
      </main>
    </Document>
  );
}
export const links = () => [{ rel: "stylesheet", href: styles }];
