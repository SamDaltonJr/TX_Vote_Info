/* ============================================
   TX VOTE INFO - County Election Data
   March 3, 2026 Texas Democratic Primary
   ============================================

   DATA SOURCES & ACCURACY NOTES:
   - County election website base URLs confirmed from user + public records
   - Congressional districts reflect 2021 redistricting (effective 2023-2032)
   - Texas House/Senate districts reflect 2021 redistricting
   - Early voting dates: Feb 17-28, 2026 per Texas Election Code
   - Election Day: March 3, 2026
   - Mail ballot application deadline: received by Feb 20, 2026
   - Vote center counts based on recent primary elections;
     counties finalize exact counts ~30 days before each election
   - Elections office addresses from public county records

   VERIFY BEFORE PUBLISHING:
   1. Exact number of early voting / Election Day vote centers
   2. Extended or reduced hours for specific dates (first week is
      sometimes shorter in some counties)
   3. Sunday voting hours (varies by county and election)
   4. Sub-page URL paths on each county website (may change
      between election cycles)
   5. Current incumbents and candidate filings
   ============================================ */

window.COUNTY_DATA = {

  /* ──────────────────────────────────────────
     DALLAS COUNTY
     Population: ~2.6 million | Registered voters: ~1.4 million
     Leans Democratic countywide
     ────────────────────────────────────────── */
  dallas: {
    name: 'Dallas',
    fullName: 'Dallas County',
    countySlug: 'dallas',

    /* --- Official URLs --- */
    electionWebsite:      'https://www.dallascountyvotes.org',
    electionWebsiteLabel: 'dallascountyvotes.org',

    voteCenterFinderUrl:   'https://www.dallascountyvotes.org/vote-centers/',
    voteCenterFinderLabel: 'Find a Vote Center',

    earlyVotingUrl:   'https://www.dallascountyvotes.org/early-voting/',
    earlyVotingLabel: 'Early Voting Locations & Hours',

    electionInfoUrl:   'https://www.dallascountyvotes.org/voters/election/',
    electionInfoLabel: 'Current Election Info',

    /* --- Vote Centers --- */
    voteCenterCount: 74,
    voteCenterNote:  'Vote at ANY Dallas County Vote Center during early voting',

    /* --- Early Voting Schedule --- */
    earlyVotingDates: 'February 17 \u2013 February 27, 2026',
    earlyVotingHours: [
      { days: 'Tue, Feb 17 (first day)',  hours: '7:00 AM \u2013 7:00 PM' },
      { days: 'Mon \u2013 Sat',           hours: '7:00 AM \u2013 7:00 PM' },
      { days: 'Sunday, Feb 22',           hours: '11:00 AM \u2013 4:00 PM' }
    ],

    /* --- Elections Office (for mail ballot applications) --- */
    electionsOfficeAddress: 'Dallas County Elections Department\n1460 Round Table Drive\nDallas, TX 75247',
    electionsOfficePhone:   '(214) 819-6300',

    /* --- Key Democratic Primary Races --- */
    keyRaces: [
      {
        office: 'US Congress, District 24',
        note: 'Help send Beth Van Duyne home \u2014 top Democratic flip target in DFW'
      },
      {
        office: 'US Congress, District 32',
        note: 'Keep Julie Johnson (D) in office \u2014 flipped blue in 2024'
      },
      {
        office: 'Texas House, District 108',
        note: 'Park Cities & north Dallas \u2014 key competitive seat'
      },
      {
        office: 'Texas House, Districts 107, 112, 114, 115',
        note: 'Competitive suburban seats across Dallas County'
      },
      {
        office: 'Governor',
        note: 'Choose the Democratic candidate for November'
      },
      {
        office: 'County & local races',
        note: 'These affect your daily life most'
      }
    ],

    /* --- Quick Resources (prepended on county page) --- */
    quickResources: [
      {
        icon: '\uD83D\uDCCD',
        label: 'Dallas Vote Center Finder',
        url:   'https://www.dallascountyvotes.org/vote-centers/',
        source: 'dallascountyvotes.org'
      },
      {
        icon: '\uD83D\uDD50',
        label: 'Early Voting Hours & Locations',
        url:   'https://www.dallascountyvotes.org/early-voting/',
        source: 'dallascountyvotes.org'
      },
      {
        icon: '\uD83D\uDCCB',
        label: 'Sample Ballot Lookup',
        url:   'https://www.dallascountyvotes.org/ballot-information/',
        source: 'dallascountyvotes.org'
      }
    ]
  },


  /* ──────────────────────────────────────────
     TARRANT COUNTY
     Population: ~2.1 million | Registered voters: ~1.2 million
     Competitive / purple county
     ────────────────────────────────────────── */
  tarrant: {
    name: 'Tarrant',
    fullName: 'Tarrant County',
    countySlug: 'tarrant',

    /* --- Official URLs --- */
    electionWebsite:      'https://www.tarrantcounty.com/en/elections.html',
    electionWebsiteLabel: 'tarrantcounty.com/elections',

    voteCenterFinderUrl:   'https://www.tarrantcounty.com/en/elections/Polling-Locations.html',
    voteCenterFinderLabel: 'Find Your Polling Location',

    earlyVotingUrl:   'https://www.tarrantcounty.com/en/elections/Early-Voting.html',
    earlyVotingLabel: 'Early Voting Locations & Hours',

    electionInfoUrl:   'https://www.tarrantcounty.com/en/elections/Current-Elections.html',
    electionInfoLabel: 'Current Election Info',

    /* --- Vote Centers --- */
    voteCenterCount: 50,
    voteCenterNote:  'Vote at ANY Tarrant County location during early voting',

    /* --- Early Voting Schedule --- */
    earlyVotingDates: 'February 17 \u2013 February 27, 2026',
    earlyVotingHours: [
      { days: 'Mon \u2013 Sat',           hours: '7:00 AM \u2013 7:00 PM' },
      { days: 'Sunday, Feb 22',           hours: '11:00 AM \u2013 4:00 PM' }
    ],

    /* --- Elections Office --- */
    electionsOfficeAddress: 'Tarrant County Elections Administration\n2700 Premier Street\nFort Worth, TX 76111',
    electionsOfficePhone:   '(817) 831-8683',

    /* --- Key Democratic Primary Races --- */
    keyRaces: [
      {
        office: 'US Congress, District 6',
        note: 'Arlington & southeast Tarrant \u2014 competitive suburban district'
      },
      {
        office: 'US Congress, District 24',
        note: 'Help send Beth Van Duyne home \u2014 top Democratic flip target in DFW'
      },
      {
        office: 'US Congress, District 12',
        note: 'Fort Worth area \u2014 Craig Goldman (R) holds this seat'
      },
      {
        office: 'Texas House, Districts 92, 93, 94, 101',
        note: 'Competitive suburban seats across Tarrant County'
      },
      {
        office: 'Governor',
        note: 'Choose the Democratic candidate for November'
      },
      {
        office: 'County & local races',
        note: 'These affect your daily life most'
      }
    ],

    /* --- Quick Resources --- */
    quickResources: [
      {
        icon: '\uD83D\uDCCD',
        label: 'Tarrant Polling Place Locator',
        url:   'https://www.tarrantcounty.com/en/elections/Polling-Locations.html',
        source: 'tarrantcounty.com'
      },
      {
        icon: '\uD83D\uDD50',
        label: 'Early Voting Hours & Locations',
        url:   'https://www.tarrantcounty.com/en/elections/Early-Voting.html',
        source: 'tarrantcounty.com'
      },
      {
        icon: '\uD83D\uDCCB',
        label: 'Sample Ballot',
        url:   'https://www.tarrantcounty.com/en/elections/Sample-Ballots.html',
        source: 'tarrantcounty.com'
      }
    ]
  },


  /* ──────────────────────────────────────────
     COLLIN COUNTY
     Population: ~1.2 million | Registered voters: ~700,000
     Leans Republican but trending competitive
     ────────────────────────────────────────── */
  collin: {
    name: 'Collin',
    fullName: 'Collin County',
    countySlug: 'collin',

    /* --- Official URLs --- */
    electionWebsite:      'https://www.collincountytx.gov/elections',
    electionWebsiteLabel: 'collincountytx.gov/elections',

    voteCenterFinderUrl:   'https://www.collincountytx.gov/elections/polling-locations',
    voteCenterFinderLabel: 'Find Your Polling Location',

    earlyVotingUrl:   'https://www.collincountytx.gov/elections/early-voting',
    earlyVotingLabel: 'Early Voting Locations & Hours',

    electionInfoUrl:   'https://www.collincountytx.gov/elections/current-election',
    electionInfoLabel: 'Current Election Info',

    /* --- Vote Centers --- */
    voteCenterCount: 40,
    voteCenterNote:  'Vote at ANY Collin County Vote Center during early voting',

    /* --- Early Voting Schedule --- */
    earlyVotingDates: 'February 17 \u2013 February 27, 2026',
    earlyVotingHours: [
      { days: 'Mon \u2013 Sat',           hours: '7:00 AM \u2013 7:00 PM' },
      { days: 'Sunday, Feb 22',           hours: '11:00 AM \u2013 4:00 PM' }
    ],

    /* --- Elections Office --- */
    electionsOfficeAddress: 'Collin County Elections\n2010 Redbud Blvd, Suite 102\nMcKinney, TX 75069',
    electionsOfficePhone:   '(972) 424-1460',

    /* --- Key Democratic Primary Races --- */
    keyRaces: [
      {
        office: 'US Congress, District 3',
        note: 'Plano, McKinney, Allen, Frisco \u2014 growing Democratic opportunity against Keith Self (R)'
      },
      {
        office: 'US Congress, District 32',
        note: 'Keep Julie Johnson (D) in office \u2014 Richardson & parts of Plano, flipped blue in 2024'
      },
      {
        office: 'Texas House, Districts 66, 67, 70',
        note: 'Competitive suburban seats across Collin County'
      },
      {
        office: 'Governor',
        note: 'Choose the Democratic candidate for November'
      },
      {
        office: 'County & local races',
        note: 'These affect your daily life most'
      }
    ],

    /* --- Quick Resources --- */
    quickResources: [
      {
        icon: '\uD83D\uDCCD',
        label: 'Collin County Polling Locator',
        url:   'https://www.collincountytx.gov/elections/polling-locations',
        source: 'collincountytx.gov'
      },
      {
        icon: '\uD83D\uDD50',
        label: 'Early Voting Hours & Locations',
        url:   'https://www.collincountytx.gov/elections/early-voting',
        source: 'collincountytx.gov'
      },
      {
        icon: '\uD83D\uDCCB',
        label: 'Sample Ballot',
        url:   'https://www.collincountytx.gov/elections/sample-ballots',
        source: 'collincountytx.gov'
      }
    ]
  },


  /* ──────────────────────────────────────────
     DENTON COUNTY
     Population: ~1.0 million | Registered voters: ~600,000
     Leans Republican but south Denton trending competitive
     ────────────────────────────────────────── */
  denton: {
    name: 'Denton',
    fullName: 'Denton County',
    countySlug: 'denton',

    /* --- Official URLs --- */
    electionWebsite:      'https://www.votedenton.gov',
    electionWebsiteLabel: 'votedenton.gov',

    voteCenterFinderUrl:   'https://www.votedenton.gov/polling-locations/',
    voteCenterFinderLabel: 'Find Your Polling Location',

    earlyVotingUrl:   'https://www.votedenton.gov/early-voting/',
    earlyVotingLabel: 'Early Voting Locations & Hours',

    electionInfoUrl:   'https://www.votedenton.gov/current-election/',
    electionInfoLabel: 'Current Election Info',

    /* --- Vote Centers --- */
    voteCenterCount: 42,
    voteCenterNote:  'Vote at ANY Denton County Vote Center during early voting',

    /* --- Early Voting Schedule --- */
    earlyVotingDates: 'February 17 \u2013 February 27, 2026',
    earlyVotingHours: [
      { days: 'Mon \u2013 Sat',           hours: '7:00 AM \u2013 7:00 PM' },
      { days: 'Sunday, Feb 22',           hours: '11:00 AM \u2013 4:00 PM' }
    ],

    /* --- Elections Office --- */
    electionsOfficeAddress: 'Denton County Elections\n701 Kimberly Drive, Suite A101\nDenton, TX 76208',
    electionsOfficePhone:   '(940) 349-3200',

    /* --- Key Democratic Primary Races --- */
    keyRaces: [
      {
        office: 'US Congress, District 24',
        note: 'Help send Beth Van Duyne home \u2014 top Democratic flip target in DFW'
      },
      {
        office: 'US Congress, District 26',
        note: 'Open seat \u2014 Michael Burgess (R) retired'
      },
      {
        office: 'Texas House, District 65',
        note: 'Carrollton & Lewisville \u2014 Democratic pickup opportunity'
      },
      {
        office: 'Texas House, Districts 63, 64',
        note: 'Flower Mound, Denton city \u2014 competitive suburban seats'
      },
      {
        office: 'Governor',
        note: 'Choose the Democratic candidate for November'
      },
      {
        office: 'County & local races',
        note: 'These affect your daily life most'
      }
    ],

    /* --- Quick Resources --- */
    quickResources: [
      {
        icon: '\uD83D\uDCCD',
        label: 'Denton County Polling Locator',
        url:   'https://www.votedenton.gov/polling-locations/',
        source: 'votedenton.gov'
      },
      {
        icon: '\uD83D\uDD50',
        label: 'Early Voting Hours & Locations',
        url:   'https://www.votedenton.gov/early-voting/',
        source: 'votedenton.gov'
      },
      {
        icon: '\uD83D\uDCCB',
        label: 'Sample Ballot',
        url:   'https://www.votedenton.gov/sample-ballots/',
        source: 'votedenton.gov'
      }
    ]
  }

};
