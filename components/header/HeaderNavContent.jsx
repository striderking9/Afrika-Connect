"use client";

import Link from "next/link";
import {
  blogItems,
  candidateItems,
  contactItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
} from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";

const HeaderNavContent = () => {
  return (
    <>
    <nav className="nav main-menu">
      <ul className="navigation" id="navbar">
        {/* current dropdown */}
        <li
          className={`${
            isActiveParent(homeItems, usePathname()) 
            ? "current" 
            : ""
          }`}
        >
          <Link href="/">Accueil</Link>
        </li>
        {/* End homepage menu items */}

        <li
          className={`${
            isActiveParent(findJobItems, usePathname()) 
            ? "current" 
            : ""
          }`}
        >
          <Link href="/job-list-v4">Trouver de l'emploi</Link>
        </li>
        {/* End findjobs menu items */}

        <li
          className={`${
            isActiveParent(employerItems, usePathname()) ||
            usePathname()?.split("/")[1] === "employers-dashboard"
              ? "current"
              : ""
          }`}
        >
          <Link href="/employers-list-v1">Trouver des entreprises</Link>
        </li>
        {/* End find enterprises menu items */}

        <li
          className={`${
            isActiveParent(employerItems, usePathname()) ||
            usePathname()?.split("/")[1] === "employers-dashboard"
              ? "current"
              : ""
          }`}
        >
          <Link href="/candidates-list-v1">Trouver des candidats</Link>
        </li>
        {/* End find candidate menu items */}


        <li
          className={`${
            isActiveParentChaild(contactItems, usePathname()) 
            ? 
            "current" 
            : ""
          }`}
        >
          <Link href="/contact">Contact</Link>
        </li>
        {/* End Contact menu items */}

        <li
          className={`${
            isActiveParentChaild(pageItems, usePathname()) ||
            isActiveParentChaild(shopItems[0].items, usePathname())
              ? "current "
              : ""
          }`}
        >
          <Link href="/about">A propos</Link>
        </li>
        {/* End About menu items */}
      </ul>
    </nav>
    </>
  );
};

export default HeaderNavContent;
