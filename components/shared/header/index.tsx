"use client";

import React from "react";
import { useMedia } from "react-use";
import { Container } from "../container";
import { LeftSide } from "./left-side";
import { RightSide } from "./right-side";

import s from "./header.module.scss";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isShowMenu, setIsShowMenu] = React.useState(false);
  const isWide = useMedia("(max-width: 992px)", false);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className={s.header}>
      <Container>
        <div className={s.inner}>
          <LeftSide
            isWide={isWide}
            isOpen={isOpen}
            isShowMenu={isShowMenu}
            setIsOpen={setIsOpen}
            setIsShowMenu={setIsShowMenu}
          />

          <RightSide isOpen={isOpen} isShowMenu={isShowMenu} />
        </div>
      </Container>
    </header>
  );
};
