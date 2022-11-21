import React from 'react';
import Header from './Compnent/Header';
import FeedbackList from './Compnent/FeedbackList'
import FeedbackStats from './Compnent/FeedbackStats';
import FeedbackForm from './Compnent/FeedbackForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import AboutIconLink from './Compnent/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>
                        </Route>
                        <Route path='/about' element={<AboutPage />} />

                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App