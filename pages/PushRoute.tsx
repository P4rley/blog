"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

const PushRoute = () => {
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      console.log(Math.floor(scrollTop) + clientHeight === scrollHeight);
      if (Math.floor(scrollTop) + clientHeight === scrollHeight) {
        router.push("/notifications");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [router]);

  return <div>PushRoute</div>;
};

export default PushRoute;
