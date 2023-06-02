import { useState } from "react";


export interface IUser {
    name: string;
    age: number | string;
    location: string;
}

const HelloWorld = () => {

    const [name, setName] = useState<string>("")
    const [age, setAge] = useState<number | string>("")
    const [location, setLocation] = useState<string>("Hanoi")

    const [users, setUsers] = useState<IUser[]>([])

    const handleSubmit = () => {

        const newUser = {
            name: name,
            age: age,
            location: location
        }
        setUsers([...users, newUser])
    }
    return (
        <div>
            <h5>Hello World!!! So Now Let me Know Who You Are</h5>
            <div>
                <div>
                    Name
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    Age
                    <input
                        type="text"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                </div>
                <div>
                    Location
                    <select
                        onChange={(event) => setLocation(event.target.value)}
                    >
                        <option value="Hanoi">Hanoi</option>
                        <option value="Toronto">Toronto</option>
                        <option value="New York">New York</option>
                    </select>
                </div>
                <button
                    onClick={() => handleSubmit()}
                >Submit</button>
            </div>
            <div>
                <div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Location</th>
                        </tr>
                        {users && users.length > 0 &&
                            users.map(user => {
                                return (
                                    <tr>
                                        <th>{user.name}</th>
                                        <th>{user.age}</th>
                                        <th>{user.location}</th>
                                    </tr>
                                )
                            })
                        }


                    </table>
                </div>
            </div>
        </div>
    )
}

export default HelloWorld;