import React from "react";
import { Avatar } from '../components/Avatar';
import { Discount } from "../components/Discount";
import { Download } from "../components/Download";
import { ElementsHeroHome } from "../components/ElementsHeroHome";
import { ElementsService } from "../components/ElementsService";
import { Notification } from "../components/Notification";
import { Send } from "../components/Send";

const Home = () => {
    return (
        <div className="flex flex-col w-[428px] items-center gap-[24px] p-[24px] relative">
            <div className="h-[827px] items-start gap-[24px] self-stretch w-full flex flex-col relative">
                <div className="flex items-center gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
                    <Avatar className="bg-[url(image.png)] !relative" component="avatar" type="default" />
                    <div className="items-start gap-[6px] flex-1 grow flex flex-col relative">
                        <div className="relative self-stretch mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-greyscale-700 text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
                            Good Morning 👋
                        </div>
                        <div className="relative self-stretch font-h5-bold font-[number:var(--h5-bold-font-weight)] text-greyscale-900 text-[length:var(--h5-bold-font-size)] tracking-[var(--h5-bold-letter-spacing)] leading-[var(--h5-bold-line-height)] [font-style:var(--h5-bold-font-style)]">
                            Andrew Ainsley
                        </div>
                    </div>
                    <Discount className="!relative !w-[28px] !h-[28px]" />
                    <Notification className="!relative !w-[28px] !h-[28px]" />
                </div>
                <ElementsHeroHome
                    autoLayoutVerticalClassName="!h-[195px]"
                    autoLayoutVerticalClassNameOverride="!mb-[-26.00px]"
                    className="!h-[195px] !relative bg-[url(group-2.png)]"
                    frame="frame-2.svg"
                    hasAutoLayout={false}
                    theme="light"
                    union="union-2.svg"
                />
                <div className="flex w-[375px] h-[82px] items-center justify-center gap-[4px] px-[8px] py-[12px] relative bg-others-white rounded-[20px]">
                    <div className="items-center justify-center gap-[8px] flex-1 grow mt-[-11.00px] mb-[-11.00px] rounded-[24px] flex flex-col relative">
                        <div className="inline-flex items-center justify-center gap-[10px] p-[16px] relative flex-[0_0_auto] bg-primary-100 rounded-[100px]">
                            <Send className="!relative !w-[20px] !h-[20px]" />
                        </div>
                        <div className="relative self-stretch font-body-medium-semibold font-[number:var(--body-medium-semibold-font-weight)] text-primary-500 text-[length:var(--body-medium-semibold-font-size)] text-center tracking-[var(--body-medium-semibold-letter-spacing)] leading-[var(--body-medium-semibold-line-height)] [font-style:var(--body-medium-semibold-font-style)]">
                            Transfer
                        </div>
                    </div>
                    <div className="items-center justify-center gap-[8px] flex-1 grow mt-[-11.00px] mb-[-11.00px] rounded-[24px] flex flex-col relative">
                        <div className="inline-flex items-center justify-center gap-[10px] p-[16px] relative flex-[0_0_auto] bg-primary-100 rounded-[100px]">
                            <Download className="!relative !w-[20px] !h-[20px]" />
                        </div>
                        <div className="relative self-stretch font-body-medium-semibold font-[number:var(--body-medium-semibold-font-weight)] text-primary-500 text-[length:var(--body-medium-semibold-font-size)] text-center tracking-[var(--body-medium-semibold-letter-spacing)] leading-[var(--body-medium-semibold-line-height)] [font-style:var(--body-medium-semibold-font-style)]">
                            Request
                        </div>
                    </div>
                    <div className="items-center justify-center gap-[8px] flex-1 grow mt-[-11.00px] mb-[-11.00px] rounded-[24px] flex flex-col relative">
                        <div className="inline-flex items-center justify-center gap-[10px] p-[16px] relative flex-[0_0_auto] bg-primary-100 rounded-[100px]">
                            <img className="relative w-[20px] h-[20px]" alt="Iconly bold swap" src="swap.svg" />
                        </div>
                        <div className="relative self-stretch font-body-medium-semibold font-[number:var(--body-medium-semibold-font-weight)] text-primary-500 text-[length:var(--body-medium-semibold-font-size)] text-center tracking-[var(--body-medium-semibold-letter-spacing)] leading-[var(--body-medium-semibold-line-height)] [font-style:var(--body-medium-semibold-font-style)]">
                            In &amp; Out
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-[12px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative flex-1 mt-[-1.00px] font-h5-bold font-[number:var(--h5-bold-font-weight)] text-greyscale-900 text-[length:var(--h5-bold-font-size)] tracking-[var(--h5-bold-letter-spacing)] leading-[var(--h5-bold-line-height)] [font-style:var(--h5-bold-font-style)]">
                        Services
                    </div>
                    <div className="relative flex-1 mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-500 text-[length:var(--body-large-bold-font-size)] text-right tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] [font-style:var(--body-large-bold-font-style)]">
                        See All
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
                    <ElementsService
                        autoLayout="auto-layout-horizontal-6.svg"
                        category="electricity"
                        className="!flex-1 !flex !grow"
                        theme="light"
                    />
                    <ElementsService
                        category="internet"
                        className="!flex-1 !flex !grow"
                        img="auto-layout-horizontal-7.svg"
                        theme="light"
                    />
                    <ElementsService
                        autoLayout1="auto-layout-horizontal-8.svg"
                        category="water"
                        className="!flex-1 !flex !grow"
                        theme="light"
                    />
                    <ElementsService
                        category="bill"
                        className="!flex-1 !flex !grow"
                        iconlyBoldWallet="wallet-2.svg"
                        theme="light"
                    />
                </div>
                <div className="flex items-center justify-center gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
                    <ElementsService
                        autoLayout2="auto-layout-horizontal-9.svg"
                        category="assurance"
                        className="!flex-1 !flex !grow"
                        theme="light"
                    />
                    <ElementsService
                        category="shopping"
                        className="!flex-1 !flex !grow"
                        iconlyBoldBag="bag-2-2.svg"
                        theme="light"
                    />
                    <ElementsService
                        category="deals"
                        className="!flex-1 !flex !grow"
                        iconlyBoldDiscount="discount-2.svg"
                        theme="light"
                    />
                    <ElementsService
                        autoLayout3="auto-layout-horizontal-10.svg"
                        category="health"
                        className="!flex-1 !flex !grow"
                        theme="light"
                    />
                </div>
                <div className="flex items-center justify-center gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
                    <ElementsService
                        category="invest"
                        className="!flex-1 !flex !grow"
                        iconlyBoldActivity="activity-2.svg"
                        theme="light"
                    />
                    <ElementsService
                        category="merchant"
                        className="!flex-1 !flex !grow"
                        iconlyBoldBuy="buy-2.svg"
                        theme="light"
                    />
                    <ElementsService
                        autoLayout4="auto-layout-horizontal-11.svg"
                        category="mobile"
                        className="!flex-1 !flex !grow"
                        theme="light"
                    />
                    <ElementsService category="games" className="!flex-1 !flex !grow" iconlyBoldGame="game-2.svg" theme="light" />
                </div>
            </div>
        </div>
    );
};
export default Home;