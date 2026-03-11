import { useContext, useState } from "react";
import { TourismContext } from "../context/TourismContext";
import toast from "react-hot-toast";

const UpdateListingModal = ({ id }) => {
  const { tourismApi, navigate } = useContext(TourismContext);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    image: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
  });

  const handleUpdate = async () => {
    try {
    } catch (error) {
      toast.error("Failed to update listing");
    }
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-error"
        onClick={() => document.getElementById("update_modal").showModal()}
      >
        Update
      </button>
      <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Listing</h3>
          <form action="">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <label className="label">Title</label>
              <input
                type="text"
                className="input"
                placeholder="My awesome page"
              />

              <label className="label">Slug</label>
              <input
                type="text"
                className="input"
                placeholder="my-awesome-page"
              />

              <label className="label">Author</label>
              <input type="text" className="input" placeholder="Name" />

              <label className="label">Author</label>
              <input type="text" className="input" placeholder="Name" />

              <label className="label">Author</label>
              <input type="text" className="input" placeholder="Name" />

              <label className="label">Author</label>
              <input type="text" className="input" placeholder="Name" />
            </fieldset>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error" onClick={handleUpdate}>
                Update
              </button>
              <button className="btn">cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default UpdateListingModal;
