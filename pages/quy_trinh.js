import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function Procedure(){
   return(
    <Layout>
        <SEO title="Bột ngũ cốc Cô Một" description="Quy trình sản xuất bột ngũ cốc Cô Một"/>
        <div className="mt-16"/>
        <section className="lg:container lg:mx-auto shadow p-2 sm:p-6 mt-10 mb-20 m-2 flex flex-col justify-center">
            <h1 className="text-center text-4xl font-bold">Quy trình sản xuất</h1>
            <div className="flex-col flex mt-3 divide-x-0">
                <div className="flex flex-row">
                    <div className="flex-1">
                        <img src="/images/xu_ly.webp" className="h-screen/3 w-screen/2 sm:h-screen/2 object-cover" alt="quy trinh xu ly nguyen lieu"/>
                    </div>
                    <div className="flex-1 text-justify pl-3 sm:pl-3">
                        <p className="text-base sm:text-2xl">Từ những nguyên liệu sạch, chúng tôi luôn luôn kiểm tra chất lượng nguyên liệu đầu vào nhằm loại bỏ những thành phần không đảm bảo chất lượng và không đạt yêu cầu để tạo ra những nguyên liệu tốt nhất.</p>
                    </div>
                </div>
                <div className="flex flex-row mt-2">
                    <div className="flex-1 text-justify pr-3">
                        <p className="text-base sm:text-2xl">Những nguyên liệu tốt nhất sau khi xử lý sẽ được đem đi xấy khô bằng thiết bị chuyên dụng giúp cho nguyên liệu không bị mất đi dinh dưỡng, đảm bảo chất lượng sản phẩm đầu ra sau này.</p>
                    </div>
                    <div className="flex-1">
                        <img src="/images/may_xaay.webp" className="h-screen/3 w-screen/2 sm:h-screen/2 object-cover" alt="quy trình xấy hạt"/>
                    </div>
                </div>
                <div className="flex flex-row mt-2">
                    <div className="flex-1">
                        <img src="/images/may_rang.webp" className="h-screen/3 w-full sm:h-screen/2 object-cover" alt="quy trình rang hạt"/>
                    </div>
                    <div className="flex-1 text-justify pl-3 sm:pl-3">
                        <p className="text-base sm:text-2xl">Sau đó những nguyên liệu sẽ được cho vào thiết bị rang chuyên dụng để làm chín nguyên liệu và tạo độ thơm cho sản phẩm, khác với những kiểu rang truyền thống việc xử dụng máy rang chuyên dụng giúp giữ được mùi thơm và các hạt được rang chín đều.</p>
                    </div>
                </div>
                <div className="flex flex-row mt-2">
                    <div className="flex-1 text-justify pr-3">
                        <p className="text-base sm:text-2xl">Tiếp đến là công đoạn xay bột, công đoạn này đòi hỏi sự cẩn thận và kỷ lưỡng để có được những hạt bột mịn và chất lượng nhất.</p>
                    </div>
                    <div className="flex-1">
                        <img src="/images/may_xay.webp" className="h-screen/3 w-screen/2 sm:h-screen/2 object-cover" alt="quy trình xay bột"/>
                    </div>
                </div>
                <div className="flex flex-row mt-2">
                    <div className="flex-1">
                        <img src="/images/dong_goi.webp" className="h-screen/3 w-full sm:h-screen/2 object-cover" alt="quy trình đóng gói"/>
                    </div>
                    <div className="flex-1 text-justify pl-3 sm:pl-3">
                        <p className="text-base sm:text-2xl">Bao bì Bột ngũ cốc Cô Một được thiết kế riêng với kiểu dáng hiện đại sang trọng, bên trong bao bì xử dụng một lớp tráng bạc giúp cho sản phẩm tránh bị ảnh hưởng từ độ ẩm của môi trường bên ngoài. Bao bì đựng đóng gói kín đảm bảo chất lượng và dễ dàng bảo quản.</p>
                    </div>
                </div>
                <div className="flex flex-row mt-2">
                    <div className="flex-1 text-justify pr-3">
                        <p className="text-base sm:text-2xl">Cuối cùng những sản phẩm chất lượng đã sẵn sàng phục vụ đến quý khách hàng.</p>
                    </div>
                    <div className="flex-1">
                        <img src="/images/thanh_pham.webp" className="h-screen/3 w-screen/2 sm:h-screen/2 object-cover" alt="thành phẩm"/>
                    </div>
                </div>
            </div>
        </section>
   </Layout>
)}