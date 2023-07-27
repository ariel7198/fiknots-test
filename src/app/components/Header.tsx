import Link from 'next/link'
import style from '../components/style/Header.module.css'
import Image from 'next/image'

export default function Header () {
    return (
        <div className='w-screen bg-red-500/50 flex justify-center items-center content-center z-10'>
            <div className="max-w-7xl min-w-[80vw] justify-between items-center font-mono text-sm lg:flex ">
                <div className='flex items-center'>
                    <div>
                        <Image
                            src="/fiknots.png"
                            alt="fiknots logo"
                            width={170}
                            height={35}
                            priority
                            />
                        </div>
                    <div className="">
                        <ul className="menu menu-horizontal">
                            <li>
                                <Link href="/jogs">Jobs</Link>
                            </li>
                            <li>
                                <Link href="/scholars">Scholars</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center'>
                <div className={`flex ${style.actionsContainer}`}>
                    <div> 
                        <button className="btn-sm btn-circle flex justify-center content-center items-center mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </svg>
                        </button>
                    </div>
                    <div> 
                        <button className="btn-sm btn-circle flex justify-center content-center items-center mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>
                    </div>
                    <div>  
                        <button className="btn-sm gap-2 flex justify-items-center content-center items-center mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                            EN
                        </button>
                    </div>
                </div>
                <div className={`flex justify-center content-center items-center p-3 rounded-l-full ${style.avatarContainer}`}>
                    <div className="avatar">
                        <div className="w-8 rounded-full">
                            <img src="/header/avatar.png" />
                        </div>
                    </div>
                    <div className="title">
                        <p> trizky2022 </p>
                        <small> 0x92831....124b </small>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}