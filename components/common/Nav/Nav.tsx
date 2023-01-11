'use client';
import React, { useState, useRef, useEffect } from 'react';
import NavVerticalTree from '@/components/common/Nav/VerticalTreeNav/index';
import NavHorizontal from '@/components/common/Nav/HorizontalNav/index';
type Props = {};

function Nav({}: Props) {
    const [childTreeShow, setChildTreeShow] = useState(false);

    // For Fixed nav
    useEffect(() => {});

    const handleClickCategoryButton = () => {
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
                <NavVerticalTree
                    showTree={childTreeShow}
                    onClickOutside={() => {
                        setChildTreeShow(false);
                    }}
                    handleClickCategoryButton={() => {
                        handleClickCategoryButton;
                    }}
                />
                <NavHorizontal />
            </div>
        </>
    );
}

export default Nav;
