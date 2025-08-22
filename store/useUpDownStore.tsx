import { create } from "zustand";

export interface Item {
  title: string;
  content: string;
  isSelected: boolean;
}
export interface State {
  dataList: Item[];
}
export interface Action {
  changeItem: (idx: number) => void;
}

const useUpDownStore = create<State & Action>((set) => ({
  dataList: [
    {
      title: "1111",
      content: "111112233445551111",
      isSelected: false,
    },
    {
      title: "2222",
      content:
        "11111223344的啊哈哈军事基地的看看的啊就手机卡快上课了的啊哈哈军事基地的看看的啊就手机卡快上课了的啊哈哈军事基地的看看的啊就手机卡快上课了的啊哈哈军事基地的看看的啊就手机卡快上课了的啊哈哈军事基地的看看的啊就手机卡快上课了",
      isSelected: false,
    },
    {
      title: "3333",
      content: "1111122334455",
      isSelected: false,
    },
    {
      title: "4444",
      content:
        "111112233哈就是看看的啊哈哈军事基地的看看的啊就手机卡快上课了的啊哈哈军事基地的看看的啊就手机卡快上课了的啊哈哈军事基地的看看的啊就手机卡快上课了",
      isSelected: false,
    },
    {
      title: "5555",
      content:
        "11111223344就手机卡大家看看的地方发个月就手机卡快上课了的啊哈哈军事基地的看看的啊就手机卡快上课了的啊哈哈军事基地的看看的啊就手机卡快上课了的啊哈哈军事基地的看看的啊就手机卡快上课了的啊哈哈军事基地的看看的啊就手机卡快上课了",
      isSelected: false,
    },
  ],
  changeItem: (idx: number) => {
    set((state) => {
      state.dataList.forEach((item, index) => {
        if (idx === index) {
          item.isSelected = true;
        } else {
          item.isSelected = false;
        }
      });
      return { dataList: state.dataList };
    });
  },
}));

export default useUpDownStore;
