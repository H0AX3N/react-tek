import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import useDebounce from '../hooks/useDebounce';

function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);
    const navigate = useNavigate();

    const fetchRecipes = async () => {
        try {
            const response = await fetch('https://dummyjson.com/recipes');
            const data = await response.json();
            setRecipes(data.recipes);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    return (
        <div className='p-4'>
            {/* Search Input */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search recipes..."
                    className="px-4 py-2 w-[300px] rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 self-end"
                />
            </div>

            {/* Recipes Grid */}
            <div className='flex flex-wrap justify-center gap-5'>
                {
                    filteredRecipes.map((recipe) => (
                        <div key={recipe.id} className="card bg-[#b67d5821] w-100 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                            <figure>
                                <img src={recipe.image} alt="Recipe" />
                            </figure>
                            <div className="card-body flex flex-col justify-between">
                                <h2 className="card-title">{recipe.name}</h2>

                                <div className='flex gap-2 flex-wrap justify-end mb-4'>
                                    {recipe.tags.map((tag, idx) => (
                                        <div key={idx} className="badge badge-outline">{tag}</div>
                                    ))}
                                </div>

                                <div className="card-actions justify-end mt-auto">
                                    <button
                                        onClick={() => navigate(`/recipes/${recipe.id}`)}
                                        className="btn btn-primary"
                                    >
                                        Check Recipe
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Recipes;
