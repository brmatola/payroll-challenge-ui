import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const backendUrl = process.env.BACKEND_URL
    if (!backendUrl) throw new Error('No Backend Url configured')

    res.status(200).json({
        apiUrl: backendUrl
    })
}
