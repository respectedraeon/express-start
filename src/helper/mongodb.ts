
import mongoose from "mongoose"
import Config from "../config"

export const init = async() => {
    try {
        await mongoose.connect(Config.db.MONGODB_CONNECTION_URI)
        console.log("DATABASE : Connected successfully")
    } catch (error) {
        console.error("DATABASE : Connected failed", error)
    }
    
}