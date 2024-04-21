import React, {useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//ReviewList function takes in review and list as parameters
//return a form with an input field for user review with a submit button
//onChange is an event listener that calls setReview when the input field changes
//setReview is a function that takes in an event and sets the review to the value of the input field
//handleSubmit is a function that takes in an event and prevents the default action
//map through list and display each review, removing the bullet point styling
//clear the input field
function ReviewList() {
    const[review,setReview]=useState('');
    const [list, setList]=useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(review);
        const date = {review}
        if(review) {
            setList((ls) => [...ls, date])
            setReview('');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div class="form-group d-flex align-items-left">
            <input name='review' class="form-control" placeholder='Review' value={review} onChange={(e) => setReview(e.target.value)}/>
            <button class="btn btn-primary pl-2">Submit</button>
            </div>
            </form>

            {
                list.map((a) => <div>
                    <li class = 'list-unstyled'>{a.review}</li>
                </div>)
            }
            
        </div>
    );
}

export default ReviewList;
