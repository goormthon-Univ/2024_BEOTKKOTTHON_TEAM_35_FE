"use client";

import Image from 'next/image';

// 북마크 탭, 탐색 탭 카드
const RecommendCardScholar = ({ data, onClick }) => {
    return (
        <div onClick={onClick} class="flex flex-row justify-between min-w-[358px] h-[134px] border-[0.5px] border-[#ECF3FF] rounded-lg drop-shadow-sm">
            <div class="flex flex-col">
                <div class="flex flex-row ml-4 mt-3.5 w-[90%]">
                    <span class="max-w-[80%] text-[#020D19] font-medium truncate">{data.name ? data.name : ""}</span>
                    <div class={`w-[31px] h-[18px] mt-[3px] ml-2.5 rounded ${data.type == "pop" ? "bg-[#4E60FF]" : data.type == "recommend" ? "bg-[#FF475D]" : data.type == "end" ? "bg-[#C9CDD2]" : ""}`}>
                        <p class="text-[11px] text-[#FCFCFF] text-center">
                            {
                                data.type == "pop" ? "인기"
                                    : data.type == "recommend" ? "추천"
                                        : data.type == "end" ? "마감"
                                            : ""
                            }
                        </p>
                    </div>
                </div>

                <div class="flex flex-col ml-4 w-full">
                    <span class="mt-2 font-normal text-[#454C53] text-xs truncate">{data.desc ? data.desc.slice(0, 30)+"..." : ""}</span>
                    <span class="mt-[17px] font-normal text-[#454C53] text-[11px] truncate">{data.org ? data.org + data.date : ""}</span>
                </div>

                <div class="flex items-center ml-4 mt-[11px]">
                    <Image
                        src="/assets/images/b/home/images/card_two_view.svg"
                        width={16}
                        height={16}
                        alt="view"
                    />
                    <span class="text-xs text-[#C9CDD2] ml-1.5">{data.view ? data.view : "0"}</span>
                    <Image
                        src="/assets/images/b/home/images/card_two_bookmark.svg"
                        width={12}
                        height={12}
                        class="ml-2.5"
                        alt="bookmark"
                    />
                    <span class="text-xs text-[#C9CDD2] ml-1.5">{data.bookmark ? data.bookmark : "0"}</span>
                </div>
            </div>

            <div class="flex flex-col pt-4 pr-4">
                <Image
                    src="/assets/images/b/home/images/bookmark_tab_on.svg"
                    width={14}
                    height={16}
                    class="ml-2.5"
                    alt="bookmark_tab_on"
                />
            </div>
        </div>
    );
};

export default RecommendCardScholar;
