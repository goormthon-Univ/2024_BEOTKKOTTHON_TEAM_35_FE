"use client";

import React from 'react';
import Link from 'next/link';
import useNavigation from '@/hook/use-navigation';

import Home from './bottom_images/bottom_home.svg'
import Explore from './bottom_images/bottom_explore.svg'
import Quiz from './bottom_images/bottom_quiz.svg'
import My from './bottom_images/bottom_my.svg'

const BottomNav = () => {
  const {
    isHomeActive,
    isExploreActive,
    isQuizActive,
    isMyPageActive,
  } = useNavigation();

  return (
    <div class={`flex flex-col justify-center items-center fixed bottom-0 w-full max-w-[500px] h-14 z-10 bg-[#FCFCFF] shadow-lg drop-shadow-md rounded-t-[20px]`}>

      <div class="flex flex-row justify-around items-center bg-transparent w-full">

        {isHomeActive ? (
          <div class="flex flex-col justify-center items-center">
            <div class="flex w-[23px] h-[23px] justify-center items-center">
              <Home fill="#4E60FF"/>
            </div>
            <span class="mt-[5px] font-bold text-[#4E60FF] text-[10px] font-medium leading-4">홈</span>
          </div>
        ) : (
          <Link href="/home" class="flex items-center relative">
            <div class="flex flex-col justify-center items-center">
              <div class="flex w-[23px] h-[23px] justify-center items-center">
                <Home fill="#C9CDD2"/>
              </div>
              <span class="mt-[5px] text-[#9EA4AA] text-[10px] font-medium">홈</span>
            </div>
          </Link>
        )}

        {isExploreActive ? (
          <div class="flex flex-col justify-center items-center">
            <div class="flex w-[23px] h-[23px] justify-center items-center">
              <Explore fill="#4E60FF"/>
            </div>
            <span class="mt-[5px] font-bold text-[#4E60FF] text-[10px] font-medium leading-4">탐색</span>
          </div>
        ) : (
          <Link href="/explore" class="flex items-center relative">
            <div class="flex flex-col justify-center items-center">
              <div class="flex w-[23px] h-[23px] justify-center items-center">
                <Explore fill="#C9CDD2"/>
              </div>
              <span class="mt-[5px] text-[#9EA4AA] text-[10px] font-medium">탐색</span>
            </div>
          </Link>
        )}

        {isQuizActive ? (
          <div class="flex flex-col justify-center items-center">
            <div class="flex w-[23px] h-[23px] justify-center items-center">
              <Quiz fill="#4E60FF"/>
            </div>
            <span class="mt-[5px] font-bold text-[#4E60FF] text-[10px] font-medium leading-4">퀴즈</span>
          </div>
        ) : (
          <Link href="/quiz" class="flex items-center">
            <div class="flex flex-col justify-center items-center">
              <div class="flex w-[23px] h-[23px] justify-center items-center">
                <Quiz fill="#C9CDD2"/>
              </div>
              <span class="mt-[5px] text-[#9EA4AA] text-[10px] font-medium">퀴즈</span>
            </div>
          </Link>
        )}



        {isMyPageActive ? (
           <div class="flex flex-col justify-center items-center">
            <div class="flex w-[23px] h-[23px] justify-center items-center">
              <My fill="#4E60FF"/>
            </div>
            <span class="mt-[5px] font-bold text-[#4E60FF] text-[10px] font-medium leading-4">MY</span>
          </div>
        ) : (
          <Link href="/mypage" class="flex items-center">
            <div class="flex flex-col justify-center items-center">
              <div class="flex w-[23px] h-[23px] justify-center items-center">
                <My fill="#C9CDD2"/>
              </div>
              <span class="mt-[5px] text-[#9EA4AA] text-[10px] font-medium">MY</span>
            </div>
          </Link>
        )}

      </div>
    </div>
  );
};

export default BottomNav;