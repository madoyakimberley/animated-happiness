function Message({ message }) {
  if (!message) {
    return null;
  }

  return (
    <div className=" my-4 text-white bg-red-500  text-center font-semibold text-3xl">
      {message}
    </div>
  );
}

export default Message;
