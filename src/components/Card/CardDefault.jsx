import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { Link } from 'react-router-dom';
const CardDefault = ({item}) => {
    const{id,title,category,bg_color,text_bg}=item||{}
    return (
        <div>
            <Link to={`/donation-details/${id}`}>
            <Card style={{backgroundColor:bg_color}} className="mt-6 overflow-hidden 
            cursor-pointer h-[350px]">
            <CardHeader color="blue-gray" className="m-0 rounded-none">
                <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Button style={{backgroundColor:text_bg}} size='sm' className='mb-3 shadow-none'>{category}</Button>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                {title}
                </Typography>
            </CardBody>
        </Card>
            </Link>
        </div>
    );
};

export default CardDefault;