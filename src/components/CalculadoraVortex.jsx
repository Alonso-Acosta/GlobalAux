import React,{useState, useEffect} from 'react'
import "../css/calculator.css"


export default function CalculadoraVortex() {

 
    ////RODAMIENDO DE BOLA 
    const [sistemasVortex, setSistemasVortex] = useState(0);
  
  
  
    const [formData, setFormData] = useState({
        TempInt: 0,
        TempAmb: 0,
        TempIntD: 0,
        TempExt: 0,
        AltTab: 0,
        AncTab: 0,
        ProfTab:0,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    useEffect(() => {
      handleFormChange();
    }, [formData]);
  
  
    // Función para realizar los cálculos
    const calcularResultados = () => {

        const TempAmb = parseFloat(formData.TempAmb);
        const TempInt = parseFloat(formData.TempInt);
        const TempExt = parseFloat(formData.TempExt);
        const TempIntD = parseFloat(formData.TempIntD);
        const AltTab = parseFloat(formData.AltTab);
        const AncTab = parseFloat(formData.AncTab);
        const ProfTab = parseFloat(formData.ProfTab);


        var difT = Math.abs(TempAmb - TempInt);
        var difTD = Math.abs(TempExt-TempIntD);
        var difTKcal = 2.0484*(difT)-1.4956;
        var difTDKcal = 2.0484*(difTD)-1.4956;
        var sumDif = difTKcal+difTDKcal;
        console.log(difTKcal + " " +difTDKcal);
        var A1 = ProfTab*AltTab*2;
        var A2 = AncTab*AltTab*2;
        var A3 = ProfTab*AncTab*2;



        var AT = A1+A2+A3;

    
        console.log(AT + " " +sumDif);
        const sistemasVortex = sumDif*AT;
        setSistemasVortex(sistemasVortex.toFixed(3));
   
    };
  
    // Llama a la función de cálculo cada vez que cambia algún valor en el formulario
    const handleFormChange = () => {
      calcularResultados();
    };
  
  
  
  
  
    //



  return (
    <>
    <div>
    <div class="accordion textColor" id="accordion">
        
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Sistema Internacional
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordion">
            <div class="accordion-body">
                <p>En esta sección usted podrá calcular la carga de calor total de su gabinete eléctrico o electrónico en Kcal/hora, para realizar este cálculo deberá ingresar los parámetros de temperatura solicitados en grados centígrados [°C] y las dimensiones del tablero en metros [m], según el Sistema Internacional de medidas.</p>
                <h4>Coeficiente de Transferencia de Calor</h4>
                <p>Por favor ingrese los valores de temperatura solicitados :</p>
                <div className="container">
                    <div className="row mb-3">
                        <label htmlFor="TempInt" className="form-label">Temperatura interna del tablero:</label>
                        <div className="input-group">
                        <input
                            type="number"
                            className="form-control"
                            id="TempInt"
                            name="TempInt"
                            value={formData.TempInt}
                            onChange={(e) => { handleChange(e); }}
                            step="0.1"
                            required
                        />
                        <span className="input-group-text">°C</span>
                        </div>
                    </div>

                <div className="mb-3">
                    <label htmlFor="TempAmb" className="form-label">Temperatura ambiente:</label>
                    <div className="input-group">
                        <input
                        type="number"
                        className="form-control"
                        id="TempAmb"
                        name="TempAmb"
                        value={formData.TempAmb}
                        onChange={(e) => { handleChange(e);}}
                        required
                        />
                        <span className="input-group-text">°C</span>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="TempIntD" className="form-label">Temperatura interna deseada:</label>
                    <div className="input-group">
                        <input
                        type="number"
                        className="form-control"
                        id="TempIntD"
                        name="TempIntD"
                        value={formData.TempIntD}
                        onChange={(e) => { handleChange(e);}}
                        required
                        />
                        <span className="input-group-text">°C</span>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="TempExt" className="form-label">Temperatura externa máxima:</label>
                    <div className="input-group">
                        <input
                        type="number"
                        className="form-control"
                        id="TempExt"
                        name="TempExt"
                        value={formData.TempExt}
                        onChange={(e) => { handleChange(e);}}
                        required
                        />
                        <span className="input-group-text">°C</span>
                    </div>
                </div>
                
                <h4>Área del Gabinete en Contacto</h4>
                <p>Ingrese las dimensiones del gabinete:</p>
                <div className="mb-3">
                    <label htmlFor="AltTab" className="form-label">Altura del tablero</label>
                    <div className="input-group">
                        <input
                        type="number"
                        className="form-control"
                        id="AltTab"
                        name="AltTab"
                        value={formData.AltTab}
                        onChange={(e) => { handleChange(e);}}
                        required
                        />
                        <span className="input-group-text">Metros</span>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="AncTab" className="form-label">Ancho del tablero:</label>
                    <div className="input-group">
                        <input
                        type="number"
                        className="form-control"
                        id="AncTab"
                        name="AncTab"
                        value={formData.AncTab}
                        onChange={(e) => { handleChange(e);}}
                        required
                        />
                        <span className="input-group-text">Metros</span>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="ProfTab" className="form-label">Profundidad del tablero:</label>
                    <div className="input-group">
                        <input
                        type="number"
                        className="form-control"
                        id="ProfTab"
                        name="ProfTab"
                        value={formData.ProfTab}
                        onChange={(e) => { handleChange(e);}}
                        required
                        />
                        <span className="input-group-text">Metros</span>
                    </div>
                </div>
                
                </div>
                <div className="mb-3">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Carga de calor total :</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{sistemasVortex}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    </div>
    </div>
    </>
  )
}
