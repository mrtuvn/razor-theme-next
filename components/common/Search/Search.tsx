import React from 'react';

const Search = () => {
    const handleSearchInput = () => {
        console.log('test');
    };

    return (
        <div className="hidden w-full transition-all duration-200 ease-in-out lg:mx-10 lg:flex lg:max-w-[450px] xl:max-w-[650px] 2xl:max-w-[900px]">
            <div className="overlay input-focus-overlay-open cursor-pointer"></div>
            <div className="relative z-30 flex w-full flex-shrink-0 flex-col justify-center">
                <div className="mx-auto flex w-full flex-col">
                    <form className="relative flex w-full ">
                        <label
                            htmlFor="top-bar-search"
                            className="flex flex-1 items-center py-0.5"
                        ></label>
                        <input
                            id="top-bar-search"
                            className="text-heading pe-14 md:pe-16 bg-skin-full text-skin-base focus:border-skin-primary focus:ring-skin-form bg-skin-one h-[45px] w-full rounded-full pl-5 text-sm outline-none transition-all duration-200 focus:ring-1 md:pl-6"
                            placeholder="Search the store"
                            aria-label="top-bar-search"
                            value=""
                            onChange={handleSearchInput}
                            name="search"
                        />
                        <span className="absolute top-0 right-0 flex h-full w-14 flex-shrink-0 items-center justify-center focus:outline-none md:w-16">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                className="h-5 w-5 text-textBase text-opacity-40"
                            >
                                <path
                                    d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Search;
