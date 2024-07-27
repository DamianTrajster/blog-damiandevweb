import clsx from 'clsx';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HeaderComponent from '@site/src/components/HeaderComponent';

import Heading from '@theme/Heading';
import styles from './index.module.css';



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hola desde ${siteConfig.title}`}
      description="Blog de damian_dev_web, donde encontraras guías y tutoriales acerca de los cursos que imparto en los centros de formacion profesional <head />">
        <HeaderComponent />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

