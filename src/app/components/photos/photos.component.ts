import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-photos',
	templateUrl: './photos.component.html',
	styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

	photos = [
		'https://lh3.googleusercontent.com/Txps02mLukVg-7tVa30zDYsh2RqOglviiODqv00bbxcDKLmjsCIDHGIlA-VO3-3SYwrDyKniCdeWb8hGpsMUanSmMFb_S4ofIoqqOuDbGHFQkAJwX3fmHWjYCDoxDRu3krmgU8_B-g=w1920-h1080',
		'https://lh3.googleusercontent.com/JH4rpgsgx3k-TiBysJEyXPe33AfJNrJefn_zo14nEzNMYH_4YYfKcjVQ0w7jbkLIqM8_se-qjXN8TUFMFZfe-BPohfVdPprNoS9-Izd3y0lgMqtiVf8NGeIpFpeigLJrvF7Av0kg-w=w1920-h1080',
		'https://lh3.googleusercontent.com/7MbVCE6UwQ8BNgvGoUZr_qIN8ApcGzhTFZ9xLifkL0_V0n23CNQEf-VkobojrPgnOFJg0bwM3ej73fDHHp_gFVSC8IE4umhWrkGX19Wav-sjYyTIr40swcYRsEjaTPozbz7f4ufULg=w1920-h1080',
		'https://lh3.googleusercontent.com/uowMAmtkTx-Xlh5LnFt9Ctn9wujf7X9Ar1nHTug9DxtCMK_Hyju-tQretJInOYnhaff8LPZTZC3N-7JHP5Mtpvkurdt7yCk_1fJg2JbZ3YYSwwVpw56VSVCuyvx3IfoTuFjlVctZFA=w1920-h1080',
		'https://lh3.googleusercontent.com/NdePA-ydJC28onJFQ_0u1Ak_O2dtMGOKh_2abExUsIYVP07itgREva10s15qzpesYFoPk-0zmfsSGrBytJXpO9OsQIn2nGElohyHHYuObUAOmTdP6DjR3NLaodTq1EA4jc7h3dv6Ng=w1920-h1080',
		'https://lh3.googleusercontent.com/GZTBz1f7VOVtJPQNLUG0srmIYbqVQTPZT5PtDSbH4V4xSJcYgK-dqSYfnCrsOg9F3HSu7m672O6ZcLr0sZPoZhZbEjsil5fQ0CyuQ9L5isybYQQsSL_NcS1500UdkgVSU2bGHJRv-w=w1920-h1080',
		'https://lh3.googleusercontent.com/Nhoh1YOg_YSadA7jgsmGwO6umnvE-5fIgOX6ZiBrUf4Dk58lJub-l_kO7iAUDPBhdM8pcWUKkhJSd7RxU1P2MKTXqFXa6UbtC6o_1o56oUJMc1kCMnKiS8t57rkgyn--PKPvLX3sng=w1920-h1080',
		'https://lh3.googleusercontent.com/H4-smLyK2iueZUwXcxUF8K93N017866fU4yFcR6t4EziyLDwyzTv9U3Nk1fG7YamOE0TvIRngwCSWP_iW89duNZONQfjY_XAB_sVM3_qNxTUinNE9q6d81WA0sBx-6fuKO3erh8M9A=w1920-h1080',
		'https://lh3.googleusercontent.com/icSBQMO8pIn-lIRn_6EW1DchXGnilRTk9WtyrtL4UBpE1FOJHLi9R1xuJ647Wl7OTkS4dJ70LfDfjNdJwgjCZ0kdKkkl0zHzqzEwkpCKJdHGLI9MteMv4aKBgzc18DvkLnQRS2gzBQ=w1920-h1080',
		'https://lh3.googleusercontent.com/s5rvC8Fexswe2cEvVeE1t6M-yIp5nDs3mq9fCksVqtPNPm5H25pvKHc5PQpRN0_qj-q-X2ww7-ApnzogfAEeJmqRwJnKaPSmlqRhjUX1-3qf_5jLok50qxHXEBBYB8RBxGe3aUaAtQ=w1920-h1080',
		'https://lh3.googleusercontent.com/AbmFKq9KzUdkl5-zLSNt3ItVsRwWnq3LymigLlqXsC5Iv5evfpAnzzgYAaiUDxvCXs6Is8mhvdjFaulaDtUP7hJa5EG-KeTxZakPtLnc_B_FTGzhUrKlUMAlFGJmdUZCfYxQ5Y7QqQ=w1920-h1080',
		'https://lh3.googleusercontent.com/3a_QMpKZCk4MwptC0-kuUV-1EzPY4-6hUgkfIP6QBTfCopp6-Q1RkEzEyMRgvqhdTDyzUN-h2XlDOdUsaXG7_V2ztO8ajK6LRazav5TKHGO5KANR7MwJ6fLMCnxwIQ4TTv066jTTAw=w1920-h1080',
		'https://lh3.googleusercontent.com/63vyz1uKA-szj-YJ1XVbzB_oUU7mPpob6xtHjVyE-rVFJL8cF04_mUoRmZpV9TO4nJYQComUmmYhQ8NZO2HzaUlyCrK_Zt_zRcUVZnr1ILwvsFrVRmL93r3VyCcC3uHiepnX9Ryz8g=w1920-h1080',
		'https://lh3.googleusercontent.com/vJYBlDroRhF-KyIosDBnRI6y8iOgk-ogWQ8RD1wJc1foSD_zvC5TSXqFjHV1Pa7TdmXlXN1uMB8B-ZeY6Wmmel7rL6dbvf6hUwJHTEV-ikIPFiWiQwdfheW8BJtcofo3zkRQ14shYg=w1920-h1080',
		'https://lh3.googleusercontent.com/hSF-TvqTjChu7AMJjzHHWYlryXVsCZ_RvwQV98d-gDe-o39oMTJ7h4Vj1IxExXo1IdR6fYkIjVUvUeCE1rEWAUyR1ExoVJEosQRku7U0ufh2NHKftF44JcLjZBs6iE1WAthS2gsrjQ=w1920-h1080'
	];

	constructor() {
	}

	ngOnInit(): void {
	}

}
