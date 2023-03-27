let data = [
    {
        id: 1,
        name: 'Основи Програмуванняя'
    },
    {
        id: 2,
        name: 'Математичний аналіз'
    },
]
export default async function handler(req: any, res:any) {
    res.setHeader('Cache-Control', 'public, s-maxage, stale-while-revalidate=600')
    res.status(200).json(data)
}