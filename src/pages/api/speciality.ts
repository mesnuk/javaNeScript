let data = [
    {
        id: 1,
        name: 'Інженерія програмного забезпечення'
    },
    {
        id: 2,
        name: 'Комп\'ютерні науки'
    },
]
export default async function handler(req: any, res:any) {
    res.setHeader('Cache-Control', 'public, s-maxage, stale-while-revalidate=600')
    res.status(200).json(data)
}