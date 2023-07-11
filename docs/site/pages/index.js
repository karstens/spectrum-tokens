import { getSortedComponentsData } from "../lib/components";
import Link from "next/link";
import Head from "next/head";

export async function getStaticProps() {
  const allComponentsData = await getSortedComponentsData();
  return {
    props: {
      allComponentsData,
    },
  };
}

export default function Home({ allComponentsData }) {
  return (
    <div>
      <Head>
        <title>Spectrum Components API</title>
        <meta
          name="description"
          content="API documentation for Spectrum, Adobe's design system"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main>
        <section className="spectrum-Site-sideBar">
          <header className="spectrum-Site-sideBarHeader">
            <a href="https://spectrum.adobe.com/">
              <svg
                class="spectrum-Site-logo spectrum-Icon spectrum-Icon--sizeXXL"
                viewBox="0 0 30 26"
                width="32"
                height="32"
                focusable="false"
                aria-hidden="true"
                aria-label="Adobe logo"
              >
                <polygon points="19,0 30,0 30,26"></polygon>
                <polygon points="11.1,0 0,0 0,26"></polygon>
                <polygon points="15,9.6 22.1,26 17.5,26 15.4,20.8 10.2,20.8"></polygon>
              </svg>
              Spectrum Tokens
            </a>
          </header>
          <nav class="spectrum-Site-sideBar">
            <ul class="spectrum-SideNav spectrum-SideNav--multiLevel">
              <li class="spectrum-SideNav-item">
                <a href="#" class="spectrum-SideNav-itemLink">
                  Components
                </a>
                <ul class="spectrum-SideNav">
                  {allComponentsData.map(({ slug, title }) => (
                    <li className="spectrum-SideNav-item" key={slug}>
                      <Link
                        className="spectrum-SideNav-itemLink"
                        href={`/components/${slug}`}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
