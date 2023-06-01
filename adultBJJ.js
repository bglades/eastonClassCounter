javascript:(function () {
    const fundies = ['Fundamentals Jiu-Jitsu'];
    const fundiesClasses = Array.from($('#rs-login-activity-container > div > table > tbody > tr > td:nth-child(3)'))
    .map((col) => col.innerText)
    .filter((text) => text.indexOf('Attended') !== -1)
    .filter((text) => {
      return fundies.find((thing) => text.indexOf(thing) !== -1)
    }).length;

    const allLevels = ['All Levels Jiu-Jitsu'];
    const allLevelsClasses =Array.from($('#rs-login-activity-container > div > table > tbody > tr > td:nth-child(3)'))
    .map((col) => col.innerText)
    .filter((text) => text.indexOf('Attended') !== -1)
    .filter((text) => {
      return allLevels.find((thing) => text.indexOf(thing) !== -1)
    }).length;

    const intBJJ = ['Intermediate No-Gi Jiu-Jitsu','Intermediate Gi Jiu-Jitsu'];
    const intClasses = Array.from($('#rs-login-activity-container > div > table > tbody > tr > td:nth-child(3)'))
      .map((col) => col.innerText)
      .filter((text) => text.indexOf('Attended') !== -1)
      .filter((text) => {
        return intBJJ.find((thing) => text.indexOf(thing) !== -1)
      }).length;

    const advanced = [ 'Advanced Gi Jiu-Jitsu', 'Advanced No-Gi Jiu-Jitsu'];
    const advancedClasses = Array.from($('#rs-login-activity-container > div > table > tbody > tr > td:nth-child(3)'))
      .map((col) => col.innerText)
      .filter((text) => text.indexOf('Attended') !== -1)
      .filter((text) => {
        return advanced.find((thing) => text.indexOf(thing) !== -1)
      }).length;

    const ladies = ["Women's Jiu Jitsu"];
    const ladiesClasses = Array.from($('#rs-login-activity-container > div > table > tbody > tr > td:nth-child(3)'))
    .map((col) => col.innerText)
    .filter((text) => text.indexOf('Attended') !== -1)
    .filter((text) => {
      return ladies.find((thing) => text.indexOf(thing) !== -1)
    }).length;

    const randori = ['Randori'];
    const randoriBJJ = Array.from($('#rs-login-activity-container > div > table > tbody > tr > td:nth-child(3)'))
    .map((col) => col.innerText)
    .filter((text) => text.indexOf('Attended') !== -1)
    .filter((text) => {
      return randori.find((thing) => text.indexOf(thing) !== -1)
    }).length;

 
    window.alert("Jiu Jitsu Class Count: " + 'Fundamentals: ' + fundiesClasses + '  |  All Levels: ' + allLevelsClasses + '  |  Intermediate: ' + intClasses + '  |  Advanced: ' + advancedClasses + '  |  Ladies: ' + ladiesClasses + '  | Randori: ' + randoriBJJ )
  })()