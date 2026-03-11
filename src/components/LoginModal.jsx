import { useContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { TourismContext } from "../context/TourismContext";
import { Link } from "react-router";

const LoginModal = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loading, setLoading, tourismApi, navigate } =
    useContext(TourismContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const { data } = await tourismApi.post("/api/users/login", formData);
      if (data.success) {
        toast.success(data.message);
        navigate("/");
        document.getElementById("login_modal").close();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("login_modal").showModal()}
      >
        Login
      </button>
      <dialog id="login_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Please Login to Continue</h3>

          <form onSubmit={handleSubmit} className="">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Login</legend>

              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />

              <button
                type="submit"
                className="btn btn-neutral mt-4"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Login"
                )}
              </button>
            </fieldset>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <p className="text-base-content/70">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="link link-primary font-bold hover:link-secondary transition-colors"
                  onClick={() => document.getElementById("login_modal").close()}
                >
                  Create one now!
                </Link>
              </p>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default LoginModal;
