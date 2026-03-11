const ListingCard = ({ listing }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={listing.image} alt={listing.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {listing.title}
          <div className="badge badge-secondary">{listing.location}</div>
        </h2>
        <p>{listing.shortDescription}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{listing.likesCount}</div>
          <div className="badge badge-outline">{listing.price}</div>
          <div className="badge badge-outline">{listing.createdAt}</div>
          <div className="badge badge-outline">{listing.user?.name}</div>
        </div>
      </div>
    </div>
  );
};
export default ListingCard;
