import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Setup',
    Svg: require('@site/static/img/light.svg').default,
    description: (
      <>
        LiteEco was designed to be easy to use and lightweight, without bloatware,
        for all regular Minecraft server owners.
      </>
    ),
  },
  {
    title: 'Compatibility',
    Svg: require('@site/static/img/brands.svg').default,
    description: (
      <>
        Plugin supports Paper and connection to MariaDB, MySQL, SQLite and PostgreSQL.
      </>
    ),
  },
  
  {
    title: 'Powered by Performance',
    Svg: require('@site/static/img/performance.svg').default,
    description: (
      <>
        Asynchronous and stores data in memory, which it then writes to the database.
      </>
    ),
    
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
