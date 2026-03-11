import { useContext } from "react";
import { TourismContext } from "../context/TourismContext";
import toast from "react-hot-toast";

const DeleteListingModal = ({ id }) => {
  const { tourismApi, navigate } = useContext(TourismContext);

  const handleDelete = async () => {
    try {
      const { data } = await tourismApi.delete(`/api/listings/delete/${id}`);
      if (data.success) {
        document.getElementById("delete_modal").close();
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error("Failed to delete listing");
    }
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-error"
        onClick={() => document.getElementById("delete_modal").showModal()}
      >
        Delete
      </button>
      <dialog id="delete_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Caution!</h3>
          <p className="py-4">
            Are you sure you want to delete this listing? This action cannot be undone!
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error" onClick={handleDelete}>
                Delete
              </button>
              <button className="btn">cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default DeleteListingModal;
