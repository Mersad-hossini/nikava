import React from "react";

function ProductInfos() {
  return (
    <>
      {/* توضیحات بالا */}
      <div className="leading-relaxed text-gray-700 text-sm space-y-3 mb-6">
        <p>
          هندزفری بلوتوثی مدل AirBuds Pro Max با طراحی ارگونومیک و کیفیت صدای
          شفاف، تجربه‌ای حرفه‌ای از گوش‌دادن به موسیقی و مکالمه را فراهم می‌کند
        </p>
        <p>
          این محصول با بهره‌گیری از فناوری حذف نویز فعال (ANC)، صدای محیط را به
          حداقل می‌رساند. باتری قدرتمند آن تا ساعت‌ها استفاده مداوم را تضمین
          می‌کند. همچنین، اتصال سریع و پایدار از طریق بلوتوث، استفاده از آن را
          بسیار ساده و لذت‌بخش کرده است.
        </p>
      </div>

      {/* ویژگی‌های فنی */}
      <div className="w-full max-w-md">
        <dl className="divide-y divide-gray-100  rounded-xl overflow-hidden">
          <div className="flex justify-between px-4 py-3">
            <dt className="text-sm font-medium text-gray-700">
              نوع هدفون، هدست و هندزفری
            </dt>
            <dd className="text-sm text-gray-600">رو گوشی (On/Over Ear)</dd>
          </div>
          <div className="flex justify-between px-4 py-3">
            <dt className="text-sm font-medium text-gray-700">
              سایر توضیحات اقلام همراه
            </dt>
            <dd className="text-sm text-gray-600">کابل شارژ</dd>
          </div>
          <div className="flex justify-between px-4 py-3">
            <dt className="text-sm font-medium text-gray-700">
              قابلیت نویز کنسلینگ
            </dt>
            <dd className="text-sm text-gray-600">فاقد قابلیت نویز کنسلینگ</dd>
          </div>
          <div className="flex justify-between px-4 py-3">
            <dt className="text-sm font-medium text-gray-700">
              درگاه‌های ارتباطی
            </dt>
            <dd className="text-sm text-gray-600">بلوتوث</dd>
          </div>
        </dl>
      </div>
    </>
  );
}

export default ProductInfos;
