import React from "react";
import { atom } from "recoil";
export const wishItemsState = atom({
    key:"wishItemsState",
    default:[{
        picture: 'https://imgs.search.brave.com/_pgd4TjjdISrm_8LPx_grkGeM0Lr4KGUJ-5dTYzgEBI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZWRy/YWdvbnNob3AuY29t/L2Nkbi9zaG9wL3By/b2R1Y3RzL21pbmlr/ZXlib2FyZC5wbmc_/dj0xNjI5NDUyOTU0/JndpZHRoPTUwMA',
        title: 'AULA F3287 Rainbow Backlight TKL Tenkeyless Mechanical Wired USB Gaming Keyboard',
        price:4999
    },
    {
        picture:'https://imgs.search.brave.com/nmXQO8kv-ciI_9K8ceBj_g58lrPpw3Bw_AtJRhbCVzU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90YXJn/ZXQuc2NlbmU3LmNv/bS9pcy9pbWFnZS9U/YXJnZXQvR1VFU1Rf/MmZjODQ3ODItYjU4/Ni00MzFiLTkxOWYt/NjM5MzNiYTg3M2Jh/P3dpZD04MDAmaGVp/PTgwMCZxbHQ9ODAm/Zm10PXBqcGVn.jpeg',
        title:'Samsung Galaxy Tab A9+ Tablet 11” 64GB Android Tablet,Big Screen, Quad Speakers,Upgraded Chipset,Multi Window Display, Slim, Light',
        price:12999
    },
    {
        title:'Divoom Ditoo Retro Pixel Art Game Bluetooth Speaker with 16X16 LED App Controlled Front Screen (Pink)',
        picture:'https://imgs.search.brave.com/YY8SIsdSv_YHksw8HYdEAyGn6bXtDm89YXmfY4eiDcU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kaXZv/b20uY29tL2Nkbi9z/aG9wL2ZpbGVzL2Vh/MTgwOWNiZDc4OGE0/OTQ2MzlmYWZhNzI5/Mzg0YTU2XzA5ZjRl/NWUzLTIzOTEtNDQ3/OC1hNjk2LWVjMjBm/MTA1NGJjMi5qcGc_/dj0xNzMxNzQxNTIw/JndpZHRoPTIwMDA',
        price:6999
    },
    {
        title:'Sony WH-1000XM5 The Best Wireless Noise Canceling Headphones, Made Of Soft Fit Synthetic Leather, Integrated Processor V1, With 4 Beamforming Microphones, ',
        picture:'https://imgs.search.brave.com/ifU-7-TJgnn_S6UgSNqJRBtcAGSV8ysDHdk_yv9xXsA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzE1blcxVTJvZEwu/anBn',
        price:25889
    }]
})