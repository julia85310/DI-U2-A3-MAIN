function Drink({ name }) {
  const te={
    name:'te',
    partePlanta:'hoja',
    cafeina:'15–70 mg/taza',
    antiguedad:'4,000+ años'
  }
  const cafe={
    name:'cafe',
    partePlanta:'grano',
    cafeina:'80–185 mg/taza',
    antiguedad:'1,000+ años'
  }
  var planta;
  {name === 'té' ?  planta = te: planta = cafe}
    return (
      <section>
        <h1>{name}</h1>
        {planta.name}
        <dl>
          <dt>Parte de la planta</dt>
          <dd>{planta.partePlanta}</dd>
          <dt>Contenido de cafeína</dt>
          <dd>{planta.cafeina}</dd>
          <dt>Antigüedad</dt>
          <dd>{planta.antiguedad}</dd>
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
  