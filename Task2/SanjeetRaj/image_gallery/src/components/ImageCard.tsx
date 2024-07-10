interface image{
  url:string
}

function ImageCard(props:image) {
  return (
    
    <div className="m-2 p-2" >
    <img 
    src={props.url} 
    alt="picture" 
    className="rounded-md "
    />
    </div>
  )
}

export default ImageCard