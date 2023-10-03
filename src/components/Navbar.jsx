'use client'
import Link from "next/link";
import { useState } from "react";


const Navbar = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false)

    return (
        <>
            {/*<!-- Component: Navbar with Topbar --> */}
            {/*<!-- Header --> */}
            <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
                <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                    <nav
                        aria-label="main navigation"
                        className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
                        role="navigation"
                    >
                        {/*      <!-- Brand logo --> */}
                        <a
                            id="logo"
                            aria-label="logo"
                            aria-current="page"
                            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
                            href="javascript:void(0)"
                        >
                            <img src='https://i.ibb.co/1sG5tnn/grocery.png' alt="" className="h-16 w-16" />
                        </a>

                        {/*      <!-- Mobile trigger --> */}
                        <button
                            className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${isToggleOpen
                                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                                    : ""
                                }
              `}
                            onClick={() => setIsToggleOpen(!isToggleOpen)}
                            aria-expanded={isToggleOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                        >
                            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                            </div>
                        </button>
                        {/*      <!-- Navigation links --> */}
                        <ul
                            role="menubar"
                            aria-label="Select page"
                            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                                ? "visible opacity-100 backdrop-blur-sm"
                                : "invisible opacity-0"
                                }`}
                        >
                            <li role="none" className="flex items-stretch">
                                <Link
                                    role="menuitem"
                                    aria-haspopup="false"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                    href="/"
                                >
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <Link
                                    role="menuitem"
                                    aria-current="page"
                                    aria-haspopup="false"
                                    className="flex items-center gap-2 py-4 text-emerald-500 transition-colors duration-300 hover:text-emerald-600 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                    href="/dashboard"
                                >
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <Link
                                    role="menuitem"
                                    aria-haspopup="false"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                    href="javascript:void(0)"
                                >
                                    <span>Wishlist</span>
                                </Link>
                            </li>
                        </ul>
                        {/*      <!-- Actions --> */}
                        <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
                            <Link
                                href="cart"
                                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-lg text-emerald-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    aria-labelledby="title description"
                                    role="graphics-symbol"
                                >
                                    <title id="title">View Cart</title>
                                    <desc id="description">Cart icon with items</desc>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    />
                                </svg>
                                <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 px-1.5 text-sm text-white">
                                    2<span className="sr-only"> new emails </span>
                                </span>
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
            {/*<!-- End Navbar with Topbar--> */}
        </>
    )
}
export default Navbar;