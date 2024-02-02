import { useEffect, useState } from "react";
import styles from "../styles/layout.module.sass";

function OptionsSection({
  title,
  label,
  setSelectedConfigurator,
  selectedConfigurator,
}) {
  const configuratorList = [
    {
      id: 421,
      name: "Full Bedset",
      thumb:
        "https://media.imagine.io/media/public/cfg/4327/5479/359/scene/421/thumbnail/2c10eb1d_Full.jpeg?Expires=1707052148&Signature=H0B5jtUnn4oDleHbnYIv2AtPQYOjZJA5LAQxubhaLsUfuDiA0YnrdRONEsQUSf04kCL8bzP23v2PoWUz35HP7UJFNPcHHLA4dU85q4NkjSAFT6fOMKUOfBohPCJ3GALCbGgRs678Jt6J3Kfch5sQs5ku8LML6c2tRFE1TAmNooCl9bNI4Ec5cI09N1PSnxZITTvjIbva04G-Lp~uDzNGR7tgYB2EU33WJERMPIy2Kz4E444U7u6BGx11MjqZFlXZuesTwIut0As3EgXuHTRn6~zyCYNjllKAuB7hRDvKHp~WVZ~5fGo~X-D7sdAOBGcwCKSpm4QmYTzp1MrdG8Klbg__&Key-Pair-Id=K3MIEF79PIHRTH",
      config_type: "1",
    },
    {
      id: 423,
      name: "Without Throw",
      thumb:
        "https://media.imagine.io/media/public/cfg/4327/5479/359/scene/423/thumbnail/b1b947bb_duvet.jpeg?Expires=1707052148&Signature=aWdIq2cfRlB6Y5Gzc8BktX0iUolJbxIEzj9Zd9Id8h1AIoI7NF5fCHHEyxRShYazS10bjQBjI3N54dN1BTZ-iVcB76cHcSskJYRfPC5iOHqKIschDtZcj313Emkm0eUb4~sEJ8WIkxQ1kpF410Qp6moHQnWOXHNDcBagw5l-AjjR9dCKBc8Z8oL4MXQs4SFISIbBAcfb6yNV240tTg5CPAwtf7ytmN494oG5KMwrPH736DNucxYDhjo6EKoDDAooxI0bQ~C8CiRh9F3RbFlcuT-gcE2E0-8m6kWPVScpNIdSZogZF7vKq7LQ9VkuCGKB15M3EIFoj-XqMgJh7XaxGw__&Key-Pair-Id=K3MIEF79PIHRTH",
      config_type: "1",
    },
    {
      id: 424,
      name: "4 pillow set",
      thumb:
        "https://media.imagine.io/media/public/cfg/4327/5479/359/scene/424/thumbnail/129b2c80_4_pillow.jpeg?Expires=1707052148&Signature=aamgVrIHHTDiXotrSxIapSGcV1~69klbriBQ0xRiHLUTTSD3YfW74mavASatmV4Z5f-arDuNbTOiykobZslNY-JWcj3ZAzoffO9SsZJQR5lhydgwMWciJurDwKPmh5DbEnkw4XT67cG846PeP~gUQhtKLX8u6uFxO8tNlKL~6BUiQKAaJqPCHTBn7r0dwfIx3pIg8zvnSbFpS7YqrPr6lxJ72Mqp7SKfvMoZRnUo1qcl~ooNCy67UcEj~~rfSDsCWwXFCvQ-QVLoDQGOVVZo5yL7-dZCNOVEpQdJjTzR5bgH7U2ZGdXW-Ho8usdn8kxWjLfG5Y0zIwGXCIFtaMqW9A__&Key-Pair-Id=K3MIEF79PIHRTH",
      config_type: "1",
    },
    {
      id: 425,
      name: "Bedsheet set",
      thumb:
        "https://media.imagine.io/media/public/cfg/4327/prabhu%40imagine.io/323/scene/365/thumbnail/5f3761da_product/thumbnail/None/1/thumbnail_ed_set_6_option_2.jpg?Expires=1707052148&Signature=QUVtofWzH9CDvxF7Rz8uYDgQ0eCviX-TLW5vaYmg4NoVg0-Z1-4rYcCRNudULGigs6KTxNxFAgOybWhR1~sBUJIjDf-F18lbIOU4rOH6ViIWyTh3pTNrjGq4cB3cjPO5o7t9Y9L25GLC11PukECJ4aMkSloYMpYViB2dPCeJwKyz6SpS1B1gsQPiGEZPLIj96~xPGfWZfYAlygyjwadDknaCO1W7mYMWa82UL8VCo9H81IsSoJicv1dSaYTdfxYtDciD0wrg21jLdXX13GeIau5nSo0lM4J3SKhyi4N1wo4ukB8X5AcpwQz6pNH9wXsYZsnvL8LIXcEHh1JPMx4Atg__&Key-Pair-Id=K3MIEF79PIHRTH",
      config_type: "1",
    },
  ];

  // full Bedset
  const FullBedsetThrowAndDecorativePillowOptions = [
    {
      id: 3158,
      display_name: "Hay Stripes",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/778/2518/1_blanket_2_1%4019058.jpeg?Expires=1707039461&Signature=SzO9sWCLxJD0xZaXPiUWHeUvVbiOa0yTks8lNXuhK0QOvKNTbP1RSkfSbDEbaFd33pnbITBo3v0vagL187UXIeRWcNhD86ptAr7Nn9XTLBo2TRPJh9Mejn73B95lbIevLcKt49cHWgB8UaO0ZTR-5FvHjhM-cy0AtN0BFVW4Z4H9QbtF6MFi6BWhGIkoActsvI-lzJNSTAejRjwJdhrAvsIouuTcStgTJv0SniIChekxlzV~~ds10oRjwZIuFNHbIr3kbvP6ObiicCCOLSuWyPZtSYgloQ7Z8uQc0C7dhbmbGeXclNIDkWlOyQLJXe2FDpU5hM-hcWtJB71VAYNwbw__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3159,
      display_name: "Melange Stack",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/778/2523/thumbnail_texture_Melange%20Stack.jpg?Expires=1707039461&Signature=3u9xAmB0n4Cx1naxOjTE1Dl1W4MXfOoKEO6KBXiU0-~y4R4VhfrSXJWTbbxNlkTPWVgPBRfXBYkXv1z4C3YxOTv70T6juelDWu817UmlCfIdbSwopqOTEzPp9OzY~31FA~un4rkooDS1MCn5L4IqGGLYtofVTEfAYexqnjEsFQ855ywIp-Yl2A~w2-XgdMHCdMzQ6RVIt9L2RKj4SbWtgFx9W31oNfoW0NvAH32cfyjkWkpDPJke6g6k41bCwYxF9nzXBnG~M8VCpTUBJUDDHiVSJ8FNJ2IkWQwBjiNoe4ydxr5~lP4yrogQB6d-AfpfCuSjaaPn1TMgCLJvBwN~qA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3160,
      display_name: "Pistacchio Pinstripe",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/778/2524/thumbnail_texture_Pistacchio%20Pinstripe.jpg?Expires=1707039461&Signature=i5Tqi1nQA33lmMxQuI76l4sjL5xxoBnMeTu77gpObkmnMJqA8xpyY4vVULM3e3XBQwzyuHQFv-agEzF663rHJjEEbAXjuqRxX6THxcWeHF5wP6ymh8Qay5rkD~zryoFIUEWiQF29IUkseN2P9MQ8AqhRzWqdXLI6~s4M7u4j1cbLTSvH5kU2RueG3S7CigQ0~a1ciZsBoNNk49ZjNnHyJiJOavyZ0O9LTdP-nrTxmADKWiTaXw4YXUe2tga3akEonSKGx80eoPDAzCIPVFEt6giA-aZF2cpBo9COZBknb7kWMLx1D3CJ~MPhCkot8aiF~IYWU7qyVVw93qEBVbh4gw__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3161,
      display_name: "Blush Blend",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/778/2525/thumbnail_texture_Blush%20Blend.jpg?Expires=1707039461&Signature=eWpi668ytQAWKoxTxqQZZ2bhw03r2PtHT5jCAEdx9md15wTMyXXXnXpIBbO~BoEz~AlmsjUutWh5utWN8HnK3i5Rutd3hrZANwbhAQDVL2hlR7KeEIp5FoTjaKS5PgmoxJ6qCey0AAzOJyYNO1DjY7KNZOz1jQVPmZgz9T68X6bJZhPxp7~UGSXIQqdS~XigFCUr0M4UGr66WZC5FVLky0hjhJ8PJKgcQiqTRJEc-SvidmxeCIRVPUs7BNnOtsH9fowlsNTxaGZ9oYupS-cVH08ona3~Mdf1MCYzXSgV9ClwmNEC5nrQ5pJMPddaBVkh80QEDlAQeNMOBBSSEFt47w__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3162,
      display_name: "Neural Rope",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/778/2526/thumbnail_texture_Neural%20Rope.jpeg?Expires=1707039461&Signature=ghl1espS7gkNea8HSO0p0l9LEsaMg5PqLKkjtJztex3gMI9TxtRTtquPJebsMEnHkCMNQ4p6tlWFHhttRlrH-apzyFdODIF60AqZb1scjnhpay12kUjssUyqBw8rjRK2tQYvI3LFDMp4I~74wE0haVfXo60WJBT3EQdBBJD0ztGSQKr4yY2Vu-oJ3F4jVEk9q0-7CLfSV3EjZhI2Y328khE5Bgv9jyxyFfmnyfvAh3d~xmLzjkRKdOLZGU4cGOBUzMy6~PP9HvyNw-0PgMTDQD0~RsQ-ce~5p5sOmMnQhpphbw-yM54D7zMSftaQkFlNwV4QkfXArcWZuqmfkyhnnA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3163,
      display_name: "Pure Gold",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/778/2527/thumbnail_texture_Pure%20Gold.jpg?Expires=1707039461&Signature=BwbpcHtzsd9gIxUnEMJgHOpjQt~7H7G7~iUFEbQk-AIsH66DGl8WbjbNLXG3lzG1FPF527nHNU1X-f9z3fUxD-GTbveoUf0xWRr6gkABExUOZ08HXHmxnDqFgBBX6xvRP~4D~QRdDONM2aOsKCgM-~s9u9yyF9tjKkaDMMcoGjO57mPyl4QQbEOTWu8F31iDz6k8GZyUbD68Fwyuxv2~-VKp47K-IuOVwQhf9vLIJ32AKzgZKz-ciHtBYACu6wng9gCFsUl6IDwkI8wY~zRxub~J--uSXWGDwKy8xWd7fTKUM~4~Sq4K4fhaABGO9z7q-tuGrKtI3DXN-J0rJat2dw__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3164,
      display_name: "Aqua",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/778/2528/thumbnail_texture_Aqua.jpeg?Expires=1707039461&Signature=f1npbzUZQqw8H~HDDrOsshpX0fE32CPSP0t8K4RV0qJ2ZYQEhfXq6BrHOF4SmM6kZ7Vn~S5iqPNiU35C9bzqY7WiiT6ORI-dbQY0g695Xj6DA7pOftpAy5yHIKuZWh2xkEmTLDhvPW1Rq1a9bwf0QoY-DJUZOMV0NyS1o7W~KJQUTgNnbZTNQ3VbYPGKZdnHErbMH9TOEEAZhMgljBf3CB8tUR8Zl~hQcBVCxJuVmLsQ5sRaA7XBHrQXluByYn6MLNh9ZyCC8GsdoJvUrMK4RWFyPtO246z14oTk~FAT0L9ou2ittyFKd4JfS7hgenw1WZ~OsNk6OJhDRT1bq9IjFw__&Key-Pair-Id=K3MIEF79PIHRTH",
      is_enable: true,
      is_base: false,
      texture_type: "1",
      color_code: null,
      seq_no: 7,
      render_id: 489073,
      scenetexturerender_id: 2423,
    },
    {
      id: 3165,
      display_name: "Indigo Grecko",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/778/2529/thumbnail_texture_Indigo%20Grecko.jpg?Expires=1707039461&Signature=nnPg6kZhVU7buLtFrrLLqyDpCvi7sl~NH7gHwXwFoN5nLdm0680RXiyvawlwzGQk3xQSbTQlAHqUq8VR1HttCc8AQ8RApZEQDnbDfptxJr0wIakX4m~CzjfW3ubycl4JJwjkOAiPAD09MwFAy4EEGi4Qi27G-maFJk0hFCT006fgF2mCPacra-qOZBAnBK1BRBs6zi9-FbIOJayHYJVPQEe1EoGruyldnay-WQGRPdj8GfYOK5gGyXt2hpXRtZOWigxpaJSk~rY4Puo1RU7GcMDxrWSFn28Ds4so1ORHdwm39TnaObqMCQF-LYdx2aaZGdHH3l-~shVdcOlwY50rpw__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3166,
      display_name: "Tartan Mix",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/778/2530/thumbnail_texture_Tartan%20Mix.jpeg?Expires=1707039461&Signature=CWvv21mmDuiVpG7I7g7E--9wRMDB9ds8Y5MYvJqaXUNkPeW5Tr9egtjBLpNUlWd0i0YmfTbo-cbI1etfFH6a5iFBOly-OFRNM7boZX~O212Dj4su2V97PONZ1ihcbJlEfeQjxmgFDGw3FJhM7k~llxZbHoe7fdOqAgatO7z~JUsmLY1~62DdKobA9vL5UdK6bkYsnJWrAEpAumwWcD9UFsaxAVjKhZ-thFFqPOI~xVtxsP9vkM56eFSHhU83~29L~B5FWDTvtCRMKCKADhj7xYMTMYnOzt098ONf6aHGTpY74a~F8JnWgz9S05VLUzVgto8vLBGJGrOPNpwZLGyjwA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
  ];
  const FullBedsetDuvetFrontPillowOptions = [
    {
      id: 3167,
      display_name: "Blended Canvas",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/779/2519/1_pillow_4_back_1%4019058.jpeg?Expires=1707039462&Signature=knuewnmjaRgo5olxBAIyn-6mHhPKplLC-TDvlUG0Shkkw9NqBEJQ816mgiEseYvxpVsoK~Ia00FRZO5flu249CGwUqGXlZEmyuDqUvKy1lmyLkmAvsp6K8CS-m-3vSykwesc3~i31oAPM7l7PrdkWqrQa8mt-KXNP~bdO9ymzZ03W4InTnUSObKEUCTFabnv~oJ9zKO4ESBdDiS~8aYOdhrBEM2-IJn2J8maOA4ZjN0zyQyA9lERndAxSPAsd8nCLDHRVhOeO91BHdNiRzmzv0euSZeN0nesanhwu3GiycElm8vo5YUPl9BjqlOiN10oJMKmGT0-4TWOvrU4zQzs-g__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3168,
      display_name: "Denim Stripe",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/779/2531/thumbnail_texture_Denim%20Stripe.jpg?Expires=1707039462&Signature=Ra9NObXv08jx2HwGGpGeQ3F3g24g1vK3~N3bboFScRfiCuGDzzUWjqCYO~Ut2piqj0bUCVslmhbSWR8kAU7kKEyC9Gz0ARDnc1peCQZmdm39~Mo0KryHXTj~7kd7GQ7JUQW1o0rQiPXG1RHUobRmKcqaINQeBmTqPWbs3w8IOmaNjZjR7lr-BdOLv8p7iPzQuu1lXQ-3tVHDyLigHHrJwUBqB-mra7LKjadkP9y9FvTwIqCAGuxC-q9~ctkf1l9jVLgWJS6cesihKo4EHzVZTmRTGeGIxgTN3F3QRVUlWFUDU4CD~uJbM2~9vNi-ZNcAB129iupnVd-QF1HgQuvyig__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3169,
      display_name: "Pistacchio Stripes ",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/779/2532/thumbnail_texture_Pistacchio%20Stripes%20.jpeg?Expires=1707039462&Signature=bmQHeeRYKr1WYB5-AY093HXRSeHntitI9bklXFeJdeNRkcyPAcm~VYZryndMN0299cxy7P1xFDXM2ccwNoS2ooprBEbJGBnW5ZqI5X-MgIdlHjZjrjjmrGujoWqPDAJ8Mt1-VF2GAwHtVxBSNwAnl8G27-qds00UQbGcZhZwPudW0VWMT-l7dEKTuXEm6Sz9TXVL0Y7zitrI2P8a7Mq4JC9tzJBai0bwPs5xCihBBpB2SEsJT7JWuNvOEhsEQHBv9iyEGQDdidPJ4LJh0C03IMyDfVaJif~FRziCiL6PZTMD8a4K-70RdwWzNwfWwTQo61wZIEw6eR--6oUSzniVEQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3170,
      display_name: "Natural Weave",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/779/2533/thumbnail_texture_Natural%20Weave.jpeg?Expires=1707039462&Signature=e0c48bAsOMi1HqYiqG-KVs-38AfbKrr3McquWeXqaFZEyUwcyBLAGkJp7euxStJ7ze-oK0xDr33TE~fN4xL4ruEX5WikArN6SS2V-JUmBSqQtGMpxlqtm6y7dubsNOJZ7SleXkEe8LJazzMg039lqskS4AWOnF1m29TqzveEqc-PIEJ29XrsMlRSpJ8t1AbWjjhz3ZFhukHG8wOyMaRx1TtChQfsHUzu9Of909aYjwaj7VgqYkkbY43m4sS8nA0-0wrNPdoYf8GrSJ9z-0SRbEX0Fe1~~91hciX1U1lHBEM1AWw6i8BMp86tv3GNXWCZt583~eaYrHAAqzibHRG7QQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3171,
      display_name: "Blush Flora",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/779/2534/thumbnail_texture_Blush%20Flora.jpeg?Expires=1707039462&Signature=MwA2X0-QHYRtVnAj32-SkJ5l54DCP4pm2TCDd7BdMSO-ItbGIVAZvotGzHMAiw7XGaHdqMVncYgPwmAz3mKA45FTu2c6WXwlnQEBhUQysHu6zJjsblU~Q04C4dnsr3pkodNplkTOCYUtNBrEFhFd2WvY4QDaqyVBghpq5D-2siBlZJ7RmJdIqEmmT2I8iJ2pwfNy6LJA~qKvx1bTm1Pu1bn5y6kzPn-b-q6FD1b96zGDavctR1yZrr7tV~EIFwSkOpBdRsNVAAc~FjxbN~fWpoRdD0s8iTO5HZ00zoyfrC-ZIZLj8FQEqPMRdQ0xNKVx9z0QUuXq4YmJuCL3Ulz3AA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3172,
      display_name: "Indigo Embroidery",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/779/2535/thumbnail_texture_Indigo%20Embroidery.jpg?Expires=1707039462&Signature=2eA8d~96GobTD1GIDnToMenrdEJqRJKcbZUoCkPwtmODbqLXSrFRhbtbFk6iAqL-QpRZrTTKmcnhOYpOmG9WrxEtLpN~UuIwp6ceFjJZmXQCDCTsSkZP2xDE0t8o5esYE0Oy9bKzwT60M5v~twT2qMOdwsfLyqZJ9N4a792f-ofJr1fPLsQ0hvXmRSE-uO4RUnaKqwJ~eLflX4adDTp43oL-IAwZsg584bEU9GnfwQHFNrz9nb79yqL-eFwTtlkZxL5ljjk~KlCCHTn2WqqLwYIRE0XPVPLnS6FsYZ~88RNZVEWpRjq3W81hk0uxFL7XiD7~B71B3DxSD5pdRj8NEA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3173,
      display_name: "Geo Nautical",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/779/2537/thumbnail_fabric103_1.jpg?Expires=1707039462&Signature=f~YkZQ2mBew8ys9t09EnHYO55Ww8FsGCcPz2dE9nB5JZSNzTAHirmHupFB-xnUv5iMylOEWEZEL0m1CpjrsKgpRo~cXWN8OiI3eKBElllF45kg1wHVf2Hwsh72eyakwJ2QTKwh6395j95EZCxED4SRQwZVEj7jc1wDBSj3Ra6flHSMRDR7026uFTrQjWGfs-HAW8mLDZc0hQ-UKPT-THxK2wbDARvo0m7FoqAqKnbozW9bK~1ThLqwt5cEqiLrCR9D-8F4B35fxmxaXxmeY-v6e0j4Zk952aWg2RMCPprpkVNEeovF2N5s~cUPTGcVuAu~HTc2u~rQPsUhjfHXzNlg__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3174,
      display_name: "1_pillow33_138_onboard",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/779/2538/thumbnail_1_pillow33_138_onboard_1.jpg?Expires=1707039462&Signature=wyZ2iu1hWDbQFlCA4RCp7B8QdvtKM0U2sfkDxM6yaD8k7H1KLilRHe~W9gge~DCgRC72ycqXXbYrSx3tjw3jgY0wz9Do9QBY9FURtWNupSclif-bK3n13HiKEBzvIzXnZTe1y2J9YK8KXA7thVf~Yih4Cm5vnTFtilGQzYbmt1gJCmQAUg1AmXAcwBSFJSnkRn~a2EpLlG8iadAE3HQ82CWJYUdD-yu4qAlYOXH6SIgpmmIKJC~V95p1SRuj-n7GWAlTQlcqQiuHolWuGDFV9qqWwxJo4C8dVZBVIjC-A~TxiEflqEuU~zdA5AUyQVh8GMGXpcUCkgGSGejgclyEXA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
  ];
  const FullBedsetDuvetBackEuroShamOptions = [
    {
      id: 3175,
      display_name: "Blended Canvas",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/781/2520/1_duvet_back_1%4019058.jpeg?Expires=1707039463&Signature=xr62YqYLdyHkDE2vt2wqi0eQRIS~0rqnW8l0osbcVvMNS~ODMIFEYLkTQVFa6zA6pkKeOeWqyXQ8o9lRs~FeYJ9yJypIYsPHOz2PKU3rvcVX8VAY0iggfq8OZ4~PRy055nss6wnY7stMd0QtXr69CdJut78lZa9R0JuyPHRvI3ZNwAzc~SsZWQhkZ12SXeJ2R9KGySFPhU5pTj3ybygjwEBuyRa-YV82jdEFPTRjWLcb3~HmjnvTo1wJo3SyY-5z12E-4vIiiv8RINUF1mzluojiaaXChfPWU-OPATxLRc2cYHw~rHGZd~Lvt8PCWOLA4j6ept5EZs9-6hku6-6CYw__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3176,
      display_name: "Pistacchio Blend",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/781/2558/thumbnail_texture_Pistacchio%20Blend.jpeg?Expires=1707039463&Signature=lXVvtQt~TKNyUhAMcE4i407TmD713EGwa5k11iwmFWWZBUPTRi-zN7h3hYZaSRwzshN4X~-j86Upg849V3XsTOnKhcbn4zSPmWJ~bEgTsb6ymt1cwL-U~Whmhx2IMsYsSklz38SauAFDUk7qbNLe1UmqD70sgX4pRlzYspT-XIg1CWWHDCs1ILuLW0TInva0ufB2YGL9y8oY0sFut7wycnmKfihP5a8HN5Vo-TrZhingcpkaFicPMcO6pM1ScSFtkHa5XVQqkAHffiOqlXbKjBzPv~Ri0jlTMKVWNrWyrTHMZTCm5XnMrStFOsMDH0TeIGikO01TP9ejslNdImxaKQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3177,
      display_name: "Natural Chevron",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/781/2559/thumbnail_texture_Natural%20Chevron.jpg?Expires=1707039463&Signature=UysyW6D75KPjiSfIA8BQzR7~T5XJ5uZpeFHK67XunVycTAO2ETRXqdzwLaB1A2CFcBZ-j7WI2iPIQ0STkUSKJey3HqRxqtXs7qeZaE1k-JDMMaQot2viNwOCER7xmNNE-9CAwSID4n4NJoA~qKtf~gpSEhTanKQxwi5f4lLpDbVHdtbH0ObrsUYtQzM1Zjo71dsr3bwxmxAHhCcko8HaYgKxHBu2VnAjZu04Z5kmpNC1p0YueW6Dw-6OGzh56VzbGz2JwCk5ViRpmjctCWtkla3LRLulX86~y38bTTGojJe6rfHzrriSx57pbXZUCr3cB7GMksphliNs-VNr9HQ9Qw__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3178,
      display_name: "Golden Stipes",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/781/2560/thumbnail_texture_Golden%20Stipes.jpg?Expires=1707039463&Signature=r8Yj9-XWaecyWqUHRLEpHCG8nUldX-PlRVJd9KQ7YYSRidpuuL0LgrKrdaYqz-rAJk4Mnkl9mPYPLgB-xd-JcO50Sj2tbOq7Mw9wxNQSmepap7fit7AFQvAJ79vsq7jFSjdXUksiSTsueYhNEc501M4ndtEd8~DEpU2~KaNxwxMPWr3bG2lQRmdOWCGbk7n6ihvLPBvmobjFBUAgRBmQh25otDuiekTnnlE2BPoVbKjGhsBc17jkplziw8BFz1hoe2mRBbirjqNpXVcMiIKdJw4RDBEOAFvkB7m0lS1w1IzB3H91g-sGohJd672hNfNZkJs~9o7hVCBM9U6G-l4zHQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3179,
      display_name: "Aqua",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/781/2561/thumbnail_texture_Aqua.jpeg?Expires=1707039463&Signature=MBuc0Kj0miPpjHX9jqJEQMdgJj0ZQ8E9JJGaplKUDeTI3BpliQ56JORn5ofU64ifuLsP1H17YwhqYYvxF1Gf6kMWnjfQPvcwcgc~XpGBfrZeU9M1jyxZ3IrVS5pho3chLnUEu~vMeTinK4Hdxi6viIUPAXLQlErM4obLjv-TICThVjMN6vPE~yM6U6KSzxnH8ld~MmXnTA-NgIzz6gpEByZx8iHTeP9T7EULJLMJGi1TYIIAoNxXH3x4QLw~MGKvdc7SXReVrSwFkOEncJU9ihIWnaO00FS--VAX1zGszaiikV~Nj6GLITwEvl~kjhyY1zO58BtKa0QKWul6C-bj8Q__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
  ];
  const FullBedsetSheetAndStandardSham = [
    {
      id: 3180,
      display_name: "White Cotton",
      thumb: null,
    },
    {
      id: 3181,
      display_name: "Feathers",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2563/thumbnail_texture_Feathers.jpeg?Expires=1707039463&Signature=YF-nANpGeBoxgwNK5XREWHOOEvHr-oAhq22C-mGA0Htz-EA6XHa4MP7r5qt-EPo9JPwn28IXOO3mSYUQ8z-tV9Y6LjSoS1Xh9OQXekpju898afovTtsDwG0LfaR-MptldMyIVhvvz5j6ZIgTk6zURXBA5gVJZffy5KmH8XNC9XIXpxdSuja0VZdrWaOJg7iTkKc3XLZI0F~DiXyKlZ~GvefEgbMXlL26S8w5uwAnNZRLwGIxLE65lMpHrxxCkSKgknyFO-rcQRLdphQL3zk1kWGZ2yE8OS8G2ZJcflupUovdq5VsIGRqjj6EuucrlG7FsXfAkgR9HiCNZzuQrvkRpw__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3182,
      display_name: "Leafy Natural",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2564/thumbnail_texture_Leafy%20Natural.jpeg?Expires=1707039463&Signature=DF5FWy4wjf-3ObF8G0Db9LzcaYj70ueTmvWZ7SMeVRkEjyOL6Q9h6NcxOx4cHROv4nTFEf8daNgo44e60MFRcqXqRQbxrrVTzz0p63jy5r1erSJNXWZv4kGdIRr0LeVKn77w4H2eefGvSYWPVB3B8fiC8r8~IiGNYuzvkuwIybzaq9lRsUBfejfNRhBgfwVBGMQpspbYM4r-EaaP7tVU7GzDFRwEGVo0Jl1WHhhfyF0eDe~rOhAaVZ7a6jpPCQkfQJlitNGFDdeaKNzfJki0xYIukqNYtMn9i4nC0R9uZFSEczqAMjaHf70bgZ9V2wElPevl01jXVGJYXtXMuSNX6g__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3183,
      display_name: "Natural Weave",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2565/thumbnail_texture_Natural%20Weave.jpeg?Expires=1707039463&Signature=e5cbohFqj4iyDyc-Wz42XX2Z4fcoGnYUm4fDGXWb469otrqQlPJDqYyYSESDFI~ZPouDyUhTgGfkaXcupEcEJuF9YjFfa-Gat05wm59B4EJ3JumPnAyqhXOqkFhoRY93mBT3of87aRWzV9EhmcJzjzlYIQxtL9UAzP613uYvd76RQN-t6zbs2F67YY0lakNVIJ-VzbyJ2ATaIJg69QFmZHfcr8w80m0TJfOFugZN5KPJYO2Zghom46WSHN--DeN~aSy0XuWyxCSpBcezVwii07K1y0xm-GsvxtwKl2hsXf6Kr7GGgCUW~XpKEMlw~Ht3-6-lLeCyqMHIGDnSGqFCJg__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3184,
      display_name: "coral main",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2566/thumbnail_texture_coral%20main.jpeg?Expires=1707039463&Signature=qdQ96QGxMIWn3N9c9287hgMC-nVKJCYRCRBFIPH-Cs3fcwwAAnTuOY6HKgmE6gG7PbD20x~uOn1HIBef13-48LK886R3QiMZraQeSRLqH0V8wgpXhMMy8phwb6NSFIfCvWQAkduusPzpvXp7DiquVhZ5D0JvN2-FVFZqJRPMQGIoczkZgXsWJ1-phso12gfSWEwbmht7EA1DJ0qOhWFm4hmf97QSfE5VmhfkrzjChZKpromVjjzQOTvr~SDTS9UAYQaIcc8ZJnSmCD2tQeSBoMOHTKzyYUux6Kd5rl1jkCRWkYpkUCOLdSRIDoI~WFhwlUmBJZmlV9sGoTWlwzRUGA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3186,
      display_name: "Linen",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2568/thumbnail_Fabric001_E0vGKNW.jpg?Expires=1707039463&Signature=y6qhmiewYCjBIOZYwFIWkW-WiBw9gsfGqJkpHIDyRzzN0zCvD35VNyug9z13a6jpHUkG8R5NLSZR~m3jRCn3NRli7Ge5-AAGoCL4knEV4v6VQlxcJhrLwRfLusjx2o8nwLAl~2VFzWf7P1FvnB8tLarJ5HZDwlU7MFKsfddRSau8Lqhhc3y9X1uRrdJ9XAAZpCA~dyx00YseyXrT7VJAUcR1qcIemrtv2sNIKEV7rDaIwaB2oEOWHfj3Kv-Iu4vFbSP80BuPajPSqPsmPUjnXwmMjq2jkEcz-yvxXK2E-jbki95JNvefZAEqjCS4kSPTrlV08o3wK7xOnhPe8UPftg__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3187,
      display_name: "Linen Cotton Blend 1",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2569/thumbnail_fabric076_1.jpg?Expires=1707039463&Signature=W2EVF5kWPp1PunwN~-iPl5-kTX~g3dOeBMgfCQqItD3ALGUknUtOYo4JNx0RPS3j4l0B~meyPr1va5qFRR6Iw9A~aN98M-Ddn8Byiz21yq7QvJwiEE-vuezxyYfES27Xc58JAFbpY0GZnflmvvpCE52f6lf~pZJKIs8R6JRVR~8gMPXvIVLtgFIDI58PdrhaB4vd2I2sZPJ07tol2EnzhtmtHY0u0Cp8QFJ8nxTudoCJee7uFHnXcgRt7o72clDAMpBEsHiAqk8fTcwS5stWk6-U16WofLw6J24H1ZdX689vwXHqeJtMittDBQSuxT7ujr30hALwlb4G8ZXF-rVVWw__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
  ];

  // without Throw
  const withoutThrowDuvetFrontPillowOptions = [
    {
      id: 3218,
      display_name: "Blended Canvas",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/779/2519/1_pillow_4_back_1%4019058.jpeg?Expires=1707110551&Signature=PQFu8o763os-PGv8XF0MzJle2N4798zzFCrRP8bhw3KoYqIWkyZzPCIriaOuV5WdKa8ETRI9xFfArF2WzyjSVnzfRwa28HeDfR-tbaZ90rQI9NzN8jFcTyKC345PepTiIJzZhdIp1XWhhAh5WXDmVFsnS2QTM3NSiKSMwdnV8ItOXMiv~bQRGVrAKYjlewRPommPSHUPivkX2qZ6OhYO-2X87FeSvJABc2RqXEit1KCikGbpYmFWNNOvU4HoAOiG-i152NftqI1ywZNrqNn8zU5eGXmoIBSsscqW1NDpJ0zabevDVuG1poRCcdmGrGVogiMvaDyZV40S4CagixTOBQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3219,
      display_name: "Denim Stripe",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/779/2531/thumbnail_texture_Denim%20Stripe.jpg?Expires=1707110551&Signature=Uscxyj8dgRqs5f5ijdy7diuRLmFaslOGqhGlitRky6V2wShfAK5yvKYtlM7IUSgYJOcTYRUKf3NusN6pOe3ajDWV9QBMEui-vgwYCc0jpzNaLaJXc0sL0r0KgNkonY-GnGQQZg-eC7McrxQsmK0T~-uysoYqLadDqhmRdueZaAtRRfiso~cwhUGO0zN8Ld5wSwX6wyaMHf4qBr-1exUByknM6EKZSu347F9ColM-4yJNL3WVlWYM5NdypyGilD~zjQ6AokAw8QTpgTdNXRYUE8t2L6ue-J9wz-5syS2ErYuvh6FFPPsSXjCocC5vuBxuH4W9cnPTN7LQmGnyPKtmUA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3220,
      display_name: "Pistacchio Stripes ",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/779/2532/thumbnail_texture_Pistacchio%20Stripes%20.jpeg?Expires=1707110551&Signature=jLeZczochN7cFgo5cahrUluEyueh1ht9TrZNAqJMqy85iJx1htjal-qlJDJaUZkx7n1YR~7U-nxERye0G608Pg1VusZOrBeItTWPtGWsv5jgymOHpCCfFoG2AJd7U7ytBiZSEqo-ieO8wfuRguZbAaLWvYQHowlxYxKsyOmH530v-Xo9dBkejCyyBDXl4435ukLzyx6rTCrJFQ3P1NuIYz58Ay0bZiDXi-9Axzb8jf0bXmpXpIAgfzNxHg2KXWsaT5mgTfY7Mb8gkBhehRRtdpgE~1EajcOV1vvGW51c0hhSMRoUjPBX75SxmTNiKrQULZGP2yOR8ltckNLC6q-myw__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3221,
      display_name: "Natural Weave",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/779/2533/thumbnail_texture_Natural%20Weave.jpeg?Expires=1707110551&Signature=QG~brz7IcfcpUzjCfH9VAT7PqMdnp7iCyyS5l47qsWRtu7duU10iz0ckXp-ptwaUS43FYq0NhQGKH-2NA-alGVNkS26krqgH9TCKDxY4FKVKxedkvnszWuMG6Cj3jhmFFWuOBtGYnZVlofJRnFkX-1pTuPRYKB76w~UkyNllmM7kW-0MEmqWj~rx6-IIr2HN4l-QwU~zTvx-IqT0VWas0eOabzMxKWP5n4B-WsrFDsg8q9pDCR0p30MpzKqOijTzKLas6l9djpURv~seXm~JjY49pYl2b69eRRYDdGAzFHzZI~S5~N4~03sst5CBbQ5c8wXRXYFbCqm7gaJMqGsogA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3222,
      display_name: "Blush Flora",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/779/2534/thumbnail_texture_Blush%20Flora.jpeg?Expires=1707110552&Signature=1NdN2nvXxjPbRmoPdgab1fTeUBcb7SZp3-GV7D~QoIEY707oUJvGSa2ue~7BCVMgtTSSOZlqczJDfU42E55CPNiIO8A9~QcEPYnZis7tP34uPBUDVYTU~V9c1w8tGIkj~k1Bwlszr0ywU6B40TZYwGhTPT3BDoBUehd8dmH18wx9M7hY7nVFb3nOsP6KmLk~q6YI0uyDKe2O3rA5Oc1yt7-9LBuxp7FRsJsrUWC32ckXHorasWZIYJ69~w1Fu4s~giMYn3sxmoPqXUSfDUDeqSE~~8HIflzN8iuE~vSe7Q293Wbf-pFuZfUwOioA6oamyjRxl8eSAfZdPUYiS0Gj3Q__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3223,
      display_name: "Indigo Embroidery",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/779/2535/thumbnail_texture_Indigo%20Embroidery.jpg?Expires=1707110552&Signature=ntmZBtiCKNIRC3rPS4HwLFJo0cNkFHsTFsS--UbfAMt2B4g5R4gWw-knxTgkSNWu17ZrjK4f-cPZE~yJiSDkf30sINo19Un47qso-T24EAbjImCKsZXi9oBTxLA1fmDvEMgoILDbRZ98tP8i6HRCruHGOKN47DD7iJZ4hUEXqW8fpjnVlyorbtkeH8ybVW~RUCRpL-lPyouUWSkYjeKsANh1rtlXbUdSK-5P87I5VZh6ayn5Pg~qHx8ezQys-r0ZhbVBmC9rGbEkUW-NBPDW8jG9gCVb4ohDP1BW7iWwGv5XqXfHD~P8QtYjzPusG6C~gbHZiJXXw449OuWwK6-snQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3224,
      display_name: "Geo Nautical",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/779/2537/thumbnail_fabric103_1.jpg?Expires=1707110552&Signature=osuhdZ1QGcQieXGO7MgcaroUP2R8q2BbwKyCwzLJVFLG6BJk8AMS~JnN2RKLM5in2qpzECQSSZqy~h-7CdpeivFjSLHBIgYlME4h1XulbBq8bGaQu7~0hR~5SpQ8czt-yT~~ZYVuKO1P9yumQBiafFO0Bw4MPxTKZjihJYZIUIXak5rjVtAfvSx8If-m85Tgw6-WFtyJGbwDZJd-JwP~fYiT8sl6cs6gVt1qNT6DEEx9z~EWncRTzUAS1KzZ~0DAzI7xZPztc~pBM1lEZgMnj75N56088-dJAuG7jBfileX-2AWMJbeSLvDac4JdUIfJBuQ24OKU72wATILVd6BvkA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3225,
      display_name: "1_pillow33_138_onboard",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/779/2538/thumbnail_1_pillow33_138_onboard_1.jpg?Expires=1707110552&Signature=FJ6VcuRnW2bh4UlBDe8qi91RrMf25AKId5301X5HqvTDVYXs~WavZtQRCYX2SYfK44bS72MM4r~CjOS3UFb3KiHmkpCnHbLzB2ZjOHrHopxKrXxIXWEi8g0CAr5KoC5ctgxtY-BR1iakdPYEX2BBajYNnOu0zm7SHg6MnLE-EgT4qtYLox7oLoy7vRz8st815nPpDxzA~H7ZMC22WeDoYDT9Q49fPjY9XphbdioHL9ATs-UvWgIZq1pf7ZI39QglWWtWHdm-JShG7Ru~TcnlGFJ0eBP~gXasXDcdxab282G25sqdnHr6dAOxCsukZOw2utD7I27Kw7rVQZ6P6Gc8iA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
  ];
  const withoutThrowDuvetBackEuroShamOptions = [
    {
      id: 3226,
      display_name: "Blended Canvas",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/781/2520/1_duvet_back_1%4019058.jpeg?Expires=1707110552&Signature=DRdNKi7J44MKkOuiNrwJj1fG1~2aPpE6iP4uzRu1IkkoOkP~O~S~mYYaS1hyYnTC-DPv1~Q0AEmiLlJ52i8Yo5OoEwonw~2mZNwe85HmwtkjNopiMWR8qWuBy9SZ1vYHDHXbSYo1tnE31f-WtWPQfsZYGzvtvk37PTOe5jeC9dP8krluYXr9YBEve4BhCdArTts-iyboOECibLUgCCg3c3t7WRwW45MExMuX3HP6SSgP8DjFuJuScasc9qyeAsWuNsRBHpD5C8VnS-XouccN18KSG-L76v9iSWDN68H8XSlUtGGnumFQYAxQE80LU3tVyKzF0Fxf3f36JdknuDWFRg__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3227,
      display_name: "Pistacchio Blend",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/781/2558/thumbnail_texture_Pistacchio%20Blend.jpeg?Expires=1707110552&Signature=iyAKgy3PBAD71723PqNOMDFzIOG8eKAHSJV6ZvcaqOjUNqAjxuQ1YZAPj1O1~-EjmmcgHPFneuBQGJRmSYBhNYM74CfWw1HWlhKSEBKKLxJyC6635Ya7m79RHwKAWidqw6wIeW-r9u~bH2ZraZzcmPDevV7K0Z2nusB-E-0OnfQaMbT3HcZokahc~qDz6uCNOlPalq4i8sND~o83gZgw8-pWw280BEFo4LkJlO6XlhPPpJj0LoBrCLT-6YB4UhbDyjIcUx-fTLhXnBnf1WQZI8uFLJqrVnEOpMA78vnvr2Ndtr2s1xSaMr9M9fLgPQhMXMeqznKSOKCNXV2SEZHFUw__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3228,
      display_name: "Natural Chevron",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/781/2559/thumbnail_texture_Natural%20Chevron.jpg?Expires=1707110552&Signature=jSaXE~Ry0EfAO3WOsZ69oSaSnIwBepPvD8hkm2Y8NeQJBtAmziKUAUUZ3A5EaFlIUjVYOifxiQvNa8zcWX-lAQgZ2GoCw4BomCpi9WsU~05NCTxXtAC7e~N6IW2xAHN2T2z0~8bhSbdUfgneSrfPJKOpK0WPePTpqm~YC5NI35pQSUJIi1jo2z7ASI4k6QsCEiDrj7ofuZ74M7yJbH4ZdVjfRxdEd-3r748YTQFcWGHgFLEnyLeFn3bv6HTV6ODB3rpyHs0izfNuXaEVksRa1xqRGBHoQnb7cF~1rj3jNW1damDVrXjhPrm3Ps5xQR-k0YOkHuftuZz5WgeM0E-fLA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3229,
      display_name: "Golden Stipes",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/781/2560/thumbnail_texture_Golden%20Stipes.jpg?Expires=1707110552&Signature=ynzLAI0aGmTXLoiaOHx89fISmTHa4Qsls~j1FzHBUGHEMOA1idaDNNmPBNMyP7FvaficTqJWRsm~vyXsNaODrpL0gOC-p~hG8pCoXBOsz5eD-jVPtzZNPYpAvni34d7rgg4bZfsuLaZHQFF0kQ-DIAI6~MFdaAkZ32eJ0bLp6m9eODTImYcBlVFN4ADmWVMaID1~cPpyyyt~A0rl8kIt4ARbcu1oP92gyJKxeE1iLX3FfUvwzlfaDJX5qqHnJwQJhOCky2xlIaHLujMUD~CKNR8kGGpC-mNBqzTkkQ7Hazng052qcYvyqQBm0MrkyqhLCVPBtr4bcdEKAyYbqr9Urw__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3230,
      display_name: "Aqua",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/781/2561/thumbnail_texture_Aqua.jpeg?Expires=1707110552&Signature=cxNR9fvxv42cZ3uByqxlXenFXd7hrsYPiOV~1Z0KN-3b8G6HlBg0BWbS-zZV-DjI94LiWbv6h1IrWStjrluuilBqhYm5bheispNnZ9Xm6ey0mayyzq3Q2rcJnbO~SmzJo6kxE7To8MIjyo4K1HZ~ycd~x8MUZSCxQscSTJk~OQUzbLJBrEGCPtD8Mi2xn05gsx7klJwWlUnjH7SGmp1mm0emziotg2B8KDtnEAZW7Q9-FiEk0kplCbvqWy00vaYNJ9vEm5~a2ZccLkMGhP~~yIESPvsIbxVh8Z2vcTutWTeJ8jhEmAEgNrX7Gx3MyKIYwYyc8rt3UbzBqecOta3GpQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
  ];
  const withoutThrowSheetAndStandardSham = [
    {
      id: 3231,
      display_name: "White Cotton",
      thumb: null,
      color_code: "#E7E7E7",
    },
    {
      id: 3232,
      display_name: "Feathers",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2563/thumbnail_texture_Feathers.jpeg?Expires=1707110552&Signature=gVc4d~rIOBUFlLKSDvsz4zGRQkxKYLocka-98tV9wQnujaYJLHeeQE~6dS8NIvYThmCQopR-vGj15zCG5Z8JWLbxEknIutbw-1Oa9udCGWnJqfv7X340J57cSLacn7w3YMtAJcPrwhEN115KKVsm35nFbSdr73WhcmRk0Wj7seHb9nWLYr1cy7WCb3g~Re5caBiNe0zup0Xn8fJyjT-ruMe19e41LcaTcpGpZ8eU~7Lq9zl0p3CNE34Y0yLw4p9kzsOwbIQ~RoKOiaR1UfTwMCA7iEgVPy4fbxri56Y8wVMkg9f7uRU3~bTaP4MRIjIXN40tEgskbAtzOU2qWZaeRg__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3233,
      display_name: "Leafy Natural",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2564/thumbnail_texture_Leafy%20Natural.jpeg?Expires=1707110552&Signature=Jf1LfXjy7YuPW~AKa4XOyPCdCgwIi031DtCsjI2ZkgCOIr2vC4BgakPS-681t-klUthG37VDypUcgtBmY8ZDrc42NPhrmT8cJxXN02AJR8svQH9WnZIIA8tH~5HqM7XBjxoz4mIIz5QcH9wTYzbu9MaXj-scuHflTaVx4mN1FwzVhbqPYzPNNcB~esPn~l-zC9jgtwZZWDUYIuwrsfQjHLxTjx5VUf7IlEnPFB7kEt7qoXDHOdJnz5Ts1Sd-n0XlzkbMkgvuXOteuYlUmBKFrUaCncfV1J6t58fofbpgKLntD1TGkKwJXBeCfvcbyR2obVKp8ewd4JG9dPCFtOeiEg__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3234,
      display_name: "Natural Weave",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2565/thumbnail_texture_Natural%20Weave.jpeg?Expires=1707110552&Signature=Dr6h7z85lSNtF8esRIrbCX5DT7P-IS~Mqr6xHmllJ3ZWInl~zIEfn~DPzjizzAHvE6rQNFHwb8GKng3~FCPxb-ssQ~nka-FaqYxgrbKdspHap45eYEzooEvidz2YVEDT4xtfkFvpJPK1uoUuKSictgHLy7YfaU6MhTj-nhRmpi~Eo4Ku7DuB22-V0zC7LVEw4YdesSRVzIiX1ELp3u24bcqiA2ChwDUDpxlxRUWEu9yL7LBOHleDe2lwkkQ37RDlsnh7JTMRxBzvGtpcfUrF2pblfc8fsaAv119pWg0PMkAazxJkqmoZoUbYJv1q0h9iOYERndofadYSvT7W4BpPgA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3235,
      display_name: "coral main",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2566/thumbnail_texture_coral%20main.jpeg?Expires=1707110552&Signature=SWMeyU9q~08XHEznNvgXM~qskz59Qk7Z77iDvUg6Jwfg5QEPiNobdlL82NwhD1FNToyQLlXUZjKyFMC6LLZgkjMXZ3CoYbusOvYozMx1L0LYZCNOM~athKbkgXt-f74jBfqyxStHydFhRT3zYb6v6yWetbF90tqHDsE4HYJy8LWAM3Ii3a4hS0F37JTnG--qbmF-J9k5BMbUEJuH9L0oFU13rYDDOul7CdOj9KFqqOT8b1ii-hn2QAWQF1D0ic-oEZND88RcfS0C5z4KJxk5Y0al0lzTlqVop9aMGEKrhwChV4Y~H5P1bhiKlWcgegRjEKXL8HELqNTiqx8QPnmeZQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3237,
      display_name: "Linen",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2568/thumbnail_Fabric001_E0vGKNW.jpg?Expires=1707110552&Signature=JTEh6LoDpU~mDBo1e-~cPYRo~y0ydHLvwmt2E5tPY-WInlGZfvk7wxse8Mf-DMdjKpc4iFQ2AQx6o0cHd6Isit8LKRODNxikItbvD-uJIBQwxmr13pe4n743CxGrkeP-M61dlO1rqXjxKZBDXerwd67RnoXCKGxCae4SrYETmSsRhibRmoAWoyRuCrKFO47rGvITuKW2IiyWNnN~WkIjC2ehsBOnXs9W-yHqeSh-JnivXwdLo3LozL~O908jLWoFVDqEZYEmMn7a6j0~Iy~AzvTEIJrsy-1XksValQ5G1PO8AIvwkGnbti20aD-fQau48S-DX9HKzLQpnGeunZkHIA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3238,
      display_name: "Linen Cotton Blend 1",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2569/thumbnail_fabric076_1.jpg?Expires=1707110552&Signature=kdGZatkCq4zqSxdNpwDe-9KMqzh0Eh04dGVnP1M2L~tHjdL4o9HGGLteVOWgwiRn8yIChShvHyDWKkOBOQtFwJMrQ7cKZKdVTho9BBVbhEF1ZmbOhsY0RVp0x4H-8BOhbKb662iDS5xcN9sbA~CmtxsghLpP9Lmi-sf5ZADpJX7VgELRiDN-NJCj4aN-6l-e5ezRoFB22SyjoaXFHtKrE5XX2wYbgkkzar-gqtDORhJToV~934RmTDPcAV6hNTMRxR2X5~W5~vLNaIQUmn3BM1j~LWu7wNY9dPthprHRT38YRw0BsBNoXlA5jPEUekKqHNwq9eJPw-vk8Ox49JiDAg__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
  ];

  // 4 pillow set
  const fourPillowSetDecorativePillowsOptions = [
    {
      id: 3247,
      display_name: "Blended Canvas",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/781/2520/1_duvet_back_1%4019058.jpeg?Expires=1707110298&Signature=U7OxaXULJhAeX0cY5a~G5kSZtrO3xSoruQputRoKvSDLuJdhvncl3EeG3oEMl1bTVmUWRHqYQGNLvO1N6nzhT-JM~7I39lBRO4zFX~rK61c5KAk72G6R6VIs~yItLKZ74mxL26wIADMduKBHVeyuQ7yuDeox5XfXlFHFw6a1NRAsK6lo9BwxcoIwxrZAIwuUwhDU7MbN2z4ofsprVavx~vzFSkmazzIXuxaEezQ9rUUv0m-MseASCULr8Upf5V9wce3Eiqm-bnvzSsEYxAEIzZunBZz1qQE0idH5OsAiyP7nqnHQjFe6lOrDEwFmIoY7YPkQO492Kaq6bR1Zqfwp6w__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3260,
      display_name: "Denim Stripe",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/359/948/3260/thumbnail_texture_texture_texture_Denim%20Stripe.jpg?Expires=1707110298&Signature=DOeRHcyeuc1vqRH4UTMQjiMxh5jJb8AkSCC8Pit8B040furVJ6Bbnlgyem9OpQgRMiV3~X4vYAt5xcwIFajOUFYF32zzhIyvWwuRdW9aeP~2oARQI-mD~eKpjtrXNsrfa3BFPDgeTdS1snvZp1XHY4q4Ryl8aVyn1YscqhieZQ6Wyt9uzAx0b8Oh~IT3Sad0J9g7k~MsQeJPNTjJ-Il-9hMHgT9RejHhPbNqbhN53Vui7VEt90W3QvguZ15tBjaPkLZjG4CQlP6wmSGXgeqw6QGmaPe44Wg5BoKD7EJ8MsOWDyNxKoxk7Eg-lMoEaHE5ckS04TXFBDd88Nv6eNnL1Q__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3261,
      display_name: "Pistacchio Stripes ",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/359/948/3261/thumbnail_texture_texture_Pistacchio%20Stripes%20.jpeg?Expires=1707110298&Signature=C7msjqxZKcFu4ag2FCNQMd~na3r2ZAB6ZfetV~nHFiZ-QMRGGyXeLGeytWwGKsT6gShKziZjYsi4A6~syGjBvcRMvrPsQ37FCINlOK0eUrCv3K4Y9bEkzBQa6Y4a0f0SGd5tJmiCIBKu6n4~qiif3AfD-d~jmnK0hMpDpoBiO9wO~EfZTWI7pDnATAQ8cEcqlCXUHkKAKYIECWLMruC-AsKNKSTvMZUXEs4lQ4SbM7xZ6kJTkSet4k-ovUdQKJCKNNRyiLLq1GbmQUwvhN9W5R77JBLO6bpNghMliboOYp2dRINQBRd8oVPQVvnI1kPSxHZJkhm0~b5sGPRyeo3RTA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3262,
      display_name: "Natural Weave",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/359/948/3262/thumbnail_texture_texture_Natural%20Weave.jpeg?Expires=1707110298&Signature=ZRmCO0e57nshWk0HfOxslBrjEAsmiJF9vH8bKbplFrd7H~9svI7pns23GygU0~mSkKKn9GhraQrJI-7wM5~8vnN8p4njETXUXYOnGHiW7cWBZg4zlPY2w3jg9QaOKCjjFpagdyy68LRsMqgkaru2uyeBwqOfUEVKn5UA164Be0Y2aV1S6g7RggCSrlZpnmmwFlpAT9tP5UmyvP5RngtFqnqmKdWXYm5oEFc6Cvjxuctgo0scIL2x0jY6jHo0KyU1lEqXVNE9JRDwXuCVAmRQw3U08zCoffIduFnKYcUpYVxIB7UbS8JEMQbx1lkTEpVhXCKvzeH5JxOKpTf3ip6pFA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3263,
      display_name: "Blush Flora",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/359/948/3263/thumbnail_texture_texture_Blush%20Flora.jpeg?Expires=1707110298&Signature=o66Dbsem9Z5LM73xZ-3HwdAHZx8dQg6aa-7FMKH28sVHtKmx0ncaU57IY8wfAT8JfMeIDvRJQGrBKZw5GuLiy-4b1gxsdt1VijZK13WunJlPlATLv6v7J6IdCVusO-lmHPoc-9GQdxR85cdBClz~VA1aHDO1EA40bse1qe8pga8YdJhBgIGUFnp0hPxU-nw82XgNENB1kq2wKYr4EcFSg~kR2MevrSjsvj3JAnjySIfvNFzk2GVhPe7MVmjL5-xFzuowwwExd2cMgxOSVQtg7s4OH2vNMlH3BrIDC4MQj7mrcJWZsBUhQOzwYT~72Iw3EyyqlHHVg3M0C3tN3yOwlQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3264,
      display_name: "Indigo Embroidery",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/359/948/3264/thumbnail_texture_texture_Indigo%20Embroidery.jpg?Expires=1707110298&Signature=R7tMGpcaLGp6dEsakXfAT8PGgv-C5Y6FkdDurTfT39UZDPcTUq0njmxlmxaSPoeqpeu~fpuSuk1QxxvvnaZAsz6DheoMt-6VIHNN12DqCfFNyzE~GzMoLR3YYbIgns4Gy4glqyaPar7BlXHavgqLpqyEmbAPbuwvwBJcbhZH6azmpFYYUYhI8W9vYiHui8pi85tBb1YmXeJmTthceiTzJXQDCTMpXU13aKXYRCviSC9jAoKX32dDwwz5httdjbWHd2zATNP7SbhWAU2q~vRQaQEsMhFpMZqeHruT5q3uu9eDXWbVuAga3GIF6vxEWixmVG3j8TNHr8d3cGgZaTv1ww__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3265,
      display_name: "Geo Nautical",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/359/948/3265/thumbnail_fabric103_1.jpg?Expires=1707110298&Signature=xlJvvwaFEFoVNGpjxTNFgyWPaS2ZDwAT-36YIlyWb9jHikBItGEy9tebuUPbS8x2YbnguVBfzzUDMGi8FWCUGehx~LKBW7ZBv1u1ZbYDyU3ZPIxqsjEqHbrGPmkxpIHgAl9J6ZJkOvMUafcm1QRAUFISKtsWYRM6crGTBryIN~j0ti0y4YqM1R3VzYCk3vXmujr6mw7cG753w~hXmJEtPADJOWuQTA4NxKOlkmSqr0Htv3gyzmPjhWQD1sGM1Y7hJjlOKwQCnFRqx99JpZpN~NlMaPouVuvUKsmPZK9Qq1qA425nKgm9BjghTgG~0-GP9booZMjPyFDpwtrXgea2mQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3266,
      display_name: "1_pillow33_138_onboard",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/359/948/3266/thumbnail_1_pillow33_138_onboard_1.jpg?Expires=1707110298&Signature=FJvEA2GV0YDFZ8mNVypCZM3GMChdf7HVPL-4FyqlHDbKTnXQpcQ0Ta9759cf7p9PtmN9qpRSUhJckOmf7P0YGsx1HMxnFhA-A~bL~UXuy~0TM3AT2stPjbdYM4pbl~8a5rvHhCEGTTB9z2Pv0J~MctTeyuzN3zzXXns-aqJ9rUMB5yiiGZGxbr3Kcd~pPTtTxXQEQP8DvvHbFuojZIoc65q8z-AMIf3xc5yRHCczUdPjiIL4yQuz48oqFfOG149gp3KL~QvgCU03QBQKChDUWjip98I0IXoy10H8lpy6wslsGEvPPnwyqEN5MGIprro8-s3sfB3epREr9jzVO9F8cQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
  ];
  const fourPillowSetSheetAndStandardOptions = [
    {
      id: 3252,
      display_name: "White Cotton",
      thumb: null,
      color_code: "#E7E7E7",
    },
    {
      id: 3253,
      display_name: "Feathers",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2563/thumbnail_texture_Feathers.jpeg?Expires=1707110299&Signature=L1AALSWu9nEUmciyngQbiYHEIN1RcaYTRY1ilgkv2pgl8UBkZRv6ybiGT3KFB6roAd8BxekaTo7kRdXuOkX1kdM0rzLcMl62EQ6CP4ppsOsuqm4k48tGt66dvVJeeBkiL8MHrP37taa9dkan-SqODNwu0ZRpLvkwYf8WoX~gPtSDdrNoMkwV6Xa~ZQFDI7NxtbwgZpAvkSasOoA50R~hdZBHQ8KXXp6XsC6OlqFouW0j2QHI5p8TIA1zs7HkvPdfNjBFVtosrOQe8fH2ZmHcO66WrLLoZIN-u1nB~DdmYV8yqCmeIEjs5vNVbLWyGDgf6LM3EkzWL5Ww4Ub1mwB5fw__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3254,
      display_name: "Leafy Natural",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2564/thumbnail_texture_Leafy%20Natural.jpeg?Expires=1707110299&Signature=YelAUr9rlifewza5C6y9vi-eGCIBPUxXiymRMcXnot8PoItZ3IjMLs4DDDWROOL7fiBWi2Jt7EdCRhX~5p5z87acM5bcoYqkaVIUoieU8wg0pI2Yf4Opwdol2zDftc3eGlRyQaUl6ejY-RvIeIxkzjbxiZdnsFI1uMJmt~Hjt5YEM~QLowNm9A09gQJL300FJwSHco31nL31ToLGVzXQV-T8C~v1SU9EKvnHFoq8xI3BrVG8bHnyWVox6ksJ2TzuKCyvqAmKpeLlnXMUHHBtIl66UpYsEN4RJNBA4vVhxSOc-c3evC54~yp4GJqu7Z5gDSo0d1-GLtuGe21s93gjOg__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3255,
      display_name: "Natural Weave",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2565/thumbnail_texture_Natural%20Weave.jpeg?Expires=1707110299&Signature=Atw7S186xOmKGmOCUj0aYRUyajtao5WUEk4UO1uEV4skWXJ0-9iyk8edvGPOQq7E-Nq7nJS7a0U9AoaevpozH0hzj7zz2IBs4FtUhf7g5xyHaIspwqHCiZ9QmF90W~F6cf9t2vqKBtXO52~EmJdIjkeVl7Vp0yd~9ngzQLitaJsgb~0oeVrzT5OLFZwiHK3PrWl9WVkhMmvJMCEiWlwXUurBKwGpSK7GMATMmAR0dd49Mv2K72q1K0lAAMb221lOHa2Xb2uAJm4XiY3r02nV1tha74jmylU4t94mMMdMXa8VEH7nvfgh1cfzaUBW0vAaU80XgruEQW1ratWspqnXgw__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3256,
      display_name: "coral main",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2566/thumbnail_texture_coral%20main.jpeg?Expires=1707110299&Signature=V-irK39tNB65HcYsxjWdaOv066qEoYvB2jaj7qd8VZLTFa5n88xSkholSLKLhcp9b7m6zaYPoumPTcX-t8317EGVRxFDDn4LU6QAHjYq~UfWQPHt-0LcCA4EmExZRgYcwCDmDQDurdLjXSDkPVr10zMG-GNomukvdovgheClLgIfcylDD5E8auvw2tpYMQBCIFiwlg-eEOUfRxBNvszgHlqoAgy-6gsyGylajZgALvzEsLWNRSQOsg1KHbYBF9T7DBgq-1P4O~iEXB4nWOZYFQA85ACqpc90WXXjKkMSG4pvyirdooZvZT44UJd7FJ6b49Xfwyf-lQArpowjSxW88A__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3258,
      display_name: "Linen",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2568/thumbnail_Fabric001_E0vGKNW.jpg?Expires=1707110299&Signature=KjOOZZVZwfqeUjgoSq-NSkBbMJSbB~FRFNBiw847CzXTCtmrg6oQQYelTzo5y-GwsKLAUR6lAImXStZVKAtjQca5eDrfV~DSlILSqdiZHANDbb7GU1Lh2BqBQ1DXRNPnVd9Dok9galaPs6RoyFPRj5RqN2rLKSN-DX7P6aVHR~STH0GQxGPOoOEPR3jj3RsDBNLWy1Ts9yVa7rDjCUAlSYzKGAPa5voycKUmbsOUkzqLpbD1q6yj8fe5ZFQBFz6AkdzKLtqPVVYQFn4q0-Af0UlS0OFqapN8ut4AEc9d1zX02xDbL8AX053H6-3lqzYhj3zhHCoc~ySYXyhUnsXUQA__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3259,
      display_name: "Linen Cotton Blend 1",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2569/thumbnail_fabric076_1.jpg?Expires=1707110299&Signature=5M5rD8Hx2-YS4v1pSmQeshQauizSrY6mcisb8p~ux853hIUTESrucIjdzYM2n-iRS6woMv80kOyRo7rAbioNNBGUsb9mCO1m2lALuLJMDvkFOXDiiSkIjFanM~vCwqXKa7dWuGGgxkNPHbhACpdEIa-gPjWm1eL7rQs3uTkjRl9I-l08~dx~if57BdQVjtS4woaK3333TteDQJh5CpNTEENM9g0K8MeCa1YWOziUt7sndMeIKs1AOfrHgBkkdMTK7DD43PoEiHzgy-6ZwlfiYn4b1~VtAEquiGhHpJVR~sqgH-8VwRiBTQwJfITdrgpORMDKQzLhOL4Gz4LeZiD9Fw__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
  ];

  // Bedsheet set
  const badSheetSetSheetAndStandardOptions = [
    {
      id: 3275,
      display_name: "White cotton",
      thumb: null,
      color_code: "#E7E7E7",
    },
    {
      id: 3276,
      display_name: "Feathers",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2563/thumbnail_texture_Feathers.jpeg?Expires=1707110230&Signature=wq55XPHB2AHoZnkCZ0qwK-fPLd5BNQqlSYeA8cz8VwWrxs-XMlkqw8bOo3j1st2azXzJDncR8GYwUwzNpKk79rgpWUDUOntA0pvL4YpyUwt5rU67JUTerRhfVQ83HFROYzgq0tEYzUKu5hK088UUgZ8~kMc0tCVG0s2l0qYEddO8Kn836Owy4meUE-sa820gemWlhLQQo99LbLpwFQMBR69lJhv5Eh9b9yiopiXcQttjghd9YjXLpWUMWUKF-0ndJ8if486bn0Zbnqg6A6GsfvYpKUiPYLg5VP7PBEkhlHb7NvBePLurkRpLWk3iWVolRn18o3IL1-VALTwVIM-MMQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3277,
      display_name: "Leafy Natural",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2564/thumbnail_texture_Leafy%20Natural.jpeg?Expires=1707110230&Signature=NJfxnMD~i8MFmJ1Rz~apVdWGYQQvJGnZt4x~G0RwDsMafXqeZt3JazYKv1S8P2nNfpRLE~SXSZrOuk9J~~Ox2y8z4GnRaSyrJyTJskskIAyliI6pSA2o8wTTXl1FL0aXnvv0iPGDRuIhAWTX8BtDqB9cWPE3NvRVVvBoJkd-69FXh-Fd5R80PKq4mVgLDd86QRpggs6I92oKn8vUn7bxl~fF3kSjDwHGNm~B3f8Jq8n3aZIyRbhC8OBHK1VuGRtltkH5a2H4sTc~l~byGTv~rjIo6vp9znn5D-d3yE~mBsikrg1Zlw84eWRGBJkPUSk-q4GAG95nmHCdmWiXNiCu8w__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3278,
      display_name: "Natural Weave",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2565/thumbnail_texture_Natural%20Weave.jpeg?Expires=1707110230&Signature=47GHDvsdvfrX2Elnd8MjD~m-8tvnPZGEyco~Jkb2sjt5UItVfS8IHu0DgK3x3acXJaEGgL8e9VmmNwi8FBqi8DwJOsWUcV2SUTFfHi9CYRsKbGaHEvInuZ4T2v9-edAqGzTfgU5wH-2b-bPvDLtAtY9giqQhKrK4V6E9RxpZ4uc~7tyKx61u7JRzNzdXTWYKlpY-g0sbbRyGbKObsjL5gaBfwh53n6SixvxEVIF~xvE19N-xrUcz2yBLUMj0rG4s8bWjusR5mRt-LZbwjCt6QNAsoMmcDR2KjSQKNH2YS5TcvwmBQyGSyiHBg1xkF3urWB91antdWgE56pYLdM9KGw__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3279,
      display_name: "coral main",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2566/thumbnail_texture_coral%20main.jpeg?Expires=1707110230&Signature=CBm7Mmg0ssVB4FGYV878V1FVJy19B35gdijVa9fJdhdUb7vCHtYPo9TDxk8d2tHyOmXLq1YGRoNolAA9AjslVM-HrSQxf1SbhdN4MOeKtw6Wxd-dHKDFQRAYxwj~9mnTQikE-BJjfShWQh4Wwda0uFBxGGnV0pJKm0nMTmKalJ~ZqRcfUsee5id2snL6NPLMvzkSV~vPs6l4Zmf0IENVFEeiBlisBShV8OgIaF1oi4Wc2S0o45y2uJslG48PFwTqb0sNclX6qDGEHFzdc2cmKN7vrvhBIUSMBLGIaFFyl3REZDKPHXSLA2BxHMGyYMs~HULsVSqj4dte8Gmxc-dWig__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3281,
      display_name: "Linen",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2568/thumbnail_Fabric001_E0vGKNW.jpg?Expires=1707110230&Signature=Rd857WGv2t6iYJTijRXiR8Op5GlzalOVYjOtwd9tuyOgt9f6QdD4il0YRy356weEwnuQC91XwVCJYjgzUG6OaFzJz24dWntToXfEK05NRXEDpq~bh48Sli6~2FBifDx2MAXgRrcviIXcwlqxXrF9SeffAqMSu5c9Gzfjn0zOz1u0ELT3XDCybbB5cVe91I~ipcA8V3-lqoGgFtXAGqmFwjqZQY-8m4bLXu1MUlRG5YKFdBaUVDEOaIqd~fntu5nicpLmvdUeotLxYrFPXraq~3dTluIf5Oa-sAdJ7f~6gE3B2jlKYaBcag3ji~7Bu-VpykM8z89COwXjVgICV78HaQ__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
    {
      id: 3282,
      display_name: "Linen Cotton Blend 1",
      thumb:
        "https://media.imagine.io/media/public/cfg/texture_thumbnail/4327/5479/323/782/2569/thumbnail_fabric076_1.jpg?Expires=1707110230&Signature=tSohqKIhRyOyoqk~8c5etlYXGngQ11LDATczk0GS5o9DY0iXv-cKBvF-bb6xv8XyHwHZkDFUunb9MOFpXViI8mq-ue~7xoS8rGrYZBGNqFEdhQ7dPfFDyVCPr99yXsHfnlWx2EbgEhlg1v5wR-mMbMBARBz9yqC3obz7bTwXGQBbLBmvqaumbD1inpK17wts2c9pbmlTKe2FpXP-Jomu4nlz4JJjnaQ00ilKtxw~NJ8X~n-qUx0pQlT8uEcQCoG85isbLmeLwcrlfBAK2idkC1-AMZZCp3TIgU~fxC156-8sRdrnZt7a9~bZYWSj7j3gI4P6VH4bbvTJPGe4K7JQ3A__&Key-Pair-Id=K3MIEF79PIHRTH",
    },
  ];

  let options = [];

  if (selectedConfigurator?.name === "Full Bedset") {
    switch (label) {
      case "Throw and Decorative Pillow":
        options = FullBedsetThrowAndDecorativePillowOptions;
        break;
      case "Duvet Front and pillow":
        options = FullBedsetDuvetFrontPillowOptions;
        break;
      case "Duvet back and Euro sham":
        options = FullBedsetDuvetBackEuroShamOptions;
        break;
      case "Sheet and Standard sham":
        options = FullBedsetSheetAndStandardSham;
    }
  }
  if (selectedConfigurator?.name === "Without Throw") {
    switch (label) {
      case "Duvet Front and pillow":
        options = withoutThrowDuvetFrontPillowOptions;
        break;
      case "Duvet back and Euro sham":
        options = withoutThrowDuvetBackEuroShamOptions;
        break;
      case "Sheet and Standard sham":
        options = withoutThrowSheetAndStandardSham;
    }
  }
  if (selectedConfigurator?.name === "4 pillow set") {
    switch (label) {
      case "Throw and Decorative Pillow":
        title = "Decorative Pillows";
        label = "Decorative Pillows";

        options = fourPillowSetDecorativePillowsOptions;
        break;
      case "Sheet and Standard sham":
        options = fourPillowSetSheetAndStandardOptions;
    }
  }
  if (selectedConfigurator?.name === "Bedsheet set") {
    switch (label) {
      case "Sheet and Standard sham":
        options = badSheetSetSheetAndStandardOptions;
    }
  }

  switch (label) {
    case "configurator":
      options = configuratorList;
      break;
  }

  const [selectedOption, setSelectedOption] = useState(options?.[0] || {});

  useEffect(() => {
    setSelectedOption(options?.[0] || {});
  }, [selectedConfigurator]);

  const sendMessageToParent = (data = null) => {
    console.log("data", data);
    const iframe = document.querySelector("#modelViewerFrame");
    if (iframe) {
      iframe.contentWindow.postMessage(data, "*");
      console.log("data sent to child: " + data);
    }
  };

  const sendData = (values) => {
    if (!values) return;
    sendMessageToParent(values);
  };
  if (!options?.length) {
    return null;
  }
  return (
    <div className={styles.sectionWrapper}>
      <p className={styles.sectionTitle}>{title}</p>
      <div className={styles.optionsWrapper}>
        {options.map((option, index) => (
          <div
            className={styles.optionButton}
            style={{
              background: option?.backgroundColor || option?.color_code,
            }}
            key={index}
            onClick={() => {
              if (label === "configurator") {
                setSelectedConfigurator(option);
              } else {
                setSelectedOption(option);
              }
              sendData(
                label === "configurator"
                  ? { type: option, updateScene: true }
                  : {
                      label: label,
                      option: option?.display_name || option?.name,
                    }
              );
            }}
          >
            <img src={option?.thumb} />
            {(option?.display_name || option?.name) && (
              <span
                className={
                  label === "configurator" &&
                  selectedConfigurator?.name ===
                    (option?.display_name || option?.name)
                    ? styles.selectedMenu
                    : selectedOption?.id === option?.id &&
                      label !== "configurator"
                    ? styles.selectedMenu
                    : ""
                }
                title={option?.display_name || option?.name}
              >
                {option?.display_name || option?.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const zoneOptionLists = [
  {
    name: "Configurator",
    label: "configurator",
  },
  {
    name: "Throw And Decorative Pillow",
    label: "Throw and Decorative Pillow",
  },
  {
    name: "Duvet Front And Pillow",
    label: "Duvet Front and pillow",
  },
  {
    name: "Duvet back And Euro Sham",
    label: "Duvet back and Euro sham",
  },
  {
    name: "Sheet And Standard Sham",
    label: "Sheet and Standard sham",
  },
];

export default function ConfiguratorViewer() {
  const [selectedConfigurator, setSelectedConfigurator] = useState({
    id: 421,
    name: "Full Bedset",
    config_type: "1",
  });
  return (
    <>
      <div className={styles.contentWrapper}>
        <div className={styles.productName}>{selectedConfigurator?.name || "Full Bedset"}</div>
        <p>Image Configurator</p>
        <div className={styles.viewerWrapper}>
          <div className={styles.viewer}>
            <iframe
              id="modelViewerFrame"
              src="https://demoviewer.imagine.io/configurator/2"
              // src="http://localhost:3001/configurator/2"
              height="800"
              width="100%"
              title="Full Bedset"
              border="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.optionsPanel}>
            {zoneOptionLists?.map((list, idx) => {
              return (
                <OptionsSection
                  setSelectedConfigurator={setSelectedConfigurator}
                  selectedConfigurator={selectedConfigurator}
                  key={idx}
                  title={list?.name}
                  label={list?.label}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
