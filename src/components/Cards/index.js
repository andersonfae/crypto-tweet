import axios from "axios";
import EditModal from "../ModalEdit/EditModal";
import Avatar from "boring-avatars";

export function Cards(props) {
  const state = { date: new Date() };

  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/cryptotweet/${props.id}`
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // <div className="min-w-screen flex flex-row items-center justify-items-stretch pr-14 pt-14 font-sans">
    <div
      className="w-full rounded-lg bg-white shadow p-5 text-gray-800 font-sans relative flex flex-col justify-between"
      // style="max-width: 400px"
    >
      <div className="flex mb-4">
        <div className="overflow-hidden rounded-full w-12 h-12">
          <Avatar
            size={60}
            name={props.owner}
            variant="beam"
            colors={["#000", "#B356FF"]}
          />
          ;
        </div>
        <div className="flex-grow pl-3">
          <h6 className="font-bold text-md">{props.owner}</h6>
          <p className="text-xs text-gray-600">
            {state.date.toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm">{props.description}</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={handleDelete}
          className="inline-block px-6 py-2.5 bg-gray-200 text-purple-600 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Remove
        </button>
        <EditModal id={props.id}>
          <button className="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
            Edit
          </button>
        </EditModal>
      </div>
    </div>
    // </div>
  );
}
