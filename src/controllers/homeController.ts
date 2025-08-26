import { Request, Response } from "express";
import * as CRUD from "../services/crudService";

export const showCrudForm = async (_req: Request, res: Response) => {
  res.render("crud");
};

export const createNewUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, address } = req.body;
  await CRUD.createUser({ firstName, lastName, email, address });
  res.redirect("/users");
};

export const displayGetCRUD = async (_req: Request, res: Response) => {
  const users = await CRUD.getAllUsers();
  res.render("users/findAllUser", { users });
};

export const getEditPage = async (req: Request, res: Response) => {
  const id = Number(req.query.id);
  const user = await CRUD.getUserById(id);
  if (!user) return res.redirect("/users");
  res.render("users/updateUser", { user });
};

export const updateUser = async (req: Request, res: Response) => {
  const id = Number(req.body.id);
  await CRUD.updateUser(id, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    address: req.body.address
  });
  res.redirect("/users");
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = Number(req.query.id);
  await CRUD.deleteUser(id);
  res.redirect("/users");
};
