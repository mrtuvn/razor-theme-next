import React from 'react';

type Props = {};

const Newsletter = (props: Props) => {
    return (
        <>
            <div>
                <form className="relative mt-5 max-w-[400px]">
                    <span className="start-0 absolute top-0 flex h-12 transform items-center px-3.5">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 2xl:w-[18px] h-4 2xl:h-[18px]"><g clip-path="url(#clip0)"><path d="M16.3125 2.25H1.68751C0.75696 2.25 0 3.00696 0 3.93751V14.0625C0 14.9931 0.75696 15.75 1.68751 15.75H16.3125C17.243 15.75 18 14.9931 18 14.0625V3.93751C18 3.00696 17.243 2.25 16.3125 2.25ZM16.3125 3.375C16.3889 3.375 16.4616 3.39085 16.5281 3.41854L9 9.94319L1.47188 3.41854C1.53834 3.39089 1.61105 3.375 1.68747 3.375H16.3125ZM16.3125 14.625H1.68751C1.37715 14.625 1.125 14.3729 1.125 14.0625V4.60711L8.6314 11.1127C8.73743 11.2044 8.86872 11.25 9 11.25C9.13128 11.25 9.26256 11.2044 9.3686 11.1127L16.875 4.60711V14.0625C16.875 14.3729 16.6228 14.625 16.3125 14.625Z" fill="#B3B3B3"></path></g></svg>

                    </span>
                    <div className="w-full">
                        <input
                            type="email"
                            id="subscription-email"
                            name="email"
                            placeholder="Your email address"
                            className="text-input text-13px font-body placeholder-body min-h-12 border-skin-base focus:border-skin-primary ps-10 md:ps-10 pe-10 md:pe-10 mb-4 h-11 h-12 w-full appearance-none rounded-md rounded-md border border-white/20 bg-white bg-transparent py-2 px-4 transition transition duration-150 duration-200 ease-in-out ease-in-out focus:outline-none md:h-12 md:px-5 lg:text-sm 2xl:px-11"
                            aria-invalid="false"
                        />
                    </div>
                    <button
                        className="absolute right-0 top-0 h-12 scale-90 transform px-3 hover:opacity-80 focus:outline-none lg:px-3.5 2xl:scale-100"
                        aria-label="Subscribe Button"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[18px] 2xl:w-5 h-[18px] 2xl:h-5 false"><g clip-path="url(#clip0)"><path d="M18.809 8.21633L2.67252 1.52062C1.99272 1.23851 1.22471 1.36262 0.668264 1.84434C0.111818 2.32613 -0.120916 3.06848 0.0609589 3.78164L1.49725 9.41414H8.52951C8.85311 9.41414 9.11549 9.67648 9.11549 10.0001C9.11549 10.3237 8.85315 10.5861 8.52951 10.5861H1.49725L0.0609589 16.2186C-0.120916 16.9318 0.111779 17.6741 0.668264 18.1559C1.22584 18.6386 1.99393 18.7611 2.67256 18.4796L18.809 11.7839C19.5437 11.4791 20.0001 10.7955 20.0001 10.0001C20.0001 9.20469 19.5437 8.52113 18.809 8.21633Z" fill="#02B290"></path></g><defs><clipPath id="clip0"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>

                    </button>
                </form>
                <p className="text-sm">{`We don\'t spam your mailbox! Promised`}</p>
            </div>
        </>
    );
};

export default Newsletter;
