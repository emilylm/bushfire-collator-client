import React from 'react';

export const STATES = {
  NSW: {
    label: "nsw",
    description: "NSW Fires"
  },
  VIC: {
    label: "vic",
    description: "VIC Fires"
  },
  AGG: {
    label: "aggregate",
    description: "Both NSW & VIC Fires"
  }
}

export const STATE_OPTIONS = [
  {value: "nsw", label: "NSW Fires"},
  {value: "vic", label: "VIC Fires"},
  {value: "aggregate", label: "Both NSW & VIC Fires"},
]
/*
export const CITY_OPTIONS = {
  {value: ""}
}*/

export const CITIES = {
  MEL: {
    name: "Melbourne",
    abr: "MEL",
    lat: -37.813629,
    lng: 144.963058
  },
  SYD: {
    name: "Sydney",
    abr: "SYD",
    lat: -33.868820,
    lng: 151.209290
  },
  BNE: {
    name: "Brisbane",
    abr: "BNE",
    lat: -27.469770,
    lng: 153.025131
  },
  PER: {
    name: "Perth",
    abr: "PER",
    lat: -31.950527,
    lng: 115.860458
  },
  ADL: {
    name: "Adelaide",
    abr: "ADL",
    lat: -34.928497,
    lng: 138.600739
  },
  DRW: {
    name: "Darwin",
    abr: "DRW",
    lat: -12.463440,
    lng: 130.845642
  },

  HBA: {
    name: "Hobart",
    abr: "HBA",
    lat: -42.882137,
    lng: 147.128553
  },
  PAR: {
    name: "Paris",
    abr: "PAR",
    lat: 48.856613,
    lng: 2.352222
  },
  LCY: {
    name: "London",
    abr: "LCY",
    lat: 51.507351,
    lng: -0.127758
  },
  NYC: {
    name: "New York City",
    abr: "NYC",
    lat: 40.712776,
    lng: -74.005974
  }
}
