import api from "configs/axios";

const login = async (data) => {
  try {
    const response = await api.post("/accounts/user/login/", data);
    return { response };
  } catch (error) {
    return { error };
  }
};

const register = async (data) => {
  try {
    const response = await api.post("/accounts/user/", data);
    return { response };
  } catch (error) {
    return { error };
  }
};

const logout = async (refresh) => {
  try {
    const response = await api.post("/accounts/user/logout/", {
      refresh,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

export { login, register, logout };
