import api from "configs/axios";

const login = async (data) => {
  try {
    const response = await api.post("/accounts/user/login/", data);
    return { response };
  } catch (error) {
    return { error };
  }
};

export { login };
