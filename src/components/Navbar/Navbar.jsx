import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
} from "@nextui-org/react";
import { IPLogo } from "./IPLogo";
import { useState } from "react";
import { DarkMode } from "./DarkMode";
import { t } from "i18next";

export default function App(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { className } = props;
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      height="60px"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <IPLogo />
          <p className="font-bold text-inherit ml-2">IP Moviles</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <IPLogo />
          <p className="font-bold text-inherit ml-2">IP Moviles</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href={localizePath("/")}>
            {t("navbar.home")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={localizePath("/about")} aria-current="page">
            {t("navbar.about")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={localizePath("/services")}>
            {t("navbar.services")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={localizePath("/gallery")}>
            {t("navbar.gallery")}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <DarkMode />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="sm:hidden">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}