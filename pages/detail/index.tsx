import Image from "next/image";
import { useTranslation } from "react-i18next";

import Button from "@/components/Button";

const Detail = (): JSX.Element => {
  const { t } = useTranslation();

  const BtnVariant = (): JSX.Element => (
    <div className="border-b border-gray-200 pb-5">
      <h5 className="text-sm font-bold">{t('choose_size')}</h5>
      <div className="mt-4 flex gap-x-5">
        <div className="py-2 px-3 border border-gray-200 rounded-lg shadow text-xs w-fit cursor-pointer">
          S
        </div>
        <div className="py-2 px-3 border border-gray-200 rounded-lg shadow text-xs w-fit cursor-pointer">
          M
        </div>
        <div className="py-2 px-3 border border-gray-200 rounded-lg shadow text-xs w-fit cursor-pointer">
          L
        </div>
        <div className="py-2 px-3 border border-gray-200 rounded-lg shadow text-xs w-fit cursor-pointer">
          XL
        </div>
      </div>
    </div>
  );

  const BtnStock = (): JSX.Element => (
    <div className="my-5">
      <h5 className="text-sm">{t('we_have')} 25 {t('stock')}</h5>
      <div className="flex gap-x-4 mt-4">
        <div className="py-2 border border-gray-300 w-fit rounded-2xl bg-gray-100">
          <button className="font-bold px-4 py-3 flex items-center">
            <div className="w-2 border-b-2 border-gray-500" />
          </button>
        </div>
        <div className="py-2 border border-gray-300 w-fit rounded-2xl bg-gray-100">
          <input
            className="outline-none px-2 text-sm text-center w-14 text-gray-500 bg-gray-100"
            defaultValue={1}
          />
        </div>
        <div className="py-2 border border-gray-300 w-fit rounded-2xl bg-gray-100">
          <button className="font-bold px-4 text-gray-500 flex items-center">
            +
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-[90vw] md:w-[80vw] max-w-screen-xl mx-auto">
      <ul className="flex gap-x-3 my-6">
        <li>Shoes</li>
        <li>/</li>
        <li>Nike</li>
        <li>/</li>
        <li>Nike Jordan Air Limited</li>
      </ul>
      <div className="flex flex-col md:flex-row gap-y-20 md:gap-x-20">
        <div
          className="w-full md:w-6/12 h-[35rem] bg-gray-200 rounded-xl"
          style={{
            backgroundImage: `url('/images/product-2.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="w-full md:w-6/12">
          <h1 className="bolded text-2xl">Nike Jordan Air Limited</h1>
          <h5 className="text-xs my-4">
            Russell westbrook 6th signature shoe is—you guessed it—all about
            speed. To get you goin as fast as possible, weve wrapped the rubber
            outsole nearly up to the midsole, so youre not gonna slip when you
            explode from 0 to 100.
          </h5>
          <div className="flex items-center gap-x-1">
            {[1, 2, 3, 4, 5].map((e) => (
              <Image
                key={e}
                className="h-[8px]"
                src="/images/star.png"
                alt="star-filled"
                width={9}
                height={9}
              />
            ))}
            <span className="text-xs ml-2">(123)</span>
          </div>
          <div className="my-5">
            <h5 className="font-bold text-xl">{t('weight')}</h5>
            <h5 className="text-lg">1.9 Kg</h5>
          </div>
          <h5 className="bolded text-2xl my-5 font-bold">$ 700</h5>
          <BtnVariant />
          <BtnStock />
          <div className="my-10">
            <h5 className="text-sm">{t('delivery_opt')}</h5>
            <div className="mt-4 flex gap-x-5">
              <div className="py-4 px-5 border border-gray-200 rounded-lg shadow text-xs w-fit cursor-pointer">
                JNE
              </div>
              <div className="py-4 px-5 border border-gray-200 rounded-lg shadow text-xs w-fit cursor-pointer">
                Sicepat
              </div>
              <div className="py-4 px-5 border border-gray-200 rounded-lg shadow text-xs w-fit cursor-pointer">
                JNT
              </div>
              <div className="py-4 px-5 border border-gray-200 rounded-lg shadow text-xs w-fit cursor-pointer">
                TIKI
              </div>
            </div>
          </div>
          <div className="my-10 flex gap-x-5">
            <Button btnText={t('buy_now')} rounded="rounded-3xl" />
            <Button
              btnText={t('add_cart')}
              color="bg-whitee"
              textColor="text-gray-500"
              bordered="border border-gray-300"
              rounded="rounded-3xl"
              padding="px-8 py-[8px]"
            />
          </div>
          <div>
            <h5 className="text-sm font-bold">{t('customer_review')}</h5>
            <div className="mt-6">
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <div key={`list-review-${i}`} className="my-4">
                  <h6>
                    Andi - <span className="text-xs">2 hours ago</span>
                  </h6>
                  <div className="flex gap-x-1 my-2">
                    {[1, 2, 3, 4].map((e) => (
                      <Image
                        key={e}
                        className="h-[8px]"
                        src="/images/star.png"
                        alt="star-filled"
                        width={9}
                        height={9}
                      />
                    ))}
                  </div>
                  <h6 className="text-xs mb-2 text-gray-400">Size - M</h6>
                  <h4 className="text-justify">
                    Terima kasih seller.. Paket sudah saya terima dengan sangat
                    baik, dengan pengemasan yang super aman (dilapisi bubble
                    wrap dan kardus).. Pengirimannya super cepat.. Kemarin
                    pesan, hari ini sampai.. Terima kasih..
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
