/* ============================================
   TX VOTE INFO - County Election Data
   May 26, 2026 Texas Democratic Primary Runoff
   ============================================

   DATA SOURCES & ACCURACY NOTES:
   - County election website base URLs confirmed from public records
   - Early voting dates: May 18-22, 2026 per Texas Election Code
     (10th day before through 4th day before, weekdays only for runoffs)
   - Election Day: May 26, 2026
   - Mail ballot application deadline: received by May 15, 2026 (PAST)
   - Voter registration deadline: April 26, 2026 (PAST)
   - Eligibility: Voters who voted in the March 3 REPUBLICAN primary
     CANNOT vote in the Democratic primary runoff. Voters who voted
     Democratic in March OR didn't vote in March may vote.
   - Vote center counts confirmed from each county's official runoff
     PDF / public announcements (May 2026)

   PRIMARY → RUNOFF CHANGES:
   - Dallas County: switched to vote center model for Election Day
     (both parties agreed to countywide voting for the runoff)
   - Tarrant, Collin: same vote-center model as primary
   - Denton: still uses assigned precincts on Election Day with
     separate Dem and Rep sites
   ============================================ */

window.COUNTY_DATA = {

  /* ──────────────────────────────────────────
     DALLAS COUNTY
     Population: ~2.6 million | Registered voters: ~1.4 million
     Leans Democratic countywide
     74 early voting vote centers (confirmed via official PDF)
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

    electionInfoUrl:   'https://www.dallascountyvotes.org/voters/election/may-26-2026-primary-runoff-election/',
    electionInfoLabel: 'Runoff Election Info',

    /* --- Vote Centers --- */
    voteCenterCount: 74,
    voteCenterNote:  'Vote at ANY Dallas County Vote Center during early voting',

    /* --- Early Voting Schedule --- */
    earlyVotingDates: 'May 18 – May 22, 2026',
    earlyVotingHours: [
      { days: 'May 18–22 (Mon–Fri)', hours: '7:00 AM – 7:00 PM' }
    ],

    /* --- Election Day (May 26, 2026) --- */
    electionDayModel: 'voteCenters',
    electionDayNote: 'You can vote at <strong>any of 279 Dallas County Vote Centers</strong> on Election Day — both parties agreed to countywide voting for the runoff.',
    electionDayDemNote: 'Choose the <strong>Democratic runoff ballot</strong> when you arrive. (You cannot vote in the Democratic runoff if you voted in the Republican primary on March 3.)',
    electionDayFinderUrl: 'https://experience.arcgis.com/experience/2fe81f8ed7a1474fb75777b5a99e586a/page/Main-Page',
    electionDayFinderLabel: 'Find a Vote Center Near Me',
    electionDayHours: '7:00 AM – 7:00 PM',
    electionDayLocationCount: 279,

    /* --- Elections Office (for mail ballot applications) --- */
    electionsOfficeAddress: 'Dallas County Elections Department\n1460 Round Table Drive\nDallas, TX 75247',
    electionsOfficePhone:   '(214) 819-6300',

    /* --- Quick Resources (prepended on county page) --- */
    quickResources: [
      {
        icon: '📍',
        label: 'Dallas Vote Center Finder',
        url:   'https://experience.arcgis.com/experience/2fe81f8ed7a1474fb75777b5a99e586a/page/Main-Page',
        source: 'dallascountyvotes.org'
      },
      {
        icon: '🕐',
        label: 'Runoff Early Voting Info',
        url:   'https://www.dallascountyvotes.org/voters/election/may-26-2026-primary-runoff-election/',
        source: 'dallascountyvotes.org'
      },
      {
        icon: '📋',
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
     37 early voting vote centers (confirmed via official PDF)
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
    voteCenterCount: 37,
    voteCenterNote:  'Vote at ANY Tarrant County location during early voting',

    /* --- Early Voting Schedule --- */
    earlyVotingDates: 'May 18 – May 22, 2026',
    earlyVotingHours: [
      { days: 'May 18–22 (Mon–Fri)', hours: '7:00 AM – 7:00 PM' }
    ],

    /* --- Election Day (May 26, 2026) --- */
    electionDayModel: 'voteCenters',
    electionDayNote: 'You can vote at <strong>any Tarrant County Vote Center</strong> on Election Day — same as early voting.',
    electionDayDemNote: 'Both parties’ runoffs use the same locations. Ask for the <strong>Democratic runoff ballot</strong>. (You cannot vote in the Democratic runoff if you voted in the Republican primary on March 3.)',
    electionDayFinderUrl: 'https://gisit.tarrantcounty.com/TCVL/',
    electionDayFinderLabel: 'Find a Vote Center Near Me',
    electionDayHours: '7:00 AM – 7:00 PM',
    electionDayLocationCount: null,

    /* --- Elections Office --- */
    electionsOfficeAddress: 'Tarrant County Elections Administration\n2700 Premier Street\nFort Worth, TX 76111',
    electionsOfficePhone:   '(817) 831-8683',

    /* --- Quick Resources --- */
    quickResources: [
      {
        icon: '📍',
        label: 'Tarrant Voter Lookup & Polling Locator',
        url:   'https://gisit.tarrantcounty.com/TCVL/',
        source: 'tarrantcountytx.gov'
      },
      {
        icon: '🕐',
        label: 'Early Voting Locations & Wait Times',
        url:   'https://gisit.tarrantcounty.com/tcvotingwaittime/',
        source: 'tarrantcountytx.gov'
      },
      {
        icon: '📋',
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
     38 early voting vote centers
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

    electionInfoUrl:   'https://www.collincountytx.gov/elections/details',
    electionInfoLabel: 'Election Information',

    /* --- Vote Centers --- */
    voteCenterCount: 38,
    voteCenterNote:  'Vote at ANY Collin County Vote Center during early voting',

    /* --- Early Voting Schedule --- */
    earlyVotingDates: 'May 18 – May 22, 2026',
    earlyVotingHours: [
      { days: 'May 18–22 (Mon–Fri)', hours: '7:00 AM – 7:00 PM' }
    ],

    /* --- Election Day (May 26, 2026) --- */
    electionDayModel: 'voteCenters',
    electionDayNote: 'You can vote at <strong>any Collin County Vote Center</strong> on Election Day — same as early voting.',
    electionDayDemNote: 'Both parties’ runoffs use the same locations. Ask for the <strong>Democratic runoff ballot</strong>. (You cannot vote in the Democratic runoff if you voted in the Republican primary on March 3.)',
    electionDayFinderUrl: 'https://www.collincountytx.gov/elections/polling-locations',
    electionDayFinderLabel: 'Find a Vote Center Near Me',
    electionDayHours: '7:00 AM – 7:00 PM',
    electionDayLocationCount: null,

    /* --- Elections Office --- */
    electionsOfficeAddress: 'Collin County Elections\n2010 Redbud Blvd, Suite 102\nMcKinney, TX 75069',
    electionsOfficePhone:   '(972) 547-1990',

    /* --- Quick Resources --- */
    quickResources: [
      {
        icon: '📍',
        label: 'Collin County Polling Locator',
        url:   'https://www.collincountytx.gov/elections/polling-locations',
        source: 'collincountytx.gov'
      },
      {
        icon: '🕐',
        label: 'Early Voting & Polling Locations',
        url:   'https://www.collincountytx.gov/elections/polling-locations',
        source: 'collincountytx.gov'
      },
      {
        icon: '📋',
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
     45 early voting vote centers
     Election Day: still uses assigned precincts with separate
     Democratic and Republican runoff sites
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
    voteCenterCount: 45,
    voteCenterNote:  'Vote at ANY Denton County Vote Center during early voting',

    /* --- Early Voting Schedule --- */
    earlyVotingDates: 'May 18 – May 22, 2026',
    earlyVotingHours: [
      { days: 'May 18–22 (Mon–Fri)', hours: '7:00 AM – 7:00 PM' }
    ],

    /* --- Election Day (May 26, 2026) --- */
    electionDayModel: 'assignedPrecinct',
    electionDayNote: 'You must vote at your assigned precinct polling location. Democratic and Republican runoffs are at <strong>separate locations</strong>.',
    electionDayDemNote: 'Look up your <strong>Democratic runoff</strong> polling place for your precinct. (You cannot vote in the Democratic runoff if you voted in the Republican primary on March 3.)',
    electionDayFinderUrl: 'https://www.votedenton.gov/voter-information/voter-lookup/',
    electionDayFinderLabel: 'Find My Election Day Polling Place',
    electionDayHours: '7:00 AM – 7:00 PM',
    electionDayLocationCount: null,

    /* --- Elections Office --- */
    electionsOfficeAddress: 'Denton County Elections\n701 Kimberly Drive, Suite A101\nDenton, TX 76208',
    electionsOfficePhone:   '(940) 349-3200',

    /* --- Quick Resources --- */
    quickResources: [
      {
        icon: '📍',
        label: 'Denton County Voter Lookup',
        url:   'https://www.votedenton.gov/voter-information/voter-lookup/',
        source: 'votedenton.gov'
      },
      {
        icon: '🕐',
        label: 'Early Voting Locations & Hours',
        url:   'https://www.votedenton.gov/early-voting-information/early-voting-in-person/',
        source: 'votedenton.gov'
      },
      {
        icon: '📋',
        label: 'Sample Ballot Lookup',
        url:   'https://www.votedenton.gov/voter-information/voter-lookup/#VoterEligibilitySearch',
        source: 'votedenton.gov'
      }
    ]
  }

};
