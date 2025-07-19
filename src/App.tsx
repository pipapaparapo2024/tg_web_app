import { type FC } from "react";
import "./App.css";
// const tg= window.Telegram.WebApp;
export const App: FC = () => {
  // useEffect(()=>{
  //   tg.ready();
  // },[])
  // const close=()=>{
  //   tg.close()
  // }
  return (
    <>
      if (import.meta.env.MODE === 'production' && !window.Telegram?.WebApp){" "}
      {console.error("Telegram WebApp API не загружен!")}
      <button>закрыть</button>
      <div className="f">sdfsgdsgfdsfhb</div>
    </>
  );
};
