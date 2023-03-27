let data = [
    {
        id: 1,
        name: 'Силабус 1',
        title : 'Силабус КН',
        description : 'Силабус',
        duration : 90,
        author : 1,
        created_date : new Date(),
        approver : 2,
    },
    {
        id: 2,
        name: 'Силабус 2',
        title : 'Силабус ІПЗ',
        description : 'Силабус',
        duration : 90,
        author : 2,
        created_date : new Date(),
        approver : 1,

    },
]
export default async function handler(req: any, res:any) {
    res.setHeader('Cache-Control', 'public, s-maxage, stale-while-revalidate=600')
    res.status(200).json(data)
}