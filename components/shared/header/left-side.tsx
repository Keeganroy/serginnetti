import React from "react";
import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";
import { ShoppingCart, X } from "lucide-react";

import MainLogo from "@/public/images/logo.svg";
import SecondaryLogo from "@/public/images/logo-secondary.svg";
import MenuImage from "@/public/images/dropdown/01.png";
import s from "./header.module.scss";

interface Props {
  isShowMenu: boolean;
  isWide: boolean;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setIsShowMenu: (value: boolean) => void;
}

export const LeftSide: React.FC<Props> = ({
  isShowMenu,
  isWide,
  isOpen,
  setIsOpen,
  setIsShowMenu,
}) => {
  return (
    <div className={s.left}>
      <button
        className={classnames(s.menu, { [s.border]: isShowMenu })}
        onClick={() => setIsShowMenu(!isShowMenu)}
      >
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <rect
            x="15"
            y="18"
            width="21"
            height="2"
            fill={isShowMenu ? "black" : "white"}
          />
          <rect
            x="11"
            y="25"
            width="21"
            height="2"
            fill={isShowMenu ? "black" : "white"}
          />
          <rect
            x="15"
            y="32"
            width="21"
            height="2"
            fill={isShowMenu ? "black" : "white"}
          />
        </svg>
      </button>

      {isShowMenu && (
        <div className={s.dropdownMenu}>
          <div className={s.dropdownInner}>
            <div className={s.items}>
              <div>
                <h5 className={s.title}>О компании</h5>
                <ul className={s.list}>
                  <li>
                    <Link className={s.link} href={"#"}>
                      Сотрудничество
                    </Link>
                  </li>
                  <li>
                    <Link className={s.link} href={"#"}>
                      Новости
                    </Link>
                  </li>
                  <li>
                    <Link className={s.link} href={"#"}>
                      Контакты
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className={s.title}>Cвободный заказ</h5>
                <ul className={s.list}>
                  <li>
                    <Link className={s.link} href={"#"}>
                      Джинсы
                    </Link>
                  </li>
                  <li>
                    <Link className={s.link} href={"#"}>
                      Свитшоты
                    </Link>
                  </li>
                  <li>
                    <Link className={s.link} href={"#"}>
                      Футболки
                    </Link>
                  </li>
                  <li>
                    <Link className={s.link} href={"#"}>
                      Топы и майки
                    </Link>
                  </li>
                  <li>
                    <Link className={s.link} href={"#"}>
                      Блузы
                    </Link>
                  </li>
                  <li>
                    <Link className={s.link} href={"#"}>
                      Платья
                    </Link>
                  </li>
                  <li>
                    <Link className={s.link} href={"#"}>
                      Юбки
                    </Link>
                  </li>
                  <li>
                    <Link className={s.link} href={"#"}>
                      БрюкИ
                    </Link>
                  </li>
                  <li>
                    <Link className={s.link} href={"#"}>
                      Свитшоты
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Image className={s.menuImage} src={MenuImage} alt="image" />
            </div>
          </div>
        </div>
      )}

      {isWide &&
        (isOpen ? (
          <button className={s.close}>
            <X
              className={s.closeIcon}
              strokeWidth={1.25}
              color="black"
              onClick={() => setIsOpen(false)}
            />
          </button>
        ) : (
          <button className={s.burger} onClick={() => setIsOpen(true)}>
            <svg width="24" height="15" viewBox="0 0 21 15" fill="none">
              <rect width="21" height="1" fill="white" />
              <rect y="7" width="12" height="1" fill="white" />
              <rect y="14" width="21" height="1" fill="white" />
            </svg>
          </button>
        ))}

      <Link href={"/"}>
        <Image
          className={s.logo}
          src={isOpen || isShowMenu ? SecondaryLogo : MainLogo}
          priority={true}
          alt="serginnetti"
        />
      </Link>

      {isWide && (
        <button className={s.cart}>
          <ShoppingCart color={isOpen ? "black" : "white"} strokeWidth={1.25} />
          <span className={classnames(s.count, { [s.inverse]: isOpen })}>
            3
          </span>
        </button>
      )}
    </div>
  );
};
