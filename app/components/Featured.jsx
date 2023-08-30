import Image from "next/image"
import { MdLocationPin, MdOutlineHomeWork, MdAttachMoney } from 'react-icons/md'

export default function Featured() {

    const properties = [
        {
            title: 'Hacienda Patrizia',
            price: 2700000,
            image: 'https://members.mlsvallarta.com/mls/property/image/mlsvallarta/34981/single_06-EveningShots_4_.jpg',
            address: 'Bucerias, Nayarit',
            type: 'House'
          },
          {
            title: 'Primavera #61',
            price: 460000,
            image: 'https://members.mlsvallarta.com/mls/property/image/mlsvallarta/39068/single_Bucerias-42copia.jpg',
            address: 'Bucerias, Nayarit',
            type: 'House'
          },
          {
            title: 'Nima Bay',
            price: 580000,
            image: 'https://members.mlsvallarta.com/mls/property/image/mlsvallarta/39864/single_Nima_Bay_G_902__5_.jpg',
            address: 'Puerto Vallarta, Jalisco',
            type: 'Condominium'
          },
          {
            title: 'Haixa A-403',
            price: 749000,
            image: 'https://members.mlsvallarta.com/mls/property/image/mlsvallarta/39454/single_1.jpg',
            address: 'Punta de Mita, Nayarit',
            type: 'Condominium'
          }
    ]
    
    return (
        <section className="grid grid-cols-1 md:grid-cols-2">
            {properties?.map((property) => {
                return (
                    <div key={property.title} className="relative h-[calc(100vh/2)] group overflow-hidden">
                        <Image  
                            loading="eager"
                            src={property.image} 
                            fill={true}
                            className="brightness-50 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000 object-cover"
                            alt="Property Image"
                            priority
                        />
                        <div className="flex flex-col absolute p-4 transition-colors duration-1000 group-hover:bg-neutral-900/50 shadow-sm rounded-br-sm">
                            <span className="group-hover:brightness-125 text-4xl font-script text-neutral-100">
                                {property.title}
                            </span>
                            <div className="group-hover:brightness-125 flex flex-row items-center space-x-2">
                                <MdAttachMoney className="text-green-500 text-2xl drop-shadow-lg" />
                                <span className="text-neutral-100 drop-shadow-lg font-thin text-xl">
                                {property.price}
                                </span>
                            </div>
                            <div className="group-hover:brightness-125 flex flex-row items-center space-x-2">
                                <MdLocationPin className="text-red-500 text-2xl drop-shadow-lg" />
                                <span className="text-neutral-100 drop-shadow-lg font-thin text-xl">
                                {property.address}
                                </span>
                            </div>
                            <div className="group-hover:brightness-125 flex flex-row items-center space-x-2">
                                <MdOutlineHomeWork className="text-sky-500 text-2xl drop-shadow-lg" />
                                <span className="text-neutral-100 drop-shadow-lg font-thin text-xl">
                                {property.type}
                                </span>
                            </div>
                        </div>
                        <button className="invisible group-hover:visible absolute bottom-4 right-4 button bg-sky-800">
                            View Property
                        </button>
                    </div>
                )
            })}
        </section>
    )

}