import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        apiUrl: process.env.BACKEND_URL
    })
}
