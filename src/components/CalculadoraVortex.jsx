import React,{useState, useEffect} from 'react'
import "../css/calculator.css"


export default function CalculadoraVortex() {


    const [selectedOption, setSelectedOption] = useState('Internacional');

    const handleRadioChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
  
 
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

        if(selectedOption === "Internacional"){
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
    
        
            const sistemasVortex = sumDif*AT;
            setSistemasVortex(sistemasVortex.toFixed(3));
        }else{
            var difT = Math.abs(TempAmb - TempInt);
            var difTD = Math.abs(TempExt-TempIntD);
            var difTKcal = 0.4237*(difT)-0.6469;
            var difTDKcal = 0.4237*(difTD)-0.6469;
            var sumDif = difTKcal+difTDKcal;
            console.log(difTKcal + " " +difTDKcal);
            var A1 = ProfTab*AltTab*2;
            var A2 = AncTab*AltTab*2;
            var A3 = ProfTab*AncTab*2;
            var AT = A1+A2+A3;
    
        
            const sistemasVortex = sumDif*AT;
            setSistemasVortex(sistemasVortex.toFixed(3));
        }
        
   
    };
  
    // Llama a la función de cálculo cada vez que cambia algún valor en el formulario
    const handleFormChange = () => {
      calcularResultados();
    };
  
  
  
  
  
    //



  return (
    <>
        <div>
                <h4>Selección de Sistema de Unidades</h4>
                <p>Por favor indique el tipo de unidad de los datos a ingresar :</p>
                <div className="d-flex justify-content-center">
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="Internacional"
                        checked={selectedOption === 'Internacional'}
                        onChange={handleRadioChange}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio1">
                        Internacional
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="Anglosajon"
                        checked={selectedOption === 'Anglosajon'}
                        onChange={handleRadioChange}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio2">
                        Anglosajón
                        </label>
                    </div>
                </div>
                <p>En esta sección usted podrá calcular la carga de calor total de su gabinete eléctrico o electrónico en Kcal/hora, para realizar este cálculo deberá ingresar los parámetros de temperatura solicitados en grados centígrados [°C] y las dimensiones del tablero en metros [m], según el Sistema Internacional de medidas.</p>
                <h4>Coeficiente de Transferencia de Calor</h4>
                <p>Por favor ingrese los valores de temperatura solicitados :</p>
                <div className="container">
                    <div className="row mb-3 justify-content-center">
                        <div className='col-md-6'>
                            <label htmlFor="TempInt" className="form-label">Temperatura interna del tablero:</label>
                        </div>
                        <div className='col-md-4'>
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
                                <span className="input-group-text">{selectedOption === 'Internacional' ? '°C' : '°F'}</span>
                            </div>
                        </div>
                    </div>
                <div className="row mb-3 justify-content-center">
                    <div className='col-md-6'>
                        <label htmlFor="TempAmb" className="form-label">Temperatura ambiente:</label>
                    </div>
                    <div className='col-md-4'>
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
                            <span className="input-group-text">{selectedOption === 'Internacional' ? '°C' : '°F'}</span>
                        </div>
                    </div>
                    
                </div>
                <div className="row mb-3 justify-content-center">
                    
                    <div className='col-md-6'>
                        <label htmlFor="TempIntD" className="form-label">Temperatura interna deseada:</label>
                    </div>
                    <div className='col-md-4'>
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
                            <span className="input-group-text">{selectedOption === 'Internacional' ? '°C' : '°F'}</span>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 justify-content-center">
                    <div className='col-md-6'>
                        <label htmlFor="TempExt" className="form-label">Temperatura externa máxima:</label>
                    </div>
                    <div className='col-md-4'>
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
                            <span className="input-group-text">{selectedOption === 'Internacional' ? '°C' : '°F'}</span>
                        </div>
                    </div>
                </div>
                
                <h4>Área del Gabinete en Contacto</h4>
                <p>Ingrese las dimensiones del gabinete:</p>
                <div className="row mb-3 justify-content-center">
                    
                    <div className='col-md-6'>
                        <label htmlFor="AltTab" className="form-label">Altura del tablero</label>
                    </div>
                    <div className='col-md-4'>
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
                            <span className="input-group-text">{selectedOption === 'Internacional' ? 'Metros' : 'Ft'}</span>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 justify-content-center">

                    <div className='col-md-6'>
                        <label htmlFor="AncTab" className="form-label">Ancho del tablero:</label>
                    </div>
                    <div className='col-md-4'>
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
                            <span className="input-group-text">{selectedOption === 'Internacional' ? 'Metros' : 'Ft'}</span>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 justify-content-center">

                     
                    <div className='col-md-6'>
                        <label htmlFor="ProfTab" className="form-label">Profundidad del tablero:</label>
                    </div>
                    <div className='col-md-4'>
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
                            <span className="input-group-text">{selectedOption === 'Internacional' ? 'Metros' : 'Ft'}</span>
                        </div>
                    </div>
                </div>
                </div>
                <h4>Carga de calor total : {sistemasVortex}</h4>
        </div>
    </>
  )
}
