import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Image: string,
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Setup',
    Image: require('@site/static/img/light.png').default,
    description: (
      <>
        LiteEco was designed to be easy to use and lightweight, without bloatware,
        for all regular Minecraft server owners.
      </>
    ),
  },
  {
    title: 'Compatibility',
    Image: require('@site/static/img/brands.png').default,
    description: (
      <>
        Plugin supports Paper and connection to MariaDB, MySQL, SQLite and PostgreSQL.
      </>
    ),
  },
  
  {
    title: 'Powered by Performance',
    Image: require('@site/static/img/performance.png').default,
    description: (
      <>
        Asynchronous and stores data in memory, which it then writes to the database.
      </>
    ),
    
  },
];

function Feature({title, Image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Image} alt={title} style={{ height: '200px' }} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
