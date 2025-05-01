import React from "react";

// This is a simple presentational component
//It accepts title, description, and category from the parent.
//no mapping or state here--just reusable and clean code (aka a component).

const FeedbackCard = ({ title, description, category }) => { //assigning the value to the FeedbackCard component. Passing title, description, & category as props which will be called and rendered in the JSX with the appropriate tag (ex: h1)
    return (
            <div className="card"> 
            {/* naming the div card, and rendering the props on the UI through JSX, which is react's version of what renders on the UI, similar to html, but with it's own framework on top. */}
                <h1>{title}</h1>
                <p>{description}</p>
                <button className="category-tag">{category}</button>
            </div>
    );
};

export default FeedbackCard;