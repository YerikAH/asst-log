import {
  FormChangePassword,
  FormInfo,
  FormLogout,
} from "@/components/settings";
import { FormDeleteAccount } from "@/components/settings/form-delete-account";
import { useTitle } from "@/hook";
import { useEffect } from "react";

function Settings() {
  const { changeTitle } = useTitle();

  useEffect(() => {
    changeTitle("Configuración - AsstLog");
  }, [changeTitle]);
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
