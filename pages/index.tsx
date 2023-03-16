import * as React from "react"

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

const socialLinkClasses = "rounded-md p-3 text-zinc-700 hover:bg-zinc-800"

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <section className="flex h-screen items-center">
          <div>
            <h1 className="text-5xl font-bold text-zinc-800">
              <span className="text-gradient-blue">Design, </span>
              <span className="text-gradient-red">Code & </span>
              <span className="text-gradient-yellow">Write.</span>
            </h1>
            <p className="mt-5 font-light leading-6 text-gray-500">
              I am passionate about elegant user interfaces, web animations, and
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
              <AppLink
                className={socialLinkClasses}
                href="https://github.com/nirnejak/"
                target="_blank"
              >
                <GithubFill />
              </AppLink>
              <AppLink
                className={socialLinkClasses}
                href="https://codepen.io/nirnejak/"
                target="_blank"
              >
                <CodepenFill />
              </AppLink>
              <AppLink
                className={socialLinkClasses}
                href="https://dribbble.com/nirnejak"
                target="_blank"
              >
                <DribbbleFill />
              </AppLink>
              <AppLink
                className={classNames(
                  socialLinkClasses,
                  "ml-auto flex items-center gap-1.5"
                )}
                href="https://twitter.com/jeetnirnejak/"
                target="_blank"
              >
                <span>
                  <TwitterFill />
                </span>
                <span>
                  <ArrowRight size={14} />
                </span>
              </AppLink>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default HomePage
