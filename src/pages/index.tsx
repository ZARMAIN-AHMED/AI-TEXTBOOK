import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container text--center">
        <Heading as="h1" className="hero__title">
          Physical AI & Humanoid Robotics
        </Heading>

        <p className="hero__subtitle">
          Explore the future of embodied intelligence, humanoid robots,
          and AI-driven physical systems.
        </p>

        <div className={styles.buttons} style={{ marginTop: '1.5rem' }}>
          <Link className="button button--secondary button--lg"
                to="/docs/book/course-overview">
            Start Learning 🚀
          </Link>
        </div>

        <div className={styles.heroTagline}>
          Hands-on simulations, VLAs, ethics, and advanced humanoid robotics.
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics"
      description="Learn about humanoid robotics, simulation, Visual Language Models, ethics, and hands-on AI development."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
