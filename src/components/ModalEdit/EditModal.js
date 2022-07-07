import React, { useState, useEffect } from "react";
import axios from "axios";
import Close from "../../images/close.svg";
import { Toaster, toast } from "react-hot-toast";

const EditModal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [tweet, setTweet] = useState({
    owner: "",
    description: "",
  });
  useEffect(() => {
    async function fetchEditTweet() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/cryptotweet/${props.id}`
        );
        setTweet({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }

    fetchEditTweet();
  }, [props.id]);

  function handleChange(e) {
    e.preventDefault();

    setTweet({ ...tweet, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setShowModal(false);
    toast.success("CryptoTweet was edited");
    try {
      const clone = { ...tweet };

      delete clone._id;

      await axios.put(
        `https://ironrest.herokuapp.com/cryptotweet/${props.id}`,
        clone
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Toaster />
      <button
        className="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div className="flex items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-purple-500 bg-opacity-95">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg relative flex flex-col w-auto bg-white outline-none focus:outline-none">
                <div className="flex justify-between">
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <img src={Close} alt="Close" className="w-7 mt-3 ml-3" />
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    onSubmit={handleSubmit}
                    className="text-start rounded px-8 pt-6 pb-8 w-full"
                  >
                    <label
                      htmlFor="owner-input"
                      className="block text-black text-sm font-bold mb-1"
                    >
                      Your Nickname
                    </label>
                    <input
                      id="owner-input"
                      onChange={handleChange}
                      className="appearance-none border rounded w-full py-2 px-1 text-black"
                      type="string"
                      name="owner"
                      value={tweet.owner}
                    />
                    <label
                      htmlFor="description-input"
                      className="block text-black text-sm font-bold mb-1 pt-4"
                    >
                      Describe your profit and loses.
                    </label>
                    <textarea
                      id="description-input"
                      onChange={handleChange}
                      className="block text-sm appearance-none border rounded px-1 text-black align-top "
                      type="string"
                      value={tweet.description}
                      name="description"
                      rows="4"
                      cols="50"
                      maxLength="140"
                    />
                    <p className="text-black opacity-50 text-sm">
                      limit 140 chars.
                    </p>
                  </form>
                </div>
                <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="inline-block px-6 py-2.5 bg-gray-200 text-purple-700 font-medium text-xs leading-tight uppercase rounded-full hover:bg-gray-300 focus:bg-gray-300 focus:outline-none focus:ring-0 active:bg-gray-400 transition duration-150 ease-in-out"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default EditModal;
