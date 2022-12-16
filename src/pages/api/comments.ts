import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const comments = async (req: NextApiRequest, res: NextApiResponse) => {
  const METHOD = req.method;
  if (METHOD === "GET") {
    try {
      const comments = await prisma.comment.findMany();
      res.status(200).json(comments);
    } catch (error) {
      console.log(error);
    }
  }

  if (METHOD === "POST") {
    const { body } = req;
    try {
      const comments = await prisma.comment.create({
        data: {
          user: body.user,
          content: body.content
        }
      });
      res.status(200).json(comments);
    } catch (error) {
      console.log(error);
    }
  }
};

export default comments;
