import { GET_QUESTIONS } from '../actiontype/types';

const initialState = {
    questions: [
        {
            title: 'Ministerio del Medio Ambiente *',
            id: 'medio_ambiente', 
            link: 'res_solidos/1',
            kind: 1,
            i: 1
          },
          {
            title: 'Empresa Comercializadora de Residuos solidos *',
            id: 'res_solidos/1',
            link: 'deportes/2',
            kind: 1,
            i: 2
          },
          {
            title: 'Academia de deportes *',
            id: 'deportes/2',
            link: 'fabrica_alimentos/3',
            kind: 1,
            i: 3
          },
          {
            title: 'Fabrica de Alimentos y enlatados*',
            id: 'fabrica_alimentos/3',
            kind: 1,
            link: 'empresa_panificadora/4',
            i: 4
          },
          {
            title: 'Empresa panificadora*',
            id: 'empresa_panificadora/4',
            kind: 1,
            link: 'comp_constructora_ferretera/5',
            i: 5
          },
          {
            title: 'Compañía constructora y ferrtera*',
            id: 'comp_constructora_ferretera/5',
            kind: 1,
            link: 'inmoviliaria_ventacasas/6',
            i: 6
          },
          {
            title: 'Empresa inmoviliaria*',
            id: 'inmoviliaria_ventacasas/6',
            kind: 1,
            link: 'comp_procesadora_alimentos/7',
            i: 7
          },
          {
            title: 'Compañía procesadora de alimentos*',
            id: 'comp_procesadora_alimentos/7',
            kind: 1,
            link: 'sup_construcción/8',
            i: 8
          },
          {
            title: 'Supervisión de obras civiles*',
            id: 'sup_construcción/8',
            kind: 1,
            link: '',
            i: 9
          },
          {
            title: 'Laboratorio de Química*',
            id: 'lab_química/9',
            kind: 1,
            link: 'clinica_psiquiátrica/10',
            i: 10
          },
          {
            title: 'Clínica Psiquiátrica y de transtornos mentales*',
            id: 'clinica_psiquiátrica/10',
            kind: 2,
            link: 'hospital_clínica/12',
            i: 11
          },
          {
            title: 'Hospital/Clínica*',
            id: 'hospital_clínica/12',
            kind: 2,
            link: 'gestión_software_web/13',
            i: 12
          },
          {
            title: 'Gestión de software y página web*',
            id: 'gestión_software_web/13',
            kind: 2,
            link: 'academia_informática/14',
            i: 13
          },
          {
            title: 'Academia de informática y computación*',
            id: 'academia_informática/14',
            kind: 2,
            link: 'redes_bd/15',
            i: 14
          },
          {
            title: 'Responsable de redes y base de datos*',
            id: 'redes_bd/15',
            kind: 2,
            link: 'centro_terapia/16',
            i: 15
          },
          {
            title: 'Centro de terpia y modificación de conducta*',
            id: 'centro_terapia/16',
            kind: 2,
            link: 'profesor_biología_química/17',
            i: 16
          },
          {
            title: 'Profesor de biología y química*',
            id: 'profesor_biología_química/17',
            kind: 2,
            link: 'centroInv_enfermedades/18',
            i: 17
          },
          {
            title: 'Centro de investigación de enfermedades*',
            id: 'centroInv_enfermedades/18',
            kind: 2,
            link: 'promoción_salud/19',
            i: 18
          },
          {
            title: 'Empresa de promoción de la salud y prevención de enfermedades*',
            id: 'promoción_salud/19',
            kind: 2,
            link: 'diagnóstico_plannutricional/20',
            i: 19
          },
          {
            title: 'Elaboración de diagnóstico y plan nutricional*',
            id: 'diagnóstico_plannutricional/20',
            kind: 2,
            link: 'conservatorio_música/21',
            i: 20
          },
          {
            title: 'Conservatorio de música y orquesta*',
            id: 'conservatorio_música/21',
            kind: 3,
            link: 'estudio_arquitectos/22',
            i: 21
          },
          {
            title: 'Estudio de Arquitectos*',
            id: 'estudio_arquitectos/22',
            kind: 3,
            link: 'academia_artes/23',
            i: 22
          },
          {
            title: 'Academia de Artes*',
            id: 'academia_artes/23',
            kind: 3,
            link: 'proyecto_diseñoInmoviliaria/24',
            i: 23
          },
          {
            title: 'Compañía de gestión y proyectos de diseño de inmoviliaria*',
            id: 'proyecto_diseñoInmoviliaria/24',
            kind: 3,
            link: 'diseño_gráfico/25',
            i: 24
          },
          {
            title: 'Oficina de diseño gráfico*',
            id: 'diseño_gráfico/25',
            kind: 3,
            link: 'obra_arquitectónica/26',
            i: 25
          },
          {
            title: 'Empresa de proceso de obra Arquitectónica*',
            id: 'obra_arquitectónica/26',
            kind: 3,
            link: 'creatividad_publicidad/27',
            i: 26
          },
          {
            title: 'Taller de creatividad y Campaña publicitaria*',
            id: 'creatividad_publicidad/27',
            kind: 3,
            link: 'galería_arte/28',
            i: 27
          },
          {
            title: 'Galería de arte moderno*',
            id: 'galería_arte/28',
            kind: 3,
            link: 'escuela_canto/29',
            i: 28
          },
          {
            title: 'Escuela de canto y composición musical*',
            id: 'escuela_canto/29',
            kind: 3,
            link: 'decorada_interiores/30',
            i: 29
          },
          {
            title: 'Casa decorada de interiores*',
            id: 'decorada_interiores/30',
            kind: 3,
            link: 'salud_asistencial/31',
            i: 30
          },
          {
            title: 'Centro de salud asistencial. Cuidado y atención de pacientes*',
            id: 'salud_asistencial/31',
            kind: 4,
            link: 'idiomas_extranjeros/32',
            i: 31
          },
          {
            title: 'Academia de idiomas extranjeros*',
            id: 'idiomas_extranjeros/32',
            kind: 4,
            link: 'movimiento_misioner/33',
            i: 32
          },
          {
            title: 'Movimiento misionero de ayuda humanitaria*',
            id: 'movimiento_misioner/33',
            kind: 4,
            link: 'escuela_colegio/34',
            i: 33
          },
          {
            title: 'Escuela/Colegio de inicial, primaria y secundaria*',
            id: 'escuela_colegio/34',
            kind: 4,
            link: 'asistencia_social/35',
            i: 34
          },
          {
            title: 'Fundación de asistencia social*',
            id: 'asistencia_social/35',
            kind: 4,
            link: 'niños_especiales/36',
            i: 35
          },
          {
            title: 'Centro educativo para niños especiales*',
            id: 'niños_especiales/36',
            kind: 4,
            link: 'consejería_asesoría/37',
            i: 36
          },
          {
            title: 'Consejería y asesoría educativa*',
            id: 'consejería_asesoría/37',
            kind: 4,
            link: 'ministerio_salud/38',
            i: 37
          },
          {
            title: 'Ministerio de salud*',
            id: 'ministerio_salud/38',
            kind: 4,
            link: 'centro_emergencias/39',
            i: 38
          },
          {
            title: 'Centro de emergencias y atención de heridos*',
            id: 'centro_emergencias/39',
            kind: 4,
            link: 'investigación_bíblica/40',
            i: 39
          },
          {
            title: 'Centro de investigación Bíblica*',
            id: 'investigación_bíblica/40',
            kind: 4,
            link: 'relaciones_públicas/41',
            i: 40
          },
          {
            title: 'Oficina de relaciones públicas. Imagen institucional*',
            id: 'relaciones_públicas/41',
            kind: 5,
            link: 'selección_personal/42',
            i: 41
          },
          {
            title: 'Agencia de selección de personal*',
            id: 'selección_personal/42',
            kind: 5,
            link: 'importación_exportación/43',
            i: 42
          },
          {
            title: 'Compañía de importación y exportación*',
            id: 'importación_exportación/43',
            kind: 5,
            link: 'agencia_asesora/44',
            i: 43
          },
          {
            title: 'Agencia asesora de empresas públicas y privadas*',
            id: 'agencia_asesora/44',
            kind: 5,
            link: 'noticias_reportajes/45',
            i: 44
          },
          {
            title: 'Agencia de noticias y reportajes*',
            id: 'noticias_reportajes/45',
            kind: 5,
            link: 'talento_humano/46',
            i: 45
          },
          {
            title: 'Oficina de gestión y desarrollo del talento humano*',
            id: 'talento_humano/46',
            kind: 5,
            link: 'radio_televisión/47',
            i: 46
          },
          {
            title: 'Programas de radio y televisión*',
            id: 'radio_televisión/47',
            kind: 5,
            link: 'cadena_supermercados/48',
            i: 47
          },
          {
            title: 'Cadena de supermercados*',
            id: 'cadena_supermercados/48',
            kind: 5,
            link: 'turismo/49',
            i: 48
          },
          {
            title: 'Hotel y restaurantes de turistas*',
            id: 'turismo/49',
            kind: 5,
            link: 'agencia_publicidad/50',
            i: 49
          },
          {
            title: 'Agencia de publicidad*',
            id: 'agencia_publicidad/50',
            kind: 5,
            link: 'banco_ahorros/51',
            i: 50
          },
          {
            title: 'Banco de ahorros y créditos*',
            id: 'banco_ahorros/51',
            kind: 6,
            link: 'estudio_contable/52',
            i: 51
          },
          {
            title: 'Estudio contable*',
            id: 'estudio_contable/52',
            kind: 6,
            link: 'archivos_documentación/53',
            i: 52
          },
          {
            title: 'Oficina de archivos y documentación*',
            id: 'archivos_documentación/53',
            kind: 6,
            link: 'informática_sistemacontable/54',
            i: 53
          },
          {
            title: 'Agencia asesora de informática y sistema contable*',
            id: 'informática_sistemacontable/54',
            kind: 6,
            link: 'atención_cliente/55',
            i: 54
          },
          {
            title: 'Oficina de atención al cliente*',
            id: 'atención_cliente/55',
            kind: 6,
            link: 'ministerio_economía/56',
            i: 55
          },
          {
            title: 'Ministerio de economía*',
            id: 'ministerio_economía/56',
            kind: 6,
            link: 'sunat/57',
            i: 56
          },
          {
            title: 'Superintendencia de administración tributaria*',
            id: 'sunat/57',
            kind: 6,
            link: 'recepcionista/58',
            i: 57
          },
          {
            title: 'Recepcionista*',
            id: 'recepcionista/58',
            kind: 6,
            link: 'secretariado/59',
            i: 58
          },
          {
            title: 'Instituto de secretariado ejecutivo*',
            id: 'secretariado/59',
            kind: 6,
            link: 'banco_bcr/60',
            i: 59
          },
          {
            title: 'Banco central de reserva*',
            id: 'banco_bcr/60',
            kind: 6,
            link: '',
            i: 60
          }
    ]
}

export default function (state = initialState, action){
    switch(action.types){
        case GET_QUESTIONS:
            return {
                ...state,
            }
        default:
            return state
    }
}