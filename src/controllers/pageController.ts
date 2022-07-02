import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { pet } from "../models/Pet";
export const home = (req: Request, res: Response) => {
  let list = pet.getAll();
  res.render("pages/pages", {
    menu: createMenuObject("all"),
    banner: {
      title: "Todos os animais",
      background: "allanimals.jpg",
    },
    list,
  });
};
export const dogs = (req: Request, res: Response) => {
  let list = pet.getFromType("dog");
  res.render("pages/pages", {
    menu: createMenuObject("dog"),
    banner: {
      title: "Cachorros",
      background: "banner_dog.jpg",
    },
    list,
  });
};
export const cats = (req: Request, res: Response) => {
  let list = pet.getFromType("cat");
  res.render("pages/pages", {
    menu: createMenuObject("cat"),
    banner: {
      title: "Gatos",
      background: "banner_cat.jpg",
    },
    list,
  });
};
export const fishes = (req: Request, res: Response) => {
  let list = pet.getFromType("fish");
  res.render("pages/pages", {
    menu: createMenuObject("fish"),
    banner: {
      title: "Peixes",
      background: "banner_fish.jpg",
    },
    list,
  });
};
