function Drink({ name }) {
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Parte de la planta</dt>
          <dd>{name === 'té' ? 'hoja' : 'grano'}</dd>
          <dt>Contenido de cafeína</dt>
          <dd>{name === 'té' ? '15–70 mg/taza' : '80–185 mg/taza'}</dd>
          <dt>Antigüedad</dt>
          <dd>{name === 'té' ? '4,000+ años' : '1,000+ años'}</dd>
        </dl>
      </section>
    );
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="té" />
        <Drink name="café" />
      </div>
    );
  }
  