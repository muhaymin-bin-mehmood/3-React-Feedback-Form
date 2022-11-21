import React, { useState } from 'react'
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';


const FeedbackForm = ({ handleAdd }) => {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

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
        console.log(rating)
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

            handleAdd(newFeedback)
            setText('')
        }
    }

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
