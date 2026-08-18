// ================================================================
// CONFIGURACIÓN DE PAÍSES - MyLifeQR
// ================================================================

const PAISES = {
    mx: {
        id: 'mx',
        nombre: 'México',
        bandera: '🇲🇽',
        idioma: 'es',
        emergencia: '911',
        emergencia_texto: '911',
        ley: 'LFPDPPP',
        ley_nombre: 'Ley Federal de Protección de Datos Personales en Posesión de los Particulares',
        codigo_tel: '+52',
        prefijo_tel: '52',
        email_contacto: 'mylifeqrsticker@gmail.com',
        whatsapp: '+525652502785',
        // Textos del gate
        gate_titulo: 'Acceso Restringido',
        gate_subtitulo: 'Aviso de privacidad — LFPDPPP',
        gate_aceptar: 'Al aceptar confirmas que accedes con fines de atención médica de emergencia.',
        gate_boton: '✓ Entiendo — Ver perfil de emergencia',
        // Textos del perfil
        perfil_titulo: 'PERFIL DE EMERGENCIA',
        perfil_casco: '¡NO RETIRAR EL CASCO!',
        perfil_casco_desc: 'Posible lesión cervical. Solo personal médico capacitado puede retirarlo.',
        perfil_cargando: 'Cargando...',
        perfil_ubicacion: 'Obteniendo ubicación...',
        perfil_ubicacion_titulo: 'Ubicación aproximada',
        perfil_911: 'LLAMAR AL 911',
        perfil_guia: '🚑 GUÍA PARA QUIENES NO SON PARAMÉDICOS',
        // ... más textos
    },
    br: {
        id: 'br',
        nombre: 'Brasil',
        bandera: '🇧🇷',
        idioma: 'pt',
        emergencia: '192',
        emergencia_texto: '192 (SAMU)',
        ley: 'LGPD',
        ley_nombre: 'Lei Geral de Proteção de Dados Pessoais',
        codigo_tel: '+55',
        prefijo_tel: '55',
        email_contacto: 'mylifeqrbrasil@gmail.com',
        whatsapp: '+5511999999999',
        gate_titulo: 'Acesso Restrito',
        gate_subtitulo: 'Aviso de privacidade — LGPD',
        gate_aceptar: 'Ao aceitar, você confirma que acessa para fins de atendimento médico de emergência.',
        gate_boton: '✓ Entendi — Ver perfil de emergência',
        perfil_titulo: 'PERFIL DE EMERGÊNCIA',
        perfil_casco: 'NÃO REMOVER O CAPACETE!',
        perfil_casco_desc: 'Possível lesão cervical. Apenas pessoal médico capacitado pode removê-lo.',
        perfil_cargando: 'Carregando...',
        perfil_ubicacion: 'Obtendo localização...',
        perfil_ubicacion_titulo: 'Localização aproximada',
        perfil_911: 'LIGAR PARA 192 (SAMU)',
        perfil_guia: '🚑 GUIA PARA QUEM NÃO É PARAMÉDICO',
    },
    co: {
        id: 'co',
        nombre: 'Colombia',
        bandera: '🇨🇴',
        idioma: 'es',
        emergencia: '123',
        emergencia_texto: '123',
        ley: 'Habeas Data',
        ley_nombre: 'Ley de Habeas Data (Ley 1581 de 2012)',
        codigo_tel: '+57',
        prefijo_tel: '57',
        email_contacto: 'mylifeqrcolombia@gmail.com',
        whatsapp: '+573001234567',
        gate_titulo: 'Acceso Restringido',
        gate_subtitulo: 'Aviso de privacidad — Habeas Data',
        gate_aceptar: 'Al aceptar confirmas que accedes con fines de atención médica de emergencia.',
        gate_boton: '✓ Entiendo — Ver perfil de emergencia',
        perfil_titulo: 'PERFIL DE EMERGENCIA',
        perfil_casco: '¡NO RETIRAR EL CASCO!',
        perfil_casco_desc: 'Posible lesión cervical. Solo personal médico capacitado puede retirarlo.',
        perfil_cargando: 'Cargando...',
        perfil_ubicacion: 'Obteniendo ubicación...',
        perfil_ubicacion_titulo: 'Ubicación aproximada',
        perfil_911: 'LLAMAR AL 123',
        perfil_guia: '🚑 GUÍA PARA QUIENES NO SON PARAMÉDICOS',
    },
    cl: {
        id: 'cl',
        nombre: 'Chile',
        bandera: '🇨🇱',
        idioma: 'es',
        emergencia: '131',
        emergencia_texto: '131 (SAMU)',
        ley: 'Ley N°19.628',
        ley_nombre: 'Ley N°19.628 de Protección de Datos Personales',
        codigo_tel: '+56',
        prefijo_tel: '56',
        email_contacto: 'mylifeqrchile@gmail.com',
        whatsapp: '+56912345678',
        gate_titulo: 'Acceso Restringido',
        gate_subtitulo: 'Aviso de privacidad — Ley N°19.628',
        gate_aceptar: 'Al aceptar confirmas que accedes con fines de atención médica de emergencia.',
        gate_boton: '✓ Entiendo — Ver perfil de emergencia',
        perfil_titulo: 'PERFIL DE EMERGENCIA',
        perfil_casco: '¡NO RETIRAR EL CASCO!',
        perfil_casco_desc: 'Posible lesión cervical. Solo personal médico capacitado puede retirarlo.',
        perfil_cargando: 'Cargando...',
        perfil_ubicacion: 'Obteniendo ubicación...',
        perfil_ubicacion_titulo: 'Ubicación aproximada',
        perfil_911: 'LLAMAR AL 131 (SAMU)',
        perfil_guia: '🚑 GUÍA PARA QUIENES NO SON PARAMÉDICOS',
    },
    pe: {
        id: 'pe',
        nombre: 'Perú',
        bandera: '🇵🇪',
        idioma: 'es',
        emergencia: '116',
        emergencia_texto: '116 (SAMU)',
        ley: 'Ley N°29733',
        ley_nombre: 'Ley N°29733 de Protección de Datos Personales',
        codigo_tel: '+51',
        prefijo_tel: '51',
        email_contacto: 'mylifeqrperu@gmail.com',
        whatsapp: '+51912345678',
        gate_titulo: 'Acceso Restringido',
        gate_subtitulo: 'Aviso de privacidad — Ley N°29733',
        gate_aceptar: 'Al aceptar confirmas que accedes con fines de atención médica de emergencia.',
        gate_boton: '✓ Entiendo — Ver perfil de emergencia',
        perfil_titulo: 'PERFIL DE EMERGENCIA',
        perfil_casco: '¡NO RETIRAR EL CASCO!',
        perfil_casco_desc: 'Posible lesión cervical. Solo personal médico capacitado puede retirarlo.',
        perfil_cargando: 'Cargando...',
        perfil_ubicacion: 'Obteniendo ubicación...',
        perfil_ubicacion_titulo: 'Ubicación aproximada',
        perfil_911: 'LLAMAR AL 116 (SAMU)',
        perfil_guia: '🚑 GUÍA PARA QUIENES NO SON PARAMÉDICOS',
    }
};

// ================================================================
// DETECCIÓN DE PAÍS
// ================================================================

function detectarPais() {
    // 1. Parámetro URL (?pais=br)
    const urlParams = new URLSearchParams(window.location.search);
    const paisParam = urlParams.get('pais');
    if (paisParam && PAISES[paisParam]) {
        localStorage.setItem('mylifeqr_pais', paisParam);
        return paisParam;
    }
    
    // 2. LocalStorage
    const saved = localStorage.getItem('mylifeqr_pais');
    if (saved && PAISES[saved]) return saved;
    
    // 3. Navegador (navigator.language)
    const lang = navigator.language.split('-')[0];
    const mapa = { es: 'mx', pt: 'br', en: 'us' };
    if (mapa[lang]) {
        localStorage.setItem('mylifeqr_pais', mapa[lang]);
        return mapa[lang];
    }
    
    // 4. Default: México
    localStorage.setItem('mylifeqr_pais', 'mx');
    return 'mx';
}

// ================================================================
// EXPORTAR PARA USAR EN OTROS ARCHIVOS
// ================================================================

const PAIS_ACTUAL = detectarPais();
const CONFIG = PAISES[PAIS_ACTUAL];

// Función para cambiar de país manualmente
function cambiarPais(codigoPais) {
    if (PAISES[codigoPais]) {
        localStorage.setItem('mylifeqr_pais', codigoPais);
        window.location.reload();
    }
}

console.log(`🌍 MyLifeQR - País detectado: ${CONFIG.nombre} (${CONFIG.id})`);
console.log(`📞 Emergencia: ${CONFIG.emergencia}`);
console.log(`📜 Ley: ${CONFIG.ley}`);