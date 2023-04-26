import axios from "axios";
import {useCallback, useEffect, useState} from "react";

export default function Subjects({data}) {
    const [subjects, setSubjects] = useState(data.map(el => ({...el, showToggleBtns: false,})));
    const [current, setCurrent] = useState();
    const [updateId, setUpdateId] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.put('/api/subjects', {
            id: updateId,
            name: e.target[`subject${updateId}`].value
        })
        handleCancel(updateId)


    }

    const handleCancel = (id) => {
        setSubjects(prev => prev.map(el => el.id == id ? ({...el, showToggleBtns: false}) : el))
    };
    const handleClick = useCallback(id => {
        if(current !== id) {
            setSubjects(prev => prev.map(el => el.id == id ? ({...el, showToggleBtns: true}) : el))
            setCurrent(id);
        }
    },[current])

    const handleBlur = () => {
        setCurrent(null);
    }

    const handleChange = () => {

    }
    return (
        <form onSubmit={handleSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        subjects && subjects.map((el) => <tr key={el.id}>
                            <td><input name={'subject' + el.id} type="text" defaultValue={el.name} onClick={() => handleClick(el.id)} onBlur={handleBlur}/></td>
                            <td>{el.showToggleBtns && <><button type='submit' onClick={() => setUpdateId(el.id)}>submit</button> <button onClick={() => handleCancel(el.id)}>cancel</button></>}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            {/*<form onSubmit={handleSubmit}>*/}
            {/*    <input type="text" name='subject' />*/}
            {/*    <button>submit</button>*/}
            {/*</form>*/}
        </form>
    )
}


export async function getServerSideProps () {
    const res = await fetch('http://localhost:3000/api/subjects')
    const data = await res.json();


    return {
        props: {
            data: data
        }
    }
}