import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { TourismContext } from "../context/TourismContext";

const Register = () => {
  const { tourismApi, navigate, loading, setLoading } =
    useContext(TourismContext);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formdata.name || !formdata.email || !formdata.password) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      setLoading(true);
      const { data } = await tourismApi.post("/api/users/register", formdata);
      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Registration failed!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="hero h-[calc(100vh-4rem)]">
      <div className="hero-content">
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Register</legend>

            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              value={formdata.name}
              onChange={(e) =>
                setFormdata({ ...formdata, name: e.target.value })
              }
            />

            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={formdata.email}
              onChange={(e) =>
                setFormdata({ ...formdata, email: e.target.value })
              }
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={formdata.password}
              onChange={(e) =>
                setFormdata({ ...formdata, password: e.target.value })
              }
            />

            <button
              className="btn btn-neutral mt-4"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Register"
              )}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
export default Register;
