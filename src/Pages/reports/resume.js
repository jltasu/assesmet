import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const VocacionalReport = () => {
    return (
        <div className="container site-section">
            <div className="row justify-content-center text-center mb-5">
                <div className="col-md-6">
                    <span className="text-primary">Finalmente llegamos a tus resultados</span>
                    <h2 className="mb-4">¡Luis!</h2>
                    <p>El test tiene como finalidad hacerte recomendaciones personalizadas basadas en el
                    test que completaste: en definitiva recomendaciones adaptadas a tu perfil.
                    </p>
                    <div className="mr-auto cold-md-2">
                        <Link to='/asessments/results'><Button type="primary" shape="round" size="large">Explorar mis resultados</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VocacionalReport