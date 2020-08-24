import Layout from '../components/Layout'
import Splash from '../components/Splash'
import SEO from '../components/SEO'

export default function Event(){
   return(
    <Layout>
        <SEO title="Bột ngũ cốc Cô Một" description="Liên hệ bột ngũ cốc Cô Một"/>
        <div className="mt-16"/>
        <Splash src="/images/contact.webp" alt="Hình ảnh thương hiệu Cô Một" mode="object-cover"/>
        <section className="lg:container lg:mx-auto shadow p-2 sm:p-6 mt-10 sm:mt-20 mb-32 m-2 flex flex-col pb-24">
            <h1 className="text-center text-4xl font-bold">Liên hệ</h1>
            <p className="pt-2 pb-2"><span className="font-bold">Facebook:</span> <a className="text-blue-600" href="https://www.facebook.com/botngucoccomot">https://www.facebook.com/botngucoccomot</a></p>
            <p className="pt-2 pb-2"><span className="font-bold">Email:</span> <a className="text-blue-600"  href="mailto:kd@comot.vn?Subject=subject here&Body=bodytext">kd@comot.vn</a></p>
            <p className="pt-2 pb-2"><span className="font-bold">Số địa thoại:</span> <a className="text-blue-600">0362007304</a></p>
            <p className="pt-2 pb-2"><span className="font-bold">Địa chỉ:</span> <a className="text-blue-600">Tổ 7, Thôn Đồng Dương, Xã Bình Định Bắc, Huyện Thăng Bình, Tỉnh Quảng Nam</a></p>
        </section>
    </Layout>
   )
}