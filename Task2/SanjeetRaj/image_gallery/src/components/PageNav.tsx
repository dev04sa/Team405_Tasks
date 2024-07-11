
function PageNav(props:{pageNum:number,setPageNum:(page:number) =>void,last:number}) {
  return (
    <div className='flex justify-between shadow-xl ring-1 ring-slate-900/5 rounded-md p-3'>
        {/* First page button */}
        <button 
            onClick={()=>{
                props.setPageNum(1)
            }}
            className='px-2 py-1 xl:p-4 text-md xl:text-xl rounded-md bg-blue-300 hover:bg-blue-500 hover:shadow-md shadow-xl ring-1 ring-blue-700/5'
        >First
        </button>

        <div  className=' xl:w-1/5 flex justify-between space-x-4 xl:space-x-8' >
            {/* Next page button */}
            <button 
                disabled={props.pageNum===props.last} 
                onClick={()=>{
                    props.setPageNum(props.pageNum+1)
                }}
                className='px-2 py-1 xl:p-4 text-md xl:text-xl rounded-md bg-blue-300 hover:bg-blue-500 hover:shadow-md shadow-xl ring-1 ring-blue-700/5 disabled:bg-slate-500 '
                >
                Next
            </button>

            {/* previous page button */}
            <button  
                disabled={props.pageNum==1} 
                onClick={()=>{
                    props.setPageNum(props.pageNum-1)
                }}
                className='px-2 py-1 xl:p-4 text-md xl:text-xl rounded-md bg-blue-300 hover:bg-blue-500 hover:shadow-md shadow-xl ring-1 ring-blue-700/5 disabled:bg-slate-500'
                >
                Prev
            </button>
        </div>

        {/* Last page button */}
        <button 
            onClick={()=>{
                props.setPageNum(props.last)
            }}
            className='px-2 py-1 xl:p-4 text-md xl:text-xl rounded-md bg-blue-300 hover:bg-blue-500 hover:shadow-md shadow-xl ring-1 ring-blue-700/5'
            >
            Last
        </button>
    </div>
  )
}

export default PageNav