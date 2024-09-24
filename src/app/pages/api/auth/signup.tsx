//REGISTRO USUARIO
"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from 'axios';

const ReactSignUpForm: React.FC = () => {
  interface ErrorTypes {
    isRepeatPasswordNotEqual?: boolean;
    serverError?: string;
  }

  const [error, setError] = useState<ErrorTypes | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const fullname = formData.get('fullname') as string;
    const password = formData.get('password') as string;
    const repeatPassword = formData.get('repeatPassword') as string;

    if (password !== repeatPassword) {
      setError({ isRepeatPasswordNotEqual: true });
      return;
    }

    try {
      const res = await axios.post('/api/auth/signup', {
        email,
        password,
        fullname,
      });
      setSuccessMessage('User registered successfully!');
      setError(null); // Limpiar errores previos
      console.log(res);

    }
    catch (error) {
      setError({ serverError: 'Failed to register user. Please try again.' });
      console.error(error);
    }
  };

  return (
    <form
      className="px-4 py-6 max-w-lg mx-auto my-6 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Name
        </label>
        <input
          required
          type="text"
          id="name"
          name="fullname"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        {error?.isRepeatPasswordNotEqual && (
          <p className="text-red-500 mb-2">Passwords do not match</p>
        )}
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-2"
        >
          Password
        </label>
        <input
          required
          type="password"
          id="password"
          name="password"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Min 8 Characters"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="repeatPassword"
          className="block text-gray-700 font-medium mb-2"
        >
          Confirm Password
        </label>
        <input
          required
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>

      {error?.serverError && (
        <p className="text-red-500 mb-2">{error.serverError}</p>
      )}
      {successMessage && (
        <p className="text-green-500 mb-2">{successMessage}</p>
      )}

      <div className="flex justify-center mb-4">
        <button
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 cursor-pointer">
          Register
        </button>
      </div>
      <div className="flex justify-center">
        <Link
          href="/login"
          className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-300 cursor-pointer"
        >
          <b>Go back</b>
        </Link>
      </div>
    </form>
  );
};

export default function Contacto() {
  return (
    <div className="min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <ReactSignUpForm />
    </div>
  );
}
