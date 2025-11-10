import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [commodities, setCommodities] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/services.json");
        setTimeout(() => {
          setCommodities(res.data);
          setFiltered(res.data);
          setLoading(false);
        }, 2000);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (value) => {
    setSearch(value);
    setSearching(true);
    setTimeout(() => {
      const result = commodities.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(result);
      setSearching(false);
    }, 1000);
  };

  if (loading) return <Spinner />;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
        🌾 AgriConnect Commodities
      </h1>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for crops, seeds, or equipment..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="border border-green-400 focus:border-green-600 p-3 w-full rounded-lg outline-none shadow-sm transition-all"
        />
      </div>

      {searching && <Spinner />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((commodity) => (
          <div
            key={commodity.id}
            className="bg-white rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-all duration-300 p-4"
          >
            <h2 className="text-lg font-semibold text-green-700">
              {commodity.title}
            </h2>
            <p className="text-gray-600 text-sm mt-2 line-clamp-3">
              {commodity.description}
            </p>

            <div className="mt-4 flex justify-between items-center">
              <span className="text-green-700 font-semibold">
                ₹{commodity.price || "N/A"} / {commodity.unit || "unit"}
              </span>
              <Link
                to={`/service/${commodity.id}`}
                className="text-sm bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition-all"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && !searching && (
        <p className="text-center text-gray-500 mt-8">
          No commodities found for “{search}”.
        </p>
      )}
    </div>
  );
}
