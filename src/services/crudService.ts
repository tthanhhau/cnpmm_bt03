import { User } from "../models";

export const createUser = async (payload: {
  firstName: string; lastName: string; email: string; address?: string;
}) => {
  return User.create(payload);
};

export const getAllUsers = async () => {
  return User.findAll({ order: [["id", "DESC"]] });
};

export const getUserById = async (id: number) => {
  return User.findByPk(id);
};

export const updateUser = async (id: number, payload: Partial<{
  firstName: string; lastName: string; email: string; address?: string;
}>) => {
  const u = await User.findByPk(id);
  if (!u) return null;
  await u.update(payload);
  return u;
};

export const deleteUser = async (id: number) => {
  return User.destroy({ where: { id } });
};
