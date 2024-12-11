import React from "react";

import s from "./title.module.scss";

interface Props {
  text: string;
}

export const Title: React.FC<Props> = ({ text }) => {
  return <h3 className={s.title}>{text}</h3>;
};
