import { useEffect, useState } from "react";

export const Generos  = () => {
    const [genero, setGenero] = useState([])

    const API_URL = "http://localhost:3000";
    const GENERO_ENDPOINT = "genero";

    const getGenero = async () => {
        const response = await fetch(${API_URL}/${GENERO_ENDPOINT})
        const data = await response.json();
        setGenero (data)
    }

    useEffect(() => {
        getGenero();
    }, []);

    return (
        <div>

            <div>
                <h2>Genero</h2>
            {genero.map((genero: any) => (
            <div key={genero.id}>{genero.name}</div>
            ))}
            </div>
        </div>
    )
}