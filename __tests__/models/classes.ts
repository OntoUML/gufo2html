export default `
@prefix : <https://alpinebits.org#>.
@prefix gufo: <http://purl.org/nemo/gufo#>.
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix owl: <http://www.w3.org/2002/07/owl#>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.

:AreaOwner rdf:type owl:Class, owl:NamedIndividual;
    rdfs:subClassOf :Agent;
    rdf:type gufo:RoleMixin;
    rdfs:label "Area Owner".
`;
