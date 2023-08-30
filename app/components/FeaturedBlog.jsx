import Image from "next/image"

export default function FeaturedBlog() {

  const blog = {
    featured: {
        primary: '001',
        grid: ['002','003','004','005']
    },
    posts: [
        {
            id: '001',
            title: 'Moving To Mexico: The 6 Month Checklist',
            slug: "moving-to-mexico-checklist",
            caption: "Before you pack your bags and leave everything behind, you need to have a plan. But where do you start? Our definitive checklist helps ensure you're when the big day arrives.",
            image: "https://images.unsplash.com/photo-1613021031406-7942faaac205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
        },
        {
            id: '002',
            title: "Complete Guide To Mexican Resident Visa",
            slug: "",
            caption: "Obtaining your Mexican Resident Visa is not as easy as some think. Mexican bureaucracy and language barriers can be a significant challenge. Our guide to temporary and permanent residency in Mexico will help you to better understand how to stay in Mexico legally.",
            image: "https://images.unsplash.com/photo-1622607514225-acd3758da04d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1030&q=80",
        },
        {
            id: '003',
            title: "Digital Nomad 101: Remote Working in Mexico",
            slug: "",
            caption: "Imagine waking up to the sound of waves crashing on the beach, enjoying your morning coffee as you open your laptop. CNBC recently declared Mexico the #1 destination to live and work abroad and we agree. Let us help you understand how to find freedom working as a digital nomad in Mexico.",
            image: "https://images.unsplash.com/photo-1530977875151-aae9742fde19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
        },
        {
            id: '004',
            title: "Retire 15 Years Early By Moving To Mexico",
            slug: "",
            caption: "Saving for retirement can be difficult, but what if you could retire early and start enjoying the laidback lifestyle in an idyllic paradise? Good news, moving to Mexico to retire early is a real option. Let us tell you how you can start living a truly remarkable life more than a decade sooner than you ever expected.",
            image: "https://plus.unsplash.com/premium_photo-1664302571436-3393ed1f3819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1030&q=80",
        },
        {
            id: '005',
            title: "The Best Regions for Expats To Live In Banderas Bay",
            slug: "",
            caption: "Ready to make the move to Mexico but not sure where to hang your hat? From vibrant city-living in Puerto Vallarta to seaside paradise beaches in Riviera Nayarit, we review the top 5 regions of Bahia Banderas for expats to realize their dreams.",
            image: "https://images.unsplash.com/photo-1580259879351-66a182f1946d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        }
    ]
}
  const feature = blog.posts.filter(post => post.id === blog.featured.primary)[0]
  const grid = blog.posts.filter(post => blog.featured.grid.includes(post.id))

  return (
    <section className="flex flex-row">
        <div className="relative h-screen w-1/2 group overflow-hidden">
          <Image  
            src={feature?.image} 
            fill={true}
            className="brightness-50 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000 object-cover"
            alt="Featured Blog Image"
          />
                  <div className="flex flex-col space-y-4 absolute p-4 transition-colors duration-1000 group-hover:bg-neutral-900/50 shadow-sm rounded-br-sm">
                            <span className="group-hover:brightness-125 text-4xl group-hover:font-medium font-brand text-neutral-100">
                                {feature?.title}
                            </span>
                            <span className="text-neutral-100 text-lg">
                              {feature?.caption}
                            </span>
                            </div>
                                  <button className="invisible group-hover:visible absolute bottom-4 right-4 button bg-sky-800">
                            Read More
                        </button>
        </div>
        <div className="w-1/2 grid grid-cols-2">
          {grid?.map((post) => {
            return (
              <div 
                key={post?.id} 
                className="relative h-full w-full group overflow-hidden"
              >
              <Image  
              src={post?.image} 
              fill={true}
              className="brightness-50 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000 object-cover"
              alt="Blog Image"
            />
                            <div className="flex flex-col space-y-4 absolute p-4 transition-colors duration-1000 group-hover:bg-neutral-900/50 shadow-sm rounded-br-sm">
                            <span className="group-hover:brightness-125 group-hover:font-medium text-2xl font-brand text-neutral-100">
                                {post?.title}
                            </span>
                            <span className="invisible group-hover:visible text-sm text-neutral-100">
                              {post?.caption}
                            </span>
                            </div>
                                    <button className="invisible group-hover:visible absolute bottom-4 right-4 button bg-sky-800">
                            Read More
                        </button>
          </div>
            )
          })}
        </div>
    </section>
  )
}
