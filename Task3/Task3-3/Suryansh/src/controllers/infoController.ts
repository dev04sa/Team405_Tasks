import express, { Request, Response } from 'express';

export const getInfoAboutRoutes=async(req:Request,res:Response)=>{
    try {
          const info="Information about the routes \n | \n | \n   GET(project/{id})->to get info about the indivisual project (id)->(mentioned in the URL) id your project id \n \n POST(project/{userId})->to add a project (userId)->(mentioned in the URL) id of your user account  \n \n    PATCH(project/{id})->to modify the description of the project \n  \n     DELETE(project/{id})->to delete a project (id)->(mentioned in the URL) id your project id \n  \n  GET(/Contact):-> to get my developer's information \n  \n  GET(/home):->to get home text \n \n GET(/about):->to get about text \n \n PUT(/about):->to replace about text (provide in body:{'about':'about text'})\n \n PUT(/home):->to replace home text (provide in body:{'home':'home text'})"
        res.send(info);
    } catch (error) {
        res.status(404).json('error in to get the information about routes');
    }
}