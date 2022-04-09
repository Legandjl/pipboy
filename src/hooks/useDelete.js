const useDelete = () => {
  const handleDelete = async (url) => {
    console.log(url);
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return [handleDelete];
};

export default useDelete;
