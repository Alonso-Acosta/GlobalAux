import React,{useState,useEffect} from 'react'

export default function CalculoSoplado() {
    
    const [SCF, setSCF] = useState(0);
    const [CTI, setCTI] = useState(0);
    const [CTSR, setCTSR] = useState(0);
    const [CCD, setCCD] = useState(0);
    const [consumoT,setConsumoT] = useState(0);
    const [comparacionC,setComparacionC] = useState(0);
    const [ahorroCH,setAhorroCH] = useState(0);
    const [ahorroCD,setAhorroCD] = useState(0);






    // Estado para almacenar las opciones seleccionadas
  const [horasPorTurno, setHorasPorTurno] = useState('');
  const [turnosPorDia, setTurnosPorDia] = useState('');
  const [tipoBoquilla, setTipoBoquilla] = useState('');
  const [datosBoquilla, setDatosBoquilla] = useState({
    Atto: { consumo: 2.5, precio: 517000 },
    Pico: { consumo: 4.9, precio: 545200 },
    Nano: { consumo: 8.3, precio: 559300 },
    Mini: { consumo: 10, precio: 568700 },
    "1” Flat Super": { consumo: 10.5, precio: 418300 },
    "2” Flat Super": { consumo: 21.85, precio: 620400 },
    "3” Super cuchilla": { consumo: 8.7, precio: 2951600 },
    "6” Super cuchilla": { consumo: 17.4, precio: 3698900 },
    "9” Super cuchilla": { consumo: 23, precio: 5024300 },
  });

  // Manejadores de cambio para actualizar el estado cuando cambia la selección
  const handleHorasChange = (e) => {
    setHorasPorTurno(e.target.value);
  };

  const handleTurnosChange = (e) => {
    setTurnosPorDia(e.target.value);
  };
  const handleBoquillaChange = (e) => {
    setTipoBoquilla(e.target.value);
    handleFormChange();
  };

  

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
        const consumoSeleccionado = datosBoquilla[tipoBoquilla]?.consumo || '';
        const precioSeleccionado = datosBoquilla[tipoBoquilla]?.precio || '';
      
        var Scf = (((1*0.746/1)/0.9)*TempInt)/(4*60);
        var cti = TempAmb*TempIntD;
        var ctsr = cti-(cti*0.2);
        var ccd = ctsr*60*24*Scf;
        var consumot = TempExt * consumoSeleccionado;
        var comparacionc = ctsr - consumot;
        var ahorroch = (ccd-(consumot*60*24*Scf))/24;
        var ahorrocd = (ccd-(consumot*60*24*Scf));



        setSCF(Scf.toFixed(2));
        setCTI(cti);
        setCTSR(ctsr);
        setCCD(ccd.toFixed(2));
        setConsumoT(consumot);
        setComparacionC(comparacionc);
        setAhorroCH(ahorroch);
        setAhorroCD(ahorrocd);

    };
  
    // Llama a la función de cálculo cada vez que cambia algún valor en el formulario
    const handleFormChange = () => {
      calcularResultados();
    };
  


  return (
    <>
        <div>
                <h4>Ahorro en el Consumo de Aire Comprimido</h4>
                <div className="container">
                    <div className="row mb-3">
                        <div className='col-md-6'>
                            <label htmlFor="TempInt" className="form-label">Ingrese el precio del KwH:</label>
                        </div>
                        <div className='col-md-6'> 
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
                            <span className="input-group-text">($/KwH)</span>
                            </div>
                        </div>
                    </div>

                <div className="row mb-3">
                    <div className='col-md-6'>
                        <label htmlFor="TempAmb" className="form-label">Ingrese el número de boquillas presentes en el sistema actual</label>

                    </div>
                    <div className='col-md-6'>
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
                            <span className="input-group-text">#</span>
                        </div>
                    </div>
                    
                </div>
                <div className="row mb-3">
                    <div className='col-md-6'>
                    <label htmlFor="TempIntD" className="form-label">Ingrese la descarga de aire a través de las boquillas:</label>

                    </div>
                    <div className='col-md-6'>
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
                            <span className="input-group-text">SCFM</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label>Indique el número de horas por turno:</label>
                        <select
                            className="form-select"
                            value={horasPorTurno}
                            onChange={handleHorasChange}
                        >
                            <option value="6">6 horas</option>
                            <option value="8">8 horas</option>
                            <option value="12">12 horas</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label>Indique el número de turnos por día:</label>
                        <select
                            className="form-select"
                            value={turnosPorDia}
                            onChange={handleTurnosChange}
                        >
                            <option value="1">1 turno</option>
                            <option value="2">2 turnos</option>
                            <option value="3">3 turnos</option>
                        </select>
                    </div>
                </div>
                </div>
                <div className="mt-4">
                    <h3>Cálculos Preliminares del Sistema</h3>
                    <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">valor de un SCF en $ COP</th>
                            <th scope="col">consumo total ideal del sistema sin perdidas por fricción</th>
                            <th scope="col">consumo total real del sistema</th>
                            <th scope="col">Costo de consumo en un día</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{SCF}</td>
                        <td>{CTI}</td>
                        <td>{CTSR}</td>
                        <td>{CCD}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <h4>Solución Propuesta por Global Automation</h4>
                <div className="row">

                <div className="col-md-6">
                    <label>Elija un tipo de boquilla o cuchilla:</label>
                    <select
                        className="form-select"
                        value={tipoBoquilla}
                        onChange={handleBoquillaChange}
                    >
                        {Object.keys(datosBoquilla).map((boquilla) => (
                        <option key={boquilla} value={boquilla}>
                            {boquilla}
                        </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="TempExt" className="form-label">Indique el número de boquillas o cuchillas:</label>
                    <div className="input-group">
                        <input
                        type="number"
                        className="form-control"
                        id="TempExt"
                        name="TempExt"
                        min={0}
                        value={formData.TempExt}
                        onChange={(e) => { handleChange(e);}}
                        required
                        />
                        <span className="input-group-text">#</span>
                    </div>
                </div>
                </div>
                <div className="mt-4">
                    <h3>Solución Propuesta por Global Automation</h3>
                    <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Consumo total solución propuesta</th>
                            <th scope="col">Comparación de consumo entre solución propuesta y consumo actual</th>
                            <th scope="col">Ahorro en costo por hora</th>
                            <th scope="col">Ahorro en costo por día</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{SCF}</td>
                        <td>{CTI}</td>
                        <td>{CTSR}</td>
                        <td>{CCD}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <p>A continuación, se muestra una tabla comparativa de consumo y costos entre el sistema propuesto por Global Automation y el sistema actual</p>
                <div className="mt-4">
                    <h3>Tabla Comparativa</h3>
                    <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Tipo de Soplado</th>

                            <th scope="col">Consumo de Aire (SCFM)</th>
                            <th scope="col">Consumo en un turno (SCFM)</th>
                            <th scope="col">Consumo por día (SCFM)</th>
                            <th scope="col">Costo por turno</th>
                            <th scope="col">Costo por día</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sistema actual</td>
                            <td>{SCF}</td>
                            <td>{CTI}</td>
                            <td>{CTSR}</td>
                            <td>{CCD}</td>
                        </tr>
                        <tr>
                            <td>Solución propuesta por Global Automation</td>
                            <td>{SCF}</td>
                            <td>{CTI}</td>
                            <td>{CTSR}</td>
                            <td>{CCD}</td>
                        </tr>
                    </tbody>
                    </table>
                    <h4>Ahorro en Costos por día: ${SCF}</h4>
                </div>
        </div>
    </>
  )
}
