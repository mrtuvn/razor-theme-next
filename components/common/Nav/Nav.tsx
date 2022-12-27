import React from "react";

type Props = {};

function Nav({}: Props) {
    return (
        <>
            <div className="flex gap-10">
                <div className="categories-tree-vertical ">
                    <div>
                        <span className="hambuger-icon"></span>
                        ALL CATEGORIES
                    </div>
                    <ul>
                        <li>
                            <a className="capitalize">Audio Music</a>
                        </li>
                        <li>
                            <a className="capitalize">Phone & Tablets</a>
                        </li>
                        <li>
                            <a className="capitalize">Fashion & Clothing</a>
                        </li>
                        <li>
                            <a className="capitalize">Garden & Kitchen</a>
                        </li>
                        <li>
                            <a className="capitalize">TV & Video</a>
                        </li>
                        <li>
                            <a className="capitalize">Beauty & Health</a>
                        </li>
                        <li>
                            <a className="capitalize">Jewelry & Watches</a>
                        </li>
                        <li>
                            <a className="capitalize">Top 10 Offers</a>
                        </li>
                        <li>
                            <a className="capitalize">Accessories</a>
                        </li>
                        <li>
                            <a className="capitalize">Beaf Steak</a>
                        </li>
                        <li>
                            <a className="capitalize">Vitamin Items</a>
                        </li>
                        <li>Raw Chicken mdeo</li>
                    </ul>
                </div>
                <div className="nav-horizontal">
                    <nav className="headerMenuHorizontal flex w-full">
                        <div>
                            <span className="uppercase">DEMOs</span>
                        </div>
                        <div>
                            <span className="uppercase">Categories</span>
                        </div>
                        <div>
                            <span className="uppercase">Mega Menu</span>
                        </div>
                        <div>
                            <span className="uppercase">Vendors</span>
                        </div>
                        <div>
                            <span className="uppercase">Pages</span>
                        </div>
                        <div>
                            <span className="uppercase">Blog</span>
                        </div>
                        <div>
                            <span className="uppercase">Contact us</span>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Nav;
