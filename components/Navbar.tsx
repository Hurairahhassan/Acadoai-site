import { getNav } from "../content/pages";
import { getLang, t } from "../content/request";
import { NavbarClient } from "./NavbarClient";

/** Server wrapper: hands the client navbar only the current language's copy. */
export const Navbar = () => {
  const c = t();
  return <NavbarClient lang={getLang()} copy={{ common: c.ui.common, nav: c.ui.nav }} nav={getNav(c)} />;
};
