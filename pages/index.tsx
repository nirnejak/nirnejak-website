import * as React from "react"

import * as Tooltip from "@radix-ui/react-tooltip"
import {
  ArrowRight,
  CodepenFill,
  DribbbleFill,
  GithubFill,
  TwitterFill,
} from "akar-icons"

import Container from "components/atoms/Container"
import Layout from "components/atoms/Layout"
import AppLink from "components/atoms/Link"
import classNames from "utils/classNames"

const renderSocialLink = (
  text: string,
  link: string,
  icon: React.ReactNode,
  isRight?: boolean
): JSX.Element => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            onClick={() => window.open(link, "_blank")}
            className={classNames(
              "group rounded-md p-3 text-zinc-700 hover:bg-zinc-800",
              isRight ? "ml-auto" : ""
            )}
          >
            {icon}
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="select-none rounded-md bg-zinc-800 px-3.5 py-2.5 text-sm leading-none text-zinc-300 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade"
            sideOffset={5}
          >
            {text}
            <Tooltip.Arrow className="fill-zinc-800" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <section className="flex h-screen items-start pt-56">
          <div>
            <h1 className="text-5xl font-bold text-zinc-300">
              Jitendra Nirnejak
            </h1>
            <p className="mt-5 font-light leading-7 text-gray-500">
              I{"'"}m a{" "}
              <span className="text-gradient-blue font-bold">Developer</span>,
              <span className="text-gradient-red font-bold"> Designer </span>&
              sometimes a{" "}
              <span className="text-gradient-yellow font-bold">Blogger</span>. I
              am passionate about elegant user interfaces, web animations, and
              data visualization. Currently{" "}
              <AppLink
                href="https://www.draxlr.com/"
                target="_blank"
                className="font-bold text-zinc-400"
              >
                @Inkoop(Draxlr)
              </AppLink>
            </p>
            <div className="mt-16 flex">
              {renderSocialLink(
                "Github",
                "https://github.com/nirnejak/",
                <GithubFill />
              )}
              {renderSocialLink(
                "Codepen",
                "https://codepen.io/nirnejak/",
                <CodepenFill />
              )}
              {renderSocialLink(
                "Dribbble",
                "https://dribbble.com/nirnejak",
                <DribbbleFill />
              )}
              {renderSocialLink(
                "Twitter",
                "https://twitter.com/jeetnirnejak/",
                <span className="flex items-center gap-1.5">
                  <TwitterFill className="group-hover:animate-slideRight group-focus:animate-slideRight" />
                  <ArrowRight
                    className="hidden animate-slideLeftAndFade hover:block group-hover:block group-focus-visible:block"
                    size={14}
                  />
                </span>,
                true
              )}
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default HomePage
