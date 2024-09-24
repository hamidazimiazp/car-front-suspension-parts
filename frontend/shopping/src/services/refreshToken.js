import api from "src/configs/axios";
import { getCookie } from "src/utils/cookies/cookies";

const refreshToken = async () => {
  const refresh = getCookie("refresh");
  if (!refresh) return;
  try {
    const response = await api.post("/api/token/refresh/", { refresh });

    return { response };
  } catch (error) {
    return { error };
  }
};

export default refreshToken;
