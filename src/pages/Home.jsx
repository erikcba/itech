import React from 'react'
import CardsDashboard from '../components/CardsDashboard'
import AccionesRapidas from '../components/AccionesRapidas'
import ResumenDia from '../components/ResumenDia'
import Recordatorios from '../components/Recordatorios'

const Home = () => {

  const cardsData = [{
    titulo: "Ventas del mes", data: "$12,345", leyenda: "+2,4% desde el mes pasado"
  },
  {
    titulo: "Gastos del mes", data: "$5,678", leyenda: "+5% desde el mes pasado"
  },
  {
    titulo: "Clientes activos", data: "1532", leyenda: "+10% desde el mes pasado"
  },
  {
    titulo: "Balance mensual", data: "$6,667", leyenda: "Balance positivo"
  }]

  return (
    <div className='p-6 container mx-auto flex flex-col gap-6'>
      <h1 className='text-3xl font-bold mb-4'>
        Dashboard
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
          cardsData.map((card, index) => (
            <div key={index}>
              <CardsDashboard titulo={card.titulo} data={card.data} leyenda={card.leyenda} />
            </div>
          )
        )
        }
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        <AccionesRapidas/>
        <ResumenDia/>
        <Recordatorios/>
      </div>
    </div>
  )
}

export default Home