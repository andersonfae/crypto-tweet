import axios from "axios";
import EditModal from "../ModalEdit/EditModal";

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
    // <div class="min-w-screen flex flex-row items-center justify-items-stretch pr-14 pt-14 font-sans">
    <div
      class="w-full rounded-lg bg-white shadow p-5 text-gray-800 font-sans relative flex flex-col justify-between"
      // style="max-width: 400px"
    >
      <div class="flex mb-4">
        <div class="overflow-hidden rounded-full w-12 h-12">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Anonymous.jpg"
            alt=""
          />
        </div>
        <div class="flex-grow pl-3">
          <h6 class="font-bold text-md">{props.owner}</h6>
          <p class="text-xs text-gray-600">{state.date.toLocaleDateString()}</p>
        </div>
      </div>
      <div class="mb-4">
        <p class="text-sm">{props.description}</p>
      </div>
      <div class="flex justify-between">
        <button
          onClick={handleDelete}
          class="inline-block px-6 py-2.5 bg-gray-200 text-purple-600 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Remove
        </button>
        <EditModal id={props.id}>
          <button class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
            Edit
          </button>
        </EditModal>
      </div>
    </div>
    // </div>
  );
}
