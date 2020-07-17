import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>How to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <div>
        <h3><a></a>Installation for developer</h3>
        <ol>
          <li>Complete the steps to build the project above</li>
          <li>Go to <a href="chrome://extensions"><em>chrome://extensions</em></a> in Google Chrome</li>
          <li>With the developer mode checkbox ticked, click <strong>Load unpacked extension…</strong> and select the <em>dist</em> folder from this repo</li>
        </ol>

        <h3><a ></a>Installation for non-developer</h3>
        <ol>
          <li>
            <p>Download the latest released zip file: <a href="https://github.com/rebase-network/synapse-extension/releases">https://github.com/rebase-network/synapse-extension/releases</a></p>
          </li>
          <li>
            <p>Uncompress synapse-extension.zip, you will get a folder named <code>synapse-extension</code></p>
          </li>
          <li>
            <p>Open Chrome <code>chrome://extensions/</code>, enable <code>Developer mode</code></p>
          </li>
          <li>
            <p>Click <code>Load unpacked</code> button, select <code>synapse-extension</code> folder</p>
          </li>
          <li>
            <p>You will see synapse extension icon on you tool bar</p>
          </li>
        </ol>
      </div>
    ),
  },
  {
    title: <>Feature</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        <ol>
          <li>
            <p>导入助记词</p>
          </li>
          <li>
            <p>显示账户信息</p>
          </li>
          <li>
            <p>发送交易（支持anypay）</p>
          </li>
          <li>
            <p>联系人管理</p>
          </li>
          <li>
            <p>自定义Token管理</p>
          </li>
        </ol>
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
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
      title={`Hello from ${siteConfig.title}`}
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
              to={useBaseUrl('docs/')}>
              Get Started
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
