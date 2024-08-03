"use server"
import { InputUser, IUser } from "./types"
import Database from "better-sqlite3"
const db = new Database("test.db")

export const getAllUser = (): IUser[] => {
    return db.prepare(`SELECT * FROM users`).all() as IUser[]
}

export const  addUser = (user: InputUser) => {
    return  db.prepare(`
        INSERT INTO users(name,surname,username,salary)
        VALUES(@name,@surname,@username,@salary)
        `).run(user)
}

export const getUserByUsername = (username: string) => {
    return db.prepare(`SELECT * FROM users WHERE username=?`).get(username)
}