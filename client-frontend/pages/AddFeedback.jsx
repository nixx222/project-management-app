import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../App.css';

// Goal: Create a page where a user can submit feedback that gets stored in my SQL database via an API.
// That means I need to:
// Show the user a form 
// Collect their input
// Send that input to my backend API
// My backend inserts it into the database:

// 1. Set up state to track input values, aka: “Display a form with three inputs: title, category, and description.”
export default function AddFeedback() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("feature");
    const [description, setDescription] = useState("");

    // Submit handler
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        const feedback = {
            title,
            category,
            description,
        };

        // Send the data to the backend
        await fetch("https://project-management-app-cp47.onrender.com/submit-feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(feedback),
        });

        // Clear the form after submission
        setTitle("");
        setCategory("feature");
        setDescription("");
    }

    return (
        <div className="add-feedback-container">
            <header className="add-feedback-header">
                <Link to="/" className="back-link">
                    <img src="/assets/icon-arrow-left.svg" alt="Go Back" />
                    <span>Go Back</span>
                </Link>
            </header>

            <main>
                <div className="form-card">
                    <h1>Create New Feedback</h1>
                    <form onSubmit={handleSubmit} className="feedback-form">
                        <label htmlFor="title">Feedback Title</label>
                        <p>Add a short, descriptive headline</p>
                        <input 
                            type="text" 
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />

                        <label htmlFor="category">Category</label>
                        <p>Choose a category for your feedback</p>
                        <select 
                            id="category" 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="feature">Feature</option>
                            <option value="ui">UI</option>
                            <option value="ux">UX</option>
                            <option value="enhancement">Enhancement</option>
                            <option value="bug">Bug</option>
                        </select>

                        <label htmlFor="description">Feedback Detail</label>
                        <p>Include any specific comments on what should be improved, added, etc.</p>
                        <textarea 
                            value={description} 
                            id="description" 
                            onChange={(e) => setDescription(e.target.value)} 
                            rows="10"
                            required
                        ></textarea>

                        <div className="form-buttons">
                            <button type="submit" className="btn-primary">Add Feedback</button>
                            <Link to="/" className="btn-secondary">Cancel</Link>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}
