import type { Product } from "@/types/type";
import { images } from "@/constants";

export const products: Product[] = [
  {
    id: "1",
    name: "XENON HALOGEN",
    price: 380000.0,
    image: images.bulb1,
    badge: "NEW",
  },
  {
    id: "2",
    name: "XENON HALOGEN",
    price: 1180000.0,
    image: images.bulb2,
  },
  {
    id: "3",
    name: "XENON ACTIVE",
    price: 970000.0,
    image: images.bulb3,
  },
  {
    id: "4",
    name: "XENON SIGMA",
    price: 389000.0,
    image: images.bulb4,
  },
  {
    id: "5",
    name: "XENON SIGMA",
    price: 719000.0,
    image: images.bulb5,
    badge: "SALE",
    badgeColor: "bg-green-500",
  },
  {
    id: "6",
    name: "PORSCHE 911 GT3",
    price: 2850000.0,
    image: images.bulb6,
  },
  {
    id: "7",
    name: "BMW TECH SERIES",
    price: 485000.0,
    image: images.bulb7,
  },
  {
    id: "8",
    name: "FORD MUSTANG",
    price: 535000.0,
    image: images.bulb8,
  },
  {
    id: "9",
    name: "PORSCHE Macan GTS 2.9",
    price: 710000.0,
    image: images.bulb9,
  },
  {
    id: "10",
    name: "HONDA Civic Type-R",
    price: 489000.0,
    image: images.bulb10,
  },
  {
    id: "11",
    name: "SUPRA Mk5 GR86",
    price: 164000.0,
    image: images.bulb11,
    badge: "HOT",
    badgeColor: "bg-red-500",
  },
  {
    id: "12",
    name: "BMW M3 Gran Coupe",
    price: 857000.0,
    image: images.bulb12,
    badge: "NEW",
    badgeColor: "bg-green-500",
  },
  {
    id: "13",
    name: "TOYOTA GR Corolla",
    price: 409000.0,
    image: images.bulb13,
  },
  {
    id: "14",
    name: "Audi RS6 Competition",
    price: 719000.0,
    image: images.bulb14,
  },
];
