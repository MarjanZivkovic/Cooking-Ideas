import React, {useState} from "react";

function Form ( props ){
    const [ search, setsearch ] = useState('');

    const updateSearch = (e) =>{
        setsearch(e.target.value);
    }

    const submitSearch = (e) =>{
        e.preventDefault();
        props.onSearchRecipe( search );
        setsearch('');
    }

    return (<form onSubmit={submitSearch}>
                <div className="form">
                    <input type="text" value={search} onChange={updateSearch} placeholder="enter dish or ingredient"/>
                    <input type="submit" value="Search"/>
                </div>
            </form>
    );
}

export default Form;