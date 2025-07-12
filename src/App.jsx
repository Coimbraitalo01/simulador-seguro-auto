import React from "react";
import SeguroForm from "./components/SeguroForm";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-blue-700 text-white p-6">
            <h1 className="text-2xl font-bold">Simulador de Seguro Auto</h1>
          </div>
          <SeguroForm />
        </div>
      </div>
    </div>
  );
}