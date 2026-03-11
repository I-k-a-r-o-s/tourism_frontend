import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { TourismContext } from "../context/TourismContext";
import toast from "react-hot-toast";

const ListingDetails = () => {
  const { id } = useParams();
  const { tourismApi } = useContext(TourismContext);
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListingDetails = async () => {
      try {
        const { data } = await tourismApi.get(`/api/listings/getlisting/${id}`);
        if (data.success) {
          setListing(data.listing);
        }
      } catch (error) {
        console.error("Listing fetch failed:", error);
        toast.error("Failed to load listing");
      }
    };
    fetchListingDetails();
  }, [id]);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{listing?.title}</h1>
          <img src={listing?.image} alt={listing?.title} className="my-4" />
          <p className="py-6">{listing?.fullDescription}</p>
          <p>Location: {listing?.location}</p>
          <p>Price: {listing?.price}</p>
          <p>Creator: {listing?.user.name}</p>
          <p>Likes: {listing?.likesCount}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default ListingDetails;
