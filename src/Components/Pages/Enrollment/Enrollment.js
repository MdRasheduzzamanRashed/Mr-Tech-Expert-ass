import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Button, Card, TextInput } from "flowbite-react";

const Enrollment = () => {
  const data = useLoaderData();
  const { title, course_fee, duration, image_url, author } = data;
  const handlePayment = (e) => {
    e.preventDefault();
    toast.success("Please verify your email.");
  };
  return (
    <div className="mt-5 max-w-lg mx-auto h-screen">
      <Card horizontal={true} imgSrc={image_url}>
        <form onSubmit={handlePayment}>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Course Name: {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Duration: {duration}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Course Fee: {course_fee} BDT
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Trainer: {author.name}
          </p>
          <TextInput
            type="text"
            placeholder="Enter Transaction ID"
            required={true}
          />
          <Button type="submit" className="mt-2">
            Pay Now
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Enrollment;
