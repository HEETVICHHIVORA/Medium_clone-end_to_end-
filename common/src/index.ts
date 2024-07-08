import z from 'zod'
export const signupend = z.object({
    email : z.string().email(),
    password : z.string().min(8),
    name : z.string().optional()
})
export type Signupend = z.infer<typeof signupend>
export const signinend = z.object({
    email : z.string().email(),
    password : z.string().min(8)
})
export type Signinend = z.infer<typeof signinend>
export const createblog = z.object({
    title : z.string(),
    content : z.string()
})
export type Createblog = z.infer<typeof createblog>
export const updateblog = z.object({
    title : z.string(),
    content : z.string(),
    id:z.string()
})
export type Updatblog = z.infer<typeof updateblog>