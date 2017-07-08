import React from 'react';
import StarRating from './StarRating.jsx';
import Review from './review.jsx';

const Feedback = ({countStars, review, handleRatingClick, handleReview, getLatestClosedTicket}) => ( 
  <div>
    <div className="modal fade" id="myModalFeedback" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="myModalLabel"> Help Reactor Session Completed </h4>
          </div>
          <div className="modal-body-feedback">

            <div className="feedback-center">
              <StarRating countStars={countStars} handleRatingClick={handleRatingClick}/>
              <Review review={review} handleReview={handleReview}/>
            </div>

            <div className="modal-footer" id="feedback-footer">
              <button
                type="button" className="btn btn-xs btn-primary claim_btn" data-dismiss="modal"
                onClick={(evt) => {
                  console.log('countStars', countStars);
                  console.log('review', review)
                  getLatestClosedTicket({rating: countStars, review: review});
                }}>
              >Submit</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Feedback;
