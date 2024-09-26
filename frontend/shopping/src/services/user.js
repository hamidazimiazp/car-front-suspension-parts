import { default as api } from "configs/axios";

const whoAmI = async () => {
  try {
    const response = await api.get("/accounts/user/whoami/");
    return { response };
  } catch (error) {
    return { error };
  }
};

export { whoAmI };
