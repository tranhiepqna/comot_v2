import Layout from '../../components/Layout'
import Card from '../../components/Card'
import SEO from '../../components/SEO'

export default function Products(){
   return(
    <Layout>
        <SEO title="Bột ngũ cốc Cô Một" description="Các loại sản phẩm bột ngũ cốc Cô Một sản xuất"/>
        <div className="mt-16"/>
        <section className="lg:container lg:mx-auto shadow p-2 sm:p-6 mt-10 mb-20 m-2 flex flex-col justify-center">
            <h1 className="text-center text-4xl font-bold">Sản phẩm</h1>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-around mt-6">
                <Card  index={7} src="/images/product.webp" name="Bột ngũ cốc Cô Một 7 loại hạt" alt="Hình ảnh bột ngũ cốc Cô Một 7 loại hạt" description="Bột ngũ cốc dinh dưỡng 7 loại hạt Cô Mộ được làm từ các nguyên liệu sạch, không chứa chất bảo quản. Quá trình rang xay tự nhiên không làm mất đi đặc tính hoá học của sản phẩm. Sản phẩm giúp bổ sung chất xơ, các loại vitamin như B1, B3, B5, E, sắt, canxi,… tốt cho trẻ em, người lớn, người đang ăn kiêng, người muốn tăng cân, người cần bổ sung dinh dưỡng."/>
                <Card index={12} src="/images/product.webp" name="Bột ngũ cốc Cô Một 12 loại hạt" alt="Hình ảnh bột ngũ cốc Cô Một 12 loại hạt" description="Bột ngũ cốc dinh dưỡng 12 loại hạt Cô Một là loại sản phẩm đặc biệt cùng với những loại hạt có trong bột ngũ cốc dinh dưỡng 7 loại hạt còn bổ sung thêm 5 loại hạt hạt chia, hạnh nhân, óc chó, yến mạch, mắc ca giúp tăng thêm dinh dưỡng và hương vị thơm ngon cho sản phẩm. Đây là sản phẩm được người tiêu dùng ưu thích và đánh giá cao."/>
            </div>

        </section>
   </Layout>
)}