"use client";

import React, { useState } from "react";

interface SpecItem {
  key: string;
  value: string;
}

interface ProductSpecsFormProps {
  value?: SpecItem[];
  onChange?: (specs: SpecItem[]) => void;
}

const ProductSpecsForm: React.FC<ProductSpecsFormProps> = ({
  value = [],
  onChange,
}) => {
  const [specs, setSpecs] = useState<SpecItem[]>(value);

  const handleChange = (index: number, field: "key" | "value", val: string) => {
    const updated = [...specs];
    updated[index][field] = val;
    setSpecs(updated);
    onChange?.(updated);
  };

  const handleAddSpec = () => {
    const updated = [...specs, { key: "", value: "" }];
    setSpecs(updated);
    onChange?.(updated);
  };

  const handleRemoveSpec = (index: number) => {
    const updated = specs.filter((_, i) => i !== index);
    setSpecs(updated);
    onChange?.(updated);
  };

  return (
    <div className="space-y-3">
      <h3 className="font-bold text-zinc-700 text-sm">مشخصات فنی</h3>

      {specs.map((spec, index) => (
        <div
          key={index}
          className="grid grid-cols-2 md:grid-cols-3 gap-2 items-center"
        >
          <input
            type="text"
            placeholder="عنوان ویژگی"
            value={spec.key}
            onChange={(e) => handleChange(index, "key", e.target.value)}
            className="w-full h-8 border border-gray-200 rounded-xl p-3 text-sm bg-gray-100 outline-0"
          />

          <input
            type="text"
            placeholder="مقدار"
            value={spec.value}
            onChange={(e) => handleChange(index, "value", e.target.value)}
            className="w-full h-8 border border-gray-200 rounded-xl p-3 text-sm bg-gray-100 outline-0"
          />

          <button
            type="button"
            onClick={() => handleRemoveSpec(index)}
            className="btn btn-xs h-8 hover:text-white btn-outline btn-error"
          >
            حذف
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddSpec}
        className="btn btn-sm btn-outline btn-primary"
      >
        + افزودن ویژگی
      </button>
    </div>
  );
};

export default ProductSpecsForm;
