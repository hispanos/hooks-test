import React, {useState, useRef, useEffect} from 'react'

const FormState = () => {

    const [data, setData] = useState({
        name: "",
        email: ""
    });
    const [alert, setAlert] = useState({
        status: false,
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setAlert({
            ...alert,
            status: true,
            message: `Datos guardados! Nombre: ${data.name}, Email: ${data.email}`
        });
        console.log(data)
    }

    const handleChange = ({target}) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    useEffect(() => {
        refName.current.focus()
        return () => {
            
        }
    }, [])

    const refName = useRef()

    return (
        <div className="container">
            {alert.status && 
            <div className="alert alert-primary" role="alert">
                {alert.message}
            </div>
            }
            <h1>Formulario</h1>
            <form 
                className="form-group"
                onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    className="form-control" 
                    name="name"
                    placeholder="Nombre"
                    onChange= {handleChange}
                    value={data.name}
                    ref= {refName}
                />
                <input 
                    type="email" 
                    className="form-control" 
                    name="email"
                    placeholder="Correo"
                    onChange= {handleChange}
                    value= {data.email}
                />
                <button 
                    className="btn btn-danger"
                >Enviar
                </button>
            </form>
        </div>
    )
}

export default FormState