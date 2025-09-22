db = db.getSiblingDB(''); // Adicionar número mecanográfico aqui
db.startup_log.insertOne({ initialized: true, timestamp: new Date() });