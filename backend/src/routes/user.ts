import { Hono } from 'hono'
import {PrismaClient} from '@prisma/client/edge'
import {withAccelerate} from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
 export const userRoute = new Hono<{
	Bindings: {
		DATABASE_URL: string
    JWT_SECRET:string
	}
}>();
userRoute.post("signup",async(c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
	const body = await c.req.json();
	try {
		const user = await prisma.user.create({
			data: {
				name:body.name,
				username: body.username,
				password: body.password
			}
		});
	
		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json(jwt);
	} catch(e) {
		c.status(403);
		return c.json({ error: "error while signing up" });
	}
})
userRoute.post("/signin",async (c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
	const body = await c.req.json();
  
    const user = await prisma.user.findUnique({
      where: {
		name:body.name,
        username: body.username,
        password:body.password
      }
    })
    if(!user){
      c.status(403);
		  return c.json({ error: "user not found" });
    }
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	  return c.json({ jwt });
})