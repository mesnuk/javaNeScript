let data = [
    {
        id: 1,
        name: 'Кафедра Інформаційних Технологій'
    },
    {
        id: 2,
        name: 'Кафедра Філології'
    },
]
export default async function handler(req: any, res:any) {
    res.setHeader('Cache-Control', 'public, s-maxage, stale-while-revalidate=600')
    res.status(200).json(data)
}