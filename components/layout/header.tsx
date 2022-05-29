import { classnames } from "@lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./header.module.scss";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const onToggle = () => setDrawerOpen((prev) => !prev);

  return (
    <header
      className={classnames(
        "flex justify-between w-full h-14 border-b-gray-300 border-b-[1px] fixed top-0 px-4 bg-white bg-opacity-80"
      )}
    >
      <nav className="flex items-center h-full justify-between space-x-4 w-[1200px] mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <span className="relative w-32 h-14">
              <Image
                src={
                  "https://www.dnsevercorp.com/assets/images/dnsever-logo.svg"
                }
                className="object-contain"
                layout="fill"
                alt="dnsever_logo"
                objectFit="fill"
              />
            </span>
          </a>
        </Link>
        {/* MOBILE VERSION */}
        <button className="lg:hidden text-orange-500" onClick={onToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* DESKTOP VERSION */}
        <ul className="hidden lg:block">
          <li>
            <Link href="/menu">
              <a className="flex items-center justify-center h-full font-medium">
                메뉴
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      {/* back drop */}
      <CSSTransition
        in={drawerOpen}
        timeout={300}
        unmountOnExit
        mountOnEnter
        classNames="backdrop"
      >
        <div className="backdrop" onClick={onToggle}></div>
      </CSSTransition>
      <div
        className={`${styles.mobileDrawer} ${
          drawerOpen ? styles.activeMobileDrawer : ""
        }`}
      ></div>
    </header>
  );
}
