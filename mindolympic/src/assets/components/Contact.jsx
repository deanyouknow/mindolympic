import React from 'react'

const Contact = () => {
  return (
    <div>
        <h2 className="text-2xl josefin-sans inline-block border-b-2 border-black pb-1 mb-6">
            HUBUNGI KAMI
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="relative lg:col-span-2 h-96 rounded-lg overflow-hidden">
            <img
                src="src/assets/bg/1.webp"
                alt=""
                className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white max-w-xl">
                <h3 className="text-2xl font-bold leading-tight">
                Kontak Kami
                </h3>
                <p className="mt-2 text-sm">Email:</p>
    </div>
  )
}

export default Contact