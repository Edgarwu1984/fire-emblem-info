import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

type FormData = {
  fullname: string;
  email: string;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { fullname, email, message }: FormData = JSON.parse(req.body);

    // Setup mail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_APP_USER,
        pass: process.env.NEXT_PUBLIC_APP_PASS,
      },
    });

    if (fullname && email && message) {
      await transporter.sendMail({
        to: 'ezwu.dev@gmail.com',
        text: 'Fire Emblem Info',
        subject: `A Message from ${fullname}`,
        html: `
        <div>
        <strong>Full Name: </strong> ${fullname}
        </div>
        <div>
        <strong>Email: </strong> ${email}
        </div>
        <p>${message}</p>
        `,
      });

      res.status(200).json({ status: 'success', message: `Email sent` });
    } else {
      res
        .status(400)
        .json({ status: 'error', message: `Something going wrong.` });
    }
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export default handler;
