import {
  FormChangePassword,
  FormInfo,
  FormLogout,
} from "@/components/settings";
import { FormDeleteAccount } from "@/components/settings/form-delete-account";
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
  return (
    <div className="max-w-5xl mx-auto">
      <form className="h-full mb-12">
        <FormInfo />
        <FormChangePassword />
        <FormLogout />
        <FormDeleteAccount />
      </form>
    </div>
  );
}

export default Settings;
