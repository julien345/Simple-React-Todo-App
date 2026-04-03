function Filter(){
    return(
        <div className="flex mb-10 gap-2 justify-between">
            <button className="flex-1 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              All
            </button>
            <button className="flex-1 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              Active
            </button>
            <button className="flex-1 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              Completed
            </button>
          </div>
    )
}
export default Filter;