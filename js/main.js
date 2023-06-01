// // Data
// const EarthData = [
//   [
//       {
//         count: 1,
//         title: "Stake",
//         text: "Invest your token in a Poppy single asset Vault."
//       },
//       {
//         count: 2,
//         title: "Earn",
//         text: "Poppy stakes the token on an external, interest-bearing platform."
//       },
//       {
//         count: 3,
//         title: "Reinvest",
//         text: "Your interest is used to purchase more of the asset and reinvested."
//       },
//       {
//         count: 4,
//         title: "Autocompound",
//         text: "Poppy regularly and automatically repeats the process, saving you time and fees."
//       }
//   ],
//   [
//     {
//       count: 1,
//       title: "Deposit",
//       text: "Stake LP tokens from external DEXs in a Poppy Vault."
//     },
//     {
//       count: 2,
//       title: "Earn Rewards",
//       text: "Poppy stakes the token on an external, interest-bearing platform."
//     },
//     {
//       count: 3,
//       title: "Reinvest",
//       text: "The interest earned on your LP stake is held in custody by Poppy."
//     },
//     {
//       count: 4,
//       title: "Autocompound",
//       text: "Poppy regularly and automatically repeats the process, saving you time and fees."
//     }
//   ],
//   [
//     {
//       count: 1,
//       title: "Stake",
//       text: "Invest your Poppy in an Earnings Pool for a specific asset."
//     },
//     {
//       count: 2,
//       title: "Earn",
//       text: "A share of the platform’s revenue is used to purchase the token."
//     },
//     {
//       count: 3,
//       title: "Reinvest",
//       text: "Your interest is used to purchase more of the asset and reinvested."
//     },
//     {
//       count: 4,
//       title: "Reward",
//       text: "Poppy uses your interest to purchase another asset that becomes your reward."
//     }
//   ],
//   [
//     {
//       count: 1,
//       title: "Deposit",
//       text: "Invest your token in a Poppy single asset Vault."
//     },
//     {
//       count: 2,
//       title: "Create Pair",
//       text: "Poppy stakes the token on an external, interest-bearing platform."
//     },
//     {
//       count: 3,
//       title: "Provide Liquidity",
//       text: "The token pair is staked in the liquidity pool on an external DEX."
//     },
//     {
//       count: 4,
//       title: "Earn",
//       text: "The interest earned on your LP stake is held in custody by Poppy."
//     }
//   ]
// ]

// Start
let ActiveEarthSection = 1
const startPreviewAnimation = () => {
  const elements = document.getElementsByClassName("preview-img")
  for (let item of elements) {
    item.classList.add("preview-img-active")
  }
}

// const setActiveEarthSection = (e) => {
//   ActiveEarthSection = Number(e.target.dataset.id)
//   buildEarthNavigation()
//   buildEarnContent()
// }

// const addListenersToEarthNavigation = () => {
//   const elements = document.getElementsByClassName(" earn-navigation-item")
//   for (let item of elements) {
//     item.addEventListener("click", setActiveEarthSection)
//   }
// }

const start = () => {
  // start image animations
  setTimeout(() => {
    startPreviewAnimation()
  }, 10)

  // start title animation
  setTimeout(() => {
    const title = document.getElementById("preview-title")
    title.classList.add("preview-title-active")
  }, 30)

  // start subtitle animation
  setTimeout(() => {
    const subtitle = document.getElementById("preview-subtitle")
    subtitle.classList.add("preview-subtitle-active")
  }, 140)

  // start news btn animation
  setTimeout(() => {
    const newsBtn = document.getElementById("news-btn")
    newsBtn.classList.add("news-btn-active")
  }, 700)

  // start news btn animation
  setTimeout(() => {
    const docsBtn = document.getElementById("docs-btn")
    docsBtn.classList.add("docs-btn-active")
  }, 900)

  // build earth section
  // addListenersToEarthNavigation()
  // buildEarthNavigation()
  // buildEarnContent()
}

// const buildEarthNavigation = () => {
//   const elements = document.getElementsByClassName("earn-navigation-item")
//   for (let item of elements) {
//     item.style.background = "transparent"
//     item.style.color = "#999CB3"
//   }

//   const activeElements = document.getElementsByClassName("earn-navigation-item-" + ActiveEarthSection )
//   for (let item of activeElements) {
//     item.style.background = "#FFD17C"
//     item.style.color = "#000"
//   }
// }

// const buildEarnContent = () => {
//   const mainSection = document.getElementById("earn-list")
//   mainSection.innerText = ''


//   EarthData[ActiveEarthSection - 1].forEach(item => {
//     console.log(item, 'item')
//     const newElement = document.createElement("div")
//     newElement.className = "earn-item"

//     // create count span
//     const countSpan= document.createElement("span")
//     countSpan.className = "earn-number"
//     countSpan.innerText = item.count

//     // create title
//     const earnTitle = document.createElement("h4")
//     earnTitle.className = "earn-item-title"
//     earnTitle.innerText = item.title

//     // create text
//     const earnText = document.createElement("p")
//     earnText.className = "earn-text"
//     earnText.innerText = item.text

//     // add elements to item
//     newElement.appendChild(countSpan)
//     newElement.appendChild(earnTitle)
//     newElement.appendChild(earnText)

//     // add item to main section
//     mainSection.appendChild(newElement)
//   })
// }



start()