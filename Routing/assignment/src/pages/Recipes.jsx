import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function Recipes() {
    const [recipes, setRecipes] = useState([])
    const navigate = useNavigate()

    const fetchRecipes = async () => {
        try {
            const response = await fetch('https://dummyjson.com/recipes');
            const data = await response.json();
            setRecipes(data.recipes);
        } 
        catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }

    useEffect(() => {
        fetchRecipes();
    })

    return (
        <div className='flex flex-wrap justify-center gap-5 p-4 '>
            {
                recipes.map((recipe) => {
                    return (
                        <div key={recipe.id} className="card bg-[#b67d5821] w-100 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                            <figure>
                                <img
                                    src={recipe.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{recipe.name}</h2>
                                {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                                <div className='flex gap-2 flex-wrap justify-end'>
                                    {
                                        recipe.tags.map((tag, idx) => (
                                            <div key={idx} className="card-actions justify-end ">
                                                <div className="badge badge-outline">{tag}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="card-actions justify-end">
                                    <button onClick={() => navigate(`/recipes/${recipe.id}`)} className="btn btn-primary ">Check Recipe</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Recipes
