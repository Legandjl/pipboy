import { useNavigate } from "react-router-dom";

const useDelete = () => {
  const nav = useNavigate();
  const handleDelete = async (url) => {
    try {
      await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (e) {
      nav("/oops", { replace: true });
    }
  };
  return [handleDelete];
};

export default useDelete;
