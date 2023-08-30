import Image from "next/image"

async function FeaturedBlog() {

  const blog = await fetch('http://localhost:3000/api/blog').then(res => res.json())

  const feature = blog.posts.filter(post => post.id === blog.featured.primary)[0]

  const grid = blog.posts.filter(post => blog.featured.grid.includes(post.id))

  return (
    <section className="flex flex-row">
        <div className="relative h-screen w-1/2 group overflow-hidden">
          <Image  
            src={feature.image} 
            fill={true}
            className="brightness-50 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000 object-cover"
            alt="Featured Blog Image"
          />
                  <div className="flex flex-col space-y-4 absolute p-4 transition-colors duration-1000 group-hover:bg-neutral-900/50 shadow-sm rounded-br-sm">
                            <span className="group-hover:brightness-125 text-4xl group-hover:font-medium font-brand text-neutral-100">
                                {feature.title}
                            </span>
                            <span className="text-neutral-100 text-lg">
                              {feature.caption}
                            </span>
                            </div>
                                  <button className="invisible group-hover:visible absolute bottom-4 right-4 button bg-sky-800">
                            Read More
                        </button>
        </div>
        <div className="w-1/2 grid grid-cols-2">
          {grid.map((post) => {
            return (
              <div 
                key={post.id} 
                className="relative h-full w-full group overflow-hidden"
              >
              <Image  
              src={post.image} 
              fill={true}
              className="brightness-50 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000 object-cover"
              alt="Blog Image"
            />
                            <div className="flex flex-col space-y-4 absolute p-4 transition-colors duration-1000 group-hover:bg-neutral-900/50 shadow-sm rounded-br-sm">
                            <span className="group-hover:brightness-125 group-hover:font-medium text-2xl font-brand text-neutral-100">
                                {post.title}
                            </span>
                            <span className="invisible group-hover:visible text-sm text-neutral-100">
                              {post.caption}
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
export default FeaturedBlog