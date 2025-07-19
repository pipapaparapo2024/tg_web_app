import { useEffect, type FC } from "react";
import "./App.css";
const tg = window.Telegram.WebApp;

export const App: FC = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <button onClick={() => close()}>закрыть</button>
    </>
  );
};
