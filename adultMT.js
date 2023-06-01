javascript:(function () {
    const kickboxing = [ 'Kickboxing' ];
    const kbClasses = Array.from($('#rs-login-activity-container > div > table > tbody > tr > td:nth-child(3)'))
      .map((col) => col.innerText)
      .filter((text) => text.indexOf('Attended') !== -1)
      .filter((text) => {
        return kickboxing.find((thing) => text.indexOf(thing) !== -1)
      }).length;

    const fundMT = ['Muay Thai Fundamentals'];
    const fundsClasses = Array.from($('#rs-login-activity-container > div > table > tbody > tr > td:nth-child(3)'))
      .map((col) => col.innerText)
      .filter((text) => text.indexOf('Attended') !== -1)
      .filter((text) => {
        return fundMT.find((thing) => text.indexOf(thing) !== -1)
      }).length;

    const intMT = ['Muay Thai Intermediate'];
    const intMTClasses = Array.from($('#rs-login-activity-container > div > table > tbody > tr > td:nth-child(3)'))
       .map((col) => col.innerText)
       .filter((text) => text.indexOf('Attended') !== -1)
       .filter((text) => {
          return intMT.find((thing) => text.indexOf(thing) !== -1)
       }).length;

    const advMT = ['Muay Thai Advanced'];
    const advMTClasses = Array.from($('#rs-login-activity-container > div > table > tbody > tr > td:nth-child(3)'))
       .map((col) => col.innerText)
       .filter((text) => text.indexOf('Attended') !== -1)
       .filter((text) => {
          return advMT.find((thing) => text.indexOf(thing) !== -1)
       }).length;

    const allLevelMT = ['Muay Thai All-Levels'];
    const allLevelMTClasses = Array.from($('#rs-login-activity-container > div > table > tbody > tr > td:nth-child(3)'))
       .map((col) => col.innerText)
       .filter((text) => text.indexOf('Attended') !== -1)
       .filter((text) => {
          return allLevelMT.find((thing) => text.indexOf(thing) !== -1)
       }).length;

  const sparMT = ['Tech Sparring'];
    const sparClasses = Array.from($('#rs-login-activity-container > div > table > tbody > tr > td:nth-child(3)'))
       .map((col) => col.innerText)
       .filter((text) => text.indexOf('Attended') !== -1)
       .filter((text) => {
          return sparMT.find((thing) => text.indexOf(thing) !== -1)
       }).length;

    window.alert('Kickboxing: ' + kbClasses + '  |  Fundamental MT: '  +  fundsClasses  + '  | Intermediate MT: '+ intMTClasses + '  |  Advanced MT: ' + advMTClasses + '  |  All Levels MT: ' + allLevelMTClasses + '  |  Sparring: ' + sparClasses )
  })()

 