import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import useDonationData from '../../Hooks/useDonationData';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
  import { Button } from "@material-tailwind/react";

const DonationDetails = () => {
    const[singleData,setSingleData]=useState({});
    const{id}=useParams();
    const{data,loading}=useDonationData();
    useEffect(()=>{
        if(data){
            const singleData = data.find(item=>item.id === +id);
            // console.log(singleData);
            setSingleData(singleData)
        }
    },[data,id])
    const {title,category,bg_color,text_bg,description,money}=singleData || {}
    return (
        <div className='max-w-7xl mx-auto'>
           <Card className="w-full mt-12 overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none relative"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
        <div className='absolute bg-black opacity-40 bottom-0 w-full h-28 pl-8'>
        <Button style={{backgroundColor:text_bg}} className="mt-10 capitalize text-lg">Donate {money}</Button>
        </div>
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {category}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {description}
        </Typography>
      </CardBody>
    </Card>
        </div>
    );
};

export default DonationDetails;