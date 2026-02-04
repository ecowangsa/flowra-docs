import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const quickStart = `npm install -g flowra-cli
flowra create-app my-flowra-app
cd my-flowra-app
npm install
npm run dev`;

const routeSnippet = `// app/Modules/Status/status.routes.js
module.exports = ({ router, container }) => {
  const controller = container.resolve('modules.status.controllers.main');
  router.get('/status', controller.index.bind(controller));
  return router;
};`;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const version = siteConfig.customFields?.flowraVersion as string | undefined;
  const badgeLabel = version ? `Flowra v${version}` : 'Flowra';

  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} />
      <div className={styles.heroGrid} />
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.heroBadge}>{badgeLabel}</div>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
              <span className={styles.heroAccent}> adds structure to Node.js services</span>
            </Heading>
            <p className={styles.heroSubtitle}>
              Flowra is a modular Express framework with a dependency-injected container and CLI
              that standardize how services are organized.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--primary button--lg" to="/docs/getting-started/installation">
                Get started
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/cli/commands">
                CLI reference
              </Link>
            </div>
            <div className={styles.heroMeta}>
              <span className={styles.heroMetaBadge}>Node.js 18+</span>
              <span className={styles.heroMetaBadge}>Express</span>
              <span className={styles.heroMetaBadge}>Knex</span>
              <span className={styles.heroMetaBadge}>Awilix</span>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.heroPanelHeader}>Quickstart</div>
            <CodeBlock language="bash">{quickStart}</CodeBlock>
            <div className={styles.heroPanelFooter}>
              Run <code>flowra route:list</code> to see generated routes.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Flowra"
      description="Flowra is a modular Node.js framework with an expressive CLI and a dependency-injected container.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" className={styles.sectionTitle}>
                A framework you can reason about
              </Heading>
              <p className={styles.sectionIntro}>
                Flowra keeps the request path explicit: build a container, register modules, map
                routes, and respond.
              </p>
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Step 1: Compose the container</h3>
                <p className={styles.cardBody}>
                  Core, infrastructure, and modules are registered into a predictable container
                  scope. Dependencies stay explicit and testable.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Step 2: Attach module routes</h3>
                <p className={styles.cardBody}>
                  Each module exports a routes function. The HTTP router loops through enabled
                  modules and binds their routes to Express.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Step 3: Return consistent responses</h3>
                <p className={styles.cardBody}>
                  Controllers call services, errors flow through the handler, and every response
                  carries a request ID for traceability.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" className={styles.sectionTitle}>
                Minimal routes, maximum clarity
              </Heading>
              <p className={styles.sectionIntro}>
                The CLI scaffolds modules with controllers and services wired in. You only add the
                logic that makes your API unique.
              </p>
            </div>
            <div className={styles.codeWrap}>
              <CodeBlock language="js">{routeSnippet}</CodeBlock>
            </div>
          </div>
        </section>
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaCard}>
              <div>
                <Heading as="h2" className={styles.ctaTitle}>
                  Ready to build your first module?
                </Heading>
                <p className={styles.ctaCopy}>
                  Follow the guide and put a working API together.
                </p>
              </div>
              <Link className="button button--primary button--lg" to="/docs/getting-started/first-api">
                Build your first API
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
