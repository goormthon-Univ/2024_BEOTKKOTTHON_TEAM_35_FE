"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react"; // Suspense 추가
import { useSearchParams } from "next/navigation";
import { useRecoilState } from "recoil";
import { stage1_c1, stage2_c1, stage3_c1 } from "@/app/_state/category1";

import StageBox from "@/app/_components/quiz/StageBox";
import LockStageBox from "@/app/_components/quiz/LockStageBox";

export default function QuizStageContent() {
  const title = "금융 개념";
  const [data11, setData11] = useRecoilState(stage1_c1);
  const [data12, setData12] = useRecoilState(stage2_c1);
  const [data13, setData13] = useRecoilState(stage3_c1);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/quizzes?category=${title}`)
      .then((response) => {
        const slicedData = [];
        for (let i = 0; i < response.data.length; i += 10) {
          slicedData.push(response.data.slice(i, i + 10));
        }
        setData11(slicedData[0] || []);
        setData12(slicedData[1] || []);
        setData13(slicedData[2] || []);
      })
      .catch((error) => {
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col content-center items-center w-full h-full">
      <div className="flex flex-col content-center items-center w-full max-w-[500px] h-screen bg-[#FCFCFF]">
        <div className="fixed w-full max-w-[500px] bg-[#FCFCFF]">
          <div className="mt-[6px] flex w-full justify-between items-center h-[36px] px-4">
            <Link href="/quiz">
              <Image
                src="/assets/icons/back-arrow.svg"
                width={20}
                height={20}
                alt="back"
              />
            </Link>
            <div className="text-[16px] text-[#000]">학습하기</div>
            <div className="size-[20px]" />
          </div>
        </div>
        <div className="w-full mt-[99px] px-4 text-[22px] font-bold">
          {title}
        </div>
        <div className="w-full mt-[17px] px-4 text-[16px]">
          한 개의 스테이지를 완료할 때마다 포인트를 뽑을 수 있어요{" "}
        </div>
        <div className="mt-[30px] flex flex-col gap-[12px] w-full px-4">
          <StageBox num={1} c="c1" />
          <StageBox num={2} c="c1" />
          <LockStageBox num={3} c="c1" />
        </div>
      </div>
    </div>
  );
}
