import { useContext } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './shared/Card';
import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item, handleDelete }) {
    const { deleteFeedbackList, editFeedback } = useContext(FeedbackContext)
    const { rating, text } = item;
    return (
        <Card>
            <div className='num-display'>{rating}</div>
            <button onClick={() => deleteFeedbackList(item.id)} className='close'>
                <FaTimes color="purple" />
            </button>
            <button onClick={() => editFeedback(item)} className='edit'>
                <FaEdit color="purple" />
            </button>
            <div className='text-display'>{text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem