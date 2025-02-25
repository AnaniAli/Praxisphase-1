# Wir brauchen 4 Tabellen

## 1: consumer, 2: Token, 3: Endgeräte und 4: SIM

#### Tabelle consumer

{
    "consumer": [{
        "personalnummer": "24520909",  
        "mail": "max.mustermann@polizei.berlin.de",  
        "name": "Mustermann",  
        "vorname": "Max",  
        "Dienststelle": "DIR ZS IKT C3",  
        "Assyst-Kennung": "371-432142"  
    }]
}

###### oder

CREATE TABLE consumer (
    personalnummer INT PRIMARY KEY,  
    email VARCHAR(100),  
    name VARCHAR(100),  
    vorname VARCHAR(100),  
    dienststelle VARCHAR(100),  
    assyst_kennung VARCHAR(100)  
);

#### Tabelle Token

{
    "token": [{
        "s_n_token": "345642369,  
        "Bemerkungen": ""  
    }]
}

###### oder

CREATE TABLE token (
    s_n_token INT PRIMARY KEY,  
    bemerkungen VARCHAR(100),  
    personalnummer INT,  
    FOREIGN KEY (personalnummer) REFERENCES consumer(personalnummer)  
);

#### Tabelle Endgeräte

{
    "endgeraete": [{
        "modell": "Samsung A41  
        "IMEI": "37656373987",  
        "Ausstattung": "Headset, Ladegerät",  
        "Bemerkungen": ""  
    }]
}

###### oder 

CREATE TABLE endgeraete (
    modell VARCHAR(100),  
    IMEI VARCHAR(100) PRIMARY KEY,  
    ausstattung VARCHAR(100),  
    bemerkungen VARCHAR(100),  
    personalnummer INT,  
    FOREIGN KEY (personalnummer) REFERENCES consumer(personalnummer)  
);

#### Tabelle SIM

{
    "SIM": [{
        "s_n_sim": "5647478423",  
        "Rufnummer": "0176 212 512 81",  
        "PIN": "1010",  
        "PUK": "93876262",  
        "Bemerkungen": ""  
    }]
}

###### oder

CREATE TABLE sim (
    s_n_sim INT PRIMARY KEY,  
    rufnummer VARCHAR(100),  
    pin VARCHAR(10),  
    puk VARCHAR(10),  
    bemerkungen VARCHAR(100),  
    personalnummer INT,  
    FOREIGN KEY (personalnummer) REFERENCES consumer(personalnummer)  
);