import "./Recipe.css";

function Recipe ( props ){
    const calory = parseInt(props.calories);

    return (
        <div className="recipe">
            <div>
                <div>
                    <h2>{props.title}</h2>
                    <img src={props.image} alt="" />
                    <div>
                        <span>
                            <strong>Dish type:</strong> { props.mealType.map( type => (
                                    <small key={Math.random() * 1000000}>{type}</small>
                                ) ) }
                        </span>
                        <span>
                            <strong>Cuisine:</strong> { props.cuisineType.map( type => (
                                    <small key={Math.random() * 1000000}>{type}</small>
                                ) ) }
                        </span>
                    </div>
                </div>
                <div>
                    <p><strong>Total calories:</strong> {calory}</p>
                    <ul> <strong>Ingredients:</strong>
                        { props.ingredients.map( ingredient => (
                            <li key={Math.random() * 1000000}>{ingredient.text}</li>
                        ) ) }
                    </ul>
                </div>
            </div>
            <div>
                <div><strong>Health Labels:</strong></div>
                { props.healthLabels.map( label => (
                        <small key={Math.random() * 1000000}>{label}/ </small>
                    ) ) }
            </div>
            <div>
                <a href={props.url} target="_blank" rel="noreferrer">Find out more...</a>
            </div>
        </div>
    );
}

export default Recipe;