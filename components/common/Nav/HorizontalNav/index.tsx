'use client';
import React from 'react';
import categoriesHorizontalData from '@/data/categories/category-horizontal.json';
import Link from 'next/link';

function index() {
    return (
        <div className="nav-horizontal">
            <nav className="headerMenuHorizontal flex min-h-[60px] w-full items-center gap-4">
                {categoriesHorizontalData.length > 0 &&
                    categoriesHorizontalData.map((item) => (
                        <React.Fragment key={item.categoryId}>
                            <div className="menuItem group relative mx-4 inline-flex items-center py-3 text-sm font-medium uppercase text-white xl:mx-5 ">
                                {item.url !== 'undefined' ? (
                                    <Link
                                        href={item.url ?? '#'}
                                        className="uppercase hover:text-primary"
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <span className="uppercase hover:text-primary">
                                        {item.name}
                                    </span>
                                )}
                            </div>
                        </React.Fragment>
                    ))}
            </nav>
        </div>
    );
}

export default index;
