function Filter({setFilterStatus}){
  
    return(
        <div className="flex mb-10 gap-2 justify-between">
            <button 
            className="flex-1 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            onClick={()=>setFilterStatus("all")}
            >
              All
            </button>
            <button className="flex-1 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            onClick={()=>setFilterStatus("active")}
            >
              Active
            </button>
            <button className="flex-1 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            onClick={()=>setFilterStatus("completed")}
            >
              Completed
            </button>
          </div>
    )
}
export default Filter;