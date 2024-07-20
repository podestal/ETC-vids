import { useEffect, useState } from "react"


const FetchTutorial = () => {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))

  return (
    <div className="w-full flex justify-center my-6">
        <h2 className="text-5xl font-bold">Fetch API</h2>

    </div>
  )
}

export default FetchTutorial