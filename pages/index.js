import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/AboutUs'
import Story from '../components/Story'
import SEO from '../components/SEO'
export default function Home() {
  return(
    <Layout>
      <SEO title="Bột ngũ cốc Cô Một" description="Xã Bình Định Bắc - Thăng Bình - Quảng Nam"/>
      <Hero />
      <div className="lg:px-32 px-0 sm:px-6  m-6">
         <About />
         <Story />
      </div>
    </Layout>
  )};