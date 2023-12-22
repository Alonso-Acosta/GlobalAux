import React,{useState, useEffect} from 'react'
import "../css/calculator.css"

export default function CalculadoraLubriPerAceite() {

    const [heat, setHeat] = useState(0);
    const [extremShock, setExtremShock] = useState(0);
    const [particulate, setParticulate] = useState(0);
    const [water, setWater] = useState(0);
    const [hightSpeed, setHightSpeed] = useState(0);
    const [factorDeServicio, setFactorDeServicio] = useState(1.0);
  
    const handleInputChange = (value, setStateFunction) => {
      const sanitizedValue = parseFloat(value);
      if (!isNaN(sanitizedValue) && sanitizedValue >= 0 && sanitizedValue <= 3) {
        setStateFunction(sanitizedValue);
        calculateFactorDeServicio();
      }
    };
  
    const calculateFactorDeServicio = () => {
      const calculatedFactorDeServicio =
        (1 + heat + extremShock + particulate + water) * (1 - 0.05 * hightSpeed * hightSpeed);
  
      setFactorDeServicio(calculatedFactorDeServicio.toFixed(2));
    };
  
    const [selectedOption, setSelectedOption] = useState('mm');

    const handleRadioChange = (event) => {
      setSelectedOption(event.target.value);
    };


    ////RODAMIENDO DE BOLA 
    const [sistemasAutomaticos1h, setSistemasAutomaticos1h] = useState(0);
    const [sistemasAutomaticos1hin, setSistemasAutomaticos1hin] = useState(0);
  
  
  
    const [formData, setFormData] = useState({
      eje_mm: 0,
      filas: 0,
      fs: 1,
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
        var eje_mm =0
        if(selectedOption ==='in'){
            eje_mm = parseFloat(formData.eje_mm)*25.4;
        }else{
            eje_mm = parseFloat(formData.eje_mm);
        }
      const filas = parseInt(formData.filas);
      const fs = parseFloat(formData.fs);
  
      const sistemasAutomaticos1h = ((eje_mm * eje_mm) * fs * 0.001 * 25.4 * filas / 1000);
      const sistemasAutomaticos1hin = sistemasAutomaticos1h/16.387;
      setSistemasAutomaticos1h(sistemasAutomaticos1h.toFixed(3))
      setSistemasAutomaticos1hin(sistemasAutomaticos1hin.toFixed(3))
   
    };
  
    // Llama a la función de cálculo cada vez que cambia algún valor en el formulario
    const handleFormChange = () => {
      calcularResultados();
    };
  
  
  
  
  
    //// Cojinetes lisos bujes
    const [sistemasAutomaticos1h2, setSistemasAutomaticos1h2] = useState(0);
    const [sistemasAutomaticos1hin2, setSistemasAutomaticos1hin2] = useState(0);
  
    const [formData2, setFormData2] = useState({
      eje_mm2: 0,
      longitud_mm2: 0,
      fs2: 1,
    });
  
  
    const handleChange2 = (e) => {
      const { name, value } = e.target;
      setFormData2({
        ...formData2,
        [name]: value,
      });
    };
    useEffect(() => {
      handleFormChange2();
    }, [formData2]);
  
  
    const calcularResultados2 = () => {
        
        var eje_mm2 =0;
        var longitud_mm2 = 0;
        if(selectedOption ==='in'){
            eje_mm2 = parseFloat(formData2.eje_mm2)*25.4;
            longitud_mm2 = parseFloat(formData2.longitud_mm2)*25.4;
        }else{
            eje_mm2 = parseFloat(formData2.eje_mm2);
            longitud_mm2 = parseFloat(formData2.longitud_mm2);
        }
        const fs2 = parseFloat(formData2.fs2);
        const sistemasAutomaticos1h2 = (eje_mm2 * longitud_mm2* 0.001 * 25.4 * 3.1416*fs2  / 1000);
        console.log(sistemasAutomaticos1h2);
        const sistemasAutomaticos1hin2 = sistemasAutomaticos1h2/16.387;
        setSistemasAutomaticos1h2(sistemasAutomaticos1h2.toFixed(3));
        setSistemasAutomaticos1hin2(sistemasAutomaticos1hin2.toFixed(3));
  
    };
  
    const handleFormChange2 = () => {
      calcularResultados2();
    };
  
  
  
    /// Engranajes de Tornillo Sin Fin
  
    const [sistemasAutomaticos1h3, setSistemasAutomaticos1h3] = useState(0);
    const [sistemasAutomaticos1hin3, setSistemasAutomaticos1hin3] = useState(0);
  
    const [formData3, setFormData3] = useState({
      eje_mm3: 0,
      eje2_mm3: 0,
      longitud_mm3: 0,
      fs3: 1,
    });
  
  
    const handleChange3 = (e) => {
      const { name, value } = e.target;
      setFormData3({
        ...formData3,
        [name]: value,
      });
    };
  
  
    useEffect(() => {
      handleFormChange3();
    }, [formData3]);
  
  
    const calcularResultados3 = () => {
        var eje_mm3 =0;
        var eje2_mm3 =0;
        var longitud_mm3 = 0;
            if(selectedOption ==='in'){
                eje_mm3 = parseFloat(formData3.eje_mm3)*25.4;
                eje2_mm3 = parseFloat(formData3.eje2_mm3)*25.4;
                longitud_mm3 = parseFloat(formData3.longitud_mm3)*25.4;
            }else{
                eje_mm3 = parseFloat(formData3.eje_mm3);
                eje2_mm3 = parseFloat(formData3.eje2_mm3);
                longitud_mm3 = parseFloat(formData3.longitud_mm3);
            }
        const fs3 = parseFloat(formData3.fs3);
        const sistemasAutomaticos1h3 = (3.1416*(eje_mm3+eje2_mm3) * longitud_mm3* 0.001 * 25.4 * fs3 / 1000);
        const sistemasAutomaticos1hin3 = sistemasAutomaticos1h3/16.387;
        setSistemasAutomaticos1h3(sistemasAutomaticos1h3.toFixed(3));
        setSistemasAutomaticos1hin3(sistemasAutomaticos1hin3.toFixed(3));
  
    };
  
    const handleFormChange3 = () => {
      calcularResultados3();
    };
  
  
  
  ////Engranaje de Giro
  
  
  const [sistemasAutomaticos1h4, setSistemasAutomaticos1h4] = useState(0);
  const [sistemasAutomaticos1hin4, setSistemasAutomaticos1hin4] = useState(0);
  
  const [formData4, setFormData4] = useState({
    eje_mm4: 0,
    longitud_mm4: 0,
    fs4: 1,
  });
  
  
  const handleChange4 = (e) => {
    const { name, value } = e.target;
    setFormData4({
      ...formData4,
      [name]: value,
    });
  };
  
  
  useEffect(() => {
    handleFormChange4();
  }, [formData4]);
  
  
  const calcularResultados4 = () => {
    var eje_mm4 =0;
    var longitud_mm4 = 0;
    if(selectedOption ==='in'){
        eje_mm4 = parseFloat(formData4.eje_mm4)*25.4;
        longitud_mm4 = parseFloat(formData4.longitud_mm4)*25.4;
    }else{
        eje_mm4 = parseFloat(formData4.eje_mm4);
        longitud_mm4 = parseFloat(formData4.longitud_mm4);
    }
    const fs4 = parseFloat(formData4.fs4);
    const sistemasAutomaticos1h4 = (2*3.1416 *eje_mm4 * longitud_mm4* 0.001 * 25.4 * fs4 / 1000);
    const sistemasAutomaticos1hin4 = sistemasAutomaticos1h4/16.387;
    setSistemasAutomaticos1h4(sistemasAutomaticos1h4.toFixed(3));
    setSistemasAutomaticos1hin4(sistemasAutomaticos1hin4.toFixed(3));
  
  };
  
  const handleFormChange4 = () => {
    calcularResultados4();
  };
  
  
  
  ////Engranaje Abierto
  
  
  const [sistemasAutomaticos1h5, setSistemasAutomaticos1h5] = useState(0);
  const [sistemasAutomaticos1hin5, setSistemasAutomaticos1hin5] = useState(0);
  
  const [formData5, setFormData5] = useState({
    eje_mm5: 0,
    longitud_mm5: 0,
    fs5: 1,
  });
  
  
  const handleChange5 = (e) => {
    const { name, value } = e.target;
    setFormData5({
      ...formData5,
      [name]: value,
    });
  };
  
  
  useEffect(() => {
    handleFormChange5();
  }, [formData5]);
  
  
  const calcularResultados5 = () => {
    var eje_mm5 =0;
    var longitud_mm5 = 0;
        if(selectedOption ==='in'){
            eje_mm5 = parseFloat(formData5.eje_mm5)*25.4;
            longitud_mm5 = parseFloat(formData5.longitud_mm5)*25.4;
        }else{
            eje_mm5 = parseFloat(formData5.eje_mm5);
            longitud_mm5 = parseFloat(formData5.longitud_mm5);
        }
    const fs5 = parseFloat(formData5.fs5);
    const sistemasAutomaticos1h5 = (3.1416 *eje_mm5 * longitud_mm5* 0.001 * 25.4 * fs5 / 1000);
    const sistemasAutomaticos1hin5 = sistemasAutomaticos1h5/16.387;
    setSistemasAutomaticos1h5(sistemasAutomaticos1h5.toFixed(3));
    setSistemasAutomaticos1hin5(sistemasAutomaticos1hin5.toFixed(3));
  
  };
  
  const handleFormChange5 = () => {
    calcularResultados5();
  };
  



  /// Guias Deslizantes

  const [sistemasAutomaticos1h6, setSistemasAutomaticos1h6] = useState(0);
  const [sistemasAutomaticos1hin6, setSistemasAutomaticos1hin6] = useState(0);

  const [formData6, setFormData6] = useState({
    eje_mm6: 0,
    longitud_mm6: 0,
    fs6: 1,
  });


  const handleChange6 = (e) => {
    const { name, value } = e.target;
    setFormData6({
      ...formData6,
      [name]: value,
    });
  };


  useEffect(() => {
    handleFormChange6();
  }, [formData6]);


  const calcularResultados6 = () => {
    const eje_mm6 = parseFloat(formData6.eje_mm6);
    const longitud_mm6 = parseFloat(formData6.longitud_mm6);
    const fs6 = parseFloat(formData6.fs6);
    const sistemasAutomaticos1h6 = (eje_mm6 * longitud_mm6* 0.001 * 25.4 * fs6 / 1000);
    const sistemasAutomaticos1hin6 = sistemasAutomaticos1h6/16.387;
    setSistemasAutomaticos1h6(sistemasAutomaticos1h6.toFixed(3));
    setSistemasAutomaticos1hin6(sistemasAutomaticos1hin6.toFixed(3));

  };

  const handleFormChange6 = () => {
    calcularResultados6();
  };

  
  /// Sellos de Laberinto

  const [sistemasAutomaticos1h7, setSistemasAutomaticos1h7] = useState(0);
  const [sistemasAutomaticos1hin7, setSistemasAutomaticos1hin7] = useState(0);

  const [formData7, setFormData7] = useState({
    eje_mm7: 0,
    longitud_mm7: 0,
    fs7: 1,
  });


  const handleChange7 = (e) => {
    const { name, value } = e.target;
    setFormData7({
      ...formData7,
      [name]: value,
    });
  };


  useEffect(() => {
    handleFormChange7();
  }, [formData7]);


  const calcularResultados7 = () => {
    const eje_mm7 = parseFloat(formData7.eje_mm7);
    const longitud_mm7 = parseFloat(formData7.longitud_mm7);
    const fs7 = parseFloat(formData7.fs7);
    const sistemasAutomaticos1h7 = (3.1416*eje_mm7 * longitud_mm7*30* 0.001 * 25.4 * fs7 / 1000);
    const sistemasAutomaticos1hin7 = sistemasAutomaticos1h6/16.387;
    setSistemasAutomaticos1h7(sistemasAutomaticos1h7.toFixed(3));
    setSistemasAutomaticos1hin7(sistemasAutomaticos1hin7.toFixed(3));

  };

  const handleFormChange7 = () => {
    calcularResultados7();
  };


/// Tornillo de Bola
  
const [sistemasAutomaticos1h8, setSistemasAutomaticos1h8] = useState(0);
const [sistemasAutomaticos1hin8, setSistemasAutomaticos1hin8] = useState(0);

const [formData8, setFormData8] = useState({
  eje_mm8: 0,
  eje2_mm8: 0,
  longitud_mm8: 0,
  fs8: 1,
});


const handleChange8 = (e) => {
  const { name, value } = e.target;
  setFormData8({
    ...formData8,
    [name]: value,
  });
};


useEffect(() => {
  handleFormChange8();
}, [formData8]);


const calcularResultados8 = () => {
  const eje_mm8 = parseFloat(formData8.eje_mm8);
  const eje2_mm8 = parseFloat(formData8.eje2_mm8);
  const longitud_mm8 = parseFloat(formData8.longitud_mm8);
  const fs8 = parseFloat(formData8.fs8);
  const sistemasAutomaticos1h8 = (3.1416*eje_mm8*(eje2_mm8+longitud_mm8*25.4) *  0.001 * 25.4 * fs8) / 1000;
  const sistemasAutomaticos1hin8 = sistemasAutomaticos1h8/16.387;
  setSistemasAutomaticos1h8(sistemasAutomaticos1h8.toFixed(3));
  setSistemasAutomaticos1hin8(sistemasAutomaticos1hin8.toFixed(3));

};

const handleFormChange8 = () => {
  calcularResultados8();
};





  return (
    <div>
    <div class="accordion textColor" id="accordion">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNINE" aria-expanded="true" aria-controls="collapseNINE">
                    Factor de Servicio (F.S)
                </button>
            </h2>
            <div id="collapseNINE" class="accordion-collapse collapse" data-bs-parent="#accordion">
                <div class="accordion-body">
                <p>
                El factor de servicio es un criterio que le permite evaluar cuantitativamente las condiciones de trabajo del mecanismo donde se implementara el sistema de lubricación, este criterio será decisivo para determinar la cantidad de insumo que requiera cada mecanismo.

                Para calcular el factor de servicio seleccione en una escala de 0 a 3 el tipo de severidad de las condiciones de la aplicación. Seleccione “0” para condiciones de trabajo bajas, “1” para condiciones de trabajo altas,»2″ para condiciones de trabajo severas o «3» para condiciones de trabajo extremadamente severas.
                </p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 offset-md-1">
                        <form>
                            <div className="mb-3 row">
                            <label className="col-sm-6 col-form-label text-end">
                                Calor extremo (Introduzca 0 a 3):
                            </label>
                            <div className="col-sm-6">
                                <input
                                type="number"
                                step="0.1"
                                min="0"
                                max="3"
                                className="form-control"
                                value={heat}
                                onChange={(e) => handleInputChange(e.target.value, setHeat)}
                                />
                            </div>
                            </div>

                            <div className="mb-3 row">
                            <label className="col-sm-6 col-form-label text-end">
                                Carga de Choque Extremo (Introduzca 0 a 3):
                            </label>
                            <div className="col-sm-6">
                                <input
                                type="number"
                                step="0.1"
                                min="0"
                                max="3"
                                className="form-control"
                                value={extremShock}
                                onChange={(e) => handleInputChange(e.target.value, setExtremShock)}
                                />
                            </div>
                            </div>

                            <div className="mb-3 row">
                            <label className="col-sm-6 col-form-label text-end">
                                Ambiente extremo de suciedad/partículas (Introduzca 0 a 3):
                            </label>
                            <div className="col-sm-6">
                                <input
                                type="number"
                                step="0.1"
                                min="0"
                                max="3"
                                className="form-control"
                                value={particulate}
                                onChange={(e) => handleInputChange(e.target.value, setParticulate)}
                                />
                            </div>
                            </div>

                            <div className="mb-3 row">
                            <label className="col-sm-6 col-form-label text-end">
                                Ambiente de trabajo de lavado de agua extremo (Introduzca 0 a 3):
                            </label>
                            <div className="col-sm-6">
                                <input
                                type="number"
                                step="0.1"
                                min="0"
                                max="3"
                                className="form-control"
                                value={water}
                                onChange={(e) => handleInputChange(e.target.value, setWater)}
                                />
                            </div>
                            </div>

                            <div className="mb-3 row">
                            <label className="col-sm-6 col-form-label text-end">
                                Altas velocidades de rotación o de movimiento (Introduzca 0 a 3):
                            </label>
                            <div className="col-sm-6">
                                <input
                                type="number"
                                step="0.1"
                                min="0"
                                max="3"
                                className="form-control"
                                value={hightSpeed}
                                onChange={(e) => handleInputChange(e.target.value, setHightSpeed)}
                                />
                            </div>
                            </div>

                            <div className="mb-3">
                                <h4>Factor de Servicio</h4>
                                <p className="text-start">{factorDeServicio}</p>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Rodamientos de bola (R.B)
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordion">
            <div class="accordion-body">
                <p>Este tipo de rodamiento contiene elementos rodantes en su interior que cumplen la función de reducir la fricción entre dos superficies por el movimiento angular además es uno de los encargados de  resistir esfuerzos debidos a las cargas.</p>
                <h4>Selección de Sistema de Unidades</h4>
                <p>Por favor indique el tipo de unidad de los datos a ingresar :</p>
                <div className="d-flex justify-content-center">
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="mm"
                        checked={selectedOption === 'mm'}
                        onChange={handleRadioChange}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio1">
                        mm
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="in"
                        checked={selectedOption === 'in'}
                        onChange={handleRadioChange}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio2">
                        in
                        </label>
                    </div>
                </div>
                <h2>Ingrese los datos del rodamiento</h2>
                <div className="container">
                <div className="row mb-3 justify-content-center">
                     <div className='col-md-6'>
                        <label htmlFor="eje_mm" className="form-label">Ingrese el diámetro del eje:</label>
                    </div>
                    <div className='col-md-4'>
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                id="eje_mm"
                                name="eje_mm"
                                value={formData.eje_mm}
                                onChange={(e) => { handleChange(e); }}
                                step="0.1"
                                required
                            />
                            <span className="input-group-text">{selectedOption}</span>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 justify-content-center">
                    <div className='col-md-6'>
                        <label htmlFor="filas" className="form-label">Introduce el número de filas de bolas en el rodamiento:</label>
                    </div>
                    <div className='col-md-4'>
                        <input
                        type="number"
                        className="form-control"
                        id="filas"
                        name="filas"
                        value={formData.filas}
                        onChange={(e) => { handleChange(e);}}
                        required
                        />
                    </div>
                </div>

                <div className="row mb-3 justify-content-center">
                    <div className='col-md-6'>
                        <label htmlFor="fs" className="form-label">Ingrese el factor de seguridad:</label>
                    </div>
                    <div className='col-md-4'>
                        <input
                        type="number"
                        className="form-control"
                        id="fs"
                        name="fs"
                        value={formData.fs}
                        onChange={(e) => { handleChange(e);}}
                        step="0.1"
                        required
                        />
                    </div>
                </div>
                </div>
                <h3>Resultados</h3>
                <div className="mb-3 row justify-content-center">
                    <div className="col-md-9">
                        <table className="table">
                            <thead>
                                <tr>
                                <th></th>
                                <th scope="col">Pulgadas cúbicas (in³)</th>
                                <th scope="col">Centímetros cúbicos (cm³)</th>
                                <th scope="col">Peso del lubricante en gramos (g)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sistema Automático por hora</td>
                                    <td>{sistemasAutomaticos1hin}</td>
                                    <td>{sistemasAutomaticos1h}</td>
                                    <td>{sistemasAutomaticos1h}</td>
                                </tr>
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBujeLiso" aria-expanded="false" aria-controls="collapseThree">
                Cojinetes lisos bujes (C.B)
            </button>
        </h2>
        <div id="collapseBujeLiso" class="accordion-collapse collapse" data-bs-parent="#accordion">
            <div class="accordion-body">
                <p>Este tipo de cojinetes o rodamientos es implementado para realizar movimientos deslizantes, oscilantes, rotatorios, entre otros. Este tipo de cojinetes además son altamente implementados ya que reducen el ruido debido al movimiento mecánico de piezas y exigen poca cantidad de insumos de lubricación.</p>
                <h4>Selección de Sistema de Unidades</h4>
                <p>Por favor indique el tipo de unidad de los datos a ingresar :</p>
                <div className="d-flex justify-content-center">
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="mm"
                        checked={selectedOption === 'mm'}
                        onChange={handleRadioChange}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio1">
                        mm
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="in"
                        checked={selectedOption === 'in'}
                        onChange={handleRadioChange}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio2">
                        in
                        </label>
                    </div>
                </div>                
                <h3>Ingrese los datos del buje liso</h3>
                <div className="row mb-3 justify-content-center">
                    <div className='col-md-6'>
                        <label htmlFor="eje_mm2" className="form-label">Ingrese el diámetro del eje:</label>
                    </div>
                    <div className='col-md-4'>
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                id="eje_mm2"
                                name="eje_mm2"
                                value={formData2.eje_mm2}
                                onChange={(e) => { handleChange2(e) }}
                                step="0.1"
                                required
                            ></input>
                            <span className="input-group-text">{selectedOption}</span>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 justify-content-center">
                    <div className='col-md-6'>
                        <label htmlFor="longitud_mm2" className="form-label">Introduzca la longitud del rodamiento:</label>
                    </div>
                    <div className='col-md-4'>
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                id="longitud_mm2"
                                name="longitud_mm2"
                                value={formData2.longitud_mm2}
                                onChange={(e) => { handleChange2(e) }}
                                step="0.1"
                                required
                            ></input>
                            <span className="input-group-text">{selectedOption}</span>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 justify-content-center">
                    <div className='col-md-6'>
                        <label htmlFor="fs2" className="form-label">Ingrese el factor de seguridad:</label>
                    </div>
                    <div className='col-md-4'>
                        <input
                        type="number"
                        className="form-control"
                        id="fs2"
                        name="fs2"
                        value={formData2.fs2}
                        onChange={(e) => { handleChange2(e) }}
                        step="0.1"
                        required
                        ></input>
                    </div>
                </div>
                <h3>Resultados</h3>
                <div className="mt-4 row justify-content-center">
                    <div className="col-md-9">
                        <table className="table">
                            <thead>
                                <tr>
                                <th></th>
                                <th className='text-center' scope="col">Pulgadas cúbicas (in³)</th>
                                <th className='text-center' scope="col">Centímetros cúbicos (cm³)</th>
                                <th className='text-center' scope="col">Peso del lubricante en gramos (g)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Sistema Automático por hora</td>
                                <td className='text-center'>{sistemasAutomaticos1hin2}</td>
                                <td className='text-center'>{sistemasAutomaticos1h2}</td>
                                <td className='text-center'>{sistemasAutomaticos1h2}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEngranajeAbierto" aria-expanded="false" aria-controls="collapseEngranajeAbierto">
            Engranaje Abierto (E.A)
            </button>
        </h2>
        <div id="collapseEngranajeAbierto" class="accordion-collapse collapse" data-bs-parent="#accordion">
            <div class="accordion-body">
                <p>Este tipo de mecanismo consiste en un grupo de engranajes que se conectan entre sí para trasmitir energía mecánica, es empleado como reductor de velocidad en máquinas industriales.</p>
                <h4>Selección de Sistema de Unidades</h4>
                <p>Por favor indique el tipo de unidad de los datos a ingresar :</p>
                <div className="d-flex justify-content-center">
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="mm"
                        checked={selectedOption === 'mm'}
                        onChange={handleRadioChange}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio1">
                        mm
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="in"
                        checked={selectedOption === 'in'}
                        onChange={handleRadioChange}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio2">
                        in
                        </label>
                    </div>
                </div>                
                <h3>Ingrese los parámetros del mecanismo</h3>
                <div className="row mb-3 justify-content-center">
                    <div className='col-md-6'>
                        <label htmlFor="eje_mm5" className="form-label">Introduzca el diámetro del paso (P.D.):</label>
                    </div>
                    <div className='col-md-4'>
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                id="eje_mm5"
                                name="eje_mm5"
                                value={formData5.eje_mm5}
                                onChange={(e) => { handleChange5(e);}}
                                step="0.1"
                                required
                            ></input>
                            <span className="input-group-text">{selectedOption}</span>
                        </div>
                    </div>
                   
                    
                </div>

                <div className="row mb-3 justify-content-center">
                    
                    <div className='col-md-6'>
                        <label htmlFor="longitud_mm5" className="form-label">Introduzca el ancho del rodamiento:</label>
                    </div>
                    <div className='col-md-4'>
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                id="longitud_mm5"
                                name="longitud_mm5"
                                value={formData5.longitud_mm5}
                                onChange={(e) => { handleChange5(e);}}
                                step="0.1"
                                required
                            ></input>
                            <span className="input-group-text">{selectedOption}</span>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 justify-content-center">
                    
                    <div className='col-md-6'>
                        <label htmlFor="fs5" className="form-label">Ingrese el factor de seguridad:</label>
                    </div>
                    <div className='col-md-4'>
                        <input
                        type="number"
                        className="form-control"
                        id="fs5"
                        name="fs5"
                        value={formData5.fs5}
                        onChange={(e) => { handleChange5(e);}}
                        step="0.1"
                        required
                        ></input>
                    </div>
                </div>
                <h3>Resultados</h3>
                <div className="mt-4 row justify-content-center">
                    <div className="col-md-9">
                        <table className="table">
                            <thead>
                                <tr>
                                <th></th>
                                <th className='text-center' scope="col">Pulgadas cúbicas (in³)</th>
                                <th className='text-center' scope="col">Centímetros cúbicos (cm³)</th>
                                <th className='text-center' scope="col">Peso del lubricante en gramos (g)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Sistema Automático por hora</td>
                                <td className='text-center'>{sistemasAutomaticos1hin5}</td>
                                <td className='text-center'>{sistemasAutomaticos1h5}</td>
                                <td className='text-center'>{sistemasAutomaticos1h5}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEngranajeGiro" aria-expanded="false" aria-controls="collapseThree">
                Engranaje de giro (E.G)
            </button>
        </h2>
        <div id="collapseEngranajeGiro" class="accordion-collapse collapse" data-bs-parent="#accordion">
            <div class="accordion-body">
                <p>Este mecanismo de transmisión está compuesto por engranajes rectos, son dos ruedas dentadas que se acoplan entre sí, donde se denomina engranaje de toro al engranaje mas grande y piñón al engranaje mas pequeño, donde uno actúa como la transmisión y otro como el engranaje que es impulsado respectivamente. Ofrece prestaciones de alta velocidad y gran precisión.</p>
                <h4>Selección de Sistema de Unidades</h4>
                <p>Por favor indique el tipo de unidad de los datos a ingresar :</p>
                <div className="d-flex justify-content-center">
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="mm"
                        checked={selectedOption === 'mm'}
                        onChange={handleRadioChange}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio1">
                        mm
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="in"
                        checked={selectedOption === 'in'}
                        onChange={handleRadioChange}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio2">
                        in
                        </label>
                    </div>
                </div>                
                <h3>Ingrese los parámetros del mecanismo</h3>
                <div className="row mb-3 justify-content-center">
                    <div className='col-md-6'>
                        <label htmlFor="eje_mm4" className="form-label">Introduzca el diámetro de paso (P.D.) del piñón:</label>
                    </div>
                    <div className='col-md-4'>
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                id="eje_mm4"
                                name="eje_mm4"
                                value={formData4.eje_mm4}
                                onChange={(e) => { handleChange4(e);}}
                                step="0.1"
                                required
                            ></input>
                            <span className="input-group-text">{selectedOption}</span>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 justify-content-center">
                    <div className='col-md-6'>
                        <label htmlFor="longitud_mm4" className="form-label">Introduzca el ancho del rodamiento:</label>
                    </div>
                    <div className='col-md-4'>
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                id="longitud_mm4"
                                name="longitud_mm4"
                                value={formData4.longitud_mm4}
                                onChange={(e) => { handleChange4(e);}}
                                step="0.1"
                                required
                            ></input>
                            <span className="input-group-text">{selectedOption}</span>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 justify-content-center">
                    <div className='col-md-6'>
                        <label htmlFor="fs4" className="form-label">Ingrese el factor de seguridad:</label>
                    </div>
                    <div className='col-md-4'>
                        <input
                        type="number"
                        className="form-control"
                        id="fs4"
                        name="fs4"
                        value={formData4.fs4}
                        onChange={(e) => { handleChange4(e);}}
                        step="0.1"
                        required
                        ></input>
                    </div>
                </div>
                <h3>Resultados</h3>

                <div className="mt-4 row justify-content-center">
                    <div className="col-md-9">
                        <table className="table">
                            <thead>
                                <tr>
                                <th></th>
                                <th scope="col">Pulgadas cúbicas (in³)</th>
                                <th scope="col">Centímetros cúbicos (cm³)</th>
                                <th scope="col">Peso del lubricante en gramos (g)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Sistema Automático por hora</td>
                                <td>{sistemasAutomaticos1hin4}</td>
                                <td>{sistemasAutomaticos1h4}</td>
                                <td>{sistemasAutomaticos1h4}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTFin" aria-expanded="false" aria-controls="collapseThree">
                Engranajes de Tornillo Sin Fin (T.F)
            </button>
        </h2>
        <div id="collapseTFin" class="accordion-collapse collapse" data-bs-parent="#accordion">
            <div class="accordion-body">
                <p>Este tipo de engranajes consiste en un eje roscado en espiral acoplado con una rueda dentada para la transmisión de movimiento rotacional entre dos ejes que sean perpendiculares el uno con el otro.</p>
                <h4>Selección de Sistema de Unidades</h4>
                <p>Por favor indique el tipo de unidad de los datos a ingresar :</p>
                <div className="d-flex justify-content-center">
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="mm"
                        checked={selectedOption === 'mm'}
                        onChange={handleRadioChange}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio1">
                        mm
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="in"
                        checked={selectedOption === 'in'}
                        onChange={handleRadioChange}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio2">
                        in
                        </label>
                    </div>
                </div>                
                <h3>Ingrese los parámetros del mecanismo</h3>
                <div className="row mb-3 justify-content-center">
                    
                    <div className='col-md-6'>
                        <label htmlFor="eje_mm3" className="form-label">Introduzca el diámetro de paso (P.D.1) del gusano:</label>
                    </div>
                    <div className='col-md-4'>
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                id="eje_mm3"
                                name="eje_mm3"
                                value={formData3.eje_mm3}
                                onChange={(e) => { handleChange3(e);}}
                                step="0.1"
                                required
                            ></input>
                            <span className="input-group-text">{selectedOption}</span>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 justify-content-center">
                    
                    <div className='col-md-6'>
                        <label htmlFor="eje2_mm3" className="form-label">Introduzca el diámetro de paso (P.D.2) del tornillo sin fin:</label>
                    </div>
                    <div className='col-md-4'>
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                id="eje2_mm3"
                                name="eje2_mm3"
                                value={formData3.eje2_mm3}
                                onChange={(e) => { handleChange3(e);}}
                                step="0.1"
                                required
                            ></input>
                            <span className="input-group-text">{selectedOption}</span>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 justify-content-center">
                    
                    <div className='col-md-6'>
                        <label htmlFor="longitud_mm3" className="form-label">Introduzca el ancho del Tornillo Sin Fin:</label>
                    </div>
                    <div className='col-md-4'>
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                id="longitud_mm3"
                                name="longitud_mm3"
                                value={formData3.longitud_mm3}
                                onChange={(e) => { handleChange3(e);}}
                                step="0.1"
                                required
                            ></input>
                            <span className="input-group-text">{selectedOption}</span>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 justify-content-center">
                    
                    <div className='col-md-6'>
                        <label htmlFor="fs3" className="form-label">Ingrese el factor de seguridad:</label>
                    </div>
                    <div className='col-md-4'>
                        <input
                        type="number"
                        className="form-control"
                        id="fs3"
                        name="fs3"
                        value={formData3.fs3}
                        onChange={(e) => { handleChange3(e);}}
                        step="0.1"
                        required
                        ></input>
                    </div>
                </div>
                <h3>Resultados</h3>
                <div className="mt-4 row justify-content-center">
                    <div className="col-md-9">
                        <table className="table">
                            <thead>
                                <tr>
                                <th></th>
                                <th className='text-center' scope="col">Pulgadas cúbicas (in³)</th>
                                <th className='text-center' scope="col">Centímetros cúbicos (cm³)</th>
                                <th className='text-center' scope="col">Peso del lubricante en gramos (g)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Sistema Automático por hora</td>
                                <td className='text-center'>{sistemasAutomaticos1hin3}</td>
                                <td className='text-center'>{sistemasAutomaticos1h3}</td>
                                <td className='text-center'>{sistemasAutomaticos1h3}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTDezlizante" aria-expanded="false" aria-controls="collapseThree">
                Guías deslizantes  (G.D)
            </button>
        </h2>
        <div id="collapseTDezlizante" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <p>Las guías deslizantes son piezas de metal ajustable, que se utiliza para fijar en un punto exacto las partes móviles de una maquina o reducir la fricción que se genera por el movimiento, ademas también restringen el movimiento lineal de una pieza o herramienta en una máquina.</p>
                <h3>Ingrese los parámetros del mecanismo</h3>
                <div className="mb-3">
                    <label htmlFor="eje_mm6" className="form-label">Introduzca la longitud de la superficie de mayor contacto:</label>
                    <div className="input-group">
                    <input
                        type="number"
                        className="form-control"
                        id="eje_mm6"
                        name="eje_mm6"
                        value={formData6.eje_mm6}
                        onChange={(e) => { handleChange6(e);}}
                        step="0.1"
                        required
                    ></input>
                    <span className="input-group-text">mm</span>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="longitud_mm6" className="form-label">Introduzca el ancho de la superficie de mayor contacto:</label>
                    <div className="input-group">
                    <input
                        type="number"
                        className="form-control"
                        id="longitud_mm6"
                        name="longitud_mm6"
                        value={formData6.longitud_mm6}
                        onChange={(e) => { handleChange6(e);}}
                        step="0.1"
                        required
                    ></input>
                    <span className="input-group-text">mm</span>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="fs6" className="form-label">Ingrese el factor de seguridad:</label>
                    <input
                    type="number"
                    className="form-control"
                    id="fs6"
                    name="fs6"
                    value={formData6.fs6}
                    onChange={(e) => { handleChange6(e);}}
                    step="0.1"
                    required
                    ></input>
                </div>

                <div className="mt-4">
                    <h3>Resultados</h3>
                    <table className="table">
                    <thead>
                        <tr>
                        <th></th>
                        <th scope="col">Pulgadas cúbicas (in³)</th>
                        <th scope="col">Centímetros cúbicos (cm³)</th>
                        <th scope="col">Peso del lubricante en gramos (g)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Sistema Automático por hora</td>
                        <td>{sistemasAutomaticos1hin6}</td>
                        <td>{sistemasAutomaticos1h6}</td>
                        <td>{sistemasAutomaticos1h6}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#SellosLaberinto" aria-expanded="false" aria-controls="collapseThree">
            Sellos de Laberinto  (S.L)
            </button>
        </h2>
        <div id="SellosLaberinto" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <p>En la industria es muy común que los rodamientos se encuentren en exposición prolongada de partículas de polvo abrasivo, virutas, escombros o lodo, para proteger un Sistema de rodamientos de contaminación se utiliza un sello mecánico llamado sello de laberintos.</p>
                <h3>Ingrese los parámetros del mecanismo</h3>
                <div className="mb-3">
                    <label htmlFor="eje_mm7" className="form-label">Introduzca el diámetro del eje:</label>
                    <div className="input-group">
                    <input
                        type="number"
                        className="form-control"
                        id="eje_mm7"
                        name="eje_mm7"
                        value={formData7.eje_mm7}
                        onChange={(e) => { handleChange7(e);}}
                        step="0.1"
                        required
                    ></input>
                    <span className="input-group-text">mm</span>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="longitud_mm7" className="form-label">Introduzca la suma de las longitudes de cada superficie de contacto:</label>
                    <div className="input-group">
                    <input
                        type="number"
                        className="form-control"
                        id="longitud_mm7"
                        name="longitud_mm7"
                        value={formData7.longitud_mm7}
                        onChange={(e) => { handleChange7(e);}}
                        step="0.1"
                        required
                    ></input>
                    <span className="input-group-text">mm</span>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="fs7" className="form-label">Ingrese el factor de seguridad:</label>
                    <input
                    type="number"
                    className="form-control"
                    id="fs7"
                    name="fs7"
                    value={formData7.fs7}
                    onChange={(e) => { handleChange7(e);}}
                    step="0.1"
                    required
                    ></input>
                </div>

                <div className="mt-4">
                    <h3>Resultados</h3>
                    <table className="table">
                    <thead>
                        <tr>
                        <th></th>
                        <th scope="col">Pulgadas cúbicas (in³)</th>
                        <th scope="col">Centímetros cúbicos (cm³)</th>
                        <th scope="col">Peso del lubricante en gramos (g)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Sistema Automático por hora</td>
                        <td>{sistemasAutomaticos1hin7}</td>
                        <td>{sistemasAutomaticos1h7}</td>
                        <td>{sistemasAutomaticos1h7}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTBola" aria-expanded="false" aria-controls="collapseThree">
            Tornillo de Bola (T.B)
            </button>
        </h2>
        <div id="collapseTBola" class="accordion-collapse collapse" data-bs-parent="#accordion">
            <div class="accordion-body">
                <p>El tornillo de bola está compuesto por un eje roscado que sirve de guía para rodamientos de bola, el eje actúa como tornillo y el rodamiento de bola actúa como la tuerca. Este mecanismo soporta altas cargas de empuje con una fricción interna mínima, además de tener un alto grado de  precisión.</p>
                <h3>Ingrese los parámetros del mecanismo</h3>
                <div className="mb-3">
                    <label htmlFor="eje_mm8" className="form-label">Introduce el diámetro del paso (P.D.) de la carrera de bolas:</label>
                    <div className="input-group">
                    <input
                        type="number"
                        className="form-control"
                        id="eje_mm8"
                        name="eje_mm8"
                        value={formData8.eje_mm8}
                        onChange={(e) => { handleChange8(e);}}
                        step="0.1"
                        required
                    ></input>
                    <span className="input-group-text">mm</span>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="eje2_mm8" className="form-label">Introduzca la longitud del recorrido de la carrera de bolas en el eje:</label>
                    <div className="input-group">
                    <input
                        type="number"
                        className="form-control"
                        id="eje2_mm8"
                        name="eje2_mm8"
                        value={formData8.eje2_mm8}
                        onChange={(e) => { handleChange8(e);}}
                        step="0.1"
                        required
                    ></input>
                    <span className="input-group-text">mm</span>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="longitud_mm8" className="form-label">Introduce el número de filas de bolas que están en contacto con el eje:</label>
                    <div className="input-group">
                    <input
                        type="number"
                        className="form-control"
                        id="longitud_mm8"
                        name="longitud_mm8"
                        value={formData8.longitud_mm8}
                        onChange={(e) => { handleChange8(e);}}
                        step="0.1"
                        required
                    ></input>
                    <span className="input-group-text">mm</span>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="fs8" className="form-label">Ingrese el factor de seguridad:</label>
                    <input
                    type="number"
                    className="form-control"
                    id="fs8"
                    name="fs8"
                    value={formData8.fs8}
                    onChange={(e) => { handleChange8(e);}}
                    step="0.1"
                    required
                    ></input>
                </div>

                <div className="mt-4">
                    <h3>Resultados</h3>
                    <table className="table">
                    <thead>
                        <tr>
                        <th></th>
                        <th scope="col">Pulgadas cúbicas (in³)</th>
                        <th scope="col">Centímetros cúbicos (cm³)</th>
                        <th scope="col">Peso del lubricante en gramos (g)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Sistema Automático por hora</td>
                        <td>{sistemasAutomaticos1hin8}</td>
                        <td>{sistemasAutomaticos1h8}</td>
                        <td>{sistemasAutomaticos1h8}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div> */}
    </div>
    </div>
  )
}