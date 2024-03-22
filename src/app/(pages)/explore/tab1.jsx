"use client";

import { useState } from "react";

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import "./RangeSliderStyle.css";

import RecommendCardThree from '@/app/_components/common/RecommendCardThree';
import SelectLocation from "@/app/_components/common/Explore/SelectLocation";
import SelectAcademic from "@/app/_components/common/Explore/SelectAcademic";
import Link from "next/link";
import Image from "next/image";


export default function Tab1() {

    const [age, setAge] = useState([18, 34]);
    const [location, setLocation] = useState();
    const [academic, setAcademic] = useState();
    const [isHired, setIsHired] = useState();
    const [selected, setSelected] = useState(1);

    const [sortBy, setSortBy] = useState(true);
    const [sortByClicked, setSortByClicked] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [selectedAge, setSelectedAge] = useState([18, 34]);
    const [selectedLocation, setSelectedLocation] = useState([true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    const [selectedAcademic, setSelectedAcademic] = useState([true, false, false, false, false, false, false, false, false, false]);
    const [selectedHired, setSelectedHired] = useState([true, false, false, false, false, false, false, false, false, false]);

    const checkLocation = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    const checkAcademic = [true, false, false, false, false, false, false, false, false, false];
    const checkHired = [true, false, false, false, false, false, false, false, false, false];

    const compareArrays = (a, b) => {
        return !(JSON.stringify(a) === JSON.stringify(b));
    };

    return (
        <div class="w-full pb-14">

            {/* Filter */}
            {/* <div class="flex flex-row overflow-auto pt-5 px-4 gap-x-[8px]"> */}
            <div class="flex flex-row overflow-auto pt-4 px-4 gap-x-[8px]">
                <div onClick={() => { setShowModal(true); setSelected(1); }} class={`flex flex-row justify-between items-center h-[30px] px-[15px] bg-[#ECF3FF] border border-[#2528AE] rounded-[20px]`}>
                    <p class={`text-[#2528AE] min-w-max text-xs`}>나이</p>
                    <Image
                        src="/assets/images/b/explore/images/explore_filter_down.svg"
                        width={12}
                        height={12}
                        class="ml-[11px]"
                        alt="FilterDown"
                    />
                </div>

                <div onClick={() => { setShowModal(true); setSelected(2); }} class={`flex flex-row justify-between items-center h-[30px] px-[15px] ${compareArrays(selectedLocation, checkLocation) ? "bg-[#ECF3FF] border border-[#2528AE]" : "bg-[#F7F8F9]"} rounded-[20px]`}>
                    <p class={`${compareArrays(selectedLocation, checkLocation) ? "text-[#2528AE]" : "text-[#454C53]"} min-w-max text-xs`}>활동지역</p>
                    <Image
                        src="/assets/images/b/explore/images/explore_filter_down.svg"
                        width={12}
                        height={12}
                        class="ml-[11px]"
                        alt="FilterDown"
                    />
                </div>

                <div onClick={() => { setShowModal(true); setSelected(3); }} class={`flex flex-row justify-between items-center h-[30px] px-[15px] ${compareArrays(selectedAcademic, checkAcademic) ? "bg-[#ECF3FF] border border-[#2528AE]" : "bg-[#F7F8F9]"} rounded-[20px]`}>
                    <p class={`${compareArrays(selectedAcademic, checkAcademic) ? "text-[#2528AE]" : "text-[#454C53]"} min-w-max text-xs`}>학력</p>
                    <Image
                        src="/assets/images/b/explore/images/explore_filter_down.svg"
                        width={12}
                        height={12}
                        class="ml-[11px]"
                        alt="FilterDown"
                    />
                </div>

                <div onClick={() => { setShowModal(true); setSelected(4); }} class={`flex flex-row justify-between items-center h-[30px] px-[15px] ${compareArrays(selectedHired, checkHired) ? "bg-[#ECF3FF] border border-[#2528AE]" : "bg-[#F7F8F9]"} rounded-[20px]`}>
                    <p class={`${compareArrays(selectedHired, checkHired) ? "text-[#2528AE]" : "text-[#454C53]"} min-w-max text-xs`}>취업상태</p>
                    <Image
                        src="/assets/images/b/explore/images/explore_filter_down.svg"
                        width={12}
                        height={12}
                        class="ml-[11px]"
                        alt="FilterDown"
                    />
                </div>
            </div>


            {/* Result & Filter 2 */}
            <div class="flex flex-row relative justify-between items-start pl-4 pr-[7px]">
                <p class="mt-5 text-[#454C53] text-xs">검색 결과 54 건</p>

                <div
                    onClick={() => setSortByClicked(!sortByClicked)}
                    class={`z-10 absolute right-[7px] bg-[#ffffff] mt-[13px] pt-[5px] pl-[6px] pr-[7px] pb-[7px] border ${sortByClicked ? "border-[#E8EBED]" : "border-[transparent]"}`}>
                    <div class="flex items-center">
                        <p class="text-[#020D19] text-xs">{sortBy ? "최신순" : "추천순"}</p>
                        <Image
                            src={`${sortByClicked ? "/assets/images/b/explore/images/explore_filter_up.svg" : "/assets/images/b/explore/images/explore_filter_down.svg"}`}
                            width={12}
                            height={12}
                            class="ml-2"
                            alt="FilterUp"
                        />
                    </div>
                    <div onClick={() => setSortBy(!sortBy)} class={`flex items-center mt-2.5 ${sortByClicked ? "block" : "hidden"}`}>
                        <p class="text-[#C9CDD2] text-xs">{sortBy ? "추천순" : "최신순"}</p>
                    </div>
                </div>
            </div>


            {/* Result Card */}
            <div class="flex flex-col mt-[24px] px-4 gap-y-2">

                {
                    card_data.map((data, index) => (
                        <Link key={index} href={`./explore/detail/${index}`}>
                            <RecommendCardThree
                                data={data}
                            />
                        </Link>

                    ))
                }

            </div>




            {showModal ?
                <div class="w-full max-w-[500px] h-screen bg-[#020D1980] bg-opacity-50 fixed top-0 z-40">
                    <div class="flex items-end h-full">
                        <div class="w-full bg-white rounded-t-[20px] shadow dark:bg-gray-700">
                            <div class="flex flex-col">
                                <div class="flex items-start justify-between p-4">
                                    <div class="flex gap-x-7">
                                        <p onClick={() => setSelected(1)} class={`${selected == 1 ? "text-[#020D19]" : "text-[#9EA4AA]"} text-base`}>나이</p>
                                        <p onClick={() => setSelected(2)} class={`${selected == 2 ? "text-[#020D19]" : "text-[#9EA4AA]"} text-base`}>활동지역</p>
                                        <p onClick={() => setSelected(3)} class={`${selected == 3 ? "text-[#020D19]" : "text-[#9EA4AA]"} text-base`}>학력</p>
                                        <p onClick={() => setSelected(4)} class={`${selected == 4 ? "text-[#020D19]" : "text-[#9EA4AA]"} text-base`}>취업상태</p>
                                    </div>

                                </div>


                                <div class="flex flex-col justify-between w-full h-[296px] px-4">
                                    {
                                        selected == 1 &&
                                        <div class="flex flex-col mt-[70px]">

                                            <RangeSlider
                                                id="ageRange"
                                                min={1}
                                                max={100}
                                                value={selectedAge}
                                                onInput={setSelectedAge}
                                            />

                                            <div class="flex justify-between mt-[66px]">
                                                <p class="text-lg text-[#020D19] font-semibold">나이</p>
                                                <p class="text-[22px] text-[#020D19] font-semibold"><span class="text-lg">만</span> {selectedAge[0]} ~ {selectedAge[1]}세</p>
                                            </div>

                                        </div>
                                    }

                                    {
                                        selected == 2 &&
                                        <div class="flex flex-col mt-[45px]">
                                            <div class="flex flex-col gap-y-2">
                                                <div class="flex">
                                                    {
                                                        location_list.map((data, index) => {
                                                            if (index < 6) {
                                                                return (
                                                                    <SelectLocation
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedLocation;
                                                                            tmp[index] = !selectedLocation[index];
                                                                            if (index == 0) {
                                                                                tmp = checkLocation;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedLocation(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedLocation[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>

                                                <div class="flex">
                                                    {
                                                        location_list.map((data, index) => {
                                                            if (index >= 6 && index < 12) {
                                                                return (
                                                                    <SelectLocation
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedLocation;
                                                                            tmp[index] = !selectedLocation[index];
                                                                            if (index == 0) {
                                                                                tmp = checkLocation;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedLocation(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedLocation[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>

                                                <div class="flex">
                                                    {
                                                        location_list.map((data, index) => {
                                                            if (index >= 12) {
                                                                return (
                                                                    <SelectLocation
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedLocation;
                                                                            tmp[index] = !selectedLocation[index];
                                                                            if (index == 0) {
                                                                                tmp = checkLocation;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedLocation(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedLocation[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                    }

                                    {
                                        selected == 3 &&
                                        <div class="flex flex-col mt-[45px]">
                                            <div class="flex flex-col gap-y-2">
                                                <div class="flex">
                                                    {
                                                        academic_list.map((data, index) => {
                                                            if (index < 4) {
                                                                return (
                                                                    <SelectAcademic
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedAcademic;
                                                                            tmp[index] = !selectedAcademic[index];
                                                                            if (index == 0) {
                                                                                tmp = checkAcademic;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedAcademic(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedAcademic[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>

                                                <div class="flex">
                                                    {
                                                        academic_list.map((data, index) => {
                                                            if (index >= 4 && index < 7) {
                                                                return (
                                                                    <SelectAcademic
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedAcademic;
                                                                            tmp[index] = !selectedAcademic[index];
                                                                            if (index == 0) {
                                                                                tmp = checkAcademic;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedAcademic(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedAcademic[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>

                                                <div class="flex">
                                                    {
                                                        academic_list.map((data, index) => {
                                                            if (index >= 7) {
                                                                return (
                                                                    <SelectAcademic
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedAcademic;
                                                                            tmp[index] = !selectedAcademic[index];
                                                                            if (index == 0) {
                                                                                tmp = checkAcademic;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedAcademic(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedAcademic[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                    }

                                    {
                                        selected == 4 &&
                                        <div class="flex flex-col mt-[45px]">
                                            <div class="flex flex-col gap-y-2">
                                                <div class="flex">
                                                    {
                                                        hired_list.map((data, index) => {
                                                            if (index < 4) {
                                                                return (
                                                                    <SelectAcademic
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedHired;
                                                                            tmp[index] = !selectedHired[index];
                                                                            if (index == 0) {
                                                                                tmp = checkHired;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedHired(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedHired[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>

                                                <div class="flex">
                                                    {
                                                        hired_list.map((data, index) => {
                                                            if (index >= 4 && index < 7) {
                                                                return (
                                                                    <SelectAcademic
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedHired;
                                                                            tmp[index] = !selectedHired[index];
                                                                            if (index == 0) {
                                                                                tmp = checkHired;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedHired(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedHired[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>

                                                <div class="flex">
                                                    {
                                                        hired_list.map((data, index) => {
                                                            if (index >= 7) {
                                                                return (
                                                                    <SelectAcademic
                                                                        key={index}
                                                                        text={data}
                                                                        onClick={() => {
                                                                            var tmp = selectedHired;
                                                                            tmp[index] = !selectedHired[index];
                                                                            if (index == 0) {
                                                                                tmp = checkHired;
                                                                            } else if (tmp[0] && index > 0) {
                                                                                tmp[0] = !tmp[0];
                                                                            }
                                                                            setSelectedHired(JSON.parse(JSON.stringify(tmp)));
                                                                        }}
                                                                        isSelected={selectedHired[index]} />
                                                                )
                                                            }

                                                        })
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                    }

                                    <div class="flex justify-center items-center mb-9 w-full h-[54px] bg-[#4E60FF] rounded-xl"
                                        onClick={() => {
                                            // setAge(selectedAge);
                                            setShowModal(false); 
                                        }}>
                                        <p class="text-lg text-[#FCFCFF] font-bold">선택완료</p>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div> : null}


        </div>
    );
}



const card_data = [
    {
        title: "청년도약계좌",
        desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
        desc2: "만 19~34세 청년",
        type: "pop", // pop, recommend, end,
        view: 245,
        bookmark: 120
    }, {
        title: "청년도약계좌",
        desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
        desc2: "만 19~34세 청년",
        type: "pop", // pop, recommend, end,
        view: 245,
        bookmark: 120
    }, {
        title: "청년도약계좌",
        desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
        desc2: "만 19~34세 청년",
        type: "pop", // pop, recommend, end,
        view: 245,
        bookmark: 120
    }, {
        title: "청년도약계좌",
        desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
        desc2: "만 19~34세 청년",
        type: "pop", // pop, recommend, end,
        view: 245,
        bookmark: 120
    }, {
        title: "청년도약계좌",
        desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
        desc2: "만 19~34세 청년",
        type: "pop", // pop, recommend, end,
        view: 245,
        bookmark: 120
    }, {
        title: "청년도약계좌",
        desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
        desc2: "만 19~34세 청년",
        type: "pop", // pop, recommend, end,
        view: 245,
        bookmark: 120
    }, {
        title: "청년도약계좌",
        desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
        desc2: "만 19~34세 청년",
        type: "pop", // pop, recommend, end,
        view: 245,
        bookmark: 120
    }, {
        title: "청년도약계좌",
        desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
        desc2: "만 19~34세 청년",
        type: "pop", // pop, recommend, end,
        view: 245,
        bookmark: 120
    },
];


const location_list = ["전체", "서울", "부산", "대구", "인천", "광주", "경기", "울산", "강원", "충북", "충남", "세종", "경북", "경남", "대전", "전북", "전남"];

const academic_list = ["전체", "고졸 미만", "고교 재학", "고졸 예정", "고교 졸업", "대학 재학", "대졸 예정", "대학 졸업", "석/박사", "제한없음"];

const hired_list = ["전체", "재직자", "미취업자", "(예비) 창업자", "자영업자", "단기근로자", "일용근로자", "프리랜서", "영농종사자", "제한없음"];