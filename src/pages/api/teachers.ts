let data = [
    {
        id: 1,
        firstName: 'Аннич',
        lastName: 'Андрій',
        email : 'annych@mail.com',
        assignedRank : 'Виклдач'

    },
    {
        id: 1,
        firstName: 'Козич',
        lastName: 'Олег',
        email : 'kozych@mail.com',
        assignedRank : 'Старший викладач'
    },
]
export default async function handler(req: any, res:any) {
    res.setHeader('Cache-Control', 'public, s-maxage, stale-while-revalidate=600')
    res.status(200).json(data)
}