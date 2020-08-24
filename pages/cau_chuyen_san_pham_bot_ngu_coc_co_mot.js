import Layout from '../components/Layout'
import Splash from '../components/Splash'
import SEO from '../components/SEO'
export default function StoryDetail(){
    return(
        <Layout>
         <SEO title="Bột ngũ cốc Cô Một" description="Câu chuyện sản phẩm bột ngũ cốc Cô Một"/>
            <div className="mt-16"/>
            <Splash src="../static/images/story.webp" alt="Hình ảnh thương hiệu Cô Một" name="Giới thiệu"/>
           <section className="lg:container lg:mx-auto shadow p-2 sm:p-6 mb-20">
                <p className="font-bold"><a href="/" >Trang chủ</a> / <a href="/gioi_thieu_bot_ngu_coc_co_mot">Câu chuyện sản phẩm</a></p>
                <h1 className="text-center text-4xl font-bold">Câu chuyện sản phẩm</h1>
                <div className="flex flex-col p-2">
                    <div className="flex-1 ">
                    <p className="text-base sm:text-lg text-justify">Trong cuộc sống hiện tại, có quá nhiều sự cạnh tranh giữa các công ty, cửa hàng. Họ dường như đang chạy đua theo lợi nhuận mà dần bỏ quên đi chất lượng của sản phẩm. Và các sản phẩm thuộc lĩnh vực thực phẩm cũng không phải ngoại lệ. Các mặt hàng thực phẩm ngày càng phát sinh ra nhiều điều nguy hại. Thịt heo có nhiều chất tạo nạc, thịt bò bị làm giả, rau củ dư thừa lượng hóa chất bảo vệ thực vật,…</p>
                    <br/>
                    <p className="text-base sm:text-lg text-justify">Nhận ra được những bất cập đó, ngày càng có nhiều người tìm đến các sản phẩm có nguồn gốc tự nhiên như ngũ cốc cho gia đình. Cô Một đã mạnh dạn sản xuất ra loại ngũ cốc mang thương hiệu Ngũ cốc Cô Một mà lâu nay gia đình vẫn tự làm để dùng, Các loại hạt Cô Một làm bột ngũ cốc thường gồm: gạo lứt, đậu xanh, đậu đen, đậu tương... Đậu xanh phải chọn hạt nguyên, màu sáng, hạt đậu bóng bẩy. Đậu tương phải có màu vàng đều, hạt tròn. Gạo lứt chọn loại gạo ngon, đậu đỏ, đậu trắng cũng vậy, hạt đều, không được mốc.</p>
                    <br/>
                    <p className="text-base sm:text-lg text-justify">Sau thu hoạch, hạt sẽ được phơi hoặc sấy khô. Hạt khô không đem đi rang xay luôn mà được ngâm để thải hết chất bẩn và những chất ức chế không tốt trong vỏ hạt.</p>
                    <br/>
                    <p className="text-base sm:text-lg text-justify">Phần lớn các loại hạt sẽ được đãi rửa sạch, đem sấy hoặc phơi khô thêm lần nữa. Tất cả các loại hạt sau khi sơ chế sạch sẽ, loại bỏ tạp chất, những hạt không đủ phẩm chất rồi đem rang chín giòn vàng đều ủ kỷ trong túi vải dày để giữ mùi hương sau khi rang.</p>
                    <br/>
                    <p className="text-base sm:text-lg text-justify">Các loại hạt được rang từng loại một để đảm bảo chín đều. Người làm phải căn thời gian rang sao cho khéo để hạt vừa chín tới , dậy mùi thơm, không để cháy sém. Kết thúc công đoạn rang, từng loại hạt ngũ cốc vừa được cho ra khỏi lò cho ngay vào những túi vải dày ủ kỷ để giữ hương thơm cho đến lúc nguội, trộn đều với nhau theo tỷ lệ rồi đem đi xay.</p>
                    <br/>
                    <p className="text-base sm:text-lg text-justify">Để có nguồn nguyên liệu sạch, ổn định, phục vụ cho sản xuất bột ngũ cốc, Cô Một đã liên kết với nông dân có đất canh tác hữu cơ tại địa phương trồng nguyên liệu, cho sản lượng gần 10 tấn một năm.</p>
                    <br/>
                    <p className="text-base sm:text-lg text-justify">Cho đến nay Bột ngũ cốc Cô Một đã có mặt tại nhiều tỉnh thành trong nước, sản phẩm đã được người dùng tin tưởng và sử dụng nhiều hơn. Cơ sở sản xuất Bột ngủ cốc Cô Một đang đầu tư máy móc hiện đại, dây chuyền sản xuất khép kín để tạo ra sản phẩm tốt hơn nhằm phục vụ nhu cầu của khách hàng.</p>
                    <br/>
                    <p className="text-base font-bold sm:text-lg text-justify">Bột ngũ cốc Cô Một chân thành cảm ơn quý khách đã tin dùng!</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}