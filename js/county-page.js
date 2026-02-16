/* ============================================
   TX VOTE INFO - County Page Data Injection
   Reads data-county from <body>, populates
   county-specific content from COUNTY_DATA
   ============================================ */

(function() {
  'use strict';

  function initCountyPage() {
    var countyKey = document.body.getAttribute('data-county');
    if (!countyKey || !window.COUNTY_DATA || !window.COUNTY_DATA[countyKey]) return;

    var data = window.COUNTY_DATA[countyKey];

    // Update page title
    document.title = 'Vote in ' + data.fullName + ' \u2014 TX Vote Info';

    // Populate simple text/link fields
    var fields = document.querySelectorAll('[data-county-field]');
    for (var i = 0; i < fields.length; i++) {
      var el = fields[i];
      var field = el.getAttribute('data-county-field');
      var value = data[field];
      if (value === undefined) continue;

      if (el.tagName === 'A') {
        el.href = value;
      } else {
        el.textContent = value;
      }
    }

    // Populate early voting hours table
    var hoursBody = document.querySelector('[data-county-list="earlyVotingHours"]');
    if (hoursBody && data.earlyVotingHours) {
      hoursBody.innerHTML = '';
      for (var k = 0; k < data.earlyVotingHours.length; k++) {
        var row = data.earlyVotingHours[k];
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.textContent = row.days;
        var td2 = document.createElement('td');
        td2.textContent = row.hours;
        tr.appendChild(td1);
        tr.appendChild(td2);
        hoursBody.appendChild(tr);
      }
    }

    // Populate county-specific quick resources (prepend before statewide ones)
    var resourcesGrid = document.querySelector('[data-county-list="quickResources"]');
    if (resourcesGrid && data.quickResources) {
      var firstChild = resourcesGrid.firstChild;
      for (var m = 0; m < data.quickResources.length; m++) {
        var res = data.quickResources[m];
        var a = document.createElement('a');
        a.href = res.url;
        a.target = '_blank';
        a.className = 'vote-resource';

        var iconSpan = document.createElement('span');
        iconSpan.className = 'vote-resource__icon';
        iconSpan.textContent = res.icon;

        var textWrapper = document.createElement('span');

        var labelSpan = document.createElement('span');
        labelSpan.className = 'vote-resource__label';
        labelSpan.textContent = res.label;

        var sourceSpan = document.createElement('span');
        sourceSpan.className = 'vote-resource__source';
        sourceSpan.textContent = res.source;

        textWrapper.appendChild(labelSpan);
        textWrapper.appendChild(sourceSpan);
        a.appendChild(iconSpan);
        a.appendChild(textWrapper);

        resourcesGrid.insertBefore(a, firstChild);
      }
    }
  }

  document.addEventListener('DOMContentLoaded', initCountyPage);
})();
