chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color: '#3aa757' }, () => {
    console.log("The color is green.");
  });

  chrome.webNavigation.onCompleted.addListener(() => {
    console.log('Completed the nabigation')
  }, {url: [{urlMatches : 'https://developer.chrome.com'}]})
});

