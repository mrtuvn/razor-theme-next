'use client';
import React, { useState, useRef, useEffect } from 'react';
import NavVerticalTree from '@/components/common/Nav/VerticalTreeNav/index'
import NavHorizontal from '@/components/common/Nav/HorizontalNav/index'
type Props = {};

function Nav({}: Props) {
    const [childTreeShow, setChildTreeShow] = useState(false);
    const [fixedNav, setFixedNav] = useState(false);
    let [showTreeNav, setShowTreeNav] = useState(true);

    const isSticky = () => {
        const scrollTop = window.scrollY;

        if (scrollTop > 10) {
            setFixedNav(true);
        } else {
            setFixedNav(false);
        }
    };

    window.addEventListener('scroll', isSticky);

    window.removeEventListener('scroll', isSticky);




    // For Fixed nav
    useEffect(() => {


    });



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
                <NavVerticalTree show={showTreeNav} onClickOutside={() => {setShowTreeNav(false)}} handleClickCategoryTree={() => {handleClickCategoryTree}}/>
                <NavHorizontal />
            </div>
        </>
    );
}

export default Nav;
