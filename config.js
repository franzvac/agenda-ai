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
        apiKey: 'AIzaSyBcNSqX0LryFhqzjFWHiq6hMV5S1a9LQfM',
        
        // 🔐 Client ID OAuth 2.0 da Google Cloud Console > Credenziali > Crea credenziali > ID client OAuth 2.0
        // Esempio: '123456789-abc...apps.googleusercontent.com'
        clientId: '305495314465-j13l2f6scmoqvdadgsnvpskm89g5r6n0.apps.googleusercontent.com',
        
        // 📧 Il tuo indirizzo Gmail principale (quello che usi per Calendar)
        // Esempio: 'mario.rossi@gmail.com'
        calendarId: 'https://calendar.google.com/calendar/embed?src=franzvac%40gmail.com&ctz=Europe%2FRome',
        
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
            'https://franzvac.github.io',
            'https://franzvac.github.io/agenda-ai'
        ]
    },

    // ========================================
    // 🗄️ SUPABASE CONFIGURATION (Opzionale)
    // ========================================
    supabase: {
        // 🔗 URL del progetto Supabase da Settings > API > Project URL
        // Esempio: 'https://abc123.supabase.co'
        url: 'https://daleylnucyoxpwvgwvzu.supabase.co',
        
        // 🔑 Anon/Public Key da Supabase > Settings > API > Project API keys > anon public
        // Esempio: 'eyJ...'
        anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhbGV5bG51Y3lveHB3dmd3dnp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4MDYwMzUsImV4cCI6MjA2NzM4MjAzNX0.9AKtkBhXvhKVwwaOpZxiRFfkGepMXQ_SV0YStZ5Alg0',
        
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
        username: 'franzvac',
        
        // 📂 Nome del repository dove hai l'agenda
        // Esempio: 'agenda-ai'
        repository: 'agenda-ai',
        
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
