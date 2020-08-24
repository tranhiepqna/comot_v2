export default function Footer(){
    return (
        <footer className='flex w-full  border-t border-grey flex-col'>
            <div className="flex flex-row p-6 bg-black text-white">
                <div className="flex-2 sm:flex-1 align-top">
                    <p className="text-base sm:text-3xl font-bold">Cơ sở sản xuất Bột ngũ cốc Cô Một</p>
                    <p className="text-base font-bold">Địa chỉ: <span className="font-normal">
                         Tổ 7, Thôn Đồng Dương, Xã Bình Định Bắc, Huyện Thăng Bình, Tỉnh
                        Quảng Nam
                     </span>
                    </p>
                    <p className="text-base font-bold">Điện thoại: <span className="font-normal">0362007304</span></p>
                </div>
                <div className="flex-1 align-top">
                    <p className="text-base sm:text-3xl font-bold">Liên hệ</p>
                    <div className="flex flex-row pt-2">
                    <a className="hover:text-secondary pr-6"  href="https://www.facebook.com/comot.vn" target="__blank" rel="Truy cập vào trang của bột ngũ cốc Cô Một trên Facebook"
                  rel="noreferrer">
                     <i className="fab fa-facebook-square fa-2x"></i>
                    </a>
                    <a className="hover:text-secondary ml-6"  href="mailto:kd@comot.vn?Subject=subject here&Body=bodytext"
                        rel="Gửi email tới bột ngũ cốc Cô Một">
                        <i className="far fa-envelope fa-2x"></i>
                    </a>
                    </div>
                  
                </div>
            </div>
            <div className="flex-1 text-center p-3 bg-gray-900">
                <p className="text-gray-500">© {new Date().getFullYear()} Copyright: <span>comot.vn</span></p>
            </div>
        </footer>
    )
}