import * as React from "react"

import Container from "components/atoms/Container"
import AppLink from "components/atoms/Link"
import SEO from "components/SEO"
import WorkLinks from "components/WorkLinks"

const sites = {
  ecommerce: [
    { title: "ROCC Naturals", link: "https://roccnaturals.com.au/" },
    { title: "Jessica Coppet", link: "https://jessicacoppetstudio.com/" },
  ],
  websites: [
    { title: "Draxlr", link: "https://draxlr.com/" },
    { title: "Sup Bot", link: "https://sup.today/" },
    { title: "Inkoop", link: "https://www.inkoop.io/" },
  ],
  cms: [
    { title: "Warlimont & Nutt", link: "https://www.wnre.com.au/" },
    { title: "Sciberras Group", link: "https://sciberrasgroupre.com.au/" },
    { title: "Matthews Agency", link: "https://matthews.agency/" },
    { title: "Wingspan Capital", link: "https://wingspancapital.com.au/" },
    { title: "Harris Wood", link: "https://www.harriswood.com.au/" },
    { title: "Movable", link: "https://www.movable.com.au/" },
    { title: "LBD Studios", link: "https://www.lbdstudios.com.au/" },
    {
      title: "Whitefox Real Estate",
      link: "https://whitefoxrealestate.com.au/",
    },
    { title: "Kooyong Travel", link: "https://kooyongtravel.com.au/" },
    { title: "Maven", link: "https://maven.com.au/" },
    { title: "Srkhaus", link: "https://www.arkhaus.com.au/" },
    { title: "iRock Finishes", link: "https://irockfinishes.com.au/" },
    { title: "Flip Films", link: "https://flipfilms.com.au/" },
    {
      title: "Stuart Family Lawyers",
      link: "https://www.stuartfamilylawyers.com.au/",
    },
  ],
}

const WorkPage: React.FC = () => {
  return (
    <Container>
      <SEO
        title="Sites | Jitendra Nirnejak"
        description="Websites built by Jitendra Nirnejak"
        path="/work/sites/"
      />
      <section className="flex min-h-screen items-start pt-32 md:pt-40">
        <div className="w-full">
          <h1 className="text-5xl font-bold text-zinc-300">Sites</h1>

          <div className="mt-10 text-sm md:mt-16">
            <WorkLinks />
          </div>

          <div className="mt-10 text-sm md:mt-16">
            <div className="mb-16 flex flex-col md:flex-row">
              <p className="mb-3 flex-1 text-zinc-300 md:mt-2">
                E-commerce Sites(with Shopify Backend)
              </p>
              <div className="flex flex-1 flex-col gap-1 md:mx-3">
                {sites.ecommerce.map((project, index) => (
                  <AppLink
                    key={index}
                    href={project.link}
                    target="_blank"
                    className="hover-bg rounded-md px-3 py-2 outline-none"
                  >
                    <p className="mb-1.5 font-bold">{project.title}</p>
                    {/* <p className="text-xs text-zinc-500">
                      {project.description}
                    </p> */}
                  </AppLink>
                ))}
              </div>
            </div>
            <div className="mb-16 flex flex-col md:flex-row">
              <p className="mb-3 flex-1 text-zinc-300 md:mt-2">
                Websites(without CMS Integration)
              </p>
              <div className="flex flex-1 flex-col gap-1 md:mx-3">
                {sites.websites.map((project, index) => (
                  <AppLink
                    key={index}
                    href={project.link}
                    target="_blank"
                    className="hover-bg rounded-md px-3 py-2 outline-none"
                  >
                    <p className="mb-1.5 font-bold">{project.title}</p>
                    {/* <p className="text-xs text-zinc-500">
                      {project.description}
                    </p> */}
                  </AppLink>
                ))}
              </div>
            </div>
            <div className="mb-16 flex flex-col md:flex-row">
              <p className="mb-3 flex-1 text-zinc-300 md:mt-2">
                Websites(with CMS Integration)
              </p>
              <div className="flex flex-1 flex-col gap-1 md:mx-3">
                {sites.cms.map((project, index) => (
                  <AppLink
                    key={index}
                    href={project.link}
                    target="_blank"
                    className="hover-bg rounded-md px-3 py-2 outline-none"
                  >
                    <p className="mb-1.5 font-bold">{project.title}</p>
                    {/* <p className="text-xs text-zinc-500">
                      {project.description}
                    </p> */}
                  </AppLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default WorkPage
