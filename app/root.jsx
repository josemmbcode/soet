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

export const meta = () => ({
  charset: "utf-8",
  title: "Soet Postres",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen">
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Header />
            <Outlet />
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

export const links = () => [{ rel: "stylesheet", href: styles }];
