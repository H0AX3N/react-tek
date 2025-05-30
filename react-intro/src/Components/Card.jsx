import React from "react";

function Card({ product }) {
    return (
        <>
            <div className="card bg-orange-100 w-96 shadow-lg h-[500px]">
                <figure className="px-10 pt-10">
                    <img
                        src={product.thumbnail}
                        alt="Shoes"
                        className="rounded-xl"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product.title}</h2>
                    <p>
                        {product.category}
                    </p>
                    <div className="card-actions">
                        <button className="btn btn-primary">$ {product.price}</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
