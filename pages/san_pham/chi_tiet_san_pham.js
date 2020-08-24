import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import SEO from '../components/SEO'
export default function ProductDetail(){
    const router = useRouter()
    const sanpham = router.query.sanpham
    return(
        <Layout>
             <SEO title="Bột ngũ cốc Cô Một" description="Chi tiết sản phẩm bột ngũ cốc cô một"/>
            <div className="mt-16"/>
            <section className="lg:container lg:mx-auto shadow p-2 sm:p-6 mt-10 mb-20 m-2 flex flex-col justify-center">
                <p className="font-bold"><a href="/" >Trang chủ</a> / <a href="/san_pham">Sản phẩm</a></p>
                <div className="flex flex-col sm:flex-row">
                    <div className="flex-1">
                        <img src="../../static/images/product.webp" className="w-full"/>
                    </div>
                    <div className="flex-1 ml-2">
                        <div className="font-bold text-xl sm:text-2xl mb-2">{`Bột ngũ cốc Cô Một ${sanpham} loại hạt`}</div>
                        <p className="font-bold">Mô tả</p>
                        { sanpham == 12 ? 
                        <p>Bột ngũ cốc dinh dưỡng 12 loại hạt Cô Một là loại sản phẩm đặc biệt cùng với những loại hạt có trong bột ngũ cốc dinh dưỡng 7 loại hạt còn bổ sung thêm 5 loại hạt hạt chia, hạnh nhân, óc chó, yến mạch, mắc ca giúp tăng thêm dinh dưỡng và hương vị thơm ngon cho sản phẩm. Đây là sản phẩm được người tiêu dùng ưu thích và đánh giá cao.</p>:
                        <p>Bột ngũ cốc dinh dưỡng 7 loại hạt Cô Mộ được làm từ các nguyên liệu sạch, không chứa chất bảo quản. Quá trình rang xay tự nhiên không làm mất đi đặc tính hoá học của sản phẩm. Sản phẩm giúp bổ sung chất xơ, các loại vitamin như B1, B3, B5, E, sắt, canxi,… tốt cho trẻ em, người lớn, người đang ăn kiêng, người muốn tăng cân, người cần bổ sung dinh dưỡng.</p>
                        }
                        <p className="font-bold">Thành phần</p>
                        <ul className="p-2 pl-5">
                            <li>Đậu đen</li>
                            <li>Đậu xanh</li>
                            <li>Đậu đỏ</li>
                            <li>Đậu ván</li>
                            <li>Đậu nành</li>
                            <li>Hạt sen</li>
                            <li>Gạo lức</li>
                            {sanpham == 12 && (
                                <>
                                <li>Hạt chia</li>
                                <li>Hạnh nhân</li>
                                <li>Hạt óc chó</li>
                                <li>Yến mạch</li>
                                <li>Mắc ca</li>
                                </>
                            )}
                        </ul>
                        <p className="font-bold">🛒 Cách đặt hàng:</p>
                        <ol className="p-2 pl-5 flex flex-wrap">
                            <li>1. <span className="font-bold">Gọi điện thoại:</span> 0362007304</li>
                            <li>2. <span className="font-bold">Nhắn tin Facebook:</span> <a className="text-blue-700" href="https://www.facebook.com/botngucoccomot">https://www.facebook.com/botngucoccomot</a></li>
                        </ol>
                        <p>🚛 Giao hàng toàn quốc (Ship COD phí 30.000đ)</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex-1 p-4 border-t">
                        <p className="font-bold text-lg">Thông tin bổ sung</p>
                    </div>
                    <div className="flex-1 p-4 border-t pl-6">
                        <p className="font-bold">Chỉ tiêu chất lượng</p>
                        <ul className="pl-4">
                            <li>{`Độ ẩm < 25%`}</li>
                            <li>{`Protein > 20%`}</li>
                        </ul>
                        <p className="font-bold">Cách dùng</p>
                        <p className="pl-4">Hoà 2-3 muỗng bột ngũ cốc với 100ml nước ấm thêm đường hoặc sữa tuỳ vào khẩu vị.</p>
                        <p className="font-bold">Công bố chất lượng</p>
                        <p className="pl-4">01/CƠ SỞ SX BỘT NGŨ CỐC CÔ MỘT/2019GCN cơ sở đủ điều kiện ATTP số 05/2019/NNPTNT-QNa-TB ngày 16/05/2019.</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}