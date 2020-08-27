import React from 'react';
import './CourseProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const CourseProduct = (props) => {
    const { name, price, instructor, img } = props.course;

    return (
        <div className="coursePrd shadow p-3 mb-5 bg-white rounded row">
            <div className="col-5 my-auto">
                <img src={img} alt="" />
            </div>
            <div className="col-7">
                <h2>Course: {name}</h2>
                <p className="price">Price: ${price}</p>
                <p className="instructor"><small>Instructor: <span className="instructorName">{instructor}</span></small></p>

                <button className="btn btn-primary"
                    onClick={() => props.handleAddCourse(props.course)}
                > <FontAwesomeIcon icon={faBookmark} />  Enroll Now</button>
            </div>
        </div>
    );
};

export default CourseProduct;