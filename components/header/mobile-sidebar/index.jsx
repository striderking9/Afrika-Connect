"use client";

import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import mobileMenuData from "../../../data/mobileMenuData";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import { useRouter } from "next/navigation";
import {
  isActiveLink,
  isActiveParentChaild,
} from "../../../utils/linkActiveChecker";


const Index = () => {

  const router = useRouter()


  return (
    <div
      className="offcanvas offcanvas-start mobile_menu-contnet"
      tabIndex="-1"
      id="offcanvasMenu"
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End pro-header */}

      
      <Sidebar>
        <Menu>
          {mobileMenuData.map((menuItem) => (
            <MenuItem
              key={menuItem.id}
              className={isActiveLink(menuItem.routePath, router.asPath) ? "menu-active-link" : ""}
              onClick={() => router.push(menuItem.routePath)}
            >
              {menuItem.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>


      <SidebarFooter />
    </div>
  );
};

export default Index;