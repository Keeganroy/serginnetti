import React from "react";
import s from "./container.module.scss";

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};
