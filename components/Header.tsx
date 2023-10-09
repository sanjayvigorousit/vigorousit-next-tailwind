import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";
import { useState, useEffect } from "react";
export default function Header(props: any) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 600);
    }
  }, []);
  if (isMobile) {
    return (
      <MobileNav />
    );
  } else {
    return <DesktopNav />;
  }
}
