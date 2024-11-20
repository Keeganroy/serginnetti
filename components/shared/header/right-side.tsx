import React from "react";
import classnames from "classnames";
import { Nav } from "../nav";
import { Heart, Search, UserRound } from "lucide-react";

import s from "./header.module.scss";

interface Props {
  isShowMenu: boolean;
  isOpen: boolean;
}

export const RightSide: React.FC<Props> = ({ isShowMenu, isOpen }) => {
  const iconColor = isOpen || isShowMenu ? "black" : "white";
  const borderClass = isShowMenu ? s.border : "";

  return (
    <div className={classnames(s.right, { [s.active]: isOpen })}>
      <Nav isShowMenu={isShowMenu} />
      <ul className={s.actions}>
        <li>
          <button className={classnames(s.action_btn, borderClass)}>
            <UserRound color={iconColor} strokeWidth={1.25} />
          </button>
        </li>
        <li>
          <button className={classnames(s.action_btn, borderClass)}>
            <Search color={iconColor} strokeWidth={1.25} />
          </button>
        </li>
        <li>
          <button className={classnames(s.action_btn, borderClass)}>
            <Heart color={iconColor} strokeWidth={1.25} />
          </button>
        </li>
      </ul>
    </div>
  );
};
