import { useEffect, useState } from "react";

interface Props {
  children: JSX.Element;
  active: boolean;
}
export const Drawer = ({ children, active }: Props) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    setOpenDrawer(active);
  }, [active]);

  return (
    <div className="absolute w-screen h-screen overflow-hidden z-50 bottom-0 left-0 flex items-end ">
      <div
        className="w-full h-[0%] bg-white rounded-t-3xl shadow relative overflow-auto transition-all duration-500"
        style={{
          height: openDrawer ? "90%" : "0%",
        }}
      >
        <div className="absolute top-4 left-0 right-0 mx-auto max-w-60 w-full h-2 bg-gray-200 rounded-full" />
        {children}
      </div>
    </div>
  );
};
