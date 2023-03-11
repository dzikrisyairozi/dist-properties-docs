import type { DocsThemeConfig} from 'nextra-theme-docs';
import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/dzikrisyairozi/scaling-ray'
  },
  docsRepositoryBase: 'https://github.com/dzikrisyairozi/scaling-ray',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Scaling Ray'
      }
    }
  },
  logo: (
    <>
      <p className="hidden font-bold text-black md:inline">
        Scaling Ray | Distributed Properties
      </p>
    </>
  ),
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://docs.dist-properties.site/og.jpeg'
        : `https://docs.dist-properties.site/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Scaling Ray"
        />
        <meta
          name="og:description"
          content="Scaling Ray"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="docs.dist-properties.site" />
        <meta name="twitter:url" content="https://docs.dist-properties.site" />
        <meta
          name="og:title"
          content={title ? title + ' – Scaling Ray' : 'Scaling Ray'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Scaling Ray" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} The Distributed Properties Project.
        </p>
      </div>
    )
  }
}

export default config
