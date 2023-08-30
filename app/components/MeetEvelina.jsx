import Image from "next/image"

function MeetEvelina() {
  return (
    <section className="px-8 py-36 max-w-screen-2xl mx-auto">
    <div className="flex flex-row items-center space-x-24">
      <div className="relative shrink-0 h-80 w-80 rounded-full shadow-lg">
        <Image 
         src="agent-avatar.jpg"
         fill={true}
         className="object-cover rounded-full shadow-lg"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-6xl font-medium font-script pb-2 border-b border-sky-500">
          Meet Evelina
        </h3>
        <p className="my-8">
          I started Buying Bahia to showcase the amazing opportunities in Puerto Vallarta, Riviera Nayarit and beyond to clients looking to make their dreams come true. As a passionate real estate expert, I am dedicated to putting the perfect properties for your lifestyle right at your fingertips. Whether you're looking for the perfect vacation property, dream retirement home or a new investment opportunity, my passion and dedication to serving the Banderas Bay community means you can rest easy knowing your future is in great hands. I look forward to meeting and working with you to help make your wildest dreams come true.
        </p>
        <button className="button bg-sky-800 w-fit">
          Schedule An Appointment Today
        </button>
      </div>
    </div>
  </section>
  )
}
export default MeetEvelina