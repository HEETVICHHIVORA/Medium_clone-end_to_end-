import { Hono } from 'hono'
import {PrismaClient} from '@prisma/client/edge'
import {withAccelerate} from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
export const blogRoute = new Hono<{
	Bindings: {
		DATABASE_URL: string
    JWT_SECRET:string
	}
    Variables:{
        userId : string;
    }
}>();
blogRoute.use("/*", async (c,next) => { 

    const authHeader = c.req.header("authorization") || "";
    try {
        const user = await verify(authHeader, c.env.JWT_SECRET);
    if (user) {
      //@ts-ignore
      c.set('userId', user.id); // Use req for setting context
      await next();
      
    }
    else {
        c.status(403); // Use req for setting status
        return c.json({
          message: "not logged in!"
        })
      }
    }
    catch{
            c.status(403); // Use req for setting status
            return c.json({
              message: "not logged in!"
            })
    }
  })
  blogRoute.post('/', async (c) => {
	const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: userId
		}
	});
	return c.json({
		id: post.id
	});
})

blogRoute.put("/",async(c)=>{
    const body = await c.req.json();
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
    await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content,
        }
    })
    return c.json({
        id:body.id
    })
})
blogRoute.get("/bulk",async(c)=>{
   // const body = await c.req.json();
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
    const blogs =await prisma.post.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    });
    return c.json({
        blogs
    })
})

blogRoute.get('/:id',async(c)=>{
    const id = await c.req.param("id");
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
   const blog= await prisma.post.findFirst({
        where:{
            id:id
        },
        select:{
            id:true,
            title:true,
            content:true,
            author:{
                select:{
                    name:true
                }            
            
            }
        }
    })
    return c.json({
        blog
    })
})
