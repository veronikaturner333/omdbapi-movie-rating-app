import React, {useState} from 'react';
import './Stars.css';

//if we don't enter anything these are our predefined values
const DEFAULT_COUNT = 5;
const DEFAULT_ICON = '★';
const DEFAULT_UNSELECTED_COLOR = 'gray';
const DEFAULT_SELECTED_COLOR = 'yellow';

//stars function takes in count, defaultRating, icon, color, and iconSize
//rating is the rating when clicked, temporaryRating is the rating when hovered over
//creating array filled with 5 elements as default, each element is a star icon but it is customizable
//map through stars, if there is a rating or temporaryRating, and index is less than rating or temporaryRating...
//set color to selected color, otherwise set color to unselected color
//helper isActiveColor is true if rating or temporaryRating is true and index is less than rating or temporaryRating
//letEmptyColor is empty string, if isActiveColor is true, set elementColor to color, otherwise set it to unselected color
export default function Stars({count, defaultRating, icon, color, iconSize}) {
    const [rating, setRating] = useState(defaultRating);
    const [temporaryRating, setTemporaryRating] = useState(0);

    let stars= Array(count || DEFAULT_COUNT).fill(icon || DEFAULT_ICON);

    const handleClick = (rating) => {
        setRating(rating);
        localStorage.setItem('starRating', rating);
    };

    return (
        <div className="starsContainer">
        {stars.map((item, index) => {
            const isActiveColor =
            (rating || temporaryRating) &&
            (index < rating || index < temporaryRating);

            let elementColor = '';

            if (isActiveColor) {
                elementColor = color || DEFAULT_SELECTED_COLOR;
            }else {
                elementColor = DEFAULT_UNSELECTED_COLOR;
            }
            return (
                <div className = 'star'
                key={index}
                style={{fontSize: iconSize ? `${iconSize}px` : '14px', color: elementColor,filter: `${isActiveColor ? "grayscale(0%)" : "grayscale(100%)"}`,}}
                onMouseEnter={() => setTemporaryRating(index + 1)}
                onMouseLeave={() => setTemporaryRating(0)}
                onClick={() => handleClick(index + 1)}
                >
                {icon ? icon : DEFAULT_ICON}
            </div>
            );
        })}
    </div>
    );
};