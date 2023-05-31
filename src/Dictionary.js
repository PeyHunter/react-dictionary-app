import React, {useState} from "react";
import "./Dictionary.css"

export default function Dictionary() {
const [keyword, setKeyword] =useState(null)

function search(event) {
    event.preventDefault();
    alert("search")
}

function handleKeywordChange(event){
    console.log(event)

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