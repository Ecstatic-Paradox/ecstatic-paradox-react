import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ScrollToTop() {
  const pathname = useRouter().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
