export interface LifeEvent {
  date: string;
  title: string;
  description: string;
}

export interface AstroProfile {
  id: string;
  name: string;
  birthDate: {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
  };
  latitude: number;
  longitude: number;
  timezone: number;
  locationName: string;
  roddenRating: 'AA' | 'A' | 'B' | 'C' | 'DD' | 'XX';
  timeSource: string;
  biography: string;
  keyEvents: LifeEvent[];
  categories: string[];
  sourceUrl: string;
}

export const PRELOADED_PROFILES: AstroProfile[] = [
  {
    "id": "einstein-albert",
    "name": "Albert Einstein",
    "birthDate": {
      "year": 1879,
      "month": 2,
      "day": 14,
      "hour": 11,
      "minute": 30
    },
    "latitude": 48.4011,
    "longitude": 9.9876,
    "timezone": 0.6667,
    "locationName": "Ulm, Germany",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Einstein,_Albert",
    "categories": [
      "Science",
      "Intellectual",
      "Humanitarian"
    ],
    "biography": "### The Architect of Modern Physics\nAlbert Einstein was one of the most influential physicists of all time, best known for developing the theory of relativity.\n\n### Early Life & Breakthroughs\nBorn in Ulm, Germany, Einstein grew up in a secular Jewish family. While legends claim he was a poor student, he actually excelled in mathematics and physics from a young age. In 1905, often referred to as his *Annus Mirabilis* (Miracle Year), while working as a patent clerk in Bern, Switzerland, he published four groundbreaking papers:\n1. **The Photoelectric Effect:** Proposed that light consists of packets of energy (photons), earning him the Nobel Prize.\n2. **Brownian Motion:** Offered empirical proof of the existence of atoms.\n3. **Special Relativity:** Introduced the concept of spacetime, asserting that the speed of light is constant and time is relative.\n4. **Mass-Energy Equivalence:** Derived the famous formula $E=mc^2$.\n",
    "keyEvents": [
      {
        "date": "1879-03-14",
        "title": "Birth",
        "description": "Born in Ulm, Germany at 11:30 AM."
      },
      {
        "date": "1903-01-06",
        "title": "Marriage",
        "description": "Married Mileva Marić, a fellow physicist."
      },
      {
        "date": "1905-06-09",
        "title": "Annus Mirabilis Papers",
        "description": "Published papers on relativity and quantum mechanics."
      },
      {
        "date": "1921-11-09",
        "title": "Nobel Prize",
        "description": "Awarded the Nobel Prize in Physics."
      },
      {
        "date": "1933-10-17",
        "title": "Emigration",
        "description": "Fled Nazi Germany and arrived in the United States."
      },
      {
        "date": "1955-04-18",
        "title": "Passing",
        "description": "Passed away in Princeton, New Jersey."
      }
    ]
  },
  {
    "id": "jobs-steve",
    "name": "Steve Jobs",
    "birthDate": {
      "year": 1955,
      "month": 1,
      "day": 24,
      "hour": 19,
      "minute": 15
    },
    "latitude": 37.7749,
    "longitude": -122.4194,
    "timezone": -8,
    "locationName": "San Francisco, CA, USA",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Jobs,_Steve",
    "categories": [
      "Business",
      "Tech",
      "Visionary"
    ],
    "biography": "### The Digital Revolutionary\nSteve Jobs was the co-founder, chairman, and CEO of Apple Inc. He is widely recognized as a pioneer of the personal computer revolution.\n\n### Apple & Pixar\nAdopted at birth, Jobs grew up in California's Silicon Valley. In 1976, he and Wozniak founded Apple in Jobs' family garage. After a power struggle with CEO John Sculley, Jobs was forced out of Apple in 1985. In response, he founded **NeXT** and funded **Pixar Animation Studios**, producing *Toy Story* in 1995.\n\n### The Great Return\nIn 1997, Apple acquired NeXT, bringing Jobs back as CEO. He oversaw an unprecedented renaissance, launching the iMac, iPod, iTunes, iPhone, and iPad.\n",
    "keyEvents": [
      {
        "date": "1955-02-24",
        "title": "Birth",
        "description": "Born in San Francisco, California."
      },
      {
        "date": "1976-04-01",
        "title": "Apple Co-founded",
        "description": "Founded Apple Computer with Steve Wozniak."
      },
      {
        "date": "1985-09-17",
        "title": "Resignation",
        "description": "Forced out of Apple; founded NeXT."
      },
      {
        "date": "1995-11-22",
        "title": "Toy Story Premiere",
        "description": "Pixar released Toy Story."
      },
      {
        "date": "2007-01-09",
        "title": "iPhone Unveiling",
        "description": "Announced the first iPhone."
      },
      {
        "date": "2011-10-05",
        "title": "Passing",
        "description": "Passed away in Palo Alto, California."
      }
    ]
  },
  {
    "id": "diana-princess",
    "name": "Princess Diana",
    "birthDate": {
      "year": 1961,
      "month": 6,
      "day": 1,
      "hour": 19,
      "minute": 45
    },
    "latitude": 52.83,
    "longitude": 0.47,
    "timezone": 1,
    "locationName": "Sandringham, England",
    "roddenRating": "A",
    "timeSource": "Memory of Mother",
    "sourceUrl": "https://www.astro.com/astro-databank/Diana,_Princess_of_Wales",
    "categories": [
      "Royalty",
      "Humanitarian",
      "Icon"
    ],
    "biography": "### The People's Princess\nDiana, Princess of Wales, was a member of the British royal family. Her activism and glamour made her an international icon and earned her enduring popularity.\n\n### Marriage & Advocacy\nShe married Prince Charles in 1981 at St Paul's Cathedral. Diana became renowned for her hands-on charity work, famously shaking hands with AIDS patients in 1987 without gloves. She also campaigned heavily for the ban of landmines.\n",
    "keyEvents": [
      {
        "date": "1961-07-01",
        "title": "Birth",
        "description": "Born in Sandringham, Norfolk."
      },
      {
        "date": "1981-07-29",
        "title": "Royal Wedding",
        "description": "Married Charles, Prince of Wales."
      },
      {
        "date": "1982-06-21",
        "title": "Birth of Prince William",
        "description": "Gave birth to the future heir."
      },
      {
        "date": "1984-09-15",
        "title": "Birth of Prince Harry",
        "description": "Gave birth to her second son."
      },
      {
        "date": "1996-08-28",
        "title": "Divorce Finalized",
        "description": "Divorced Prince Charles."
      },
      {
        "date": "1997-08-31",
        "title": "Tragic Accident",
        "description": "Died following a car crash in Paris."
      }
    ]
  },
  {
    "id": "gandhi-mahatma",
    "name": "Mahatma Gandhi",
    "birthDate": {
      "year": 1869,
      "month": 9,
      "day": 2,
      "hour": 7,
      "minute": 8
    },
    "latitude": 21.6417,
    "longitude": 69.6293,
    "timezone": 4.6419,
    "locationName": "Porbandar, India",
    "roddenRating": "C",
    "timeSource": "Astrological Rectification",
    "sourceUrl": "https://www.astro.com/astro-databank/Gandhi,_Mahatma",
    "categories": [
      "Leader",
      "Spiritual",
      "Humanitarian"
    ],
    "biography": "### The Apostle of Nonviolence\nMohandas Karamchand Gandhi was an Indian lawyer and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule.\n\n### Satyagraha & Independence\nHe developed *Satyagraha* (truth-force)—a philosophy of nonviolent civil disobedience—in South Africa. Returning to India in 1915, he led campaigns for self-rule (*Swaraj*), culminating in independence in August 1947.\n",
    "keyEvents": [
      {
        "date": "1869-10-02",
        "title": "Birth",
        "description": "Born in Porbandar, British India."
      },
      {
        "date": "1883-05-00",
        "title": "Marriage",
        "description": "Married Kasturba Kapadia."
      },
      {
        "date": "1893-05-24",
        "title": "South Africa",
        "description": "Arrived in South Africa."
      },
      {
        "date": "1915-01-09",
        "title": "Return",
        "description": "Returned to India permanently."
      },
      {
        "date": "1930-03-12",
        "title": "Salt March",
        "description": "Began the Salt Satyagraha protest."
      },
      {
        "date": "1948-01-30",
        "title": "Assassination",
        "description": "Assassinated by Nathuram Godse."
      }
    ]
  },
  {
    "id": "obama-barack",
    "name": "Barack Obama",
    "birthDate": {
      "year": 1961,
      "month": 7,
      "day": 4,
      "hour": 19,
      "minute": 24
    },
    "latitude": 21.3069,
    "longitude": -157.8583,
    "timezone": -10,
    "locationName": "Honolulu, HI, USA",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Obama,_Barack",
    "categories": [
      "Leader",
      "Politics",
      "Law"
    ],
    "biography": "### Historic U.S. President\nBarack Obama served as the 44th president of the United States from 2009 to 2017, becoming the first African-American president.\n\n### Career & Presidency\nA Harvard Law graduate, he worked as a community organizer, civil rights attorney, and constitutional law professor before entering politics. He signed the **Affordable Care Act** and was awarded the **Nobel Peace Prize** in 2009.\n",
    "keyEvents": [
      {
        "date": "1961-08-04",
        "title": "Birth",
        "description": "Born in Honolulu, Hawaii."
      },
      {
        "date": "1992-10-03",
        "title": "Marriage",
        "description": "Married Michelle Robinson."
      },
      {
        "date": "2008-11-04",
        "title": "Election",
        "description": "Elected President of the United States."
      },
      {
        "date": "2009-10-09",
        "title": "Nobel Prize",
        "description": "Awarded the Nobel Peace Prize."
      }
    ]
  },
  {
    "id": "monroe-marilyn",
    "name": "Marilyn Monroe",
    "birthDate": {
      "year": 1926,
      "month": 5,
      "day": 1,
      "hour": 9,
      "minute": 30
    },
    "latitude": 34.0522,
    "longitude": -118.2437,
    "timezone": -8,
    "locationName": "Los Angeles, CA, USA",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Monroe,_Marilyn",
    "categories": [
      "Icon",
      "Arts",
      "Glamour"
    ],
    "biography": "### Hollywood Icon\nMarilyn Monroe was an American actress, model, and singer who became a major pop culture icon and sex symbol of the 1950s and early 1960s.\n\n### Breakthrough & Fame\nShe starred in hits like *Gentlemen Prefer Blondes* (1953) and *Some Like It Hot* (1959). Monroe struggled with addiction and mental health issues, dying at age 36.\n",
    "keyEvents": [
      {
        "date": "1926-06-01",
        "title": "Birth",
        "description": "Born in Los Angeles General Hospital."
      },
      {
        "date": "1942-06-19",
        "title": "Marriage",
        "description": "Married James Dougherty."
      },
      {
        "date": "1953-07-01",
        "title": "Stardom",
        "description": "Gentlemen Prefer Blondes premiered."
      },
      {
        "date": "1962-08-05",
        "title": "Passing",
        "description": "Passed away from acute barbiturate poisoning."
      }
    ]
  },
  {
    "id": "musk-elon",
    "name": "Elon Musk",
    "birthDate": {
      "year": 1971,
      "month": 5,
      "day": 28,
      "hour": 7,
      "minute": 30
    },
    "latitude": -25.7479,
    "longitude": 28.2293,
    "timezone": 2,
    "locationName": "Pretoria, South Africa",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Musk,_Elon",
    "categories": [
      "Business",
      "Tech",
      "Space"
    ],
    "biography": "### Entrepreneur of the Space Age\nElon Musk is the CEO of SpaceX and Tesla, owner of X (Twitter), and founder of Boring Company, Neuralink, and xAI.\n\n### Tech Innovations\nBorn in South Africa, he co-founded Zip2 and PayPal before building SpaceX with the goal of colonizing Mars. He also accelerated the transition to electric vehicles with Tesla.\n",
    "keyEvents": [
      {
        "date": "1971-06-28",
        "title": "Birth",
        "description": "Born in Pretoria, South Africa."
      },
      {
        "date": "2002-05-06",
        "title": "SpaceX",
        "description": "Founded SpaceX."
      },
      {
        "date": "2004-02-00",
        "title": "Tesla",
        "description": "Invested in Tesla Motors, becoming Chairman."
      },
      {
        "date": "2022-10-27",
        "title": "Twitter Buyout",
        "description": "Acquired Twitter for $44 billion."
      }
    ]
  },
  {
    "id": "curie-marie",
    "name": "Marie Curie",
    "birthDate": {
      "year": 1867,
      "month": 10,
      "day": 7,
      "hour": 12,
      "minute": 0
    },
    "latitude": 52.2297,
    "longitude": 21.0122,
    "timezone": 1.401,
    "locationName": "Warsaw, Poland",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Curie,_Marie",
    "categories": [
      "Science",
      "Intellectual",
      "Pioneer"
    ],
    "biography": "### Double Nobel Laureate\nMarie Curie was a Polish-French physicist and chemist who conducted pioneering research on radioactivity, discovering Polonium and Radium.\n\n### Academic Breakthroughs\nShe was the first woman to win a Nobel Prize, the only woman to win twice, and the only person to win a Nobel in two different scientific fields (Physics and Chemistry).\n",
    "keyEvents": [
      {
        "date": "1867-11-07",
        "title": "Birth",
        "description": "Born in Warsaw, Poland."
      },
      {
        "date": "1895-07-26",
        "title": "Marriage",
        "description": "Married Pierre Curie."
      },
      {
        "date": "1898-12-21",
        "title": "Radium",
        "description": "Discovered Radium and Polonium."
      },
      {
        "date": "1903-12-10",
        "title": "Nobel in Physics",
        "description": "Shared Nobel Prize in Physics."
      },
      {
        "date": "1911-12-10",
        "title": "Nobel in Chemistry",
        "description": "Awarded Nobel Prize in Chemistry."
      },
      {
        "date": "1934-07-04",
        "title": "Passing",
        "description": "Died from radiation exposure."
      }
    ]
  },
  {
    "id": "gates-bill",
    "name": "Bill Gates",
    "birthDate": {
      "year": 1955,
      "month": 9,
      "day": 28,
      "hour": 22,
      "minute": 0
    },
    "latitude": 47.6062,
    "longitude": -122.3321,
    "timezone": -8,
    "locationName": "Seattle, WA, USA",
    "roddenRating": "A",
    "timeSource": "Memory of Father",
    "sourceUrl": "https://www.astro.com/astro-databank/Gates,_Bill",
    "categories": [
      "Business",
      "Tech",
      "Humanitarian"
    ],
    "biography": "### Founder of Microsoft\nBill Gates is an American software developer and philanthropist. He co-founded Microsoft Corporation and led it to dominate the PC operating system market.\n\n### Philanthropy\nIn 2000, he stepped down as CEO of Microsoft to focus on the Bill & Melinda Gates Foundation, dedicating his wealth to global health and development.\n",
    "keyEvents": [
      {
        "date": "1955-10-28",
        "title": "Birth",
        "description": "Born in Seattle, Washington."
      },
      {
        "date": "1975-04-04",
        "title": "Microsoft",
        "description": "Founded Microsoft with Paul Allen."
      },
      {
        "date": "1985-11-20",
        "title": "Windows",
        "description": "Released Windows 1.0."
      },
      {
        "date": "2008-06-27",
        "title": "Foundation",
        "description": "Transitioned to full-time philanthropic work."
      }
    ]
  },
  {
    "id": "da-vinci-leonardo",
    "name": "Leonardo da Vinci",
    "birthDate": {
      "year": 1452,
      "month": 3,
      "day": 23,
      "hour": 21,
      "minute": 40
    },
    "latitude": 43.7833,
    "longitude": 10.9167,
    "timezone": 0.7278,
    "locationName": "Vinci, Italy",
    "roddenRating": "AA",
    "timeSource": "Diary of Grandfather",
    "sourceUrl": "https://www.astro.com/astro-databank/Da_Vinci,_Leonardo",
    "categories": [
      "Arts",
      "Intellectual",
      "Visionary"
    ],
    "biography": "### The Universal Renaissance Man\nLeonardo da Vinci was an Italian polymath active as a painter, sculptor, architect, engineer, and scientist. He is widely considered one of the greatest painters in history.\n\n### Art & Science\nHe painted the *Mona Lisa* and *The Last Supper*. His notebooks contain drawings of flying machines, anatomy, and engineering designs centuries ahead of their time.\n",
    "keyEvents": [
      {
        "date": "1452-04-23",
        "title": "Birth",
        "description": "Born in Vinci, Italy."
      },
      {
        "date": "1498-00-00",
        "title": "The Last Supper",
        "description": "Completed his legendary mural."
      },
      {
        "date": "1503-00-00",
        "title": "Mona Lisa",
        "description": "Began painting the portrait."
      },
      {
        "date": "1519-05-02",
        "title": "Passing",
        "description": "Passed away in France."
      }
    ]
  },
  {
    "id": "streep-meryl",
    "name": "Meryl Streep",
    "birthDate": {
      "year": 1949,
      "month": 5,
      "day": 22,
      "hour": 8,
      "minute": 5
    },
    "latitude": 40.7184,
    "longitude": -74.3582,
    "timezone": -4,
    "locationName": "Summit, NJ, USA",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Streep,_Meryl",
    "categories": [
      "Arts",
      "Icon",
      "Glamour"
    ],
    "biography": "### Acclaimed Actress\nMeryl Streep is an American actress known for her versatility and accent adaptation. She is widely regarded as one of the greatest screen actresses.\n\n### Academy Success\nShe holds the record for the most Academy Award nominations (21), winning three Oscars for *Kramer vs. Kramer*, *Sophie's Choice*, and *The Iron Lady*.\n",
    "keyEvents": [
      {
        "date": "1949-06-22",
        "title": "Birth",
        "description": "Born in Summit, New Jersey."
      },
      {
        "date": "1979-12-19",
        "title": "First Oscar",
        "description": "Won Best Supporting Actress for Kramer vs. Kramer."
      },
      {
        "date": "1982-12-10",
        "title": "Sophie's Choice",
        "description": "Won Best Actress Oscar."
      },
      {
        "date": "2011-12-30",
        "title": "The Iron Lady",
        "description": "Won third Oscar."
      }
    ]
  },
  {
    "id": "ali-muhammad",
    "name": "Muhammad Ali",
    "birthDate": {
      "year": 1942,
      "month": 0,
      "day": 17,
      "hour": 18,
      "minute": 35
    },
    "latitude": 38.2527,
    "longitude": -85.7585,
    "timezone": -6,
    "locationName": "Louisville, KY, USA",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Ali,_Muhammad",
    "categories": [
      "Sports",
      "Leader",
      "Humanitarian"
    ],
    "biography": "### The Greatest\nMuhammad Ali was an American professional boxer and activist. He is widely regarded as one of the most significant sports figures of the 20th century.\n\n### Athletics & Activism\nA three-time world heavyweight champion, Ali also famously refused draft induction into the US military during the Vietnam War, advocating for civil rights and racial justice.\n",
    "keyEvents": [
      {
        "date": "1942-01-17",
        "title": "Birth",
        "description": "Born in Louisville, Kentucky."
      },
      {
        "date": "1960-09-05",
        "title": "Olympic Gold",
        "description": "Won gold in Rome."
      },
      {
        "date": "1964-02-25",
        "title": "World Champion",
        "description": "Defeated Sonny Liston."
      },
      {
        "date": "1967-04-28",
        "title": "Draft Refusal",
        "description": "Refused military induction."
      },
      {
        "date": "2016-06-03",
        "title": "Passing",
        "description": "Passed away in Scottsdale, Arizona."
      }
    ]
  },
  {
    "id": "winston-churchill",
    "name": "Winston Churchill",
    "birthDate": {
      "year": 1874,
      "month": 10,
      "day": 30,
      "hour": 1,
      "minute": 30
    },
    "latitude": 51.84,
    "longitude": -1.35,
    "timezone": 0,
    "locationName": "Winston Churchill Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Winston_Churchill",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About Winston Churchill\nWinston Churchill is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on November 30, 1874 at 01:30 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1874-11-30",
        "title": "Birth",
        "description": "Born in location coordinates (51.84°, -1.35°)"
      }
    ]
  },
  {
    "id": "abraham-lincoln",
    "name": "Abraham Lincoln",
    "birthDate": {
      "year": 1809,
      "month": 1,
      "day": 12,
      "hour": 6,
      "minute": 54
    },
    "latitude": 37.57,
    "longitude": -85.74,
    "timezone": -5.7,
    "locationName": "Abraham Lincoln Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Abraham_Lincoln",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About Abraham Lincoln\nAbraham Lincoln is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on February 12, 1809 at 06:54 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1809-02-12",
        "title": "Birth",
        "description": "Born in location coordinates (37.57°, -85.74°)"
      }
    ]
  },
  {
    "id": "martin-luther-king-jr-",
    "name": "Martin Luther King Jr.",
    "birthDate": {
      "year": 1929,
      "month": 0,
      "day": 15,
      "hour": 12,
      "minute": 0
    },
    "latitude": 33.75,
    "longitude": -84.39,
    "timezone": -5,
    "locationName": "Martin Luther King Jr. Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Martin_Luther_King_Jr.",
    "categories": [
      "Leader",
      "Humanitarian"
    ],
    "biography": "### About Martin Luther King Jr.\nMartin Luther King Jr. is a renowned figure in the category of Leader & Humanitarian.\n\n### Life & Astrology Details\nBorn on January 15, 1929 at 12:00 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1929-01-15",
        "title": "Birth",
        "description": "Born in location coordinates (33.75°, -84.39°)"
      }
    ]
  },
  {
    "id": "queen-elizabeth-ii",
    "name": "Queen Elizabeth II",
    "birthDate": {
      "year": 1926,
      "month": 3,
      "day": 21,
      "hour": 2,
      "minute": 40
    },
    "latitude": 51.51,
    "longitude": -0.14,
    "timezone": 0,
    "locationName": "Queen Elizabeth II Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Queen_Elizabeth_II",
    "categories": [
      "Royalty",
      "Icon"
    ],
    "biography": "### About Queen Elizabeth II\nQueen Elizabeth II is a renowned figure in the category of Royalty & Icon.\n\n### Life & Astrology Details\nBorn on April 21, 1926 at 02:40 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1926-04-21",
        "title": "Birth",
        "description": "Born in location coordinates (51.51°, -0.14°)"
      }
    ]
  },
  {
    "id": "elvis-presley",
    "name": "Elvis Presley",
    "birthDate": {
      "year": 1935,
      "month": 0,
      "day": 8,
      "hour": 4,
      "minute": 35
    },
    "latitude": 34.26,
    "longitude": -88.7,
    "timezone": -6,
    "locationName": "Elvis Presley Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Elvis_Presley",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Elvis Presley\nElvis Presley is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on January 8, 1935 at 04:35 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1935-01-08",
        "title": "Birth",
        "description": "Born in location coordinates (34.26°, -88.7°)"
      }
    ]
  },
  {
    "id": "john-lennon",
    "name": "John Lennon",
    "birthDate": {
      "year": 1940,
      "month": 9,
      "day": 9,
      "hour": 6,
      "minute": 30
    },
    "latitude": 53.41,
    "longitude": -2.98,
    "timezone": 1,
    "locationName": "John Lennon Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/John_Lennon",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About John Lennon\nJohn Lennon is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on October 9, 1940 at 06:30 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1940-10-09",
        "title": "Birth",
        "description": "Born in location coordinates (53.41°, -2.98°)"
      }
    ]
  },
  {
    "id": "wolfgang-amadeus-mozart",
    "name": "Wolfgang Amadeus Mozart",
    "birthDate": {
      "year": 1756,
      "month": 0,
      "day": 27,
      "hour": 20,
      "minute": 0
    },
    "latitude": 47.8,
    "longitude": 13.04,
    "timezone": 0.87,
    "locationName": "Wolfgang Amadeus Mozart Birth Place",
    "roddenRating": "A",
    "timeSource": "Family Diary",
    "sourceUrl": "https://www.astro.com/astro-databank/Wolfgang_Amadeus_Mozart",
    "categories": [
      "Arts",
      "Intellectual"
    ],
    "biography": "### About Wolfgang Amadeus Mozart\nWolfgang Amadeus Mozart is a renowned figure in the category of Arts & Intellectual.\n\n### Life & Astrology Details\nBorn on January 27, 1756 at 20:00 under the Rodden Rating **A** (sourced from Family Diary).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1756-01-27",
        "title": "Birth",
        "description": "Born in location coordinates (47.8°, 13.04°)"
      }
    ]
  },
  {
    "id": "vincent-van-gogh",
    "name": "Vincent van Gogh",
    "birthDate": {
      "year": 1853,
      "month": 2,
      "day": 30,
      "hour": 11,
      "minute": 0
    },
    "latitude": 51.47,
    "longitude": 4.66,
    "timezone": 0.31,
    "locationName": "Vincent van Gogh Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Vincent_van_Gogh",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Vincent van Gogh\nVincent van Gogh is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on March 30, 1853 at 11:00 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1853-03-30",
        "title": "Birth",
        "description": "Born in location coordinates (51.47°, 4.66°)"
      }
    ]
  },
  {
    "id": "stephen-hawking",
    "name": "Stephen Hawking",
    "birthDate": {
      "year": 1942,
      "month": 0,
      "day": 8,
      "hour": 3,
      "minute": 30
    },
    "latitude": 51.75,
    "longitude": -1.26,
    "timezone": 1,
    "locationName": "Stephen Hawking Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Stephen_Hawking",
    "categories": [
      "Science",
      "Intellectual"
    ],
    "biography": "### About Stephen Hawking\nStephen Hawking is a renowned figure in the category of Science & Intellectual.\n\n### Life & Astrology Details\nBorn on January 8, 1942 at 03:30 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1942-01-08",
        "title": "Birth",
        "description": "Born in location coordinates (51.75°, -1.26°)"
      }
    ]
  },
  {
    "id": "nikola-tesla",
    "name": "Nikola Tesla",
    "birthDate": {
      "year": 1856,
      "month": 6,
      "day": 10,
      "hour": 0,
      "minute": 0
    },
    "latitude": 44.56,
    "longitude": 15.24,
    "timezone": 1,
    "locationName": "Nikola Tesla Birth Place",
    "roddenRating": "B",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Nikola_Tesla",
    "categories": [
      "Science",
      "Intellectual"
    ],
    "biography": "### About Nikola Tesla\nNikola Tesla is a renowned figure in the category of Science & Intellectual.\n\n### Life & Astrology Details\nBorn on July 10, 1856 at 00:00 under the Rodden Rating **B** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1856-07-10",
        "title": "Birth",
        "description": "Born in location coordinates (44.56°, 15.24°)"
      }
    ]
  },
  {
    "id": "sigmund-freud",
    "name": "Sigmund Freud",
    "birthDate": {
      "year": 1856,
      "month": 4,
      "day": 6,
      "hour": 18,
      "minute": 30
    },
    "latitude": 49.64,
    "longitude": 18.14,
    "timezone": 1.21,
    "locationName": "Sigmund Freud Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Sigmund_Freud",
    "categories": [
      "Science",
      "Intellectual"
    ],
    "biography": "### About Sigmund Freud\nSigmund Freud is a renowned figure in the category of Science & Intellectual.\n\n### Life & Astrology Details\nBorn on May 6, 1856 at 18:30 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1856-05-06",
        "title": "Birth",
        "description": "Born in location coordinates (49.64°, 18.14°)"
      }
    ]
  },
  {
    "id": "carl-jung",
    "name": "Carl Jung",
    "birthDate": {
      "year": 1875,
      "month": 6,
      "day": 26,
      "hour": 19,
      "minute": 29
    },
    "latitude": 47.6,
    "longitude": 9.32,
    "timezone": 0.62,
    "locationName": "Carl Jung Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Carl_Jung",
    "categories": [
      "Science",
      "Intellectual"
    ],
    "biography": "### About Carl Jung\nCarl Jung is a renowned figure in the category of Science & Intellectual.\n\n### Life & Astrology Details\nBorn on July 26, 1875 at 19:29 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1875-07-26",
        "title": "Birth",
        "description": "Born in location coordinates (47.6°, 9.32°)"
      }
    ]
  },
  {
    "id": "nelson-mandela",
    "name": "Nelson Mandela",
    "birthDate": {
      "year": 1918,
      "month": 6,
      "day": 18,
      "hour": 14,
      "minute": 45
    },
    "latitude": -31.95,
    "longitude": 28.5,
    "timezone": 2,
    "locationName": "Nelson Mandela Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Nelson_Mandela",
    "categories": [
      "Leader",
      "Humanitarian"
    ],
    "biography": "### About Nelson Mandela\nNelson Mandela is a renowned figure in the category of Leader & Humanitarian.\n\n### Life & Astrology Details\nBorn on July 18, 1918 at 14:45 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1918-07-18",
        "title": "Birth",
        "description": "Born in location coordinates (-31.95°, 28.5°)"
      }
    ]
  },
  {
    "id": "neil-armstrong",
    "name": "Neil Armstrong",
    "birthDate": {
      "year": 1930,
      "month": 7,
      "day": 5,
      "hour": 0,
      "minute": 31
    },
    "latitude": 40.57,
    "longitude": -84.2,
    "timezone": -5,
    "locationName": "Neil Armstrong Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Neil_Armstrong",
    "categories": [
      "Science",
      "Pioneer"
    ],
    "biography": "### About Neil Armstrong\nNeil Armstrong is a renowned figure in the category of Science & Pioneer.\n\n### Life & Astrology Details\nBorn on August 5, 1930 at 00:31 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1930-08-05",
        "title": "Birth",
        "description": "Born in location coordinates (40.57°, -84.2°)"
      }
    ]
  },
  {
    "id": "john-f--kennedy",
    "name": "John F. Kennedy",
    "birthDate": {
      "year": 1917,
      "month": 4,
      "day": 29,
      "hour": 15,
      "minute": 0
    },
    "latitude": 42.33,
    "longitude": -71.12,
    "timezone": -5,
    "locationName": "John F. Kennedy Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/John_F._Kennedy",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About John F. Kennedy\nJohn F. Kennedy is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on May 29, 1917 at 15:00 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1917-05-29",
        "title": "Birth",
        "description": "Born in location coordinates (42.33°, -71.12°)"
      }
    ]
  },
  {
    "id": "oprah-winfrey",
    "name": "Oprah Winfrey",
    "birthDate": {
      "year": 1954,
      "month": 0,
      "day": 29,
      "hour": 4,
      "minute": 30
    },
    "latitude": 33.06,
    "longitude": -89.58,
    "timezone": -6,
    "locationName": "Oprah Winfrey Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Oprah_Winfrey",
    "categories": [
      "Arts",
      "Business"
    ],
    "biography": "### About Oprah Winfrey\nOprah Winfrey is a renowned figure in the category of Arts & Business.\n\n### Life & Astrology Details\nBorn on January 29, 1954 at 04:30 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1954-01-29",
        "title": "Birth",
        "description": "Born in location coordinates (33.06°, -89.58°)"
      }
    ]
  },
  {
    "id": "warren-buffett",
    "name": "Warren Buffett",
    "birthDate": {
      "year": 1930,
      "month": 7,
      "day": 30,
      "hour": 15,
      "minute": 0
    },
    "latitude": 41.26,
    "longitude": -96.01,
    "timezone": -6,
    "locationName": "Warren Buffett Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Warren_Buffett",
    "categories": [
      "Business",
      "Intellectual"
    ],
    "biography": "### About Warren Buffett\nWarren Buffett is a renowned figure in the category of Business & Intellectual.\n\n### Life & Astrology Details\nBorn on August 30, 1930 at 15:00 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1930-08-30",
        "title": "Birth",
        "description": "Born in location coordinates (41.26°, -96.01°)"
      }
    ]
  },
  {
    "id": "margaret-thatcher",
    "name": "Margaret Thatcher",
    "birthDate": {
      "year": 1925,
      "month": 9,
      "day": 13,
      "hour": 9,
      "minute": 0
    },
    "latitude": 52.91,
    "longitude": -0.64,
    "timezone": 1,
    "locationName": "Margaret Thatcher Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Margaret_Thatcher",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About Margaret Thatcher\nMargaret Thatcher is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on October 13, 1925 at 09:00 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1925-10-13",
        "title": "Birth",
        "description": "Born in location coordinates (52.91°, -0.64°)"
      }
    ]
  },
  {
    "id": "george-washington",
    "name": "George Washington",
    "birthDate": {
      "year": 1732,
      "month": 1,
      "day": 22,
      "hour": 10,
      "minute": 0
    },
    "latitude": 38.19,
    "longitude": -76.92,
    "timezone": -5.1,
    "locationName": "George Washington Birth Place",
    "roddenRating": "B",
    "timeSource": "Historical Record",
    "sourceUrl": "https://www.astro.com/astro-databank/George_Washington",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About George Washington\nGeorge Washington is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on February 22, 1732 at 10:00 under the Rodden Rating **B** (sourced from Historical Record).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1732-02-22",
        "title": "Birth",
        "description": "Born in location coordinates (38.19°, -76.92°)"
      }
    ]
  },
  {
    "id": "napoleon-bonaparte",
    "name": "Napoleon Bonaparte",
    "birthDate": {
      "year": 1769,
      "month": 7,
      "day": 15,
      "hour": 11,
      "minute": 30
    },
    "latitude": 41.93,
    "longitude": 8.74,
    "timezone": 0.58,
    "locationName": "Napoleon Bonaparte Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Napoleon_Bonaparte",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About Napoleon Bonaparte\nNapoleon Bonaparte is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on August 15, 1769 at 11:30 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1769-08-15",
        "title": "Birth",
        "description": "Born in location coordinates (41.93°, 8.74°)"
      }
    ]
  },
  {
    "id": "walt-disney",
    "name": "Walt Disney",
    "birthDate": {
      "year": 1901,
      "month": 11,
      "day": 5,
      "hour": 0,
      "minute": 35
    },
    "latitude": 41.87,
    "longitude": -87.62,
    "timezone": -6,
    "locationName": "Walt Disney Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Walt_Disney",
    "categories": [
      "Business",
      "Arts"
    ],
    "biography": "### About Walt Disney\nWalt Disney is a renowned figure in the category of Business & Arts.\n\n### Life & Astrology Details\nBorn on December 5, 1901 at 00:35 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1901-12-05",
        "title": "Birth",
        "description": "Born in location coordinates (41.87°, -87.62°)"
      }
    ]
  },
  {
    "id": "mark-zuckerberg",
    "name": "Mark Zuckerberg",
    "birthDate": {
      "year": 1984,
      "month": 4,
      "day": 14,
      "hour": 14,
      "minute": 46
    },
    "latitude": 41.03,
    "longitude": -73.76,
    "timezone": -4,
    "locationName": "Mark Zuckerberg Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Mark_Zuckerberg",
    "categories": [
      "Business",
      "Tech"
    ],
    "biography": "### About Mark Zuckerberg\nMark Zuckerberg is a renowned figure in the category of Business & Tech.\n\n### Life & Astrology Details\nBorn on May 14, 1984 at 14:46 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1984-05-14",
        "title": "Birth",
        "description": "Born in location coordinates (41.03°, -73.76°)"
      }
    ]
  },
  {
    "id": "jeff-bezos",
    "name": "Jeff Bezos",
    "birthDate": {
      "year": 1964,
      "month": 0,
      "day": 12,
      "hour": 11,
      "minute": 33
    },
    "latitude": 35.08,
    "longitude": -106.65,
    "timezone": -7,
    "locationName": "Jeff Bezos Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Jeff_Bezos",
    "categories": [
      "Business",
      "Tech"
    ],
    "biography": "### About Jeff Bezos\nJeff Bezos is a renowned figure in the category of Business & Tech.\n\n### Life & Astrology Details\nBorn on January 12, 1964 at 11:33 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1964-01-12",
        "title": "Birth",
        "description": "Born in location coordinates (35.08°, -106.65°)"
      }
    ]
  },
  {
    "id": "tiger-woods",
    "name": "Tiger Woods",
    "birthDate": {
      "year": 1975,
      "month": 11,
      "day": 30,
      "hour": 22,
      "minute": 50
    },
    "latitude": 33.77,
    "longitude": -118.19,
    "timezone": -8,
    "locationName": "Tiger Woods Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Tiger_Woods",
    "categories": [
      "Sports",
      "Icon"
    ],
    "biography": "### About Tiger Woods\nTiger Woods is a renowned figure in the category of Sports & Icon.\n\n### Life & Astrology Details\nBorn on December 30, 1975 at 22:50 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1975-12-30",
        "title": "Birth",
        "description": "Born in location coordinates (33.77°, -118.19°)"
      }
    ]
  },
  {
    "id": "serena-williams",
    "name": "Serena Williams",
    "birthDate": {
      "year": 1981,
      "month": 8,
      "day": 26,
      "hour": 20,
      "minute": 28
    },
    "latitude": 43.42,
    "longitude": -83.95,
    "timezone": -4,
    "locationName": "Serena Williams Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Serena_Williams",
    "categories": [
      "Sports",
      "Icon"
    ],
    "biography": "### About Serena Williams\nSerena Williams is a renowned figure in the category of Sports & Icon.\n\n### Life & Astrology Details\nBorn on September 26, 1981 at 20:28 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1981-09-26",
        "title": "Birth",
        "description": "Born in location coordinates (43.42°, -83.95°)"
      }
    ]
  },
  {
    "id": "cristiano-ronaldo",
    "name": "Cristiano Ronaldo",
    "birthDate": {
      "year": 1985,
      "month": 1,
      "day": 5,
      "hour": 10,
      "minute": 20
    },
    "latitude": 32.66,
    "longitude": -16.92,
    "timezone": 0,
    "locationName": "Cristiano Ronaldo Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Cristiano_Ronaldo",
    "categories": [
      "Sports",
      "Icon"
    ],
    "biography": "### About Cristiano Ronaldo\nCristiano Ronaldo is a renowned figure in the category of Sports & Icon.\n\n### Life & Astrology Details\nBorn on February 5, 1985 at 10:20 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1985-02-05",
        "title": "Birth",
        "description": "Born in location coordinates (32.66°, -16.92°)"
      }
    ]
  },
  {
    "id": "lionel-messi",
    "name": "Lionel Messi",
    "birthDate": {
      "year": 1987,
      "month": 5,
      "day": 24,
      "hour": 20,
      "minute": 30
    },
    "latitude": -32.95,
    "longitude": -60.64,
    "timezone": -3,
    "locationName": "Lionel Messi Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Lionel_Messi",
    "categories": [
      "Sports",
      "Icon"
    ],
    "biography": "### About Lionel Messi\nLionel Messi is a renowned figure in the category of Sports & Icon.\n\n### Life & Astrology Details\nBorn on June 24, 1987 at 20:30 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1987-06-24",
        "title": "Birth",
        "description": "Born in location coordinates (-32.95°, -60.64°)"
      }
    ]
  },
  {
    "id": "michael-jordan",
    "name": "Michael Jordan",
    "birthDate": {
      "year": 1963,
      "month": 1,
      "day": 17,
      "hour": 13,
      "minute": 40
    },
    "latitude": 40.67,
    "longitude": -73.94,
    "timezone": -5,
    "locationName": "Michael Jordan Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Michael_Jordan",
    "categories": [
      "Sports",
      "Icon"
    ],
    "biography": "### About Michael Jordan\nMichael Jordan is a renowned figure in the category of Sports & Icon.\n\n### Life & Astrology Details\nBorn on February 17, 1963 at 13:40 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1963-02-17",
        "title": "Birth",
        "description": "Born in location coordinates (40.67°, -73.94°)"
      }
    ]
  },
  {
    "id": "david-bowie",
    "name": "David Bowie",
    "birthDate": {
      "year": 1947,
      "month": 0,
      "day": 8,
      "hour": 9,
      "minute": 0
    },
    "latitude": 51.51,
    "longitude": -0.14,
    "timezone": 0,
    "locationName": "David Bowie Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/David_Bowie",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About David Bowie\nDavid Bowie is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on January 8, 1947 at 09:00 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1947-01-08",
        "title": "Birth",
        "description": "Born in location coordinates (51.51°, -0.14°)"
      }
    ]
  },
  {
    "id": "john-f--kennedy-jr-",
    "name": "John F. Kennedy Jr.",
    "birthDate": {
      "year": 1960,
      "month": 10,
      "day": 25,
      "hour": 0,
      "minute": 22
    },
    "latitude": 38.9,
    "longitude": -77.03,
    "timezone": -5,
    "locationName": "John F. Kennedy Jr. Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/John_F._Kennedy_Jr.",
    "categories": [
      "Royalty",
      "Fame"
    ],
    "biography": "### About John F. Kennedy Jr.\nJohn F. Kennedy Jr. is a renowned figure in the category of Royalty & Fame.\n\n### Life & Astrology Details\nBorn on November 25, 1960 at 00:22 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1960-11-25",
        "title": "Birth",
        "description": "Born in location coordinates (38.9°, -77.03°)"
      }
    ]
  },
  {
    "id": "meghan-markle",
    "name": "Meghan Markle",
    "birthDate": {
      "year": 1981,
      "month": 7,
      "day": 4,
      "hour": 4,
      "minute": 46
    },
    "latitude": 34.05,
    "longitude": -118.24,
    "timezone": -7,
    "locationName": "Meghan Markle Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Meghan_Markle",
    "categories": [
      "Royalty",
      "Arts"
    ],
    "biography": "### About Meghan Markle\nMeghan Markle is a renowned figure in the category of Royalty & Arts.\n\n### Life & Astrology Details\nBorn on August 4, 1981 at 04:46 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1981-08-04",
        "title": "Birth",
        "description": "Born in location coordinates (34.05°, -118.24°)"
      }
    ]
  },
  {
    "id": "prince-harry",
    "name": "Prince Harry",
    "birthDate": {
      "year": 1984,
      "month": 8,
      "day": 15,
      "hour": 16,
      "minute": 20
    },
    "latitude": 51.51,
    "longitude": -0.14,
    "timezone": 1,
    "locationName": "Prince Harry Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Prince_Harry",
    "categories": [
      "Royalty",
      "Icon"
    ],
    "biography": "### About Prince Harry\nPrince Harry is a renowned figure in the category of Royalty & Icon.\n\n### Life & Astrology Details\nBorn on September 15, 1984 at 16:20 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1984-09-15",
        "title": "Birth",
        "description": "Born in location coordinates (51.51°, -0.14°)"
      }
    ]
  },
  {
    "id": "prince-william",
    "name": "Prince William",
    "birthDate": {
      "year": 1982,
      "month": 5,
      "day": 21,
      "hour": 21,
      "minute": 3
    },
    "latitude": 51.51,
    "longitude": -0.14,
    "timezone": 1,
    "locationName": "Prince William Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Prince_William",
    "categories": [
      "Royalty",
      "Icon"
    ],
    "biography": "### About Prince William\nPrince William is a renowned figure in the category of Royalty & Icon.\n\n### Life & Astrology Details\nBorn on June 21, 1982 at 21:03 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1982-06-21",
        "title": "Birth",
        "description": "Born in location coordinates (51.51°, -0.14°)"
      }
    ]
  },
  {
    "id": "kate-middleton",
    "name": "Kate Middleton",
    "birthDate": {
      "year": 1982,
      "month": 0,
      "day": 9,
      "hour": 19,
      "minute": 0
    },
    "latitude": 51.45,
    "longitude": -0.97,
    "timezone": 0,
    "locationName": "Kate Middleton Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Kate_Middleton",
    "categories": [
      "Royalty",
      "Icon"
    ],
    "biography": "### About Kate Middleton\nKate Middleton is a renowned figure in the category of Royalty & Icon.\n\n### Life & Astrology Details\nBorn on January 9, 1982 at 19:00 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1982-01-09",
        "title": "Birth",
        "description": "Born in location coordinates (51.45°, -0.97°)"
      }
    ]
  },
  {
    "id": "charles-darwin",
    "name": "Charles Darwin",
    "birthDate": {
      "year": 1809,
      "month": 1,
      "day": 12,
      "hour": 12,
      "minute": 0
    },
    "latitude": 52.71,
    "longitude": -2.75,
    "timezone": -0.18,
    "locationName": "Charles Darwin Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Charles_Darwin",
    "categories": [
      "Science",
      "Intellectual"
    ],
    "biography": "### About Charles Darwin\nCharles Darwin is a renowned figure in the category of Science & Intellectual.\n\n### Life & Astrology Details\nBorn on February 12, 1809 at 12:00 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1809-02-12",
        "title": "Birth",
        "description": "Born in location coordinates (52.71°, -2.75°)"
      }
    ]
  },
  {
    "id": "galileo-galilei",
    "name": "Galileo Galilei",
    "birthDate": {
      "year": 1564,
      "month": 1,
      "day": 15,
      "hour": 15,
      "minute": 0
    },
    "latitude": 43.72,
    "longitude": 10.4,
    "timezone": 0.69,
    "locationName": "Galileo Galilei Birth Place",
    "roddenRating": "A",
    "timeSource": "Historical Diary",
    "sourceUrl": "https://www.astro.com/astro-databank/Galileo_Galilei",
    "categories": [
      "Science",
      "Intellectual"
    ],
    "biography": "### About Galileo Galilei\nGalileo Galilei is a renowned figure in the category of Science & Intellectual.\n\n### Life & Astrology Details\nBorn on February 15, 1564 at 15:00 under the Rodden Rating **A** (sourced from Historical Diary).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1564-02-15",
        "title": "Birth",
        "description": "Born in location coordinates (43.72°, 10.4°)"
      }
    ]
  },
  {
    "id": "ludwig-van-beethoven",
    "name": "Ludwig van Beethoven",
    "birthDate": {
      "year": 1770,
      "month": 11,
      "day": 16,
      "hour": 22,
      "minute": 0
    },
    "latitude": 50.73,
    "longitude": 7.1,
    "timezone": 0.47,
    "locationName": "Ludwig van Beethoven Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Ludwig_van_Beethoven",
    "categories": [
      "Arts",
      "Intellectual"
    ],
    "biography": "### About Ludwig van Beethoven\nLudwig van Beethoven is a renowned figure in the category of Arts & Intellectual.\n\n### Life & Astrology Details\nBorn on December 16, 1770 at 22:00 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1770-12-16",
        "title": "Birth",
        "description": "Born in location coordinates (50.73°, 7.1°)"
      }
    ]
  },
  {
    "id": "william-shakespeare",
    "name": "William Shakespeare",
    "birthDate": {
      "year": 1564,
      "month": 3,
      "day": 23,
      "hour": 9,
      "minute": 0
    },
    "latitude": 52.19,
    "longitude": -1.71,
    "timezone": -0.11,
    "locationName": "William Shakespeare Birth Place",
    "roddenRating": "C",
    "timeSource": "Tradition",
    "sourceUrl": "https://www.astro.com/astro-databank/William_Shakespeare",
    "categories": [
      "Arts",
      "Intellectual"
    ],
    "biography": "### About William Shakespeare\nWilliam Shakespeare is a renowned figure in the category of Arts & Intellectual.\n\n### Life & Astrology Details\nBorn on April 23, 1564 at 09:00 under the Rodden Rating **C** (sourced from Tradition).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1564-04-23",
        "title": "Birth",
        "description": "Born in location coordinates (52.19°, -1.71°)"
      }
    ]
  },
  {
    "id": "pablo-picasso",
    "name": "Pablo Picasso",
    "birthDate": {
      "year": 1881,
      "month": 9,
      "day": 25,
      "hour": 23,
      "minute": 15
    },
    "latitude": 36.72,
    "longitude": -4.42,
    "timezone": -0.18,
    "locationName": "Pablo Picasso Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Pablo_Picasso",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Pablo Picasso\nPablo Picasso is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on October 25, 1881 at 23:15 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1881-10-25",
        "title": "Birth",
        "description": "Born in location coordinates (36.72°, -4.42°)"
      }
    ]
  },
  {
    "id": "usain-bolt",
    "name": "Usain Bolt",
    "birthDate": {
      "year": 1986,
      "month": 7,
      "day": 21,
      "hour": 9,
      "minute": 30
    },
    "latitude": 18.42,
    "longitude": -77.63,
    "timezone": -5,
    "locationName": "Usain Bolt Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Usain_Bolt",
    "categories": [
      "Sports",
      "Icon"
    ],
    "biography": "### About Usain Bolt\nUsain Bolt is a renowned figure in the category of Sports & Icon.\n\n### Life & Astrology Details\nBorn on August 21, 1986 at 09:30 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1986-08-21",
        "title": "Birth",
        "description": "Born in location coordinates (18.42°, -77.63°)"
      }
    ]
  },
  {
    "id": "richard-branson",
    "name": "Richard Branson",
    "birthDate": {
      "year": 1950,
      "month": 6,
      "day": 18,
      "hour": 7,
      "minute": 0
    },
    "latitude": 51.51,
    "longitude": -0.14,
    "timezone": 1,
    "locationName": "Richard Branson Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Richard_Branson",
    "categories": [
      "Business",
      "Pioneer"
    ],
    "biography": "### About Richard Branson\nRichard Branson is a renowned figure in the category of Business & Pioneer.\n\n### Life & Astrology Details\nBorn on July 18, 1950 at 07:00 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1950-07-18",
        "title": "Birth",
        "description": "Born in location coordinates (51.51°, -0.14°)"
      }
    ]
  },
  {
    "id": "audrey-hepburn",
    "name": "Audrey Hepburn",
    "birthDate": {
      "year": 1929,
      "month": 4,
      "day": 4,
      "hour": 3,
      "minute": 0
    },
    "latitude": 50.85,
    "longitude": 4.35,
    "timezone": 1,
    "locationName": "Audrey Hepburn Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Audrey_Hepburn",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Audrey Hepburn\nAudrey Hepburn is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on May 4, 1929 at 03:00 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1929-05-04",
        "title": "Birth",
        "description": "Born in location coordinates (50.85°, 4.35°)"
      }
    ]
  },
  {
    "id": "elizabeth-taylor",
    "name": "Elizabeth Taylor",
    "birthDate": {
      "year": 1932,
      "month": 1,
      "day": 27,
      "hour": 2,
      "minute": 0
    },
    "latitude": 51.51,
    "longitude": -0.14,
    "timezone": 0,
    "locationName": "Elizabeth Taylor Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Elizabeth_Taylor",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Elizabeth Taylor\nElizabeth Taylor is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on February 27, 1932 at 02:00 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1932-02-27",
        "title": "Birth",
        "description": "Born in location coordinates (51.51°, -0.14°)"
      }
    ]
  },
  {
    "id": "grace-kelly",
    "name": "Grace Kelly",
    "birthDate": {
      "year": 1929,
      "month": 10,
      "day": 12,
      "hour": 5,
      "minute": 31
    },
    "latitude": 39.95,
    "longitude": -75.16,
    "timezone": -5,
    "locationName": "Grace Kelly Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Grace_Kelly",
    "categories": [
      "Arts",
      "Royalty"
    ],
    "biography": "### About Grace Kelly\nGrace Kelly is a renowned figure in the category of Arts & Royalty.\n\n### Life & Astrology Details\nBorn on November 12, 1929 at 05:31 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1929-11-12",
        "title": "Birth",
        "description": "Born in location coordinates (39.95°, -75.16°)"
      }
    ]
  },
  {
    "id": "marlon-brando",
    "name": "Marlon Brando",
    "birthDate": {
      "year": 1924,
      "month": 3,
      "day": 3,
      "hour": 23,
      "minute": 0
    },
    "latitude": 41.26,
    "longitude": -96.01,
    "timezone": -6,
    "locationName": "Marlon Brando Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Marlon_Brando",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Marlon Brando\nMarlon Brando is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on April 3, 1924 at 23:00 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1924-04-03",
        "title": "Birth",
        "description": "Born in location coordinates (41.26°, -96.01°)"
      }
    ]
  },
  {
    "id": "brad-pitt",
    "name": "Brad Pitt",
    "birthDate": {
      "year": 1963,
      "month": 11,
      "day": 18,
      "hour": 6,
      "minute": 2
    },
    "latitude": 35.33,
    "longitude": -96.92,
    "timezone": -6,
    "locationName": "Brad Pitt Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Brad_Pitt",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Brad Pitt\nBrad Pitt is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on December 18, 1963 at 06:02 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1963-12-18",
        "title": "Birth",
        "description": "Born in location coordinates (35.33°, -96.92°)"
      }
    ]
  },
  {
    "id": "angelina-jolie",
    "name": "Angelina Jolie",
    "birthDate": {
      "year": 1975,
      "month": 5,
      "day": 4,
      "hour": 9,
      "minute": 9
    },
    "latitude": 34.05,
    "longitude": -118.24,
    "timezone": -7,
    "locationName": "Angelina Jolie Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Angelina_Jolie",
    "categories": [
      "Arts",
      "Humanitarian"
    ],
    "biography": "### About Angelina Jolie\nAngelina Jolie is a renowned figure in the category of Arts & Humanitarian.\n\n### Life & Astrology Details\nBorn on June 4, 1975 at 09:09 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1975-06-04",
        "title": "Birth",
        "description": "Born in location coordinates (34.05°, -118.24°)"
      }
    ]
  },
  {
    "id": "george-clooney",
    "name": "George Clooney",
    "birthDate": {
      "year": 1961,
      "month": 5,
      "day": 6,
      "hour": 2,
      "minute": 58
    },
    "latitude": 38.04,
    "longitude": -84.5,
    "timezone": -5,
    "locationName": "George Clooney Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/George_Clooney",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About George Clooney\nGeorge Clooney is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on June 6, 1961 at 02:58 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1961-06-06",
        "title": "Birth",
        "description": "Born in location coordinates (38.04°, -84.5°)"
      }
    ]
  },
  {
    "id": "leonardo-dicaprio",
    "name": "Leonardo DiCaprio",
    "birthDate": {
      "year": 1974,
      "month": 10,
      "day": 11,
      "hour": 2,
      "minute": 47
    },
    "latitude": 34.05,
    "longitude": -118.24,
    "timezone": -8,
    "locationName": "Leonardo DiCaprio Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Leonardo_DiCaprio",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Leonardo DiCaprio\nLeonardo DiCaprio is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on November 11, 1974 at 02:47 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1974-11-11",
        "title": "Birth",
        "description": "Born in location coordinates (34.05°, -118.24°)"
      }
    ]
  },
  {
    "id": "johnny-depp",
    "name": "Johnny Depp",
    "birthDate": {
      "year": 1963,
      "month": 5,
      "day": 9,
      "hour": 8,
      "minute": 44
    },
    "latitude": 37.77,
    "longitude": -87.11,
    "timezone": -6,
    "locationName": "Johnny Depp Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Johnny_Depp",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Johnny Depp\nJohnny Depp is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on June 9, 1963 at 08:44 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1963-06-09",
        "title": "Birth",
        "description": "Born in location coordinates (37.77°, -87.11°)"
      }
    ]
  },
  {
    "id": "tom-cruise",
    "name": "Tom Cruise",
    "birthDate": {
      "year": 1962,
      "month": 6,
      "day": 3,
      "hour": 15,
      "minute": 6
    },
    "latitude": 43.05,
    "longitude": -76.15,
    "timezone": -4,
    "locationName": "Tom Cruise Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Tom_Cruise",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Tom Cruise\nTom Cruise is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on July 3, 1962 at 15:06 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1962-07-03",
        "title": "Birth",
        "description": "Born in location coordinates (43.05°, -76.15°)"
      }
    ]
  },
  {
    "id": "keanu-reeves",
    "name": "Keanu Reeves",
    "birthDate": {
      "year": 1964,
      "month": 8,
      "day": 2,
      "hour": 5,
      "minute": 41
    },
    "latitude": 33.89,
    "longitude": 35.5,
    "timezone": 2,
    "locationName": "Keanu Reeves Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Keanu_Reeves",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Keanu Reeves\nKeanu Reeves is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on September 2, 1964 at 05:41 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1964-09-02",
        "title": "Birth",
        "description": "Born in location coordinates (33.89°, 35.5°)"
      }
    ]
  },
  {
    "id": "robin-williams",
    "name": "Robin Williams",
    "birthDate": {
      "year": 1951,
      "month": 6,
      "day": 21,
      "hour": 13,
      "minute": 34
    },
    "latitude": 41.87,
    "longitude": -87.62,
    "timezone": -5,
    "locationName": "Robin Williams Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Robin_Williams",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Robin Williams\nRobin Williams is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on July 21, 1951 at 13:34 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1951-07-21",
        "title": "Birth",
        "description": "Born in location coordinates (41.87°, -87.62°)"
      }
    ]
  },
  {
    "id": "jim-carrey",
    "name": "Jim Carrey",
    "birthDate": {
      "year": 1962,
      "month": 0,
      "day": 17,
      "hour": 2,
      "minute": 30
    },
    "latitude": 44.06,
    "longitude": -79.46,
    "timezone": -5,
    "locationName": "Jim Carrey Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Jim_Carrey",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Jim Carrey\nJim Carrey is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on January 17, 1962 at 02:30 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1962-01-17",
        "title": "Birth",
        "description": "Born in location coordinates (44.06°, -79.46°)"
      }
    ]
  },
  {
    "id": "bruce-lee",
    "name": "Bruce Lee",
    "birthDate": {
      "year": 1940,
      "month": 10,
      "day": 27,
      "hour": 7,
      "minute": 12
    },
    "latitude": 37.77,
    "longitude": -122.42,
    "timezone": -8,
    "locationName": "Bruce Lee Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Bruce_Lee",
    "categories": [
      "Sports",
      "Arts"
    ],
    "biography": "### About Bruce Lee\nBruce Lee is a renowned figure in the category of Sports & Arts.\n\n### Life & Astrology Details\nBorn on November 27, 1940 at 07:12 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1940-11-27",
        "title": "Birth",
        "description": "Born in location coordinates (37.77°, -122.42°)"
      }
    ]
  },
  {
    "id": "dalai-lama-xiv",
    "name": "Dalai Lama XIV",
    "birthDate": {
      "year": 1935,
      "month": 6,
      "day": 6,
      "hour": 4,
      "minute": 38
    },
    "latitude": 36.38,
    "longitude": 101.88,
    "timezone": 6.79,
    "locationName": "Dalai Lama XIV Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Dalai_Lama_XIV",
    "categories": [
      "Spiritual",
      "Leader"
    ],
    "biography": "### About Dalai Lama XIV\nDalai Lama XIV is a renowned figure in the category of Spiritual & Leader.\n\n### Life & Astrology Details\nBorn on July 6, 1935 at 04:38 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1935-07-06",
        "title": "Birth",
        "description": "Born in location coordinates (36.38°, 101.88°)"
      }
    ]
  },
  {
    "id": "mother-teresa",
    "name": "Mother Teresa",
    "birthDate": {
      "year": 1910,
      "month": 7,
      "day": 26,
      "hour": 14,
      "minute": 25
    },
    "latitude": 42,
    "longitude": 21.43,
    "timezone": 1,
    "locationName": "Mother Teresa Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Mother_Teresa",
    "categories": [
      "Spiritual",
      "Humanitarian"
    ],
    "biography": "### About Mother Teresa\nMother Teresa is a renowned figure in the category of Spiritual & Humanitarian.\n\n### Life & Astrology Details\nBorn on August 26, 1910 at 14:25 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1910-08-26",
        "title": "Birth",
        "description": "Born in location coordinates (42°, 21.43°)"
      }
    ]
  },
  {
    "id": "alan-turing",
    "name": "Alan Turing",
    "birthDate": {
      "year": 1912,
      "month": 5,
      "day": 23,
      "hour": 2,
      "minute": 15
    },
    "latitude": 51.51,
    "longitude": -0.14,
    "timezone": 1,
    "locationName": "Alan Turing Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Alan_Turing",
    "categories": [
      "Science",
      "Intellectual"
    ],
    "biography": "### About Alan Turing\nAlan Turing is a renowned figure in the category of Science & Intellectual.\n\n### Life & Astrology Details\nBorn on June 23, 1912 at 02:15 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1912-06-23",
        "title": "Birth",
        "description": "Born in location coordinates (51.51°, -0.14°)"
      }
    ]
  },
  {
    "id": "richard-feynman",
    "name": "Richard Feynman",
    "birthDate": {
      "year": 1918,
      "month": 4,
      "day": 11,
      "hour": 2,
      "minute": 40
    },
    "latitude": 40.78,
    "longitude": -73.97,
    "timezone": -4,
    "locationName": "Richard Feynman Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Richard_Feynman",
    "categories": [
      "Science",
      "Intellectual"
    ],
    "biography": "### About Richard Feynman\nRichard Feynman is a renowned figure in the category of Science & Intellectual.\n\n### Life & Astrology Details\nBorn on May 11, 1918 at 02:40 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1918-05-11",
        "title": "Birth",
        "description": "Born in location coordinates (40.78°, -73.97°)"
      }
    ]
  },
  {
    "id": "ada-lovelace",
    "name": "Ada Lovelace",
    "birthDate": {
      "year": 1815,
      "month": 11,
      "day": 10,
      "hour": 13,
      "minute": 0
    },
    "latitude": 51.51,
    "longitude": -0.14,
    "timezone": -0.01,
    "locationName": "Ada Lovelace Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Ada_Lovelace",
    "categories": [
      "Science",
      "Intellectual"
    ],
    "biography": "### About Ada Lovelace\nAda Lovelace is a renowned figure in the category of Science & Intellectual.\n\n### Life & Astrology Details\nBorn on December 10, 1815 at 13:00 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1815-12-10",
        "title": "Birth",
        "description": "Born in location coordinates (51.51°, -0.14°)"
      }
    ]
  },
  {
    "id": "neil-degrasse-tyson",
    "name": "Neil deGrasse Tyson",
    "birthDate": {
      "year": 1958,
      "month": 9,
      "day": 5,
      "hour": 12,
      "minute": 40
    },
    "latitude": 40.78,
    "longitude": -73.97,
    "timezone": -4,
    "locationName": "Neil deGrasse Tyson Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Neil_deGrasse_Tyson",
    "categories": [
      "Science",
      "Intellectual"
    ],
    "biography": "### About Neil deGrasse Tyson\nNeil deGrasse Tyson is a renowned figure in the category of Science & Intellectual.\n\n### Life & Astrology Details\nBorn on October 5, 1958 at 12:40 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1958-10-05",
        "title": "Birth",
        "description": "Born in location coordinates (40.78°, -73.97°)"
      }
    ]
  },
  {
    "id": "amelia-earhart",
    "name": "Amelia Earhart",
    "birthDate": {
      "year": 1897,
      "month": 6,
      "day": 24,
      "hour": 23,
      "minute": 30
    },
    "latitude": 39.56,
    "longitude": -95.12,
    "timezone": -6,
    "locationName": "Amelia Earhart Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Amelia_Earhart",
    "categories": [
      "Pioneer",
      "Fame"
    ],
    "biography": "### About Amelia Earhart\nAmelia Earhart is a renowned figure in the category of Pioneer & Fame.\n\n### Life & Astrology Details\nBorn on July 24, 1897 at 23:30 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1897-07-24",
        "title": "Birth",
        "description": "Born in location coordinates (39.56°, -95.12°)"
      }
    ]
  },
  {
    "id": "henry-ford",
    "name": "Henry Ford",
    "birthDate": {
      "year": 1863,
      "month": 6,
      "day": 30,
      "hour": 7,
      "minute": 0
    },
    "latitude": 42.32,
    "longitude": -83.21,
    "timezone": -5.5,
    "locationName": "Henry Ford Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Henry_Ford",
    "categories": [
      "Business",
      "Intellectual"
    ],
    "biography": "### About Henry Ford\nHenry Ford is a renowned figure in the category of Business & Intellectual.\n\n### Life & Astrology Details\nBorn on July 30, 1863 at 07:00 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1863-07-30",
        "title": "Birth",
        "description": "Born in location coordinates (42.32°, -83.21°)"
      }
    ]
  },
  {
    "id": "coco-chanel",
    "name": "Coco Chanel",
    "birthDate": {
      "year": 1883,
      "month": 7,
      "day": 19,
      "hour": 16,
      "minute": 0
    },
    "latitude": 47.26,
    "longitude": -0.08,
    "timezone": 0,
    "locationName": "Coco Chanel Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Coco_Chanel",
    "categories": [
      "Business",
      "Icon"
    ],
    "biography": "### About Coco Chanel\nCoco Chanel is a renowned figure in the category of Business & Icon.\n\n### Life & Astrology Details\nBorn on August 19, 1883 at 16:00 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1883-08-19",
        "title": "Birth",
        "description": "Born in location coordinates (47.26°, -0.08°)"
      }
    ]
  },
  {
    "id": "karl-marx",
    "name": "Karl Marx",
    "birthDate": {
      "year": 1818,
      "month": 4,
      "day": 5,
      "hour": 2,
      "minute": 0
    },
    "latitude": 49.75,
    "longitude": 6.64,
    "timezone": 0.44,
    "locationName": "Karl Marx Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Karl_Marx",
    "categories": [
      "Leader",
      "Intellectual"
    ],
    "biography": "### About Karl Marx\nKarl Marx is a renowned figure in the category of Leader & Intellectual.\n\n### Life & Astrology Details\nBorn on May 5, 1818 at 02:00 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1818-05-05",
        "title": "Birth",
        "description": "Born in location coordinates (49.75°, 6.64°)"
      }
    ]
  },
  {
    "id": "charles-dickens",
    "name": "Charles Dickens",
    "birthDate": {
      "year": 1812,
      "month": 1,
      "day": 7,
      "hour": 23,
      "minute": 50
    },
    "latitude": 50.8,
    "longitude": -1.09,
    "timezone": -0.07,
    "locationName": "Charles Dickens Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Charles_Dickens",
    "categories": [
      "Arts",
      "Intellectual"
    ],
    "biography": "### About Charles Dickens\nCharles Dickens is a renowned figure in the category of Arts & Intellectual.\n\n### Life & Astrology Details\nBorn on February 7, 1812 at 23:50 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1812-02-07",
        "title": "Birth",
        "description": "Born in location coordinates (50.8°, -1.09°)"
      }
    ]
  },
  {
    "id": "stephen-king",
    "name": "Stephen King",
    "birthDate": {
      "year": 1947,
      "month": 8,
      "day": 21,
      "hour": 1,
      "minute": 30
    },
    "latitude": 43.66,
    "longitude": -70.25,
    "timezone": -5,
    "locationName": "Stephen King Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Stephen_King",
    "categories": [
      "Arts",
      "Intellectual"
    ],
    "biography": "### About Stephen King\nStephen King is a renowned figure in the category of Arts & Intellectual.\n\n### Life & Astrology Details\nBorn on September 21, 1947 at 01:30 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1947-09-21",
        "title": "Birth",
        "description": "Born in location coordinates (43.66°, -70.25°)"
      }
    ]
  },
  {
    "id": "j-k--rowling",
    "name": "J.K. Rowling",
    "birthDate": {
      "year": 1965,
      "month": 6,
      "day": 31,
      "hour": 14,
      "minute": 0
    },
    "latitude": 51.54,
    "longitude": -2.39,
    "timezone": 1,
    "locationName": "J.K. Rowling Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/J.K._Rowling",
    "categories": [
      "Arts",
      "Intellectual"
    ],
    "biography": "### About J.K. Rowling\nJ.K. Rowling is a renowned figure in the category of Arts & Intellectual.\n\n### Life & Astrology Details\nBorn on July 31, 1965 at 14:00 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1965-07-31",
        "title": "Birth",
        "description": "Born in location coordinates (51.54°, -2.39°)"
      }
    ]
  },
  {
    "id": "john-lennon",
    "name": "John Lennon",
    "birthDate": {
      "year": 1940,
      "month": 9,
      "day": 9,
      "hour": 18,
      "minute": 30
    },
    "latitude": 53.41,
    "longitude": -2.98,
    "timezone": 1,
    "locationName": "John Lennon Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/John_Lennon",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About John Lennon\nJohn Lennon is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on October 9, 1940 at 18:30 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1940-10-09",
        "title": "Birth",
        "description": "Born in location coordinates (53.41°, -2.98°)"
      }
    ]
  },
  {
    "id": "bob-dylan",
    "name": "Bob Dylan",
    "birthDate": {
      "year": 1941,
      "month": 4,
      "day": 24,
      "hour": 21,
      "minute": 5
    },
    "latitude": 46.78,
    "longitude": -92.1,
    "timezone": -6,
    "locationName": "Bob Dylan Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Bob_Dylan",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Bob Dylan\nBob Dylan is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on May 24, 1941 at 21:05 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1941-05-24",
        "title": "Birth",
        "description": "Born in location coordinates (46.78°, -92.1°)"
      }
    ]
  },
  {
    "id": "freddie-mercury",
    "name": "Freddie Mercury",
    "birthDate": {
      "year": 1946,
      "month": 8,
      "day": 5,
      "hour": 5,
      "minute": 10
    },
    "latitude": -6.16,
    "longitude": 39.19,
    "timezone": 3,
    "locationName": "Freddie Mercury Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Freddie_Mercury",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Freddie Mercury\nFreddie Mercury is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on September 5, 1946 at 05:10 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1946-09-05",
        "title": "Birth",
        "description": "Born in location coordinates (-6.16°, 39.19°)"
      }
    ]
  },
  {
    "id": "michael-jackson",
    "name": "Michael Jackson",
    "birthDate": {
      "year": 1958,
      "month": 7,
      "day": 29,
      "hour": 19,
      "minute": 33
    },
    "latitude": 41.6,
    "longitude": -87.35,
    "timezone": -6,
    "locationName": "Michael Jackson Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Michael_Jackson",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Michael Jackson\nMichael Jackson is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on August 29, 1958 at 19:33 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1958-08-29",
        "title": "Birth",
        "description": "Born in location coordinates (41.6°, -87.35°)"
      }
    ]
  },
  {
    "id": "madonna",
    "name": "Madonna",
    "birthDate": {
      "year": 1958,
      "month": 7,
      "day": 16,
      "hour": 7,
      "minute": 5
    },
    "latitude": 43.59,
    "longitude": -83.89,
    "timezone": -5,
    "locationName": "Madonna Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Madonna",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Madonna\nMadonna is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on August 16, 1958 at 07:05 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1958-08-16",
        "title": "Birth",
        "description": "Born in location coordinates (43.59°, -83.89°)"
      }
    ]
  },
  {
    "id": "beyonc-",
    "name": "Beyoncé",
    "birthDate": {
      "year": 1981,
      "month": 8,
      "day": 4,
      "hour": 10,
      "minute": 0
    },
    "latitude": 29.76,
    "longitude": -95.36,
    "timezone": -5,
    "locationName": "Beyoncé Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Beyoncé",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Beyoncé\nBeyoncé is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on September 4, 1981 at 10:00 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1981-09-04",
        "title": "Birth",
        "description": "Born in location coordinates (29.76°, -95.36°)"
      }
    ]
  },
  {
    "id": "lady-gaga",
    "name": "Lady Gaga",
    "birthDate": {
      "year": 1986,
      "month": 2,
      "day": 28,
      "hour": 9,
      "minute": 53
    },
    "latitude": 40.78,
    "longitude": -73.97,
    "timezone": -5,
    "locationName": "Lady Gaga Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Lady_Gaga",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Lady Gaga\nLady Gaga is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on March 28, 1986 at 09:53 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1986-03-28",
        "title": "Birth",
        "description": "Born in location coordinates (40.78°, -73.97°)"
      }
    ]
  },
  {
    "id": "bill-clinton",
    "name": "Bill Clinton",
    "birthDate": {
      "year": 1946,
      "month": 7,
      "day": 19,
      "hour": 8,
      "minute": 51
    },
    "latitude": 33.67,
    "longitude": -93.59,
    "timezone": -6,
    "locationName": "Bill Clinton Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Bill_Clinton",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About Bill Clinton\nBill Clinton is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on August 19, 1946 at 08:51 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1946-08-19",
        "title": "Birth",
        "description": "Born in location coordinates (33.67°, -93.59°)"
      }
    ]
  },
  {
    "id": "george-w--bush",
    "name": "George W. Bush",
    "birthDate": {
      "year": 1946,
      "month": 6,
      "day": 6,
      "hour": 7,
      "minute": 26
    },
    "latitude": 41.31,
    "longitude": -72.92,
    "timezone": -4,
    "locationName": "George W. Bush Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/George_W._Bush",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About George W. Bush\nGeorge W. Bush is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on July 6, 1946 at 07:26 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1946-07-06",
        "title": "Birth",
        "description": "Born in location coordinates (41.31°, -72.92°)"
      }
    ]
  },
  {
    "id": "donald-trump",
    "name": "Donald Trump",
    "birthDate": {
      "year": 1946,
      "month": 5,
      "day": 14,
      "hour": 10,
      "minute": 54
    },
    "latitude": 40.69,
    "longitude": -73.81,
    "timezone": -4,
    "locationName": "Donald Trump Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Donald_Trump",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About Donald Trump\nDonald Trump is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on June 14, 1946 at 10:54 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1946-06-14",
        "title": "Birth",
        "description": "Born in location coordinates (40.69°, -73.81°)"
      }
    ]
  },
  {
    "id": "joe-biden",
    "name": "Joe Biden",
    "birthDate": {
      "year": 1942,
      "month": 10,
      "day": 20,
      "hour": 8,
      "minute": 30
    },
    "latitude": 41.41,
    "longitude": -75.66,
    "timezone": -5,
    "locationName": "Joe Biden Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Joe_Biden",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About Joe Biden\nJoe Biden is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on November 20, 1942 at 08:30 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1942-11-20",
        "title": "Birth",
        "description": "Born in location coordinates (41.41°, -75.66°)"
      }
    ]
  },
  {
    "id": "ronald-reagan",
    "name": "Ronald Reagan",
    "birthDate": {
      "year": 1911,
      "month": 1,
      "day": 6,
      "hour": 4,
      "minute": 16
    },
    "latitude": 41.63,
    "longitude": -89.78,
    "timezone": -6,
    "locationName": "Ronald Reagan Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Ronald_Reagan",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About Ronald Reagan\nRonald Reagan is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on February 6, 1911 at 04:16 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1911-02-06",
        "title": "Birth",
        "description": "Born in location coordinates (41.63°, -89.78°)"
      }
    ]
  },
  {
    "id": "richard-nixon",
    "name": "Richard Nixon",
    "birthDate": {
      "year": 1913,
      "month": 0,
      "day": 9,
      "hour": 21,
      "minute": 35
    },
    "latitude": 33.89,
    "longitude": -117.82,
    "timezone": -8,
    "locationName": "Richard Nixon Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Richard_Nixon",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About Richard Nixon\nRichard Nixon is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on January 9, 1913 at 21:35 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1913-01-09",
        "title": "Birth",
        "description": "Born in location coordinates (33.89°, -117.82°)"
      }
    ]
  },
  {
    "id": "che-guevara",
    "name": "Che Guevara",
    "birthDate": {
      "year": 1928,
      "month": 5,
      "day": 14,
      "hour": 3,
      "minute": 9
    },
    "latitude": -32.95,
    "longitude": -60.64,
    "timezone": -3,
    "locationName": "Che Guevara Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Che_Guevara",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About Che Guevara\nChe Guevara is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on June 14, 1928 at 03:09 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1928-06-14",
        "title": "Birth",
        "description": "Born in location coordinates (-32.95°, -60.64°)"
      }
    ]
  },
  {
    "id": "fidel-castro",
    "name": "Fidel Castro",
    "birthDate": {
      "year": 1926,
      "month": 7,
      "day": 13,
      "hour": 2,
      "minute": 0
    },
    "latitude": 20.53,
    "longitude": -75.72,
    "timezone": -5,
    "locationName": "Fidel Castro Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Fidel_Castro",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About Fidel Castro\nFidel Castro is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on August 13, 1926 at 02:00 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1926-08-13",
        "title": "Birth",
        "description": "Born in location coordinates (20.53°, -75.72°)"
      }
    ]
  },
  {
    "id": "vladimir-putin",
    "name": "Vladimir Putin",
    "birthDate": {
      "year": 1952,
      "month": 9,
      "day": 7,
      "hour": 9,
      "minute": 30
    },
    "latitude": 59.93,
    "longitude": 30.31,
    "timezone": 3,
    "locationName": "Vladimir Putin Birth Place",
    "roddenRating": "B",
    "timeSource": "Speculation",
    "sourceUrl": "https://www.astro.com/astro-databank/Vladimir_Putin",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About Vladimir Putin\nVladimir Putin is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on October 7, 1952 at 09:30 under the Rodden Rating **B** (sourced from Speculation).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1952-10-07",
        "title": "Birth",
        "description": "Born in location coordinates (59.93°, 30.31°)"
      }
    ]
  },
  {
    "id": "pope-francis",
    "name": "Pope Francis",
    "birthDate": {
      "year": 1936,
      "month": 11,
      "day": 17,
      "hour": 21,
      "minute": 0
    },
    "latitude": -34.6,
    "longitude": -58.38,
    "timezone": -3,
    "locationName": "Pope Francis Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Pope_Francis",
    "categories": [
      "Spiritual",
      "Leader"
    ],
    "biography": "### About Pope Francis\nPope Francis is a renowned figure in the category of Spiritual & Leader.\n\n### Life & Astrology Details\nBorn on December 17, 1936 at 21:00 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1936-12-17",
        "title": "Birth",
        "description": "Born in location coordinates (-34.6°, -58.38°)"
      }
    ]
  },
  {
    "id": "mao-zedong",
    "name": "Mao Zedong",
    "birthDate": {
      "year": 1893,
      "month": 11,
      "day": 26,
      "hour": 8,
      "minute": 0
    },
    "latitude": 27.91,
    "longitude": 112.51,
    "timezone": 7.5,
    "locationName": "Mao Zedong Birth Place",
    "roddenRating": "B",
    "timeSource": "Speculation",
    "sourceUrl": "https://www.astro.com/astro-databank/Mao_Zedong",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About Mao Zedong\nMao Zedong is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on December 26, 1893 at 08:00 under the Rodden Rating **B** (sourced from Speculation).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1893-12-26",
        "title": "Birth",
        "description": "Born in location coordinates (27.91°, 112.51°)"
      }
    ]
  },
  {
    "id": "indira-gandhi",
    "name": "Indira Gandhi",
    "birthDate": {
      "year": 1917,
      "month": 10,
      "day": 19,
      "hour": 23,
      "minute": 11
    },
    "latitude": 25.45,
    "longitude": 81.84,
    "timezone": 5.5,
    "locationName": "Indira Gandhi Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Indira_Gandhi",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About Indira Gandhi\nIndira Gandhi is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on November 19, 1917 at 23:11 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1917-11-19",
        "title": "Birth",
        "description": "Born in location coordinates (25.45°, 81.84°)"
      }
    ]
  },
  {
    "id": "jawaharlal-nehru",
    "name": "Jawaharlal Nehru",
    "birthDate": {
      "year": 1889,
      "month": 10,
      "day": 14,
      "hour": 23,
      "minute": 30
    },
    "latitude": 25.45,
    "longitude": 81.84,
    "timezone": 5.46,
    "locationName": "Jawaharlal Nehru Birth Place",
    "roddenRating": "B",
    "timeSource": "Speculation",
    "sourceUrl": "https://www.astro.com/astro-databank/Jawaharlal_Nehru",
    "categories": [
      "Leader",
      "Politics"
    ],
    "biography": "### About Jawaharlal Nehru\nJawaharlal Nehru is a renowned figure in the category of Leader & Politics.\n\n### Life & Astrology Details\nBorn on November 14, 1889 at 23:30 under the Rodden Rating **B** (sourced from Speculation).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1889-11-14",
        "title": "Birth",
        "description": "Born in location coordinates (25.45°, 81.84°)"
      }
    ]
  },
  {
    "id": "thomas-edison",
    "name": "Thomas Edison",
    "birthDate": {
      "year": 1847,
      "month": 1,
      "day": 11,
      "hour": 1,
      "minute": 30
    },
    "latitude": 41.39,
    "longitude": -82.6,
    "timezone": -5.5,
    "locationName": "Thomas Edison Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Thomas_Edison",
    "categories": [
      "Science",
      "Business"
    ],
    "biography": "### About Thomas Edison\nThomas Edison is a renowned figure in the category of Science & Business.\n\n### Life & Astrology Details\nBorn on February 11, 1847 at 01:30 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1847-02-11",
        "title": "Birth",
        "description": "Born in location coordinates (41.39°, -82.6°)"
      }
    ]
  },
  {
    "id": "alan-watts",
    "name": "Alan Watts",
    "birthDate": {
      "year": 1915,
      "month": 0,
      "day": 6,
      "hour": 7,
      "minute": 20
    },
    "latitude": 51.41,
    "longitude": 0.08,
    "timezone": 0,
    "locationName": "Alan Watts Birth Place",
    "roddenRating": "A",
    "timeSource": "Biography",
    "sourceUrl": "https://www.astro.com/astro-databank/Alan_Watts",
    "categories": [
      "Spiritual",
      "Intellectual"
    ],
    "biography": "### About Alan Watts\nAlan Watts is a renowned figure in the category of Spiritual & Intellectual.\n\n### Life & Astrology Details\nBorn on January 6, 1915 at 07:20 under the Rodden Rating **A** (sourced from Biography).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1915-01-06",
        "title": "Birth",
        "description": "Born in location coordinates (51.41°, 0.08°)"
      }
    ]
  },
  {
    "id": "bruce-springsteen",
    "name": "Bruce Springsteen",
    "birthDate": {
      "year": 1949,
      "month": 8,
      "day": 23,
      "hour": 22,
      "minute": 50
    },
    "latitude": 40.35,
    "longitude": -74.07,
    "timezone": -4,
    "locationName": "Bruce Springsteen Birth Place",
    "roddenRating": "AA",
    "timeSource": "Birth Certificate",
    "sourceUrl": "https://www.astro.com/astro-databank/Bruce_Springsteen",
    "categories": [
      "Arts",
      "Icon"
    ],
    "biography": "### About Bruce Springsteen\nBruce Springsteen is a renowned figure in the category of Arts & Icon.\n\n### Life & Astrology Details\nBorn on September 23, 1949 at 22:50 under the Rodden Rating **AA** (sourced from Birth Certificate).\n\nThis profile serves as a high-fidelity record for studying historical birth charts and vimshottari dasa progressions.\n",
    "keyEvents": [
      {
        "date": "1949-09-23",
        "title": "Birth",
        "description": "Born in location coordinates (40.35°, -74.07°)"
      }
    ]
  }
];
