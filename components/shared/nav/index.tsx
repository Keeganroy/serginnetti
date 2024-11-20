import React from "react";
import Link from "next/link";

import s from "./nav.module.scss";
import classNames from "classnames";

const list = [
  { id: 0, name: "Женщинам", link: "women" },
  { id: 1, name: "Мужчинам", link: "men" },
  { id: 2, name: "Сотрудничество", link: "partners" },
];

interface Props {
  isShowMenu: boolean;
}

export const Nav: React.FC<Props> = ({ isShowMenu }) => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {list?.map((item) => (
          <li className={s.item} key={item.id}>
            <Link
              className={classNames(s.link, { [s.activeMenu]: isShowMenu })}
              href={`/${item.link}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
