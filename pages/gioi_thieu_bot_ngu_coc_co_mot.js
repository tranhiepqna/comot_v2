import Layout from '../components/Layout'
import Splash from '../components/Splash'
import SEO from '../components/SEO'
export default function AboutDetail(){
    return(
        <Layout>
            <SEO title="Bột ngũ cốc Cô Một" description="Giới thiệu bột ngũ cốc Cô Một"/>
            <div className="mt-16"/>
            <Splash src="/images/aboutus.webp" alt="Hình ảnh thương hiệu Cô Một" name="Giới thiệu"/>
           <section className="lg:container lg:mx-auto shadow p-2 sm:p-6 mb-20">
                <p className="font-bold"><a href="/" >Trang chủ</a> / <a href="/gioi_thieu_bot_ngu_coc_co_mot">Giới thiệu</a></p>
                <h1 className="text-center text-4xl font-bold">Giới thiệu</h1>
                <div className="flex flex-col p-2">
                    <div className="flex-2">
                    <p className="text-base sm:text-lg text-justify">Bột ngũ cốc Cô Một hình thành trên cơ sở cách chế biến ngũ cốc truyền thống trong dân gian Quảng Nam. Ngày xưa ông cha ta thường chế biến các loại bột như bột đậu xanh, bột gạo lứt, bột gạo tẻ, bột gạo nếp bằng cách rang vàng thơm giòn rồi giả nhỏ bằng cối đá, rây thành bột mịn dùng để bồi bổ sức khỏe.</p>
                    <br/>
                    <p className="text-base sm:text-lg text-justify">Bột ngũ cốc Cô Một bước đầu nắm được cách chế biến bột ngũ cốc trong dân gian, tự làm bột sử dụng trong gia đình. Một thời gian sau, bà con hàng xóm nhận thấy chất lượng Bột ngũ cốc Cô Một làm ra thơm ngon, bổ dưỡng nên hỏi mua về sử dụng. Tiếng lành đồn xa, dần dà nhiều người hỏi mua và cứ thế lan truyền ra nhiều người nữa biết đến sản phẩm. Trên nền tảng đó tôi dần dần hình thành Cơ sở chế biến Bột ngũ cốc Cô Một. Bước đầu tôi hoàn toàn sản xuất bằng phương pháp bán thủ công, mỗi tháng chỉ sản xuất được khoảng từ 90 đến 150 kg, khách hàng chủ yếu là người địa phương và bạn bè thân quen. Tôi đã duy trì cách sản xuất như trên trong suốt nhiều năm liền. Thời gian gần đây tôi nhận thấy sản phẩm mình làm ra  được khá nhiều khách hàng tin dùng, nên đã quyết định mở rộng quy mô theo phương thức sản xuất hàng hóa.</p>
                    <br/>
                    <p className="text-base sm:text-lg text-justify">Được sự khuyến khích của chính quyền địa phương xã Bình Định Bắc, Phòng Nông nghiệp và phát triển Nông thôn, Phòng Tài chính - Kế hoạch huyện Thăng Bình. Cơ sở sản xuất Bột ngũ cốc Cô Một được Phòng Tài chính- Kế hoạch huyện Thăng Bình cấp Giấy chứng nhận đăng ký hộ kinh doanh số: 33H8004944 ngày 26 tháng 6 năm 2017.</p>
                    <br/>
                    <p className="text-base sm:text-lg text-justify">Hưởng ứng : “Chương trình Mỗi xã một sản phẩm tỉnh Quảng Nam, giai đoạn 2018-2020, định hướng đến năm 2030”. Cơ sở sản xuất Bột ngũ cốc Cô Một, đầu tư xây dựng nhà xưởng, trang bị máy móc hiện đại, tiến hành sản xuất hàng hóa, mở rộng thị trường tiêu thụ…. Hiện nay cơ sở sản xuất mỗi năm trên 18 tấn sản phẩm, đạt doanh thu trên 4 320 000 000 đồng /năm.</p>
                    <br/>
                    <p className="text-base sm:text-lg text-justify">Bột ngũ cốc Cô Một hiện nay đã có mặt gần khắp trên các thị xã thị trấn lớn ở Quảng Nam. Đã có mặt tại nhiều điểm bán hang ở thành phố Tam Kỳ, Hội An và thành phố Đà Nẵng. Bột ngũ cốc Cô Một đã có mặt một số điểm ở thành phố Hồ Chí Minh như chợ Bình Tân, khu công nghiệp Sóng Thần Bình Dương.</p>
                    <br/>
                    <p className="text-base sm:text-lg text-justify">Trên cơ sở website này, Bột ngũ cốc Cô Một đang hình thành một mạng lưới phân phối sản phẩm trên toàn quốc.</p>
                    <br/>
                    <p className="text-base font-bold sm:text-lg text-justify">Kính giới thiệu.</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}