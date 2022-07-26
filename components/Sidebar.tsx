import Image from "next/image";
import React from "react";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <section>
      <Image
        src="https://rb.gy/xkacau"
        width={56}
        height={56}
        objectFit="contain"
      />
    </section>
  );
};

export default Sidebar;
