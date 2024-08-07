export const Drawer = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="absolute w-screen h-screen overflow-hidden z-50 bottom-0 left-0 flex items-end ">
      <div className="w-full h-[90%] bg-white rounded-t-3xl shadow relative overflow-auto">
        <div className="absolute top-4 left-0 right-0 mx-auto max-w-60 w-full h-2 bg-gray-200 rounded-full" />
        {children}
      </div>
    </div>
  );
};
