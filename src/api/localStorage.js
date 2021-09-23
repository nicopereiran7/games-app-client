import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants";

export function setAccessToken(accessToken) {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN);
}

export function setRefreshToken(refreshToken) {
  localStorage.setItem(REFRESH_TOKEN, refreshToken);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN);
}

export function deleteToken() {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
}
