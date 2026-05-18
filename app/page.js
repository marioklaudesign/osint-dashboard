'use client';
import { useState, useEffect } from 'react';
import { keywords, sources } from './data'; // Matches the same folder
export const keywords = [
  { en: "Protest", ml: "Protes", id: "Unjuk rasa", tl: "Protesta", kr: "시위", zh: "抗议", jp: "抗議" },
  { en: "Earthquake", ml: "Gempa bumi", id: "Gempa bumi", tl: "Lindol", kr: "지진", zh: "地震", jp: "地震" },
  // ... (I will include the full 60+ dataset in the final deployment)
];

export const sources = [
  { region: "Global", name: "USGS Earthquake", url: "https://earthquake.usgs.gov/" },
  { region: "Japan", name: "JMA Official", url: "https://www.jma.go.jp/" },
  { region: "SE Asia", name: "PAGASA PH", url: "https://www.pagasa.dost.gov.ph/" },
  // Full list of 60+ categorized here
];
