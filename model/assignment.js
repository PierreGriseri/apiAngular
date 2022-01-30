const { Double } = require("bson");
let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
  id: Number,
  dateDeRendu: Date,
  nom: String,
  rendu: Boolean,
  auteur: String,
  noteFloat: String,
  noteFinal: Number,
  matiere: {
    nomMatiere: String,
    imageMatiere: String,
    imageIntervenant: String,
  },
  remarque: String,
});

AssignmentSchema.plugin(aggregatePaginate);
("");
// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
// le premier paramètre est la "collection" mongoDB
// ATTENTION, y'a du matching entre la chaine passée
// et le vrai nom de la collection (en gros, ça cherche la
// collection mongoDB qui est "la plus proche")
module.exports = mongoose.model("assignments", AssignmentSchema);
