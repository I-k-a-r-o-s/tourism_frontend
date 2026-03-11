import { useContext, useEffect, useState } from "react";
import { TourismContext } from "../context/TourismContext";
import toast from "react-hot-toast";
import ListingCard from "../components/ListingCard";
import { Link } from "react-router";

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
      {listings.length === 0 ? (
        <span className="skeleton skeleton-text">No listing Available...</span>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <Link to={`/getlisting/${listing._id}`} key={String(listing._id)}>
              <ListingCard listing={listing} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
