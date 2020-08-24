import {useState, useEffect} from 'react';

export default function Header() {
    const [showNavBar, setShowNavBar] = useState(false);
    const [color, setColor] = useState('text-quaternary');
    const [background, setBackground] = useState('bg-white')

    // useEffect(() => {
    //     const handleScroll = () => {
    //       const show = window.scrollY > 110
    //       if(!showNavBar){
    //         if (show) {
    //             setColor('text-quaternary')
    //             setBackground('bg-white')
    //           } else {
    //             setColor('text-primary')
    //             setBackground('bg-transparent')
    //           }
    //       }
    //     }
    //     document.addEventListener('scroll', handleScroll)
    //     return () => {
    //       document.removeEventListener('scroll', handleScroll)
    //     }
    //   }, [])

    const onClick = () => {
        // setColor(!showNavBar? 'text-quaternary' : 'text-primary')
        // setBackground(!showNavBar? 'bg-white' : 'bg-transparent')
        setShowNavBar(!showNavBar)
    }

    const hiddenNavBar = showNavBar ? '' : 'hidden'

    return(
        <header className={`lg:px-32 px-6 ${background} flex flex-wrap items-center lg:py-0 py-2 z-40 fixed top-0 right-0 left-0 border-b-2 border-primary border-opacity-25`}>
            <div className="flex-1 flex justify-between items-center">
                <a href="/"> 
                    <img
                        src="../../static/images/logo.webp"
                        className="h-16 w-48"
                        alt="Bột ngũ cốc Cô Một"
                    />
                    {/* <h1 className={`font-extrabold ${color} text-3xl font-serif`}>Cô Một</h1> */}
                </a>
            </div>

            <label className="pointer-cursor lg:hidden block" onClick={onClick}><svg className={`fill-current ${color}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>

            <div className={`${hiddenNavBar} lg:flex lg:items-center lg:w-auto w-full`} id="menu">
                <nav>
                <ul className={`lg:flex items-center justify-between pt-4 lg:pt-0  ${color}  text-xl font-bold`}>
                    <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-primary" href="/">Trang chủ</a></li>
                    <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-primary" href="/quy_trinh">Quy trình</a></li>
                    <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-primary" href="/san_pham">Sản phẩm</a></li>
                    <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-primary" href="/su_kien">Sự kiện</a></li>
                    <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-primary lg:mb-0 mb-2" href="/lien_he">Liên hệ</a></li>
                </ul>
            </nav>
            </div>

        </header>
    )
}