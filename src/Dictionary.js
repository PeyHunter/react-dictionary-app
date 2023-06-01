import React, {useState} from "react";
import "./Dictionary.css"

export default function Dictionary() {
const [keyword, setKeyword] =useState(null)

function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`)
}

function handleKeywordChange(event){
    console.log(event.target.value)
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