import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const [tweet, setTweet] = useState({
    owner: "",
    description: "",
  });
  console.log(tweet);

  function handleChange(e) {
    e.preventDefault();

    setTweet({ ...tweet, [e.target.name]: e.target.value });

    console.log(tweet);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setShowModal(false);
    try {
      await axios.post("https://ironrest.herokuapp.com/cryptotweet", tweet);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <button
        className="bg-purple-600 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 relative bottom-0 right-0 float-right"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Tell your story
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    onSubmit={handleSubmit}
                    className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
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
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      type="string"
                      name="owner"
                      value={tweet.owner}
                    />
                    <label
                      htmlFor="description-input"
                      className="block text-black text-sm font-bold mb-1"
                    >
                      Describe your profit and loses.
                    </label>
                    <input
                      id="description-input"
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      type="string"
                      value={tweet.description}
                      name="description"
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    // onClick={(handleSubmit) => setShowModal(false)}
                    onClick={handleSubmit}
                  >
                    Post
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

export default Modal;
