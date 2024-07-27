import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Diseño de Paginas web',
    Svg: require('@site/static/img/web.svg').default,
    description: (
      <>
        Este curso enseña los fundamentos del diseño y desarrollo web, incluyendo HTML, CSS y herramientas de diseño visual, para crear sitios web atractivos y funcionales.
      </>
    ),
  },
  {
    title: 'Testing de Aplicaciones',
    Svg: require('@site/static/img/testing.svg').default,
    description: (
      <>
        Aprende a asegurar la calidad de las aplicaciones mediante pruebas manuales, identificando errores y asegurando el correcto funcionamiento antes de su lanzamiento.
      </>
    ),
  },
  {
    title: 'Trayecto Programador',
    Svg: require('@site/static/img/programer.svg').default,
    description: (
      <>
        Un recorrido integral para convertirte en programador, abarcando desde la lógica de programación y los lenguajes básicos hasta el desarrollo de aplicaciones complejas en PHP.
      </>
    ),
  },
  {
    title: 'Marketing Digital',
    Svg: require('@site/static/img/marketing.svg').default,
    description: (
      <>
        Este curso ofrece las habilidades necesarias para crear, implementar y analizar estrategias de marketing en línea, utilizando herramientas digitales y plataformas de redes sociales para aumentar la visibilidad y el compromiso de marca.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
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

export default function HomepageFeatures() {
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
