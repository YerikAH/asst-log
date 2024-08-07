import { useTitle } from "@/hook";
import { useTitleStore } from "@/services/config";
import { useEffect } from "react";

function Settings() {
  const { changeTitle } = useTitle();
  const changeTitleNavigation = useTitleStore((state) => state.changeTitle);

  useEffect(() => {
    changeTitle("Configuración ⚙️ - AsstLog");
    changeTitleNavigation("Configuración ⚙️");
  }, [changeTitle, changeTitleNavigation]);
  return <div className="max-w-5xl mx-auto">Ajustes</div>;
}

export default Settings;
