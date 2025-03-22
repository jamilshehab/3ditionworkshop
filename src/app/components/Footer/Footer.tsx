import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
    <div className="container relative">
        <div className="grid grid-cols-12">
            <div className="col-span-12">
                <div className="py-[60px] px-0">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-[30px]">
                        <div className="text-center">
                            <h5 className="tracking-[1px] text-gray-100 font-semibold mb-4">Open Hours</h5>
                            <p className="mb-2">Monday - Friday: 10 AM - 11 PM</p>
                            <p className="mb-0">Saturday - Sunday: 9 AM - 1 PM</p>
                        </div>

                        <div className="text-center">
                            <h5 className="tracking-[1px] text-gray-100 font-semibold mb-4">Contact Us</h5>
                            <p className="mb-2"><Link href="#" className="text-gray-200">+152 534-468-854</Link></p>
                            <p className="mb-0"><Link href="#" className="text-gray-200">contact@example.com</Link></p>
                        </div>

                        <div className="text-center">
                            <h5 className="tracking-[1px] text-gray-100 font-semibold mb-4">Address</h5>
                             <p className="mb-0">Beirut Lebanon</p>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 mt-12">
                        <div className="text-center">
                            <Image src="/logo/2.png" width={91} height={80} className="block mx-auto" alt="" />
                            <p className="max-w-xl mx-auto mt-6">Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs</p>
                        </div>

                        <ul className="list-none text-center mt-6 space-x-1">
 
                             <li className="inline"><Link href="#" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-[#a7a2f2] dark:hover:border-[#a7a2f2] hover:bg-[#a7a2f2] dark:hover:bg-[#a7a2f2]"><FaFacebook className='text-sm'/></Link></li>
                            <li className="inline"><Link href="#" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-[#a7a2f2] dark:hover:border-[#a7a2f2] hover:bg-[#a7a2f2] dark:hover:bg-[#a7a2f2]"><FaInstagram className='text-sm'/></Link></li>
  
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container relative text-center">
            <div className="grid md:grid-cols-1">
                <p className="mb-0">© {new Date().getFullYear()} Gym Example. Developed by <Link href="#" target="_blank" className="text-reset duration-75 hover:text-[#a7a2f2]">Jamil Shehab</Link>.</p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer