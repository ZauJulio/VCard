import router from "next/router";
import { ReactNode, useState, createContext } from "react";

import { createQRCode, getQRCode, getUserData } from "../services/api";
import UserData from "../types/UserData";

export type VCardType = {
  qrCode: string;
  userData: UserData;

  handleNewQRCode: (data: UserData) => Promise<void>;
  handleUpdate: (id: string | number) => Promise<void>;
};

export const VCardContext = createContext({} as VCardType);

interface VCardProviderProps {
  children?: ReactNode;
}

function VCardProvider(props: VCardProviderProps) {
  const [qrCode, setQRCode] = useState("");
  const [userData, setUserData] = useState({} as UserData);

  const handleNewQRCode = async (data: UserData) => {
    try {
      const url = await createQRCode(data);

      setQRCode(url ?? "");
      setUserData(data);

      router.push("/vcard");
    } catch (error) {
      console.log(error);
      alert("Erro ao criar vCard, tente novamente.");
    }
  };

  const handleUpdate = async (id: string | number) => {
    try {
      const url = await getQRCode(id);
      const data = await getUserData(id);

      setQRCode(url ?? "");
      setUserData(data);

      router.push("/vcard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VCardContext.Provider
      value={{
        qrCode,
        userData,
        handleNewQRCode,
        handleUpdate,
      }}
    >
      {props.children}
    </VCardContext.Provider>
  );
}

export default VCardProvider;
