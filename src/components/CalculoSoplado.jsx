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
    const [conTurno,setConTurno] = useState(0);
    const [conDia,setConDia] = useState(0);
    const [cosTurno,setCosTurno] = useState(0);
    const [cosDia,setCosDia] = useState(0);

    const [conTurnoP,setConTurnoP] = useState(0);
    const [conDiaP,setConDiaP] = useState(0);
    const [cosTurnoP,setCosTurnoP] = useState(0);
    const [cosDiaP,setCosDiaP] = useState(0);

    const [cosDiaA,setCosDiaA] = useState(0);
    const [ROI, setROI] = useState(0);





    // Estado para almacenar las opciones seleccionadas
  const [horasPorTurno, setHorasPorTurno] = useState('6');
  const [turnosPorDia, setTurnosPorDia] = useState('1');
  const [tipoBoquilla, setTipoBoquilla] = useState('Atto');
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
  };

  const formatearComoDinero = (numero) => {
    const formatoDinero = new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'COP'
    });

    return formatoDinero.format(numero);
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
    }, [formData,tipoBoquilla,turnosPorDia,horasPorTurno]);
  
  
    // Función para realizar los cálculos
    const calcularResultados = () => {

        const TempAmb = parseFloat(formData.TempAmb);
        const TempInt = parseFloat(formData.TempInt);
        const TempExt = parseFloat(formData.TempExt);
        const TempIntD = parseFloat(formData.TempIntD);
        
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

        var conturno = ctsr * 60 * parseFloat(horasPorTurno);
        var condia = conturno * parseFloat(turnosPorDia);
        var costurno = conturno*Scf;
        var cosdia = condia*Scf;
        var conturnoP = consumot * 60 * parseFloat(horasPorTurno);
        var condiaP = conturnoP * parseFloat(turnosPorDia);
        var costurnoP = conturnoP*Scf;
        var cosdiaP = condiaP*Scf;

        var cosdiaA = cosdia-cosdiaP;

        var cosBoquillas= TempExt*precioSeleccionado;
        var roi = cosBoquillas/ahorrocd;

        setSCF(formatearComoDinero(Scf.toFixed(2)));
        setCTI(cti);
        setCTSR(ctsr);
        setCCD(formatearComoDinero(ccd.toFixed(2)));
        setConsumoT(consumot.toFixed(2));
        setComparacionC(comparacionc.toFixed(2));
        setAhorroCH(formatearComoDinero(ahorroch.toFixed(2)));
        setAhorroCD(formatearComoDinero(ahorrocd.toFixed(2)));
        setConTurno(conturno.toFixed(2))
        setConDia(condia.toFixed(2));
        setCosTurno(formatearComoDinero(costurno.toFixed(2)));
        setCosDia(formatearComoDinero(cosdia.toFixed(2)));
        setConTurnoP(conturnoP.toFixed(2))
        setConDiaP(condiaP.toFixed(2));
        setCosTurnoP(formatearComoDinero(costurnoP.toFixed(2)));
        setCosDiaP(formatearComoDinero(cosdiaP.toFixed(2)));
        setCosDiaA(formatearComoDinero(cosdiaA.toFixed(2)))
        setROI(roi.toFixed(2))

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
                    <div className="row mb-3 justify-content-center">
                        <div className='col-md-6'>
                            <label htmlFor="TempInt" className="form-label">Ingrese el precio del KwH:</label>
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
                            <span className="input-group-text">($/KwH)</span>
                            </div>
                        </div>
                    </div>

                <div className="row mb-3 justify-content-center">
                    <div className='col-md-6'>
                        <label htmlFor="TempAmb" className="form-label">Ingrese el número de boquillas presentes en el sistema actual</label>

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
                            <span className="input-group-text">#</span>
                        </div>
                    </div>
                    
                </div>
                <div className="row mb-3 justify-content-center">
                    <div className='col-md-6'>
                    <label htmlFor="TempIntD" className="form-label">Ingrese la descarga de aire a través de las boquillas:</label>

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
                            <span className="input-group-text">SCFM</span>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
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
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-4">
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
                <h3>Cálculos Preliminares del Sistema</h3>
                <div className="row mt-4 dflex justify-content-center">
                    <div className="col-md-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className='text-center' scope="col">valor de un SCF en $ COP</th>
                                    <th className='text-center' scope="col ">consumo total ideal del sistema sin perdidas por fricción</th>
                                    <th className='text-center' scope="col">consumo total real del sistema</th>
                                    <th className='text-center' scope="col">Costo de consumo en un día</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td className='text-center'>{SCF}</td>
                                <td className='text-center'>{CTI}</td>
                                <td className='text-center'>{CTSR}</td>
                                <td className='text-center'>{CCD}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <h2 className='mt-5'>Solución Propuesta por Global Automation</h2>
                <div className="row mt-4 justify-content-center">

                <div className="col-md-4">
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
                <div className="mb-3 col-md-4">
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
                <div className="row mt-4 justify-content-center">
                    <div className="col-md-8">
                        <table className="table">
                        <thead>
                            <tr>
                                <th className='text-center' scope="col">Consumo total solución propuesta</th>
                                <th className='text-center' scope="col">Comparación de consumo entre solución propuesta y consumo actual</th>
                                <th className='text-center' scope="col">Ahorro en costo por hora</th>
                                <th className='text-center' scope="col">Ahorro en costo por día</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className='text-center'>{consumoT}</td>
                            <td className='text-center'>{comparacionC}</td>
                            <td className='text-center'>{ahorroCH}</td>
                            <td className='text-center'>{ahorroCD}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
                <p>A continuación, se muestra una tabla comparativa de consumo y costos entre el sistema propuesto por Global Automation y el sistema actual</p>
                <h3 className='mt-5'>Tabla Comparativa</h3>
                <div className="row mt-4 justify-content-center">
                    <div className="col-md-9">
                        <table className="table mt-3">
                            <thead>
                                <tr>
                                    <th className='text-center' scope="col">Tipo de Soplado</th>

                                    <th className='text-center' scope="col">Consumo de Aire (SCFM)</th>
                                    <th className='text-center' scope="col">Consumo en un turno (SCFM)</th>
                                    <th className='text-center' scope="col">Consumo por día (SCFM)</th>
                                    <th className='text-center' scope="col">Costo por turno</th>
                                    <th className='text-center' scope="col">Costo por día</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sistema actual</td>
                                    <td className='text-center'>{CTSR}</td>
                                    <td className='text-center'>{conTurno}</td>
                                    <td className='text-center'>{conDia}</td>
                                    <td className='text-center'>{cosTurno}</td>
                                    <td className='text-center'>{cosDia}</td>

                                </tr>
                                <tr>
                                    <td>Solución propuesta por Global Automation</td>
                                    <td className='text-center'>{consumoT}</td>
                                    <td className='text-center'>{conTurnoP}</td>
                                    <td className='text-center'>{conDiaP}</td>
                                    <td className='text-center'>{cosTurnoP}</td>
                                    <td className='text-center'>{cosDiaP}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h4>Ahorro en Costos por día: ${cosDiaA}</h4>
                    <h4>Retorno de la Inversión (ROI): {ROI} Dias</h4>

                </div>
        </div>
    </>
  )
}
