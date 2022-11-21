import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

const FeedbackList = ({ feedback, handleDelete }) => {
    if (!feedback || feedback.length === 0) return <p style={{ textAlign: 'center', marginTop: "20px" }}>No Feedback Yet</p>
    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
    // return (
    //     <div className='feedback-list'>
    //         {feedback.map((item, index) => (
    //             <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
    //         ))}
    //     </div>
    // )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
        })
    ),
}

export default FeedbackList
