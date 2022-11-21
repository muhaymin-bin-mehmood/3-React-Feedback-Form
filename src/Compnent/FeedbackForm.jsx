import React, { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';


const FeedbackForm = () => {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must me least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage('');
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }

            setText('')
            setBtnDisabled(true)
        }

    }

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <h2>How would you rate your service with us ?</h2>
                    <RatingSelect select={(rating) => setRating(rating)} />
                    <div className="input-group">
                        <input value={text} type="text" placeholder='Write a review' onChange={handleTextChange} />
                        <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                    </div>
                </form>
                {message && <div className='message'>{message}</div>}
            </Card>
        </div>
    )
}

export default FeedbackForm
