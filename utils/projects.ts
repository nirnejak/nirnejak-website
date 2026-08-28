export interface Project {
  title: string
  link: string
}

export const allSites: { websites: Project[]; cms: Project[] } = {
  websites: [
    { title: "Acquisity", link: "https://acquisity.ai/" },
    { title: "Superserve - Platform", link: "https://console.superserve.ai/" },
    { title: "DataVidhya", link: "https://datavidhya.com/" },
    { title: "Draxlr", link: "https://www.draxlr.com/" },
    {
      title: "Dev Tools Academy",
      link: "https://www.devtoolsacademy.com/",
    },
    {
      title: "MerkleScience - Compass",
      link: "https://www.merklescience.com/platform/transaction-wallet-monitoring",
    },
    {
      title: "MerkleScience - KYBB",
      link: "https://www.merklescience.com/platform/intelligence-reports",
    },
    {
      title: "MarchHQ (Discontinued and Open Sourced)",
      link: "https://github.com/marchhq/march",
    },
  ],
  cms: [
    { title: "Superserve - Website", link: "https://superserve.ai/" },
    {
      title: "Superserve - Prev Website",
      link: "https://superserve-legacy.vercel.app/",
    },
    { title: "Jessica Coppet", link: "https://jessicacoppetstudio.com/" },
    { title: "ROCC Naturals", link: "https://roccnaturals.com.au/" },
    { title: "Wills Property", link: "https://www.willsproperty.com.au/" },
    { title: "Warlimont & Nutt", link: "https://www.wnre.com.au/" },
    // { title: "Sciberras Group", link: "https://sciberrasgroupre.com.au/" },
    { title: "Matthews Agency", link: "https://matthews.agency/" },
    { title: "Wingspan Capital", link: "https://wingspancapital.com.au/" },
    { title: "Harris Wood", link: "https://www.harriswood.com.au/" },
    { title: "Movable", link: "https://www.movable.com.au/" },
    { title: "Montano", link: "https://www.montano.net.au/" },
    { title: "LBD Studios", link: "https://www.lbdstudios.com.au/" },
    {
      title: "Whitefox Real Estate",
      link: "https://www.whitefoxrealestate.com.au/",
    },
    // { title: "Kooyong Travel", link: "https://kooyongtravel.com.au/" },
    { title: "Maven", link: "https://maven.com.au/" },
    { title: "Arkhaus", link: "https://arkhaus.com.au/" },
    { title: "iRock Finishes", link: "https://irockfinishes.com.au/" },
    { title: "Flip Films", link: "https://flipfilms.com.au/" },
    {
      title: "Stuart Family Lawyers",
      link: "https://www.stuartfamilylawyers.com.au/",
    },
    { title: "Inkoop", link: "https://www.inkoop.io/" },
    {
      title: "Sup Bot",
      link: "https://dribbble.com/shots/21362314-Sup-bot-Landing-Site",
    },
  ],
}
