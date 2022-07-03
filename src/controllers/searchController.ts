import { query, Request, Response } from "express";
import { pet } from "../models/Pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;
  if (!query) {
    res.redirect("/");
    return;
  }
  let list = pet.getFromName(query);
  res.render("pages/pages", {
    menu: createMenuObject(""),
    list,
    query,
  });
};
