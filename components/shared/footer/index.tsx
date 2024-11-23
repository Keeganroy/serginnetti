"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { useMedia } from "react-use";
import { Container } from "../container";
import { FOOTER_DATA } from "@/constants";

import VkIcon from "@/public/images/icons/vk.svg";
import TgIcon from "@/public/images/icons/tg.svg";
import PlusIcon from "@/public/images/icons/plus.svg";
import s from "./footer.module.scss";

export const Footer: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>();
  const isMobile = useMedia("(max-width: 768px)", false);

  const handleToggleList = (index: number) => {
    if (isMobile) {
      setActiveIndex((prevIndex) => (prevIndex === index ? undefined : index));
    }
  };

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.top}>
          <div className={s.columns}>
            <div className={s.column}>
              <div>
                <h5 className={s.title}>Мы в соц. сетях</h5>
                <div className={s.socials}>
                  <Link className={s.socialLink} href={""}>
                    <Image src={VkIcon} alt="vk" />
                  </Link>
                  <Link className={s.socialLink} href={""}>
                    <Image src={TgIcon} alt="telegram" />
                  </Link>
                </div>
              </div>
            </div>
            <div className={s.column}>
              {FOOTER_DATA?.map((obj, index) => (
                <div className={s.box} key={index}>
                  <div
                    className={s.columnHead}
                    onClick={() => handleToggleList(index)}
                  >
                    <h5
                      className={s.title}
                      aria-expanded={activeIndex === index}
                    >
                      {obj.title}
                    </h5>
                    <Image
                      className={classNames(s.icon, {
                        [s.activeItem]: activeIndex === index,
                      })}
                      src={PlusIcon}
                      alt="toggle"
                    />
                  </div>
                  <ul
                    className={classNames(s.list, {
                      [s.active]: activeIndex === index,
                    })}
                  >
                    {obj.items?.map((item) => (
                      <li className={s.item} key={item.label}>
                        <Link className={s.link} href={item.href}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className={s.column}>
              <div className={s.contacts}>
                <Link className={s.phone} href={"tel:8(843)5610707"}>
                  8 (843) 561 07 07
                </Link>
                <p className={s.text}>доб. 1220, 1221, 1230, 1234.</p>
                <p className={s.text}>ПН–ПТ: 09:00–17:30 (по мск)</p>
                <Link className={s.email} href={"mailto:sales@serginnetti.ru"}>
                  sales@serginnetti.ru
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className={s.bottom}>
        <Container>
          <div className={s.inner}>
            <p>
              Все права защищены. <br /> Использование материалов с сайта без
              разрешения правообладателя и активной ссылки на сайт запрещено.
            </p>
            <p>разработка сайта — redbox.solutios</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};
