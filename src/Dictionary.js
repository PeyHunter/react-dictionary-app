import axios from "axios";
import React, {useState} from "react";
import "./Dictionary.css"

export default function Dictionary() {
const [keyword, setKeyword] =useState(null)

function handleResponse(response) {
    console.log(response.data)
    console.log(response.data)

}

function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`)

    let apiKey = `f9do3fd4558cd9a56ebf7d2bbtab042b`
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`
    axios.get(url).then(handleResponse)
}

function handleKeywordChange(event){
    setKeyword(event.target.value)

}


return (
    <div className="Dictionary" >
        <div className="container border-1 border border-secondary rounded ">
            <form onSubmit={search}>
                <input className="mt-5 mb-3" type="search" onChange={handleKeywordChange}></input>
            </form>
        </div>
    </div>
)

}