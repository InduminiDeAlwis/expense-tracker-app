import api from "./api";
import { User, LoginData, RegisterData } from "../types/auth";

export const login = async (data: LoginData) => {
  const res = await api.post<User>("/auth/login", data);
  return res.data;
};

export const register = async (data: RegisterData) => {
  const res = await api.post<User>("/auth/register", data);
  return res.data;
};