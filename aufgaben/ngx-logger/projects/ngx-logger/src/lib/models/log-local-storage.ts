// 1. Importiert alle relevanten Pakete
import { LogPublisher } from './log-publisher';
import { LogEntry } from './log-entry';

export class LogLocalStorage extends LogPublisher {
    
    constructor() {
        super(); // 2. & 3. Ruft den Konstruktor der Elternklasse auf
        this.location = 'log'; // 4. Überschreibt die Eigenschaft location mit 'log'
    }

    // 5. Methode log
    log(entry: LogEntry): boolean {
        try {
            let values: LogEntry[] = []; // 9.1. Variable für bestehende Log-Einträge
            const storedLogs = localStorage.getItem(this.location);
            if (storedLogs) {
                values = JSON.parse(storedLogs); // 9.2. Speichert die aktuellen Log-Einträge
            }
            values.push(entry); // 9.3. Fügt den neuen Log-Eintrag hinzu
            localStorage.setItem(this.location, JSON.stringify(values)); // 9.4. Speichert die Log-Einträge
            return true; // 8. Gibt true zurück, wenn erfolgreich
        } catch (error) {
            console.error('Logging to localStorage failed', error);
            return false; // Gibt false zurück, wenn fehlgeschlagen
        }
    }

    // 6. Methode clear
    clear(): void {
        localStorage.removeItem(this.location); // 7. Löscht den lokalen Speicher
    }