// ========================================
// 🔧 CONFIGURAZIONE AGENDA AI - v2.0
// ========================================
// 📁 File: config.js
// 🎯 Sostituisci i valori placeholder con le tue credenziali

const CONFIG = {
    // ========================================
    // 📧 GOOGLE APIS CONFIGURATION
    // ========================================
    google: {
        // 🔑 API Key da Google Cloud Console > Credenziali > Crea credenziali > Chiave API
        // Esempio: 'AIzaSyB...'
        apiKey: 'INSERISCI_LA_TUA_GOOGLE_API_KEY_QUI',
        
        // 🔐 Client ID OAuth 2.0 da Google Cloud Console > Credenziali > Crea credenziali > ID client OAuth 2.0
        // Esempio: '123456789-abc...apps.googleusercontent.com'
        clientId: 'INSERISCI_IL_TUO_CLIENT_ID_QUI.apps.googleusercontent.com',
        
        // 📧 Il tuo indirizzo Gmail principale (quello che usi per Calendar)
        // Esempio: 'mario.rossi@gmail.com'
        calendarId: 'INSERISCI_LA_TUA_EMAIL@gmail.com',
        
        // 🔐 Permessi richiesti - NON MODIFICARE se non sai cosa fai
        scopes: [
            'https://www.googleapis.com/auth/calendar.readonly',
            'https://www.googleapis.com/auth/calendar.events',
            'https://www.googleapis.com/auth/gmail.readonly',
            'https://www.googleapis.com/auth/gmail.modify'
        ],
        
        // 🌐 Domini autorizzati - AGGIORNA con il tuo dominio GitHub Pages
        authorizedDomains: [
            'localhost:3000',
            'INSERISCI_TUO_USERNAME.github.io',
            'INSERISCI_TUO_USERNAME.github.io/NOME_REPOSITORY'
        ]
    },

    // ========================================
    // 🗄️ SUPABASE CONFIGURATION (Opzionale)
    // ========================================
    supabase: {
        // 🔗 URL del progetto Supabase da Settings > API > Project URL
        // Esempio: 'https://abc123.supabase.co'
        url: 'https://INSERISCI_TUO_PROGETTO.supabase.co',
        
        // 🔑 Anon/Public Key da Supabase > Settings > API > Project API keys > anon public
        // Esempio: 'eyJ...'
        anonKey: 'INSERISCI_LA_TUA_SUPABASE_ANON_KEY_QUI',
        
        // 📊 Nome tabelle database - Personalizza se necessario
        tables: {
            tasks: 'tasks',
            clients: 'clients', 
            projects: 'projects',
            routines: 'routines',
            settings: 'user_settings'
        }
    },

    // ========================================
    // 🐙 GITHUB CONFIGURATION
    // ========================================
    github: {
        // 👤 Il tuo username GitHub
        // Esempio: 'mario-rossi'
        username: 'INSERISCI_TUO_USERNAME_GITHUB',
        
        // 📂 Nome del repository dove hai l'agenda
        // Esempio: 'agenda-ai'
        repository: 'INSERISCI_NOME_REPOSITORY',
        
        // 🔑 Personal Access Token GitHub (OPZIONALE - per funzioni avanzate)
        // Lascia vuoto se non ne hai bisogno
        token: '',
        
        // 🌐 URL GitHub Pages - Si auto-genera dal username e repository sopra
        get pagesUrl() {
            return `https://${this.username}.github.io/${this.repository}`;
        }
    },

    // ========================================
    // ⚙️ IMPOSTAZIONI APPLICAZIONE
    // ========================================
    app: {
        // 🏷️ Nome dell'applicazione
        name: 'Agenda AI',
        
        // 📝 Versione
        version: '2.0.0',
