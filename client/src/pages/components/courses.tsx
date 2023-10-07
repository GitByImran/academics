import Image from "next/image";
import React from "react";

const popularCourses = [
  {
    courseName: "Web Development",
    courseTitle: "Mastering Modern Web Fundamentals and Technologies",
    courseReview: 4.8,
    courseFeedback: "Great course with practical examples. Highly recommended!",
    coursePrice: "$99.99",
  },
  {
    courseName: "Data Science",
    courseTitle: "Data Science and Machine Learning Bootcamp",
    courseReview: 4.5,
    courseFeedback:
      "Comprehensive content and excellent instructor. Worth the investment!",
    coursePrice: "$129.99",
  },
  {
    courseName: "Graphic Design",
    courseTitle: "Graphic Design for Beginners to Advanced",
    courseReview: 4.2,
    courseFeedback:
      "Clear explanations and hands-on projects. Enjoyed every bit of it.",
    coursePrice: "$79.99",
  },
  {
    courseName: "Mobile App Development",
    courseTitle: "iOS and Android App Development with React Native",
    courseReview: 4.6,
    courseFeedback:
      "Great course for learning mobile app development. Practical and up-to-date.",
    coursePrice: "$119.99",
  },
  {
    courseName: "Photography",
    courseTitle: "Photography Masterclass: From Beginner to Pro",
    courseReview: 4.4,
    courseFeedback:
      "Awesome course! Improved my photography skills significantly.",
    coursePrice: "$89.99",
  },
  {
    courseName: "Digital Marketing",
    courseTitle: "Digital Marketing Strategies for Success",
    courseReview: 4.7,
    courseFeedback:
      "Highly informative. Great insights into digital marketing trends.",
    coursePrice: "$109.99",
  },
  {
    courseName: "Business Finance",
    courseTitle: "Financial Management for Business Success",
    courseReview: 4.3,
    courseFeedback:
      "Helped me understand complex financial concepts. Practical and applicable.",
    coursePrice: "$94.99",
  },
  {
    courseName: "Language Learning",
    courseTitle: "Spanish Language Mastery: Beginner to Fluent",
    courseReview: 4.9,
    courseFeedback:
      "Excellent course for learning Spanish. Engaging and effective.",
    coursePrice: "$69.99",
  },
  {
    courseName: "Cybersecurity",
    courseTitle: "Cybersecurity Essentials: Protecting Your Digital Life",
    courseReview: 4.6,
    courseFeedback:
      "Important and practical cybersecurity knowledge. Highly recommended.",
    coursePrice: "$79.99",
  },
  {
    courseName: "Artificial Intelligence",
    courseTitle: "Artificial Intelligence and Machine Learning Fundamentals",
    courseReview: 4.8,
    courseFeedback:
      "In-depth coverage of AI and ML concepts. Fantastic course!",
    coursePrice: "$129.99",
  },
];

const Courses: React.FC = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto mt-12 mb-12">
        {/*           <h2 className="text-3xl py-1 font-normal border-b-4 border-b-emerald-500 w-max capitalize mb-6">
            Our Courses
          </h2> */}

        <div className="grid grid-cols-12 gap-5">
          {popularCourses.map((course, index) => (
            <div className="border col-span-12 md:col-span-6 lg:col-span-4 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={500}
                width={500}
                className="object-cover w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{course.courseName}</h3>
                <p className="text-lg">{course.courseTitle}</p>
                <p className="text-gray-700 mt-4">{course.courseFeedback}</p>
                <div className="flex justify-between items-center mt-6">
                  <p className="text-emerald-500 font-semibold">
                    {course.courseReview} stars
                  </p>
                  <p className="text-lg">{course.coursePrice}</p>
                </div>
                <button className="text-md bg-emerald-500 text-white font-semibold px-6 py-2 mt-5 w-full rounded-md gap-1">
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
