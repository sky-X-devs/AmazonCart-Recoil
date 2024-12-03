import React from "react";
import { useRecoilState ,atom ,useRecoilValue,useSetRecoilState } from "recoil";
import { wishItemsState } from "./wishItemsState";
export const cartItemsState = atom({
    key:"cartItemsState",
    default:[]
});

