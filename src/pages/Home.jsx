import { useContext, useEffect, useState } from "react";
import { TourismContext } from "../context/TourismContext";
import toast from "react-hot-toast";
import ListingCard from "../components/ListingCard";

const Home = () => {
  const { tourismApi } = useContext(TourismContext);
  const [listings, setListings] = useState([{}]);

  const fetchListings = async () => {
    try {
      const { data } = await tourismApi.get("/api/listings/getlistings");
      if (data.success) {
        setListings(data.listings);
      }
    } catch (error) {
      toast.error("Failed to fetch listings!");
    }
  };
  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <div className="flex justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <ListingCard key={String(listing._id)} listing={listing} />
        ))}
      </div>
    </div>
  );
};
export default Home;
