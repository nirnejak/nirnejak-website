export interface Project {
  title: string
  link: string
}

export const ALL_SITES: { products: Project[]; websites: Project[] } = {
  products: [
    { title: "Acquisity", link: "https://www.acquisity.ai/" },
    { title: "Superserve - Platform", link: "https://console.superserve.ai/" },
    { title: "Data Vidhya", link: "https://datavidhya.com/" },
    { title: "Draxlr", link: "https://www.draxlr.com/" },
    {
      title: "DevTools Academy",
      link: "https://www.devtoolsacademy.com/",
    },
    {
      title: "Merkle Science - Compass",
      link: "https://www.merklescience.com/platform/transaction-wallet-monitoring",
    },
    {
      title: "Merkle Science - KYBB",
      link: "https://www.merklescience.com/platform/intelligence-reports",
    },
  ],
  websites: [
    { title: "Superserve - Website", link: "https://www.superserve.ai/" },
    {
      title: "Superserve - Prev Website",
      link: "https://superserve-legacy.vercel.app/",
    },
    { title: "Jessica Coppet", link: "https://jessicacoppetstudio.com/" },
    { title: "ROCC Naturals", link: "https://roccnaturals.com.au/" },
    { title: "Wills Property", link: "https://www.willsproperty.com.au/" },
    { title: "Warlimont & Nutt", link: "https://wnre.com.au/" },
    { title: "Matthews Agency", link: "https://matthews.agency/" },
    { title: "Wingspan Capital", link: "https://wingspancapital.com.au/" },
    { title: "Harris Wood", link: "https://www.harriswood.com.au/" },
    { title: "Movable", link: "https://www.movable.com.au/" },
    { title: "Montano", link: "https://www.montano.net.au/" },
    { title: "LBD Studios", link: "https://lbdstudios.com.au/" },
    {
      title: "Whitefox Real Estate",
      link: "https://www.whitefoxrealestate.com.au/",
    },
    { title: "Maven", link: "https://maven.com.au/" },
    { title: "Arkhaus", link: "https://arkhaus.com.au/" },
    { title: "iRock Finishes", link: "https://irockfinishes.com.au/" },
    { title: "Flip Films", link: "https://www.flipfilms.com.au/" },
    {
      title: "Stuart Family Lawyers",
      link: "https://www.stuartfamilylawyers.com.au/",
    },
    { title: "Inkoop", link: "https://www.inkoop.io/" },
  ],
}

export interface SideProject {
  name: string
  work: string
  link: string
}

export const SIDE_PROJECTS: SideProject[] = [
  {
    name: "Interactive Interfaces",
    work: "UI experiments with React & motion.dev",
    link: "https://interfaces.show/",
  },
  {
    name: "SwiftUI Components (WIP)",
    work: "UI components and experiments with SwiftUI",
    link: "https://www.swiftui.show/",
  },
  {
    name: "Invoy (WIP)",
    work: "Create, send and track beautiful invoices",
    link: "https://invoy.work/",
  },
  {
    name: "Peerlist UI Animation Challenge",
    work: "My submission for the challenge",
    link: "https://ui-animation-challenge.vercel.app",
  },
  {
    name: "SVG Animations Gallery",
    work: "SVG illustrations animated with motion.dev",
    link: "https://svg-animations-gallery.vercel.app/",
  },
  {
    name: "React Presentation Maker",
    work: "Use your React components as presentation slides",
    link: "https://github.com/nirnejak/react-presentation/",
  },
]
