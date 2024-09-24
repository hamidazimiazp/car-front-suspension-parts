const setCookies = (tokens) => {
  document.cookie = `access=${tokens.access};max-age=${5 * 60}`;
  document.cookie = `refresh=${tokens.refresh};max-age=${1 * 24 * 60 * 60}`;
};

const getCookie = (cookieName) => {
  return document.cookie
    .split(";")
    .find((cookie) => cookie.trim().split("=")[0] === cookieName)
    ?.split("=")[1];
};

const removeCookie = (cookieName) => {
  document.cookie = `${cookieName}=; max-age=0`;
};

export { setCookies, getCookie, removeCookie };
