import { useTitle } from "@/hook";
import { useTitleStore } from "@/services/config";
import { useEffect } from "react";

function Dashboard() {
  const { changeTitle } = useTitle();
  const changeTitleNavigation = useTitleStore((state) => state.changeTitle);

  useEffect(() => {
    changeTitle("Dashboard 📌 - AsstLog");
    changeTitleNavigation("Dashboard 📌");
  }, [changeTitle, changeTitleNavigation]);

  return <div className="max-w-5xl mx-auto">Hola mundo</div>;
}
export default Dashboard;
