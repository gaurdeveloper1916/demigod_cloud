import React from "react";

const HardwarePage = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 text-center hero-gradient ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Powering Tomorrow’s Cloud with Cutting-Edge Hardware
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-gray-300">
          Experience unparalleled performance, speed, and reliability — backed by state-of-the-art infrastructure.
        </p>
        <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition">
          Notify Me
        </button>
      </section>

      {/* Coming Soon Products */}
      <section className="py-16 px-4 md:px-20">
        <h2 className="text-3xl font-semibold mb-10 text-center text-white">Coming Soon</h2>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {[
            { name: "DG-Compute X1", desc: "High-performance Compute Nodes", badge: "Launching Q3 2025", image: "https://via.placeholder.com/300x200?text=CPU" },
            { name: "DG-Storage S3", desc: "Ultra-fast NVMe Storage Servers", badge: "In Testing", image: "https://via.placeholder.com/300x200?text=Storage" },
            { name: "DG-Network Pro", desc: "Low-latency Switching Hardware", badge: "Coming Soon", image: "https://via.placeholder.com/300x200?text=Network" },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow">
              <img src={item.image} alt={item.name} className="mb-4 w-full h-40 object-cover rounded" />
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-400 mb-2">{item.desc}</p>
              <span className="text-sm text-yellow-400 font-medium">{item.badge}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Our Hardware Stands Out */}
      <section className="py-16 px-4 md:px-20  hero-gradient ">
        <h2 className="text-3xl font-semibold mb-10 text-center text-white">Why Our Hardware Stands Out</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { icon: "⚡", title: "Performance-First Architecture" },
            { icon: "🔒", title: "Enterprise-Grade Security Built-in" },
            { icon: "🌱", title: "Energy Efficient and Scalable" },
            { icon: "☁️", title: "Seamless Cloud-Native Integration" },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-xl">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-medium  text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 px-4 md:px-20 bg-black text-center">
        <h2 className="text-3xl font-semibold mb-4  text-white">Behind the Scenes</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Peek into the heart of Demigod Cloud. Built with passion, precision, and power.
        </p>
        <div className="max-w-4xl mx-auto">
          <img src="https://via.placeholder.com/800x400?text=Data+Center" alt="Data Center" className="rounded-xl shadow-lg w-full" />
        </div>
      </section>

      {/* Tech Specs / Infrastructure Standards */}
      <section className="py-16 px-4 md:px-20 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-8 text-center  text-white">Technical Specifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2  text-white">Compute</h3>
            <ul className="text-gray-400 list-disc ml-5">
              <li>Latest Gen CPUs and GPUs</li>
              <li>Up to 1TB DDR5 ECC RAM</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2  text-white">Storage</h3>
            <ul className="text-gray-400 list-disc ml-5">
              <li>All-NVMe SSDs</li>
              <li>RAID 10 Configurations</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2  text-white">Networking</h3>
            <ul className="text-gray-400 list-disc ml-5">
              <li>10GbE & Infiniband</li>
              <li>Redundant Switching</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2  text-white">Cooling & Power</h3>
            <ul className="text-gray-400 list-disc ml-5">
              <li>Hot-swappable PDUs</li>
              <li>Liquid Cooling Options</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Roadmap / Launch Timeline */}
      <section className="py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-8  text-white">Launch Timeline</h2>
        <ul className="text-lg space-y-3">
          <li>✅ Q2 2025: Internal Testing</li>
          <li>🟡 Q3 2025: Beta Release</li>
          <li>🔜 Q4 2025: Public Launch</li>
        </ul>
      </section>

      {/* Email Signup */}
      <section className="py-16 px-4 md:px-20 text-center bg-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Be the first to access our premium-grade hardware.</h2>
        <p className="text-gray-400 mb-6">Sign up for early access notifications.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md bg-black text-white w-72 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition"
          >
            Notify Me
          </button>
        </form>
      </section>

      {/* Partner Logos */}
      {/* Partner Logos */}
<section className="py-10 px-4 md:px-20 bg-black">
  <h3 className="text-center text-xl font-semibold mb-6 text-white">Built With & Supported By</h3>
  <div className="flex  justify-center flex-wrap gap-10">
    {[
      {
        name: 'aws',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s'
      },
      {
        name: 'azure',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png'
      },
      {
        name: 'intel',
        src: 'https://blog.logomaster.ai/hs-fs/hubfs/intel-logo-3.jpg?width=672&height=448&name=intel-logo-3.jpg'
      },
      {
        name: 'nvidia',
        src: 'https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg'
      },
      {
        name: 'amd',
        src: 'https://wallpapers.com/images/featured/amd-wpyulqyqm4zt567i.jpg'
      }
    ].map((partner, idx) => (
      <img
        key={idx}
        src={partner.src}
        alt={partner.name}
        className="h-12 grayscale object-contain rounded"
      />
    ))}
  </div>
</section>


      {/* FAQs */}
      <section className="py-16 px-4 md:px-20 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-8 text-center text-white">FAQs</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div>
            <h4 className="font-semibold text-white">When will the hardware be available?</h4>
            <p className="text-gray-400">We’re targeting a public launch by Q4 2025.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Can I purchase or rent hardware?</h4>
            <p className="text-gray-400">Both options will be available depending on your deployment needs.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Will this support my existing cloud setup?</h4>
            <p className="text-gray-400">Absolutely! Our hardware is cloud-native and supports hybrid or on-prem deployment.</p>
          </div>
        </div>
      </section>

      {/* Contact Inquiry */}
      <section className="py-16 px-4 md:px-20 text-center bg-gray-950">
        <h2 className="text-2xl font-semibold mb-4 text-white">Need a custom solution?</h2>
        <p className="text-gray-400 mb-6">Our hardware architects are ready to design bespoke systems tailored to your scale and goals.</p>
        <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition">
          Contact Sales
        </button>
      </section>
    </div>
  );
};

export default HardwarePage;
