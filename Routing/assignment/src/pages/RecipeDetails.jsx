import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // updated to react-router-dom
import Blobs from '../components/Blobs';

function ProductDetails() {
    const [recipe, setRecipe] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchDetails = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/recipes/${id}`);
            const data = await response.json();
            setRecipe(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching recipe details:", error);
        }
    };

    useEffect(() => {
        fetchDetails();
    }, [id]);

    if (!recipe) {
        return <div className="text-center mt-10 text-gray-500">Loading...</div>;
    }

    return (
        <div className="bg-[#FAF7F5] min-h-screen flex items-center justify-center py-23">
            <Blobs />

            <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-6">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded shadow"
                >
                    ← Back
                </button>
                <h1 className="text-2xl font-bold text-[brown] mb-4">{recipe.name}</h1>

                <h2 className="text-xl font-semibold mb-2 text-[#cb6969]">Ingredients:</h2>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                    {recipe.ingredients.map((inst, idx) => (
                        <li key={idx}>{inst}</li>
                    ))}
                </ol>
                <h2 className="text-xl font-semibold mb-2 text-[#cb6969]">Instructions:</h2>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                    {recipe.instructions.map((inst, idx) => (
                        <li key={idx}>{inst}</li>
                    ))}
                </ol>

                <div className="grid grid-cols-2 gap-4 text-gray-800 text-sm">
                    <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
                    <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
                    <p><strong>Servings:</strong> {recipe.servings}</p>
                    <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                    <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                    <p><strong>Calories/Serving:</strong> {recipe.caloriesPerServing} kcal</p>
                </div>
            </div>
        </div>

    );
}

export default ProductDetails;
