"use client";

import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    shipping: "inside",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed:", formData);
  };

  const shippingCost = formData.shipping === "inside" ? 60 : 100;
  const total = 1690 + shippingCost;

  return (
    <section className="relative w-full py-16 md:py-24 bg-linear-to-br from-blue-100 via-purple-100 to-pink-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Animated Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 leading-tight">
          <span className="bg-linear-to-r from-red-500 via-orange-500 to-gray-800 bg-clip-text text-transparent animate-pulse">
            তাই আর দেরি না করে আজই অর্ডার করুন
          </span>
        </h2>

        {/* Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Billing Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Billing details
              </h3>

              <div className="space-y-4">
                {/* Name Input */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="আপনার নাম লিখুন *"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all text-gray-700"
                  required
                />

                {/* Phone Input */}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="আপনার মোবাইল নাম্বার লিখুন *"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all text-gray-700"
                  required
                />

                {/* Address Input */}
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন *"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all text-gray-700"
                  required
                />
              </div>
            </div>

            {/* Payment Section */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Payment</h3>

              <div className="flex items-center gap-3 mb-4">
                <input
                  type="checkbox"
                  id="cod"
                  checked
                  readOnly
                  className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-400"
                />
                <label
                  htmlFor="cod"
                  className="text-gray-800 font-medium text-lg"
                >
                  ক্যাশ অন ডেলিভারী
                </label>
              </div>

              <button
                type="button"
                className="w-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Pay with cash on delivery
              </button>
            </div>
          </div>

          {/* Right Side - Your Order */}
          <div className="bg-pink-100 rounded-xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Your order
            </h3>

            {/* Product Header */}
            <div className="flex justify-between items-center font-bold text-gray-800 mb-4 pb-3 border-b-2 border-pink-300">
              <span>Product</span>
              <span>Subtotal</span>
            </div>

            {/* Product Item */}
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-pink-200">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-14 h-14 bg-linear-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center shadow-md shrink-0">
                  <FaShoppingCart className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">
                    Flower Of Story Mens Perfume Set Boss
                  </p>
                </div>
                <div className="bg-white border border-gray-300 rounded px-3 py-1 text-sm font-medium">
                  × 1
                </div>
              </div>
              <span className="font-bold text-gray-800 ml-4">৳ 1,690</span>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between items-center py-3 border-b border-pink-200 text-gray-700">
              <span className="font-medium">Subtotal</span>
              <span className="font-semibold">1,690.00</span>
            </div>

            {/* Shipping */}
            <div className="py-3 border-b border-pink-200">
              <div className="flex justify-between items-start">
                <span className="text-gray-700 font-medium">Shipping</span>
                <div className="text-right space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="shipping"
                      id="inside"
                      value="inside"
                      checked={formData.shipping === "inside"}
                      onChange={handleChange}
                      className="w-4 h-4 text-pink-500 focus:ring-pink-400"
                    />
                    <label htmlFor="inside" className="text-sm text-gray-700">
                      Inside Dhaka : ৳ 60.00
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="shipping"
                      id="outside"
                      value="outside"
                      checked={formData.shipping === "outside"}
                      onChange={handleChange}
                      className="w-4 h-4 text-pink-500 focus:ring-pink-400"
                    />
                    <label htmlFor="outside" className="text-sm text-gray-700">
                      Outside Dhaka : ৳ 100.00
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center py-4 font-bold text-lg text-gray-800">
              <span>Total</span>
              <span>{total.toFixed(2)}</span>
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-linear-to-r from-red-500 to-pink-500 text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] mt-4"
            >
              <FaShoppingCart className="text-xl" />
              Place Order BDT {total.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
