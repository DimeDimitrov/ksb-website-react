import './About.css'

const About = () => {
  return (
    <section className='about' style={{width: "100%", display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px"}}>
      <h1 style={{color: "white", padding: "10px"}}>За нас</h1>
<div className="card text-bg-dark" style={{height: "350px", width: "550px"}}>
    <img src="/About/banner.jpg" className="card-img" alt="..."/>
    <div className="card-img-overlay">
    <h5 className="card-title">Мисија и визија</h5>
    <p className="card-text">Мисија: СОУ”Киро Спанџов-Брко” е современ воспитно образовен центар, кој на учениците преку иновативни искуства и практики за учење во современи кабинети им овозможува стекнување на знаење и вештини потребни за пазарот на трудот и високото образование овозможува безбеден развој на интелектуални, емоционални и креативни вредности кај децата, поттикнувајќи доверба и почит на начин што заслужува интерес кај учениците и родителите.</p>
    <p>Визија: Нашето училиште да биде современ регионален центар за образование на ученици од областа на машинската и електротехничката струка.</p>
    </div>
  </div>
  </section>
  )
}

export default About