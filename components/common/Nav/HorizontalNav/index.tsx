import React from 'react'

function index() {
  return (
    <div className="nav-horizontal">
                    <nav className="headerMenuHorizontal flex min-h-[60px] w-full items-center gap-4">
                        <div className="menuItem group relative mx-4 py-3 xl:mx-5">
                            <span className="uppercase">DEMOs</span>
                        </div>
                        <div className="menuItem group relative mx-4 py-3 xl:mx-5">
                            <span className="uppercase">Categories</span>
                        </div>
                        <div className="menuItem group relative mx-4 py-3 xl:mx-5">
                            <span className="uppercase">Mega Menu</span>
                        </div>
                        <div className="menuItem group mx-4 py-3 xl:mx-5">
                            <span className="uppercase">Vendors</span>
                        </div>
                        <div className="menuItem group relative mx-4 py-3 xl:mx-5">
                            <span className="uppercase">Pages</span>
                        </div>
                        <div className="menuItem group relative mx-4 py-3 xl:mx-5">
                            <span className="uppercase">Blog</span>
                        </div>
                        <div className="menuItem group mx-4 py-3 xl:mx-5 ">
                            <span className="uppercase">Contact us</span>
                        </div>
                    </nav>
                </div>
  )
}

export default index
