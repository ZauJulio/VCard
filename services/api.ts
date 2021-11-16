import api from ".";
import type UserData from "../types/UserData";

function createObjectURL(data: string) {
  return (window.URL || window.webkitURL).createObjectURL(data);
}

export const createQRCode = async (data: UserData) => {
  const res = await api.post(
    "/vcard/qrcode/new",
    { ...data, company: "Commcepta", color: "#2E79DE" },
    { responseType: "blob" }
  );

  return createObjectURL(res.data);
};

export const getQRCode = async (id: string | number) => {
  const res = await api.get(`/vcard/qrcode/commcepter/${id}`, {
    responseType: "blob",
    params: { color: "#2E79DE" },
  });

  return createObjectURL(res.data);
};

export const getUserData = async (id: string | number) => {
  const res = await api.get(`/commcepter/${id}`);

  return res.data;
};

export const getAllUsersData = async () => {
  const res = await api.get(`/commcepters`);

  return res.data;
};
