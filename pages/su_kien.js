import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function Event(){
   return(
    <Layout>
        <SEO title="Bột ngũ cốc Cô Một" description="Bột ngũ cốc Cô Một tham gia các sự kiện"/>
        <div className="mt-16"/>
        <section className="lg:container lg:mx-auto shadow p-2 sm:p-6 mt-10 mb-20 m-2 flex flex-col justify-center">
            <h1 className="text-center text-4xl font-bold">Quy trình sản xuất</h1>
            <p className="text-base sm:text-2xl text-center">Bột ngũ cốc Cô Một dần dần tạo được thương hiệu riêng cho mình. Có mặt ở nhiều đại lý trên địa bàn toàn tỉnh và tham gia các sự kiện, hội chợ trong và ngoài tỉnh.</p>
            <div className="flex flex-col sm:flex-row mt-3">
                <div className="flex-1">
                    <img src="../static/images/hoa_vang.webp" alt="Tham gia hội chợ Hoà Vang Đà Nẵng 2020" className="h-screen/2 w-full object-contain"/>
                    <p className="pt-2 text-center text-sm">Bột ngũ cốc Cô Môt tại Hội chợ Nông nghiệp huyện Hòa Vang Đà Nẵng năm 2020.</p>
                </div>
                <div className="flex-1">
                    <img src="../static/images/hoi_cho_hoi_an_1.webp" alt="Tham gia hội chợ Quảng Nam" className="h-screen/2 w-full object-contain"/>
                    <p className="pt-2 text-center text-sm">Bột ngũ cốc Cô Một tại Hội chợ thương mại Festival di sản Quảng Nam</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row  mt-3">
                <div className="flex-1">
                    <img src="../static/images/kim_anh.webp" alt="Tạp hóa KIM ANH chợ Việt An - Bình Lâm - Hiệp Đức - Quảng Nam" className="h-screen/2 w-full object-contain"/>
                    <p className="pt-2 text-center text-sm">Bột ngũ cốc Cô Một có mặt tại Tạp hóa KIM ANH chợ Việt An - Bình Lâm - Hiệp Đức - Quảng Nam</p>
                </div>
                <div className="flex-1">
                    <img src="../static/images/quang_ngai.webp" alt="Bột ngũ cốc Cô Một tại Tạp hóa Tuấn Anh - Phổ Phong- Đức Phổ - Quảng Ngãi" className="h-screen/2 w-full object-contain"/>
                    <p className="pt-2 text-center text-sm">Bột ngũ cốc Cô Một tại Tạp hóa Tuấn Anh - Phổ Phong- Đức Phổ - Quảng Ngãi.</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row  mt-3">
                <div className="flex-1">
                    <img src="../static/images/binh_trieu.webp" alt="Bột ngũ cốc Cô Một tại Cửa hàng Ocop Hợp tác xã Nông nghiệp Bình Đào huyện Thăng Bình" className="h-screen/2 w-full object-contain"/>
                    <p className="pt-2 text-center text-sm">Bột ngũ cốc Cô Một tại Cửa hàng Ocop Hợp tác xã Nông nghiệp Bình Đào huyện Thăng Bình</p>
                </div>
                <div className="flex-1">
                    <img src="../static/images/hoi_cho_hoi_an.webp" alt="Bột ngũ cốc Cô Một tại Hội chợ thương mại Festival di sản Quảng Nam 2019" className="h-screen/2 w-full object-contain"/>
                    <p className="pt-2 text-center text-sm">Bột ngũ cốc Cô Một tại Hội chợ thương mại Festival di sản Quảng Nam 2019</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row  mt-3">
                <div className="flex-1 mr-2">
                    <img src="../static/images/tra_vinh.webp" alt="Bột ngũ cốc Cô Một tại Hội chợ xúc tiến thương mại định hướng xuất khẩu nông - thuỷ sản Đồng bằng sông Cửu Long 2019" className="h-screen/2 w-full object-contain"/>
                    <p className="pt-2 text-center text-sm">Bột ngũ cốc Cô Một tại Hội chợ xúc tiến thương mại định hướng xuất khẩu nông - thuỷ sản Đồng bằng sông Cửu Long 2019</p>
                </div>
                <div className="flex-1 ml-2">
                    <img src="../static/images/nongdanquangnam.webp" alt="Tham gia hội chợ Hội An" className="h-screen/2 w-full object-contain"/>
                    <p className="pt-2 text-center text-sm">Bột ngũ cốc Cô Một tại Hội chợ giới thiệu sản phẩm nông nghiệp và tuyên dương điển hình nông dân sản xuất, kinh doanh trong giai đoạn 2014-2019 của Hội nông dân Quảng Nam</p>
                </div>
            </div>
        </section>
    </Layout>
   )
}