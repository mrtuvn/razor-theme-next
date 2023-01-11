'use client';

import React, { useEffect, useRef, useState } from 'react';
import CategoriesTreeData from '@/data/categories/category-tree.json';

function index(props) {
    const ref = useRef(null);
    const { onClickOutside } = props;
    const { handleClickCategoryButton } = props.handleClickCategoryButton;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [onClickOutside]);

    return (
        <div className="categories-tree-vertical" ref={ref}>
            <div className="categories-header-button me-8 relative w-72 flex-shrink-0">
                <button
                    onClick={handleClickCategoryButton}
                    className="hover:border-skin-four flex min-h-[60px] w-full cursor-pointer items-center rounded-t bg-primary px-[18px] py-4 font-medium uppercase text-white transition-all focus:outline-none"
                >
                    <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="me-3 mr-2 text-2xl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                    ALL CATEGORIES
                </button>
            </div>
            {props.showTree && (
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

                        <li className="hover:text-skin-primary text-gray-400 relative px-4 text-sm transition">
                            <div className="flex w-full cursor-pointer items-center py-3 text-start">
                                <div className="mr-2 inline-flex flex-shrink-0">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
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
                                        strokeWidth="0"
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
                                        console.log('test click sub child')
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
    );
}

export default index;
