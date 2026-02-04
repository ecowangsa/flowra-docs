import type {ReactNode, CSSProperties} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  eyebrow: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    eyebrow: 'Modules',
    title: 'Module-first architecture',
    description: (
      <>
        Each module includes routes, controllers, services, and models so teams keep features
        cohesive and easy to navigate.
      </>
    ),
  },
  {
    eyebrow: 'Container',
    title: 'Dependency injection that stays explicit',
    description: (
      <>
        Services resolve through a lightweight container with scoped modules and clear naming.
        Dependencies remain explicit across scopes.
      </>
    ),
  },
  {
    eyebrow: 'CLI',
    title: 'Scaffolding you can trust',
    description: (
      <>
        Generate modules, models, migrations, and resources quickly. The CLI keeps conventions
        consistent across teams.
      </>
    ),
  },
  {
    eyebrow: 'Runtime',
    title: 'Operational defaults',
    description: (
      <>
        Helmet, request IDs, structured logging, cache managers, and health checks are wired in so
        your baseline behaviors stay consistent.
      </>
    ),
  },
];

function Feature({title, eyebrow, description, index}: FeatureItem & {index: number}) {
  return (
    <div
      className={styles.featureCard}
      style={{'--delay': `${index * 120}ms`} as CSSProperties}
    >
      <div className={styles.featureTag}>{eyebrow}</div>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureHeader}>
          <Heading as="h2" className={styles.featureHeadline}>
            Why teams choose Flowra
          </Heading>
          <p className={styles.featureIntro}>
            Flowra keeps Express familiar while adding structure, tooling, and clarity for modern
            backend teams.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={props.title} index={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
