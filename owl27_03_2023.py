from owlready2 import *

onto = get_ontology('file://C:\\Users\\senac\\ontologies\\ontology_first').load()

# print('Criando a ontologia')
# onto = get_ontology("http://test.org/onto.owl")

print('Salvando a ontologia')
onto.save(file = "ontology_first", format = "rdfxml")
