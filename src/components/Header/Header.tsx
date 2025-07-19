import type { FC } from "react";
import "./Header.css";
import { Button } from "../Button/Button";

export const Header: FC = () => {
  const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };
  return (
    <div className={"header"}>
      <Button onClick={()=>onClose()}>Закрыть</Button>{" "}
      <span className={"username"}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
};
