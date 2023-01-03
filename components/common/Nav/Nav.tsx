'use client'
import React, { useState, useEffect } from 'react';
import CategoriesTreeData from '@/data/categories/category-tree.json';

type Props = {};

function Nav({}: Props) {
    const [childTreeShow, setChildTreeShow] = useState(false);
    const [fixedNav, setFixedNav] = useState(false);

    // For Fixed nav
    useEffect(() => {
        window.addEventListener('scroll', isSticky);

        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = () => {
        const scrollTop = window.scrollY;

        if (scrollTop > 10) {
            setFixedNav(true);
        } else {
            setFixedNav(false);
        }
    };

    const handleClickCategoryTree = () => {
        if (!childTreeShow) {
            setChildTreeShow(true);
        } else {
            setChildTreeShow(false);
        }
    };

    // also we need listen event click outside header when menu tree already triggered

    return (
        <>
            <div className="flex gap-10 pt-4">
                <div className="categories-tree-vertical">
                    <div className="categories-header-button me-8 relative w-72 flex-shrink-0">
                        <button
                            onClick={handleClickCategoryTree}
                            className="hover:border-skin-four flex min-h-[60px] w-full cursor-pointer items-center rounded-t bg-primary px-[18px] py-4 font-medium uppercase text-white transition-all focus:outline-none"
                        >
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-2xl me-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>

                            ALL CATEGORIES
                        </button>
                    </div>
                    {childTreeShow && (
                        <div id="childTree" className="absolute z-30 w-72">
                            <ul className="category-dropdown-menu w-full rounded-b-md border-2 border-t-0 border-primary bg-fill">
                                {CategoriesTreeData.length > 0 &&
                                    CategoriesTreeData.map((category) => (
                                        <>
                                            <li
                                                key={category.categoryId}
                                                className="false  px-4 text-sm text-black transition hover:text-primary"
                                            >
                                                <a className="flex w-full cursor-pointer items-center py-3 text-start capitalize outline-none focus:text-base focus:outline-none focus:ring-0">
                                                    {category.name}
                                                </a>
                                            </li>
                                        </>
                                    ))}

                                <li className="hover:text-skin-primary relative px-4 text-sm text-gray-400 transition">
                                    <div className="flex w-full cursor-pointer items-center py-3 text-start">
                                        <div className="mr-2 inline-flex flex-shrink-0">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 512 512"
                                                className="text-skin-base text-xl text-opacity-80"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M346.5 240H272v-74.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-74.5c-8.8 0-16 6-16 16s7.5 16 16 16H240v74.5c0 9.5 7 16 16 16s16-7.2 16-16V272h74.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path>
                                                <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
                                            </svg>
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 512 512"
                                                className="text-skin-base text-xl text-opacity-80"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M346.5 240h-181c-8.8 0-16 6-16 16s7.5 16 16 16h181c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path>
                                                <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
                                            </svg>
                                        </div>
                                        <span
                                            className="capitalize "
                                            onClick={() =>
                                                console.log(
                                                    'test click sub child',
                                                )
                                            }
                                        >
                                            All Categories
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
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
            </div>
        </>
    );
}

export default Nav;
