import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Compnent/Header';
import FeedbackList from './Compnent/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './Compnent/FeedbackStats';
import FeedbackForm from './Compnent/FeedbackForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import AboutIconLink from './Compnent/AboutIconLink';

const App = () => {
    const [feedback, setFeedback] = useState([])
    const deleteFeedbackList = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedbackList} />
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<AboutPage />} />

                </Routes>
                <AboutIconLink />
            </div>
        </Router>
    )
}

export default App