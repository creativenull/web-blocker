interface BlockerStore {
  blocklist: string[]
}

const store: BlockerStore = {
  blocklist: ['developer.chrome.com'],
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.runtime.onMessageExternal.addListener((msg) => {
    // if (msg === 'overwrite') {
    //   chrome.tabs.executeScript({
    //     code: "document.body.innerHTML = 'Yooo'",
    //   })
    // }

    console.log('runtime.onMessage', msg)
  })

  chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    console.log('onBeforeNavigate', details)
    const url = details.url
    for (const blockedUrl of store.blocklist) {
      if (url.includes(blockedUrl)) {
        console.log('Found on blocklist', blockedUrl)
        chrome.runtime.sendMessage({ message: 'Hello World' })
        // chrome.tabs.sendMessage(details.tabId, { message: 'Hello World' })
      }
    }
  })
})
