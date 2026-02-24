import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServicioFormularioHistoria {
  constructor(private fb: FormBuilder) {}

  crearFormulario(): FormGroup {
    return this.fb.group({
      encabezado: this.fb.group({
        numeroHistoriaClinica: [
          '',
          [Validators.required, Validators.pattern('^[0-9]{1,6}$')]
        ],
        fecha: ['', Validators.required]
      }),
      seccionA: this.fb.group({
        nombresApellidos: ['', Validators.required],
        lugarNacimiento: ['', Validators.required],
        provinciaNacimiento: ['', Validators.required],
        otraProvinciaNacimiento: [''],
        fechaNacimiento: ['', Validators.required],
        edadAnios: [{ value: '', disabled: true }],
        edadMeses: [{ value: '', disabled: true }],
        numeroCedula: ['', Validators.required],
        estadoCivil: ['', Validators.required],
        situacionLaboral: this.fb.array([]),
        situacionLaboralOtro: [''],
        etiologiaDiscapacidad: ['', Validators.required],
        discapacidadFisica: this.crearBloqueDiscapacidad(),
        discapacidadIntelectual: this.crearBloqueDiscapacidad(),
        discapacidadAuditiva: this.crearBloqueDiscapacidad(true),
        discapacidadVisual: this.crearBloqueDiscapacidad(true),
        discapacidadPsicosocial: this.crearBloqueDiscapacidad(),
        discapacidadLenguaje: this.fb.group({
          tieneCarnet: ['', Validators.required],
          porcentajeCarnet: [''],
          grado: [''],
          etiologia: this.fb.array([]),
          primarios: this.fb.array([]),
          secundarios: this.fb.array([]),
          especificar: ['']
        }),
        discapacidadMultiple: this.fb.group({
          tieneCarnet: ['', Validators.required],
          porcentajeCarnet: [''],
          grado: [''],
          opciones: this.fb.array([]),
          especificar: ['']
        }),
        datosInstitucionales: this.fb.group({
          institucionEducativa: ['', Validators.required],
          carrera: ['', Validators.required],
          ciclo: ['', Validators.required],
          fuenteInformacion: ['', Validators.required],
          telefono: [''],
          correo: ['', Validators.email]
        })
      }),
      seccionB: this.fb.group({
        motivoConsulta: this.fb.array([]),
        desdeCuando: ['', Validators.required]
      }),
      seccionC: this.fb.group({
        tipoFamilia: ['', Validators.required],
        funcionamientoFamiliar: ['', Validators.required]
      }),
      seccionD: this.fb.group({
        antecedentesPrenatales: this.fb.group({
          edadEmbarazo: [''],
          controlPrenatal: ['', Validators.required],
          periodoControlPrenatal: ['', Validators.required],
          complicacionesEmbarazo: ['', Validators.required],
          traumatismo: ['', Validators.required],
          traumatismoEspecificar: [''],
          enfermedades: ['', Validators.required],
          enfermedadesEspecificar: [''],
          alimentacionAdecuada: ['', Validators.required]
        }),
        antecedentesPerinatales: this.fb.group({
          tiposParto: this.fb.array([]),
          maniobrasReanimacion: this.fb.array([]),
          complicacionesNacimiento: ['']
        }),
        antecedentesPostnatales: this.fb.group({
          necesitoIncubadora: ['', Validators.required],
          tiempoIncubadoraDias: [''],
          complicaciones: ['', Validators.required],
          complicacionesEspecificar: ['']
        }),
        crecimientoDesarrollo: this.fb.group({
          motor: ['', Validators.required],
          lenguaje: ['', Validators.required],
          cognitivo: ['', Validators.required],
          social: ['', Validators.required]
        }),
        pierdeEquilibrio: ['', Validators.required]
      }),
      seccionE: this.fb.group({
        conductaAlimentaria: ['', Validators.required],
        checklist: this.fb.array([]),
        otros: ['']
      }),
      seccionF: this.fb.group({
        enfermedadesTratamiento: ['', Validators.required],
        alergias: ['', Validators.required],
        intervencionesQuirurgicas: ['', Validators.required],
        medicamentosConsumo: ['', Validators.required]
      }),
      seccionG: this.fb.group({
        enfermedadesCatastroficas: ['', Validators.required],
        discapacidades: ['', Validators.required],
        trastornosPsicologicos: ['', Validators.required],
        problemasAprendizaje: ['', Validators.required],
        otrosRelevantes: ['']
      }),
      seccionH: this.fb.group({
        momentosEvolutivos: this.fb.array([])
      }),
      seccionI: this.fb.group({
        conductasPreocupantes: this.fb.array([]),
        otros: ['']
      }),
      seccionJ: this.fb.group({
        consumeSustancia: ['', Validators.required],
        sustancias: this.fb.array([]),
        otros: [''],
        frecuencia: ['']
      }),
      seccionK: this.fb.group({
        habitosSueno: this.fb.array([])
      }),
      seccionL: this.fb.group({
        sexoNacimiento: ['', Validators.required],
        genero: ['', Validators.required],
        orientacion: ['', Validators.required],
        gradoInformacion: this.fb.group({
          actividadSexual: [0, Validators.required],
          masturbacion: [0, Validators.required],
          promiscuidad: [0, Validators.required],
          disfunciones: [0, Validators.required],
          erotismo: [0, Validators.required],
          parafilias: [0, Validators.required]
        })
      }),
      psicologiaEducativa: this.fb.group({
        datosAcademicos: this.fb.group({
          inclusionEducativa: ['', Validators.required],
          adaptacionesCurriculares: ['', Validators.required],
          gradoAdaptacion: [''],
          asignaturas: this.fb.array([]),
          asignaturasOtro: ['']
        }),
        desarrolloAcademico: this.fb.group({
          perdidaAnio: ['', Validators.required],
          desercionAcademica: ['', Validators.required],
          cambioInstitucion: ['', Validators.required],
          problemasAprendizaje: ['', Validators.required],
          problemasConducta: ['', Validators.required],
          problemasLenguajeHabla: ['', Validators.required]
        }),
        evaluacionesAnteriores: this.fb.group({
          tipos: this.fb.array([]),
          especificar: ['']
        }),
        recibeTratamiento: this.fb.group({
          tipos: this.fb.array([]),
          especificar: ['']
        }),
        aprovechamientoGeneral: ['', Validators.required],
        ritmoAprendizaje: ['', Validators.required],
        estilosAprendizaje: ['', Validators.required],
        resultadosReactivos: this.fb.group({
          wais: this.fb.array(this.crearFilasWais()),
          kbit: this.fb.array(this.crearFilasKbit())
        })
      }),
      fonoaudiologia: this.fb.group({
        caracteristicasHabla: this.fb.group({
          dificultadPronunciar: ['', Validators.required],
          seTraba: ['', Validators.required],
          seEntiende: ['', Validators.required],
          nombraObjetos: ['', Validators.required],
          comprende: ['', Validators.required],
          reconoceFuenteSonora: ['', Validators.required],
          comunicacionPreferente: ['', Validators.required],
          examenAudiologico: ['', Validators.required],
          diagnosticoAudiologico: [''],
          diagnosticoFonoPrevio: [''],
          perdidaAudicionPasada: ['', Validators.required],
          infeccionesOidoFrecuentes: ['', Validators.required],
          infeccionesOidoCual: [''],
          infeccionesOidoEdad: [''],
          fonacionTonoApropiado: ['', Validators.required],
          respiracionNormal: ['', Validators.required],
          situacionesAlteraTono: [''],
          desdeCuandoAlteracionesVoz: ['']
        }),
        historiaClinicaAudicion: this.fb.group({
          perdidaAuditiva: ['', Validators.required],
          lateralidad: [''],
          grado: [''],
          permanencia: [''],
          otitisTipo: [''],
          otitisInicio: [''],
          otitisFin: [''],
          antecedentesFamiliares: ['', Validators.required],
          exposicionRuidos: ['', Validators.required],
          exposicionRuidosInicio: [''],
          exposicionRuidosFin: [''],
          ototoxicos: ['', Validators.required],
          infecciones: ['', Validators.required],
          usoAudifonos: ['', Validators.required],
          usoAudifonosInicio: [''],
          usoAudifonosFin: [''],
          implanteCoclear: ['', Validators.required],
          tratamientoFonoPrevio: ['', Validators.required]
        }),
        otalgia: this.fb.group({
          presenta: ['', Validators.required],
          lateralidad: [''],
          tipo: [''],
          severidad: [''],
          asociadaInfeccionRespiratoria: ['', Validators.required],
          punzante: [''],
          pulsatil: [''],
          progresivo: [''],
          opresivo: [''],
          pruriginoso: [''],
          aumentaMasticar: ['', Validators.required],
          disminuyeCalorLocal: ['', Validators.required],
          aumentaCalorLocal: ['', Validators.required]
        }),
        otorrea: this.fb.group({
          presenta: ['', Validators.required],
          lateralidad: [''],
          tipo: [''],
          severidad: [''],
          aspecto: this.fb.array([]),
          asociadaInfeccionRespiratoria: ['', Validators.required],
          asociadaInfeccionAguda: ['', Validators.required]
        }),
        antecedentesAuditivos: this.fb.group({
          sintomas: this.fb.group({
            otalgia: [''],
            oidoTapado: [''],
            autofonia: [''],
            otorrea: ['']
          }),
          lados: this.fb.group({
            otalgia: [''],
            oidoTapado: [''],
            autofonia: [''],
            otorrea: ['']
          }),
          adicionales: this.fb.group({
            subeVolumen: ['', Validators.required],
            tinnitus: ['', Validators.required],
            expuestoRuidos: ['', Validators.required],
            noOyeVozBaja: ['', Validators.required],
            leDicenHablaFuerte: ['', Validators.required],
            ayudaAuditiva: [''],
            percibeIgual: ['', Validators.required],
            oidoEscuchaMejor: [''],
            tiempoProblemas: ['']
          })
        }),
        antecedentesVestibulares: this.fb.group({
          faltaEquilibrio: ['', Validators.required],
          mareosBarquito: [''],
          vertigo: ['', Validators.required]
        }),
        otoscopia: this.fb.group({
          oidoDerecho: this.crearBloqueOtoscopia(),
          oidoIzquierdo: this.crearBloqueOtoscopia()
        })
      }),
      psicologiaClinica: this.fb.group({
        guiaObservacion: this.fb.group({
          contactoVisual: ['', Validators.required],
          expresionLenguaje: this.fb.array([]),
          expresionLenguajeOtros: [''],
          habitosPersonales: this.fb.array([]),
          habitosPersonalesOtros: [''],
          conductaSocial: this.fb.array([]),
          conductaSocialOtros: [''],
          actividadesIntelectivas: this.fb.array([]),
          actividadesIntelectivasOtros: [''],
          aspectos: this.fb.array([]),
          aspectosOtros: [''],
          formaRelacion: this.fb.array([]),
          formaRelacionOtros: [''],
          sexoContrario: this.fb.array([]),
          sexoContrarioOtros: [''],
          agresividad: this.fb.array([]),
          humor: this.fb.array([]),
          humorOtros: [''],
          actividades: this.fb.array([]),
          actividadesOtros: [''],
          comportamiento: this.fb.array([]),
          comportamientoOtros: [''],
          riesgoSuicida: ['', Validators.required],
          afectividad: this.fb.array([]),
          afectividadOtros: ['']
        }),
        examenFunciones: this.fb.group({
          estadoConciencia: this.fb.array([]),
          estadoConcienciaOtros: [''],
          atencion: this.fb.array([]),
          atencionOtros: [''],
          sensopercepcion: this.fb.array([]),
          sensopercepcionOtros: [''],
          memoria: this.fb.group({
            cortoPlazo: [false],
            largoPlazo: [false],
            sinAlteracion: [false]
          }),
          conductaMotora: this.fb.array([]),
          estructuraPensamiento: this.fb.group({
            incoherencia: [0],
            bloqueos: [0],
            perseveracion: [0],
            disgregacion: [0],
            estereotipias: [0],
            neologismos: [0],
            musitacion: [0],
            sinAlteracion: [0]
          }),
          cursoPensamiento: this.fb.array([]),
          cursoPensamientoOtros: [''],
          contenidoPensamiento: this.fb.array([]),
          contenidoPensamientoOtros: [''],
          juicio: this.fb.array([]),
          orientacion: this.fb.group({
            tiempo: [false],
            espacio: [false],
            aSiMismo: [false],
            aOtrasPersonas: [false]
          })
        }),
        impresionDiagnostica: ['']
      })
    });
  }

  private crearBloqueDiscapacidad(conEspecificidad = false): FormGroup {
    return this.fb.group({
      tieneCarnet: ['', Validators.required],
      porcentajeCarnet: [''],
      grado: [''],
      etiologia: this.fb.array([]),
      etiologiaOtro: [''],
      especificidad: [conEspecificidad ? '' : null],
      especificidadDetalle: [conEspecificidad ? '' : null]
    });
  }

  private crearFilasWais(): FormGroup[] {
    const filas = [
      'Comprension verbal',
      'Razonamiento perceptual',
      'Memoria de trabajo',
      'Velocidad de procesamiento',
      'Escala de coeficiente intelectual'
    ];

    return filas.map((reactivo) =>
      this.fb.group({
        reactivo: [reactivo],
        puntuacion: [''],
        interpretacion: ['']
      })
    );
  }

  private crearFilasKbit(): FormGroup[] {
    const filas = ['Vocabulario', 'Matrices', 'CI compuesto'];

    return filas.map((reactivo) =>
      this.fb.group({
        reactivo: [reactivo],
        puntuacion: [''],
        categoria: ['']
      })
    );
  }

  private crearBloqueOtoscopia(): FormGroup {
    return this.fb.group({
      palpacionPabellon: [''],
      palpacionMastoides: [''],
      cae: [''],
      obstruccion: [''],
      obstruccionTipo: [''],
      membranaApariencia: [''],
      perforacion: [''],
      burbuja: [''],
      coloracion: ['']
    });
  }
}
