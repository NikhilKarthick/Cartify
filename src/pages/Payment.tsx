import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormField,
  FormInput,
  FormSelect,
  FormButton,
} from "../components/Form"; 

const Payment: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    country: "",
  });

  // Hardcoded correct payment details for validation
  const correctDetails = {
    cardholderName: "abc",
    cardNumber: "1234 5678 9012",
    expiry: "12/25",
    cvv: "123",
    country: "in",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid =
      formData.cardholderName.trim().toLowerCase() === correctDetails.cardholderName.toLowerCase() &&
      formData.cardNumber.replace(/\s/g, "") === correctDetails.cardNumber.replace(/\s/g, "") &&
      formData.expiry === correctDetails.expiry &&
      formData.cvv === correctDetails.cvv &&
      formData.country === correctDetails.country;

    if (isValid) {
      navigate("/summary");
    } else {
      alert("Invalid payment details. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-12">
      <div className="max-w-xl mx-auto bg-gray-900 p-8 rounded-xl shadow-lg space-y-6">
        <h1 className="text-2xl font-semibold text-center">Payment Information</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/*  Expected: abc */}
          <FormField label="Cardholder Name">
            <FormInput
              type="text"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleChange}
              required
            />
          </FormField>

          {/*  Expected: 1234 5678 9012 */}
          <FormField label="Card Number">
            <FormInput
              type="text"
              name="cardNumber"
              placeholder="XXXX XXXX XXXX"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              maxLength={19}
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </FormField>

          <div className="flex space-x-4">
            {/*  Expected: 12/25 */}
            <FormField label="Expiry (MM/YY)" className="flex-1">
              <FormInput
                type="text"
                name="expiry"
                placeholder="MM/YY"
                pattern="\d{2}/\d{2}"
                value={formData.expiry}
                onChange={handleChange}
                required
              />
            </FormField>

            {/*  Expected: 123 */}
            <FormField label="CVV" className="flex-1">
              <FormInput
                type="password"
                name="cvv"
                placeholder="XXX"
                maxLength={4}
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </FormField>
          </div>

          {/*  Expected: India */}
          <FormField label="Country">
            <FormSelect name="country" value={formData.country} onChange={handleChange} required>
              <option value="">Select country</option>
              <option value="in">India</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
            </FormSelect>
          </FormField>

          <div className="pt-4">
            <FormButton type="submit" fullWidth>
              Pay Now
            </FormButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
