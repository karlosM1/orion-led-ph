import { images } from "@/constants";
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
  badgeColor?: string;
  brightness?: string;
  power?: string;
  colorTemperature?: string;
  warranty?: string;
  cooling?: string;
  thermal?: string;
  construction?: string;
  beamPattern?: string;
  ledType?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "ORION ALPHA",
    price: 3000.0,
    image: images.bulb1,
    badge: "NEW",
    brightness: "18000 LUMENS",
    power: "39 WATTS/BULB",
    colorTemperature: "NEAR PERFECT",
    warranty: "2 YEARS",
    cooling: "FAN TYPE",
    thermal: "HIGH PERFORMANCE THERMAL LINKS",
    construction: "PREMIUM MATERIAL CONSTRUCTION",
    beamPattern: "BEST BEAM PATTERN",
    ledType: "BRIGHTEST EMITTING LED",
  },
  {
    id: "2",
    name: "ORION SIGMA H7", //H7
    price: 2400.0,
    image: images.bulb2,
    brightness: "14000 LUMENS",
    power: "25 WATTS/BULB",
    colorTemperature: "ENHANCED",
    warranty: "1.5 YEARS",
    cooling: "FAN TYPE",
    thermal: "HIGH PERFORMANCE THERMAL LINKS",
    construction: "PREMIUM MATERIAL CONSTRUCTION",
    beamPattern: "BEST BEAM PATTERN",
    ledType: "BRIGHTEST EMITTING LED",
  },
  {
    id: "3",
    name: "ORION SIGMA 9012",
    price: 2400.0,
    image: images.bulb3,
    brightness: "14000 LUMENS",
    power: "25 WATTS/BULB",
    colorTemperature: "ENHANCED",
    warranty: "1.5 YEARS",
    cooling: "FAN TYPE",
    thermal: "HIGH PERFORMANCE THERMAL LINKS",
    construction: "PREMIUM MATERIAL CONSTRUCTION",
    beamPattern: "BEST BEAM PATTERN",
    ledType: "BRIGHTEST EMITTING LED",
  },
  {
    id: "4",
    name: "ORION MAX HVN",
    price: 7000.0,
    image: images.bulb4,
    brightness: "25000 LUMENS",
    power: "55 WATTS/BULB",
    colorTemperature: "PERFECT",
    warranty: "4 YEARS",
    cooling: "FANLESS",
    thermal: "HIGH PERFORMANCE THERMAL LINKS",
    construction: "PREMIUM MATERIAL CONSTRUCTION",
    beamPattern: "BEST BEAM PATTERN",
    ledType: "BRIGHTEST EMITTING LED",
  },
  {
    id: "5",
    name: "ORION MAX HVN",
    price: 7000.0,
    image: images.bulb5,
    badge: "SALE",
    badgeColor: "bg-green-500",
    brightness: "25000 LUMENS",
    power: "55 WATTS/BULB",
    colorTemperature: "PERFECT",
    warranty: "4 YEARS",
    cooling: "FANLESS",
    thermal: "HIGH PERFORMANCE THERMAL LINKS",
    construction: "PREMIUM MATERIAL CONSTRUCTION",
    beamPattern: "BEST BEAM PATTERN",
    ledType: "BRIGHTEST EMITTING LED",
  },
  {
    id: "6",
    name: "ORION SIGMA H11, H8, H9, H16",
    price: 2400.0,
    image: images.bulb6,
    brightness: "14000 LUMENS",
    power: "25 WATTS/BULB",
    colorTemperature: "ENHANCED",
    warranty: "1.5 YEARS",
    cooling: "FAN TYPE",
    thermal: "HIGH PERFORMANCE THERMAL LINKS",
    construction: "PREMIUM MATERIAL CONSTRUCTION",
    beamPattern: "BEST BEAM PATTERN",
    ledType: "BRIGHTEST EMITTING LED",
  },
  {
    id: "7",
    name: "ORION ALPHA",
    price: 3000.0,
    image: images.bulb7,
    brightness: "18000 LUMENS",
    power: "39 WATTS/BULB",
    colorTemperature: "NEAR PERFECT",
    warranty: "2 YEARS",
    cooling: "FAN TYPE",
    thermal: "HIGH PERFORMANCE THERMAL LINKS",
    construction: "PREMIUM MATERIAL CONSTRUCTION",
    beamPattern: "BEST BEAM PATTERN",
    ledType: "BRIGHTEST EMITTING LED",
  },
  {
    id: "8",
    name: "ORION ALPHA",
    price: 3000.0,
    image: images.bulb8,
    brightness: "18000 LUMENS",
    power: "39 WATTS/BULB",
    colorTemperature: "NEAR PERFECT",
    warranty: "2 YEARS",
    cooling: "FAN TYPE",
    thermal: "HIGH PERFORMANCE THERMAL LINKS",
    construction: "PREMIUM MATERIAL CONSTRUCTION",
    beamPattern: "BEST BEAM PATTERN",
    ledType: "BRIGHTEST EMITTING LED",
  },
  {
    id: "9",
    name: "ORION SIGMA 9005 HB3",
    price: 2400.0,
    image: images.bulb9,
    brightness: "14000 LUMENS",
    power: "25 WATTS/BULB",
    colorTemperature: "ENHANCED",
    warranty: "1.5 YEARS",
    cooling: "FAN TYPE",
    thermal: "HIGH PERFORMANCE THERMAL LINKS",
    construction: "PREMIUM MATERIAL CONSTRUCTION",
    beamPattern: "BEST BEAM PATTERN",
    ledType: "BRIGHTEST EMITTING LED",
  },
  {
    id: "10",
    name: "ORION MAX HVN",
    price: 7000.0,
    image: images.bulb10,
    brightness: "25000 LUMENS",
    power: "55 WATTS/BULB",
    colorTemperature: "PERFECT",
    warranty: "4 YEARS",
    cooling: "FANLESS",
    thermal: "HIGH PERFORMANCE THERMAL LINKS",
    construction: "PREMIUM MATERIAL CONSTRUCTION",
    beamPattern: "BEST BEAM PATTERN",
    ledType: "BRIGHTEST EMITTING LED",
  },
  {
    id: "11",
    name: "ORION SIGMA H3",
    price: 2400.0,
    image: images.bulb11,
    badge: "HOT",
    badgeColor: "bg-red-500",
    brightness: "14000 LUMENS",
    power: "25 WATTS/BULB",
    colorTemperature: "ENHANCED",
    warranty: "1.5 YEARS",
    cooling: "FAN TYPE",
    thermal: "HIGH PERFORMANCE THERMAL LINKS",
    construction: "PREMIUM MATERIAL CONSTRUCTION",
    beamPattern: "BEST BEAM PATTERN",
    ledType: "BRIGHTEST EMITTING LED",
  },
  {
    id: "12",
    name: "ORION ALPHA",
    price: 3000.0,
    image: images.bulb12,
    badge: "NEW",
    badgeColor: "bg-green-500",
    brightness: "18000 LUMENS",
    power: "39 WATTS/BULB",
    colorTemperature: "NEAR PERFECT",
    warranty: "2 YEARS",
    cooling: "FAN TYPE",
    thermal: "HIGH PERFORMANCE THERMAL LINKS",
    construction: "PREMIUM MATERIAL CONSTRUCTION",
    beamPattern: "BEST BEAM PATTERN",
    ledType: "BRIGHTEST EMITTING LED",
  },
  {
    id: "13",
    name: "ORION MAX HVN",
    price: 7000.0,
    image: images.bulb13,
    brightness: "25000 LUMENS",
    power: "55 WATTS/BULB",
    colorTemperature: "PERFECT",
    warranty: "4 YEARS",
    cooling: "FAN TYPE",
    thermal: "HIGH PERFORMANCE THERMAL LINKS",
    construction: "PREMIUM MATERIAL CONSTRUCTION",
    beamPattern: "BEST BEAM PATTERN",
    ledType: "BRIGHTEST EMITTING LED",
  },
  {
    id: "14",
    name: "ORION MAX HVN",
    price: 7000.0,
    image: images.bulb14,
    brightness: "25000 LUMENS",
    power: "55 WATTS/BULB",
    colorTemperature: "PERFECT",
    warranty: "4 YEARS",
    cooling: "FANLESS",
    thermal: "HIGH PERFORMANCE THERMAL LINKS",
    construction: "PREMIUM MATERIAL CONSTRUCTION",
    beamPattern: "BEST BEAM PATTERN",
    ledType: "BRIGHTEST EMITTING LED",
  },
];
