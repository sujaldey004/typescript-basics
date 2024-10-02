import { z } from 'zod';
import express from "express";

const app = express();

const userProfileSchema = z.object({
    name : z.string(),
    email : z.string().email(),
    age : z.number().optional()
});

type FinalUserSchema = z.infer<typeof userProfileSchema>

app.put("/users", (req, res)=>{
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody : FinalUserSchema = req.body;

    if(!success){
        res.status(411).json({});
        return
    }

    res.json({
        message: "User updated"
    })

})

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
})