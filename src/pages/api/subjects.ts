import axios from "axios";

export default async function handler(req: any, res:any) {
    if (req.method === 'GET') {
        const response = await axios.get('http://localhost:8080/api/subjects')
        res.status(200).json(await response.data);
    } else if (req.method === 'POST') {
        const response = await axios.post('http://localhost:8080/api/subjects', req.body)
        res.status(201).json(response.data);
    } else if (req.method === 'PUT') {
        const response = await axios.put(`http://localhost:8080/api/subjects/${req.body.id}`, req.body)
        res.status(201).json(response.data);
    }  else {
        // Handle unsupported methods
        res.setHeader('Allow', ['GET', 'POST', "PUT"]);
        res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
}