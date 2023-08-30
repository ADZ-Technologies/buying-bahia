import Hero from "./components/Hero"
import Featured from "./components/Featured"
import MeetEvelina from "./components/MeetEvelina"
import FeaturedBlog from "./components/FeaturedBlog"

const page = async () => {

  const blog = await fetch(process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/blog' : '/api/blog').then(res => res.json())
  const featured = ['34981','39068','39864','39454']

  const properties = await fetch(process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/featured' : '/api/featured', {  
      method: 'POST',
      body: JSON.stringify(featured)
  }).then((res) => res.json())
  
  return (
    <main>
      <Hero /> 
      {properties && <Featured properties={properties} /> }  
      <MeetEvelina />
      {blog && <FeaturedBlog blog={blog} /> }
    </main> 
  )
}

export default page
