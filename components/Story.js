export default function Story(){
    return (
        <section className="lg:container lg:mx-auto shadow p-2 sm:p-6 mt-6">
            <h1 className="text-center text-xl sm:text-3xl font-bold">Câu chuyện sản phẩm</h1>
            <div className="flex pt-2 flex-col sm:flex-row">
                <div className="flex-1">
                  <img src="../static/images/story.webp" alt="Hình ảnh thương hiệu Cô Một"/>
                </div>
                <div className="flex-1 sm:pl-5 pt-6 sm:pt-0">
                 <p className="text-base sm:text-lg text-justify">Trong cuộc sống hiện tại, có quá nhiều sự cạnh tranh giữa các công ty, cửa hàng. Họ dường như đang chạy đua theo lợi nhuận mà dần bỏ quên đi chất lượng của sản phẩm. Và các sản phẩm thuộc lĩnh vực thực phẩm cũng không phải ngoại lệ. Các mặt hàng thực phẩm ngày càng phát sinh ra nhiều điều nguy hại. Thịt heo có nhiều chất tạo nạc, thịt bò bị làm giả, rau củ dư thừa lượng hóa chất bảo vệ thực vật,…</p>
                 <p className="text-base sm:text-lg text-justify">Nhận ra được những bất cập đó, ngày càng có nhiều người tìm đến các sản phẩm có nguồn gốc tự nhiên như ngũ cốc cho gia đình. Cô Một đã mạnh dạn sản xuất ra loại ngũ cốc mang thương hiệu Ngũ cốc Cô Một mà lâu nay gia đình vẫn tự làm để dùng, Các loại hạt Cô Một làm bột ngũ cốc thường gồm: gạo lứt, đậu xanh, đậu đen, đậu tương... Đậu xanh phải chọn hạt nguyên, màu sáng, hạt đậu bóng bẩy. Đậu tương phải có màu vàng đều, hạt tròn. Gạo lứt chọn loại gạo ngon, đậu đỏ, đậu trắng cũng vậy, hạt đều, không được mốc. <span><a href="/cau_chuyen_san_pham_bot_ngu_coc_co_mot" className="font-bold text-blue-500 text-xs">Tìm hiểu thêm</a></span></p>
                </div>
            </div>
        </section>
    )
}