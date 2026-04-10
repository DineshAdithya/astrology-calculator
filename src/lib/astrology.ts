import { 
  Observer, 
  Equator, 
  SiderealTime,
  Body,
  EclipticGeoMoon,
  Ecliptic,
  SunPosition,
  Vector,
  e_tilt,
  MakeTime
} from 'astronomy-engine';

export const RASHIS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", 
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

export const NAKSHATRAS = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha",
  "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
  "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
];

export const PLANETS = [
  "Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu", "Uranus", "Neptune", "Pluto"
];

export const DASA_LORDS = [
  "Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"
];

export const DASA_YEARS: Record<string, number> = {
  "Ketu": 7,
  "Venus": 20,
  "Sun": 6,
  "Moon": 10,
  "Mars": 7,
  "Rahu": 18,
  "Jupiter": 16,
  "Saturn": 19,
  "Mercury": 17
};

export interface PlanetPosition {
  name: string;
  longitude: number; // Tropical
  siderealLongitude: number; // Sidereal (Lahiri)
  rashi: string;
  rashiDegree: number;
  nakshatra: string;
  nakshatraLord: string;
  subLord: string;
  nakshatraPada: number;
  isRetrograde: boolean;
}

export interface BirthDetails {
  date: Date;
  latitude: number;
  longitude: number;
  timezone: number; // Offset in hours
}

// KP New Ayanamsa calculation (matches modern KP software like Astrosage better)
export function getAyanamsa(date: Date): number {
  const year = date.getUTCFullYear();
  const startOf2000 = new Date(Date.UTC(2000, 0, 1, 12, 0, 0)).getTime();
  const t = (date.getTime() - startOf2000) / (1000 * 60 * 60 * 24 * 365.242199);
  
  // KP New Ayanamsa (Khullar)
  // Value at 2000.0 is 23° 51' 11" = 23.853055
  // Annual motion is 50.238"
  return 23.853055 + t * (50.238 / 3600);
}

function getGeocentricEcliptic(body: Body, date: Date): number {
  const time = MakeTime(date);
  const observer = new Observer(0, 0, 0); // Geocentric
  // Get J2000 equatorial coordinates (ofdate=false, aberration=true)
  const eq = Equator(body, time, observer, false, true);
  
  // Convert J2000 equatorial to true ecliptic of date
  const ecl = Ecliptic(eq.vec);
  
  return (ecl.elon + 360) % 360;
}

export function calculatePlanetaryPositions(details: BirthDetails): PlanetPosition[] {
  const { date } = details;
  const time = MakeTime(date);
  const ayanamsa = getAyanamsa(date);

  const bodies = [
    { id: Body.Sun, name: "Sun" },
    { id: Body.Moon, name: "Moon" },
    { id: Body.Mars, name: "Mars" },
    { id: Body.Mercury, name: "Mercury" },
    { id: Body.Jupiter, name: "Jupiter" },
    { id: Body.Venus, name: "Venus" },
    { id: Body.Saturn, name: "Saturn" },
    { id: Body.Uranus, name: "Uranus" },
    { id: Body.Neptune, name: "Neptune" },
    { id: Body.Pluto, name: "Pluto" }
  ];

  const positions: PlanetPosition[] = bodies.map(body => {
    let lon = 0;
    if (body.id === Body.Moon) {
      lon = EclipticGeoMoon(time).lon;
    } else if (body.id === Body.Sun) {
      lon = SunPosition(time).elon;
    } else {
      lon = getGeocentricEcliptic(body.id, date);
    }

    const siderealLon = (lon - ayanamsa + 360) % 360;
    return createPlanetData(body.name, siderealLon, lon);
  });

  // Rahu/Ketu (Mean Node calculation matching image)
  const year = date.getUTCFullYear();
  const startOf2000 = new Date(2000, 0, 1, 12, 0, 0).getTime();
  const t = (date.getTime() - startOf2000) / (1000 * 60 * 60 * 24 * 36525);
  
  // Mean Node formula
  const meanNode = (125.044522 - 1934.136261 * t + 0.0020708 * t * t) % 360;
  const tropicalRahu = (meanNode + 360) % 360;
  const siderealRahu = (tropicalRahu - ayanamsa + 360) % 360;
  const siderealKetu = (siderealRahu + 180) % 360;

  positions.push(createPlanetData("Rahu", siderealRahu, tropicalRahu));
  positions.push(createPlanetData("Ketu", siderealKetu, (tropicalRahu + 180) % 360));

  return positions;
}

function createPlanetData(name: string, siderealLon: number, tropicalLon: number): PlanetPosition {
  const rashiIdx = Math.floor(siderealLon / 30);
  const rashiDegree = siderealLon % 30;
  const nakshatraIdx = Math.floor(siderealLon / (360 / 27));
  const nakshatraPada = Math.floor((siderealLon % (360 / 27)) / (360 / 27 / 4)) + 1;
  
  const nakLord = NAKSHATRA_LORDS[nakshatraIdx];
  
  // Sub Lord calculation
  const nakStart = nakshatraIdx * (360 / 27);
  const posInNak = siderealLon - nakStart;
  const subLord = calculateSubLord(posInNak, nakLord);

  return {
    name,
    longitude: tropicalLon,
    siderealLongitude: siderealLon,
    rashi: RASHIS[rashiIdx],
    rashiDegree,
    nakshatra: NAKSHATRAS[nakshatraIdx],
    nakshatraLord: nakLord,
    subLord,
    nakshatraPada,
    isRetrograde: false
  };
}

function calculateSubLord(posInNak: number, nakLord: string): string {
  const nakDuration = 360 / 27; // 13°20' = 800 minutes
  const totalDasaYears = 120;
  
  // Order of lords in Vimshottari
  const lords = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"];
  let currentIdx = lords.indexOf(nakLord);
  
  let accumulated = 0;
  for (let i = 0; i < 9; i++) {
    const lord = lords[(currentIdx + i) % 9];
    const years = DASA_YEARS[lord];
    const subDuration = (years / totalDasaYears) * nakDuration;
    
    if (posInNak >= accumulated && posInNak < accumulated + subDuration) {
      return lord;
    }
    accumulated += subDuration;
  }
  return lords[currentIdx];
}

export interface DasaPeriod {
  lord: string;
  start: Date;
  end: Date;
  level: number;
  subPeriods?: DasaPeriod[];
}

export function calculateVimshottariDasa(moonSiderealLon: number, birthDate: Date): DasaPeriod[] {
  const DAYS_IN_YEAR = 365.242199;
  const totalMinutes = moonSiderealLon * 60;
  const nakshatraMinutes = 800;
  const nakshatraIdx = Math.floor(totalMinutes / nakshatraMinutes);
  const elapsedInNakshatra = totalMinutes % nakshatraMinutes;
  
  const startLordIdx = nakshatraIdx % 9;
  const birthLord = DASA_LORDS[startLordIdx];
  const totalYears = DASA_YEARS[birthLord];
  
  const elapsedFraction = elapsedInNakshatra / nakshatraMinutes;
  const elapsedMs = totalYears * elapsedFraction * DAYS_IN_YEAR * 24 * 60 * 60 * 1000;
  
  // The first Mahadasa actually started before birth
  let currentStartDate = new Date(birthDate.getTime() - elapsedMs);
  let currentLordIdx = startLordIdx;
  
  const mahadasas: DasaPeriod[] = [];
  
  // Calculate 9 Mahadasas (total 120 years)
  for (let i = 0; i < 9; i++) {
    const lord = DASA_LORDS[currentLordIdx];
    const years = DASA_YEARS[lord];
    const durationMs = years * DAYS_IN_YEAR * 24 * 60 * 60 * 1000;
    const endDate = new Date(currentStartDate.getTime() + durationMs);
    
    const md: DasaPeriod = {
      lord,
      start: new Date(currentStartDate),
      end: new Date(endDate),
      level: 1
    };
    
    // Only calculate sub-periods if the Mahadasa is relevant (e.g., ends after birth)
    md.subPeriods = calculateSubPeriods(md, 2, currentLordIdx);
    
    mahadasas.push(md);
    
    currentStartDate = new Date(endDate);
    currentLordIdx = (currentLordIdx + 1) % 9;
  }
  
  return mahadasas;
}

function calculateSubPeriods(parent: DasaPeriod, level: number, startLordIdx: number): DasaPeriod[] {
  if (level > 5) return []; // Limit to Prana Dasa
  
  const subPeriods: DasaPeriod[] = [];
  const parentDurationMs = parent.end.getTime() - parent.start.getTime();
  let currentStartDate = new Date(parent.start);
  
  for (let i = 0; i < 9; i++) {
    const lordIdx = (startLordIdx + i) % 9;
    const lord = DASA_LORDS[lordIdx];
    const years = DASA_YEARS[lord];
    
    // Sub-period duration = Parent_Duration * (Planet_Years / 120)
    const durationMs = parentDurationMs * (years / 120);
    const endDate = new Date(currentStartDate.getTime() + durationMs);
    
    const sp: DasaPeriod = {
      lord,
      start: new Date(currentStartDate),
      end: new Date(endDate),
      level
    };
    
    // Recursive call for next level
    sp.subPeriods = calculateSubPeriods(sp, level + 1, lordIdx);
    
    subPeriods.push(sp);
    currentStartDate = new Date(endDate);
  }
  
  return subPeriods;
}

export const NAKSHATRA_LORDS = [
  "Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury",
  "Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury",
  "Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"
];

export const RASHI_LORDS: Record<string, string> = {
  "Aries": "Mars", "Taurus": "Venus", "Gemini": "Mercury", "Cancer": "Moon",
  "Leo": "Sun", "Virgo": "Mercury", "Libra": "Venus", "Scorpio": "Mars",
  "Sagittarius": "Jupiter", "Capricorn": "Saturn", "Aquarius": "Saturn", "Pisces": "Jupiter"
};

export interface HouseCusp {
  number: number;
  roman: string;
  longitude: number;
  siderealLongitude: number;
  rashi: string;
  rashiDegree: number;
}

export interface HouseSignificators {
  house: number;
  roman: string;
  level1: string[]; // Planets in star of occupants
  level2: string[]; // Occupants
  level3: string[]; // Planets in star of owner
  level4: string[]; // Owner
  all: string[];    // Combined unique significators
}

export function calculateHouseSignificators(planets: PlanetPosition[], houses: HouseCusp[]): HouseSignificators[] {
  const significators: HouseSignificators[] = [];

  // 1. Determine which house each planet occupies
  const planetOccupancy: Record<string, number> = {};
  planets.forEach(p => {
    let houseNum = 12;
    for (let i = 0; i < 11; i++) {
      const currentCusp = houses[i].siderealLongitude;
      const nextCusp = houses[i+1].siderealLongitude;
      if (nextCusp > currentCusp) {
        if (p.siderealLongitude >= currentCusp && p.siderealLongitude < nextCusp) {
          houseNum = i + 1;
          break;
        }
      } else {
        if (p.siderealLongitude >= currentCusp || p.siderealLongitude < nextCusp) {
          houseNum = i + 1;
          break;
        }
      }
    }
    planetOccupancy[p.name] = houseNum;
  });

  // 3. Calculate for each house
  houses.forEach((h, i) => {
    const houseNum = i + 1;
    const owner = RASHI_LORDS[h.rashi];
    
    const occupants = planets.filter(p => planetOccupancy[p.name] === houseNum).map(p => p.name);
    
    // Level 1: Planets in the star of occupants
    const level1 = planets.filter(p => occupants.includes(p.nakshatraLord)).map(p => p.name);
    
    // Level 2: Occupants
    const level2 = occupants;
    
    // Level 3: Planets in the star of the owner
    const level3 = planets.filter(p => p.nakshatraLord === owner).map(p => p.name);
    
    // Level 4: Owner
    const level4 = [owner];

    const all = Array.from(new Set([...level1, ...level2, ...level3, ...level4]));

    significators.push({
      house: houseNum,
      roman: h.roman,
      level1,
      level2,
      level3,
      level4,
      all
    });
  });

  return significators;
}

export interface PlanetSignificators {
  planet: string;
  step1: number[]; // Star Lord's houses
  step2: number[]; // Planet's houses
  step3: number[]; // Sub Lord's houses
  step4: number[]; // Sub Lord's Star Lord's houses
  all: number[];   // Combined (usually excluding step 3 as per user request)
}

export function calculatePlanetSignificators(planets: PlanetPosition[], houses: HouseCusp[]): PlanetSignificators[] {
  // 1. Determine which house each planet occupies
  const planetOccupancy: Record<string, number> = {};
  planets.forEach(p => {
    let houseNum = 12;
    for (let i = 0; i < 11; i++) {
      const currentCusp = houses[i].siderealLongitude;
      const nextCusp = houses[i+1].siderealLongitude;
      if (nextCusp > currentCusp) {
        if (p.siderealLongitude >= currentCusp && p.siderealLongitude < nextCusp) {
          houseNum = i + 1;
          break;
        }
      } else {
        if (p.siderealLongitude >= currentCusp || p.siderealLongitude < nextCusp) {
          houseNum = i + 1;
          break;
        }
      }
    }
    planetOccupancy[p.name] = houseNum;
  });

  // 2. Determine which houses each planet owns
  const planetOwnership: Record<string, number[]> = {};
  PLANETS.forEach(p => planetOwnership[p] = []);
  houses.forEach((h, i) => {
    const owner = RASHI_LORDS[h.rashi];
    if (planetOwnership[owner]) {
      planetOwnership[owner].push(i + 1);
    }
  });

  const getPlanetHouses = (pName: string) => {
    const occ = planetOccupancy[pName] ? [planetOccupancy[pName]] : [];
    const own = planetOwnership[pName] || [];
    return Array.from(new Set([...occ, ...own])).sort((a, b) => a - b);
  };

  const getStarLord = (pName: string) => {
    const p = planets.find(pl => pl.name === pName);
    return p ? p.nakshatraLord : "";
  };

  const getSubLord = (pName: string) => {
    const p = planets.find(pl => pl.name === pName);
    return p ? p.subLord : "";
  };

  const mainPlanets = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"];
  
  return mainPlanets.map(pName => {
    const starLord = getStarLord(pName);
    const subLord = getSubLord(pName);
    const subLordStarLord = getStarLord(subLord);

    const step1 = getPlanetHouses(starLord);
    const step2 = getPlanetHouses(pName);
    const step3 = getPlanetHouses(subLord);
    const step4 = getPlanetHouses(subLordStarLord);

    const all = Array.from(new Set([...step1, ...step2, ...step3, ...step4])).sort((a, b) => a - b);

    return {
      planet: pName,
      step1,
      step2,
      step3,
      step4,
      all
    };
  });
}

export function calculateAscendant(details: BirthDetails): number {
  const { date, longitude, latitude } = details;
  const time = MakeTime(date);
  const ayanamsa = getAyanamsa(date);
  
  // Local Sidereal Time
  const lst = SiderealTime(time) + (longitude / 15);
  const ramc = (lst * 15) % 360;
  
  // Obliquity
  const tilt = e_tilt(time);
  const eps = tilt.tobl * Math.PI / 180;
  const phi = latitude * Math.PI / 180;
  const mc_ramc = ramc * Math.PI / 180;
  
  // Ascendant formula: atan(cos(RAMC) / -(sin(RAMC)*cos(eps) + tan(phi)*sin(eps)))
  let asc = Math.atan2(Math.cos(mc_ramc), -(Math.sin(mc_ramc) * Math.cos(eps) + Math.tan(phi) * Math.sin(eps))) * 180 / Math.PI;
  
  return (asc - ayanamsa + 360) % 360;
}

export function calculateHouses(details: BirthDetails, ascendant: number): HouseCusp[] {
  const { date, longitude, latitude } = details;
  const time = MakeTime(date);
  const ayanamsa = getAyanamsa(date);
  
  const lst = SiderealTime(time) + (longitude / 15);
  const ramc = (lst * 15) % 360;
  
  const tilt = e_tilt(time);
  const eps = tilt.tobl * Math.PI / 180;
  const mc_ramc = ramc * Math.PI / 180;
  
  // Midheaven (MC)
  let mc = Math.atan2(Math.sin(mc_ramc), Math.cos(mc_ramc) * Math.cos(eps)) * 180 / Math.PI;
  mc = (mc - ayanamsa + 360) % 360;
  
  const ic = (mc + 180) % 360;
  const desc = (ascendant + 180) % 360;
  
  // Porphyry House System (Simple quadrant division)
  const q1 = (ic - ascendant + 360) % 360 / 3;
  const q2 = (desc - ic + 360) % 360 / 3;
  const q3 = (mc - desc + 360) % 360 / 3;
  const q4 = (ascendant - mc + 360) % 360 / 3;
  
  const cusps: number[] = [
    ascendant,
    (ascendant + q1) % 360,
    (ascendant + 2 * q1) % 360,
    ic,
    (ic + q2) % 360,
    (ic + 2 * q2) % 360,
    desc,
    (desc + q3) % 360,
    (desc + 2 * q3) % 360,
    mc,
    (mc + q4) % 360,
    (mc + 2 * q4) % 360
  ];
  
  const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  
  return cusps.map((c, i) => {
    const rashiIdx = Math.floor(c / 30);
    return {
      number: i + 1,
      roman: roman[i],
      longitude: c + ayanamsa, // Tropical approx
      siderealLongitude: c,
      rashi: RASHIS[rashiIdx],
      rashiDegree: c % 30
    };
  });
}
