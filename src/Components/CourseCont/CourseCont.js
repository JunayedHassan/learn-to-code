import React from 'react';
import './CourseCont.css';
import CourseProduct from '../CourseProduct/CourseProduct'
import Cart from '../Cart/Cart';
import CourseData from '../CourseData'
import { useState } from 'react';

const CourseCont = () => {
    const [courses, setCourses] = useState(CourseData);
    const [cart, setCart] = useState([])

    const handleAddCourse = (course) => {
        let newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div className="flexify container">
            <div>
                {
                    courses.map(crs => <CourseProduct handleAddCourse={handleAddCourse} course={crs} key={crs.key}></CourseProduct>)
                }
            </div>

            <Cart cart={cart}></Cart>
        </div>
    );
};

export default CourseCont;