javascript:(function () {
  const kidsBJJ = ['Tigers All Levels', 'Tigers Advanced', 'Little Tigers'];
  const bjjKids = Array.from($('#rs-login-activity-container > div > table > tbody > tr > td:nth-child(3)'))
      .map((col) => col.innerText)
      .filter((text) => text.indexOf('Attended') !== -1)
      .filter((text) => {
        return kidsBJJ.find((thing) => text.indexOf(thing) !== -1)
      }).length;
  const kidsMT = ['Tigers Fundamentals Muay Thai'];
  const mtKids = Array.from($('#rs-login-activity-container > div > table > tbody > tr > td:nth-child(3)'))
          .map((col) => col.innerText)
          .filter((text) => text.indexOf('Attended') !== -1)
          .filter((text) => {
            return kidsMT.find((thing) => text.indexOf(thing) !== -1)
          }).length;
    window.alert('Kids Class Count: ' +  'Kids BJJ: ' + bjjKids +  '  |  Kids MT: ' + mtKids)
  })()