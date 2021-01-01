import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Multiple Types of Addresses</>,
    imageUrl: 'img/features/features-locks.png',
    description: (
      <>
        Not only supports normal address, but also supports different lock scripts such as anyone can pay, which will allow you send any amount of CKB.
      </>
    ),
  },
  {
    title: <>UDT Support</>,
    imageUrl: 'img/features/features-udt.png',
    description: (
      <>
        Supports manage your UDT(User Defined Token) infomation, list all your UDTs, and send any UDT.
      </>
    ),
  },
  {
    title: <>DApps Integration with Ease</>,
    imageUrl: 'img/features/features-dapp.png',
    description: (
      <>
        Developers could integrate Synapse with their DApps easily, so that give user good experience and save them lots of development time.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6 text--center', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to="https://chrome.google.com/webstore/detail/synapse-extension/jlbbhddconaakgfiepgconapcaeofdef/">
              Install
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
