import React from 'react'
import Search from '../search/Search';
import Subscribe from '../subscribe/Subscribe';
import Trends from '../trends/Trends';
import WhoToFollow from '../who-to-follow/WhoToFollow';

const Recommended = () => {
  return (
    <div className="sticky -top-[50rem] h-screen text-white hidden gap-4 w-[18rem] pt-2 min-[1003px]:flex flex-col ml-5 min-[1093px]:w-[25rem]">
      <Search />
      <Subscribe />
      <Trends />
      <WhoToFollow />
    </div>
  );
}

export default Recommended