export default function AboutUs(){
    return (
        <section className="lg:container lg:mx-auto shadow p-2 sm:p-6">
            <h1 className="text-center text-xl sm:text-3xl font-bold">Giới thiệu</h1>
            <div className="flex pt-2 lg:flex-row flex-col">
                <div className="flex-1">
                  <img src="../static/images/aboutus.webp" alt="Hình ảnh thương hiệu Cô Một"/>
                </div>
                <div className="flex-1 sm:pl-5 pt-6 sm:pt-0">
                 <p className="text-base sm:text-lg text-justify">  Bột ngũ cốc Cô Một hình thành trên cơ sở cách chế biến ngũ cốc truyền thống trong dân gian Quảng Nam. Ngày xưa ông cha ta thường chế biến các loại bột như bột đậu xanh, bột gạo lứt, bột gạo tẻ, bột gạo nếp bằng cách rang vàng thơm giòn rồi giả nhỏ bằng cối đá, rây thành bột mịn dùng để bồi bổ sức khỏe.</p>
                 <p className="text-base sm:text-lg text-justify">Bột ngũ cốc Cô Một bước đầu nắm được cách chế biến bột ngũ cốc trong dân gian, tự làm bột sử dụng trong gia đình. Một thời gian sau, bà con hàng xóm nhận thấy chất lượng Bột ngũ cốc Cô Một làm ra thơm ngon, bổ dưỡng nên hỏi mua về sử dụng. Tiếng lành đồn xa, dần dà nhiều người hỏi mua và cứ thế lan truyền ra nhiều người nữa biết đến sản phẩm. Trên nền tảng đó tôi dần dần hình thành Cơ sở chế biến Bột ngũ cốc Cô Một. Bước đầu tôi hoàn toàn sản xuất bằng phương pháp bán thủ công, mỗi tháng chỉ sản xuất được khoảng từ 90 đến 150 kg, khách hàng chủ yếu là người địa phương và bạn bè thân quen. Tôi đã duy trì cách sản xuất như trên trong suốt nhiều năm liền. Thời gian gần đây tôi nhận thấy sản phẩm mình làm ra  được khá nhiều khách hàng tin dùng, nên đã quyết định mở rộng quy mô theo phương thức sản xuất hàng hóa. <span><a href="/gioi_thieu_bot_ngu_coc_co_mot" className="font-bold text-blue-500 text-xs">Tìm hiểu thêm</a></span></p>
                </div>
            </div>
        </section>
    )
}