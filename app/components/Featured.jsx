import Image from "next/image"
import { MdLocationPin, MdOutlineHomeWork, MdAttachMoney } from 'react-icons/md'

export default async function Featured() {

    const featured = ['34981','39068','39864','39454']

    const properties = await fetch('http://localhost:3000/api/featured', {  
        method: 'POST',
        body: JSON.stringify(featured)
    }).then((res) => res.json())
    
    return (
        <section className="grid grid-cols-1 md:grid-cols-2">
            {properties?.map((property, i) => {
                return (
                    <div className="relative h-[calc(100vh/2)] group overflow-hidden">
                        <Image  
                            loading="eager"
                            src={property.images[0].seoImage} 
                            fill={true}
                            className="brightness-50 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000 object-cover"
                            alt={property.images[0].alt}
                            priority
                        />
                        <div className="flex flex-col absolute p-4 transition-colors duration-1000 group-hover:bg-neutral-900/50 shadow-sm rounded-br-sm">
                            <span className="group-hover:brightness-125 text-4xl font-script text-neutral-100">
                                {property.title}
                            </span>
                            <div className="group-hover:brightness-125 flex flex-row items-center space-x-2">
                                <MdAttachMoney className="text-green-500 text-2xl drop-shadow-lg" />
                                <span className="text-neutral-100 drop-shadow-lg font-thin text-xl">
                                {property.price.current}
                                </span>
                            </div>
                            <div className="group-hover:brightness-125 flex flex-row items-center space-x-2">
                                <MdLocationPin className="text-red-500 text-2xl drop-shadow-lg" />
                                <span className="text-neutral-100 drop-shadow-lg font-thin text-xl">
                                {property.address.city}, {property.address.state}
                                </span>
                            </div>
                            <div className="group-hover:brightness-125 flex flex-row items-center space-x-2">
                                <MdOutlineHomeWork className="text-sky-500 text-2xl drop-shadow-lg" />
                                <span className="text-neutral-100 drop-shadow-lg font-thin text-xl">
                                {property.type.en}
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