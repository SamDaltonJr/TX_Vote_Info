/* ============================================
   TX VOTE INFO - County Election Data
   March 3, 2026 Texas Democratic Primary
   ============================================

   DATA SOURCES & ACCURACY NOTES:
   - County election website base URLs confirmed from user + public records
   - Congressional districts reflect 2021 redistricting (effective 2023-2032)
   - Texas House/Senate districts reflect 2021 redistricting
   - Early voting dates: Feb 17-27, 2026 per Texas Election Code
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

    voteCenterFinderUrl:   'https://experience.arcgis.com/experience/2fe81f8ed7a1474fb75777b5a99e586a/page/Main-Page',
    voteCenterFinderLabel: 'Find a Vote Center',

    earlyVotingUrl:   'https://experience.arcgis.com/experience/2fe81f8ed7a1474fb75777b5a99e586a/page/Main-Page',
    earlyVotingLabel: 'Early Voting Locations & Hours',

    electionInfoUrl:   'https://www.dallascountyvotes.org/voters/election/',
    electionInfoLabel: 'Current Election Info',

    /* --- Vote Centers --- */
    voteCenterCount: 74,
    voteCenterNote:  'Vote at ANY Dallas County Vote Center during early voting',

    /* --- Early Voting Schedule --- */
    earlyVotingDates: 'February 17 \u2013 February 27, 2026',
    earlyVotingHours: [
      { days: 'Feb 17\u201320 (Tue\u2013Fri)',  hours: '8:00 AM \u2013 5:00 PM' },
      { days: 'Feb 21 (Sat)',                    hours: '7:00 AM \u2013 7:00 PM' },
      { days: 'Feb 22 (Sun)',                    hours: '12:00 PM \u2013 6:00 PM' },
      { days: 'Feb 23\u201327 (Mon\u2013Fri)',   hours: '7:00 AM \u2013 7:00 PM' }
    ],

    /* --- Elections Office (for mail ballot applications) --- */
    electionsOfficeAddress: 'Dallas County Elections Department\n1460 Round Table Drive\nDallas, TX 75247',
    electionsOfficePhone:   '(214) 819-6300',

    /* --- Quick Resources (prepended on county page) --- */
    quickResources: [
      {
        icon: '\uD83D\uDCCD',
        label: 'Dallas Vote Center Finder',
        url:   'https://experience.arcgis.com/experience/2fe81f8ed7a1474fb75777b5a99e586a/page/Main-Page',
        source: 'dallascountyvotes.org'
      },
      {
        icon: '\uD83D\uDD50',
        label: 'Early Voting Locations & Hours',
        url:   'https://experience.arcgis.com/experience/2fe81f8ed7a1474fb75777b5a99e586a/page/Main-Page',
        source: 'dallascountyvotes.org'
      },
      {
        icon: '\uD83D\uDCCB',
        label: 'Sample Ballot Lookup',
        url:   'https://www.dallascountyvotes.org/voters/ballot/',
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
    electionWebsite:      'https://www.tarrantcountytx.gov/en/elections.html',
    electionWebsiteLabel: 'tarrantcountytx.gov/elections',

    voteCenterFinderUrl:   'https://gisit.tarrantcounty.com/TCVL/',
    voteCenterFinderLabel: 'Find Your Polling Location',

    earlyVotingUrl:   'https://gisit.tarrantcounty.com/tcvotingwaittime/',
    earlyVotingLabel: 'Early Voting Locations & Wait Times',

    electionInfoUrl:   'https://www.tarrantcountytx.gov/en/elections/current-election-information.html',
    electionInfoLabel: 'Current Election Info',

    /* --- Vote Centers --- */
    voteCenterCount: 50,
    voteCenterNote:  'Vote at ANY Tarrant County location during early voting',

    /* --- Early Voting Schedule --- */
    earlyVotingDates: 'February 17 \u2013 February 27, 2026',
    earlyVotingHours: [
      { days: 'Feb 17\u201320 (Tue\u2013Thu)',  hours: '8:00 AM \u2013 5:00 PM' },
      { days: 'Feb 21 (Fri)',                    hours: '7:00 AM \u2013 7:00 PM' },
      { days: 'Feb 22 (Sat)',                    hours: '10:00 AM \u2013 4:00 PM' },
      { days: 'Feb 23\u201327 (Sun\u2013Fri)',   hours: '7:00 AM \u2013 7:00 PM' }
    ],

    /* --- Elections Office --- */
    electionsOfficeAddress: 'Tarrant County Elections Administration\n2700 Premier Street\nFort Worth, TX 76111',
    electionsOfficePhone:   '(817) 831-8683',

    /* --- Quick Resources --- */
    quickResources: [
      {
        icon: '\uD83D\uDCCD',
        label: 'Tarrant Voter Lookup & Polling Locator',
        url:   'https://gisit.tarrantcounty.com/TCVL/',
        source: 'tarrantcountytx.gov'
      },
      {
        icon: '\uD83D\uDD50',
        label: 'Early Voting Locations & Wait Times',
        url:   'https://gisit.tarrantcounty.com/tcvotingwaittime/',
        source: 'tarrantcountytx.gov'
      },
      {
        icon: '\uD83D\uDCCB',
        label: 'Sample Ballot Lookup',
        url:   'https://gisit.tarrantcounty.com/TCVL/',
        source: 'tarrantcountytx.gov'
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

    earlyVotingUrl:   'https://www.collincountytx.gov/elections/polling-locations',
    earlyVotingLabel: 'Early Voting & Polling Locations',

    electionInfoUrl:   'https://www.collincountytx.gov/elections/election-information',
    electionInfoLabel: 'Election Information',

    /* --- Vote Centers --- */
    voteCenterCount: 40,
    voteCenterNote:  'Vote at ANY Collin County Vote Center during early voting',

    /* --- Early Voting Schedule --- */
    earlyVotingDates: 'February 17 \u2013 February 27, 2026',
    earlyVotingHours: [
      { days: 'Feb 17\u201320 (Tue\u2013Fri)',  hours: '8:00 AM \u2013 5:00 PM' },
      { days: 'Feb 21 (Sat)',                    hours: '7:00 AM \u2013 7:00 PM' },
      { days: 'Feb 22 (Sun)',                    hours: '11:00 AM \u2013 5:00 PM' },
      { days: 'Feb 23\u201327 (Mon\u2013Fri)',   hours: '7:00 AM \u2013 7:00 PM' }
    ],

    /* --- Elections Office --- */
    electionsOfficeAddress: 'Collin County Elections\n2010 Redbud Blvd, Suite 102\nMcKinney, TX 75069',
    electionsOfficePhone:   '(972) 424-1460',

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
        label: 'Early Voting & Polling Locations',
        url:   'https://www.collincountytx.gov/elections/polling-locations',
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

    voteCenterFinderUrl:   'https://www.votedenton.gov/voter-information/voter-lookup/',
    voteCenterFinderLabel: 'Find Your Polling Location',

    earlyVotingUrl:   'https://www.votedenton.gov/early-voting-information/early-voting-in-person/',
    earlyVotingLabel: 'Early Voting Locations & Hours',

    electionInfoUrl:   'https://www.votedenton.gov/election-day-information/current-and-upcoming-election-information/',
    electionInfoLabel: 'Current Election Info',

    /* --- Vote Centers --- */
    voteCenterCount: 42,
    voteCenterNote:  'Vote at ANY Denton County Vote Center during early voting',

    /* --- Early Voting Schedule --- */
    earlyVotingDates: 'February 17 \u2013 February 27, 2026',
    earlyVotingHours: [
      { days: 'Feb 17\u201320 (Tue\u2013Fri)',  hours: '8:00 AM \u2013 5:00 PM' },
      { days: 'Feb 21 (Sat)',                    hours: '7:00 AM \u2013 7:00 PM' },
      { days: 'Feb 22 (Sun)',                    hours: '11:00 AM \u2013 5:00 PM' },
      { days: 'Feb 23\u201327 (Mon\u2013Fri)',   hours: '7:00 AM \u2013 7:00 PM' }
    ],

    /* --- Elections Office --- */
    electionsOfficeAddress: 'Denton County Elections\n701 Kimberly Drive, Suite A101\nDenton, TX 76208',
    electionsOfficePhone:   '(940) 349-3200',

    /* --- Quick Resources --- */
    quickResources: [
      {
        icon: '\uD83D\uDCCD',
        label: 'Denton County Voter Lookup',
        url:   'https://www.votedenton.gov/voter-information/voter-lookup/',
        source: 'votedenton.gov'
      },
      {
        icon: '\uD83D\uDD50',
        label: 'Early Voting Locations & Hours',
        url:   'https://www.votedenton.gov/early-voting-information/early-voting-in-person/',
        source: 'votedenton.gov'
      },
      {
        icon: '\uD83D\uDCCB',
        label: 'Sample Ballot Lookup',
        url:   'https://www.votedenton.gov/voter-information/voter-lookup/#VoterEligibilitySearch',
        source: 'votedenton.gov'
      }
    ]
  }

};
